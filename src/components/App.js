import React, { Component } from 'react'
import '../style/App.css'
import fetchJsonp from 'fetch-jsonp'
import Loader from './Loader'
import Translator from './Translator'
import Credits from './Credits'
import System from './System'

class App extends Component {
  constructor() {
    super()
    this.state = {
      system: 0, // 0:upwelling || 1:carbon || 2:fog
      display: 'loader', // loader || system || credits
      data: null,
      dataSystem0: null,
      dataSystem1: null,
      dataSystem2: null,
      dataCredits: null,
      dataCredits0: null,
      dataCredits1: null,
      dataCredits2: null,
      currentLanguage: 0, // 0:english || 1:spanish || 2:chinese || 3:filipino
      currentSection: 0,
      preview: false,
      actionTranslate: null,
      inactivityInt: 90000,
      dateLastTouch: null
    }

    // handler to track touch events by way of System > Section > Popup
    this.handlerReceivePopupTouch = this._receivePopupTouch.bind(this)

    // Loader handler
    this.handlerLoadComplete = this._loadComplete.bind(this)
    // Translator handlers
    this.handlerSelectLanguage = this._selectLanguage.bind(this)
    this.handlerSelectCredits = this._selectCredits.bind(this)
    // Credits handlers
    this.handlerCloseCredits = this._closeCredits.bind(this)
    // System handler by way of Nav handler
    this.handlerSelectSection = this._selectSection.bind(this)

  }

  _getSystemName(i) {
    var sys = ''
    switch (i) {
      case 0:
        sys = 'upwelling'
        break
      case 1:
        sys = 'carbon'
        break
      case 2:
        sys = 'fog'
        break
      default:
        break
    }
    return sys
  }

  _getLanguageName(l) {
    var lang = ''
    switch (l) {
      case 0:
        lang = 'english'
        break
      case 1:
        lang = 'spanish'
        break
      case 2:
        lang = 'chinese'
        break
      case 3:
        lang = 'filipino'
        break
      default:
        break
    }
    return lang
  }

  _googleTagManagerEventSend(category=null, action=null, label=null) {
    /*
    Category: UI Translate
    Action: [ english || spanish || chinese || filipino ]
    Label: [ active system, active section ]
    Category: UI Section Nav
    Action: [ nav 1 || nav 2 || nav 3 ]
    Label: [ active system ]
    Category: UI Popup
    Action: [ popup 1 || popup 2 || popup 3 || … popup n ]
    Label: [ active system, active section ]
    */
    if (category && action && label) {
      if (window.dataLayer) {
        window.dataLayer.push({
          'event': '3-systems-event-trigger',
          '3-systems-category': category,
          '3-systems-action': action,
          '3-systems-label': label
        })
      }
    }
  }

  _setAppInstanceSystem() {
    var urlParams = new URLSearchParams(window.location.search)
    if (urlParams.get('system') === "carbon") {
      this.setState ({
        system: 1
      })
    } else if (urlParams.get('system') === "fog") {
      this.setState ({
        system: 2
      })
    }
  }

  _minimizeForPreview() {
    var urlParams = new URLSearchParams(window.location.search)
    if (urlParams.get('preview') === "true") {
      this.setState ({
        preview: true
      })
    }
  }

  _inactivityCheck() {
    var now = new Date()
    var check = new Date(now.getTime() - this.state.inactivityInt)
    if (this.state.dateLastTouch !== null) {
      if (this.state.dateLastTouch < check) {
        this.setState({
          currentSection: 0,
          currentLanguage: 0,
          display: 'system',
          dateLastTouch: null
        })
      }
    }
  }

  _getData() {
    var _this = this
    fetchJsonp(process.env.REACT_APP_REST_URL_TEXT)
    .then(function (response) {
      return response.json()
    }).then(function(data) {
      _this.setState ({
        data: data
      })
      _this._setDataSystem()
    }).catch(function (ex) {
      console.log('JSON fetch failed: fetching again in 30 seconds', ex)
      // try again in 30 sec
      setTimeout(function () {
       _this._getData()
     }, 30000)
    })
  }

  _getDataCredits() {
    var _this = this
    fetchJsonp(process.env.REACT_APP_REST_URL_CREDITS)
    .then(function (response) {
      return response.json()
    }).then(function(data) {
      _this.setState ({
        dataCredits: data
      })
      _this._setDataCreditsSystem()
    }).catch(function (ex) {
      console.log('JSON fetch failed: fetching again in 30 seconds', ex)
      // try again in 30 sec
      setTimeout(function () {
       _this._getDataCredits()
     }, 30000)
    })
  }

  _setDataSystem() {
    if (this.state.data) {
      var arrUpwelling = []
      var arrCarbon = []
      var arrFog = []
      this.state.data.forEach(function(data, i) {
        if (data.system === 'upwelling') {
          arrUpwelling.push(data)
        } else if (data.system === 'carbon') {
          arrCarbon.push(data)
        } else if (data.system === 'fog') {
          arrFog.push(data)
        }
      })
      this.setState ({
        dataSystem0: arrUpwelling,
        dataSystem1: arrCarbon,
        dataSystem2: arrFog
      })
      this._getDataCredits()
    }
  }

  _setDataCreditsSystem() {
    if (this.state.dataCredits) {
      var arrUpwelling = []
      var arrCarbon = []
      var arrFog = []
      this.state.dataCredits.forEach(function(data, i) {
        if (data.title === 'upwelling credits') {
          arrUpwelling.push(data)
        } else if (data.title === 'carbon credits') {
          arrCarbon.push(data)
        } else if (data.title === 'fog credits') {
          arrFog.push(data)
        }
      })
      this.setState ({
        dataCredits0: arrUpwelling,
        dataCredits1: arrCarbon,
        dataCredits2: arrFog
      })
    }
  }

  // Loader method
  _loadComplete() {
    this.setState({
      display: 'system'
    })
  }

  // Translator methods
  _selectLanguage(e, lang) {
    e.preventDefault()
    this.setState({
      currentLanguage: lang,
      actionTranslate: true,
      dateLastTouch: new Date()
    })
    // GTM + GA call
    var gaCat = 'UI Translate'
    var gaAction = this._getLanguageName(lang)
    var gaLabel = this._getSystemName(this.state.system) + ', ' + (this.state.currentSection + 1)
    this._googleTagManagerEventSend(gaCat, gaAction, gaLabel)
  }

  _selectCredits(e) {
    e.preventDefault()
    if (this.state.display !== 'credits') {
      this.setState({
        display: 'credits',
        dateLastTouch: new Date()
      })
    }
  }
  _closeCredits(e) {
    e.preventDefault()
    if (this.state.display === 'credits') {
      this.setState({
        display: 'system',
        dateLastTouch: new Date()
      })
    }
  }

  // System + Nav method
  _selectSection(sec) {
    this.setState({
      currentSection: sec,
      dateLastTouch: new Date()
    })
    // GTM + GA call
    var gaCat = 'UI Section Nav'
    var gaAction = 'nav ' + (sec + 1)
    var gaLabel = this._getSystemName(this.state.system)
    this._googleTagManagerEventSend(gaCat, gaAction, gaLabel)
  }

  _receivePopupTouch(p) {
    this.setState({
      dateLastTouch: new Date()
    })
    // GTM + GA call
    var gaCat = 'UI Popup'
    var gaAction = 'popup ' + (p + 1)
    var gaLabel = this._getSystemName(this.state.system) + ', ' + (this.state.currentSection + 1)
    this._googleTagManagerEventSend(gaCat, gaAction, gaLabel)
  }

  componentDidMount() {
    this._getData()
    this._minimizeForPreview()
    this._setAppInstanceSystem()
    this.setState({
      dateLastTouch: new Date()
    })
    setInterval(() => this._inactivityCheck(), 5000)
  }

  render() {

    var dataSystem = this.state.dataSystem0
    if (this.state.system === 1) {
      dataSystem = this.state.dataSystem1
    } else if (this.state.system === 2) {
      dataSystem = this.state.dataSystem2
    }

    var dataCredits = this.state.dataCredits0
    if (this.state.system === 1) {
      dataCredits = this.state.dataCredits1
    } else if (this.state.system === 2) {
      dataCredits = this.state.dataCredits2
    }

    return (
      <div id="app" className={this.state.preview ? 'preview system-' + this.state.system : 'system-' + this.state.system} >
        <div id="container-loader"
          className={this.state.display !== 'loader' ? 'hide' : ''}>
          <Loader
            // needs to verify all data
            data={this.state.data}
            handlerLoadComplete={this.handlerLoadComplete}
          />
        </div>
        <div id="sky" />
        <div id="sky-trans" />
        <div id="container-translator"
          className={this.state.display === 'loader' ? 'hide' : ''}>
          <Translator
            language={this.state.currentLanguage}
            handlerSelectLanguage={this.handlerSelectLanguage}
            handlerSelectCredits={this.handlerSelectCredits}
            display={this.state.display}
           />
        </div>
        <div id="container-credits"
          className={this.state.display !== 'credits' ? 'hide-anim' : ''}>
          <Credits
            display={this.state.display}
            dataCredits={dataCredits}
            handlerCloseCredits={this.handlerCloseCredits}
            language={this.state.currentLanguage}
           />
        </div>
        <div id="container-system"
          className={this.state.display !== 'system' ? 'hide' : ''}>
          <System
            // just pass data for system instance
            data={dataSystem}
            system={this.state.system}
            currentSection={this.state.currentSection}
            language={this.state.currentLanguage}
            handlerSelectSection={this.handlerSelectSection}
            handlerReceivePopupTouch={this.handlerReceivePopupTouch}
          />
        </div>
      </div>
    )
  }
}

export default App
