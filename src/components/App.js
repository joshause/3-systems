import React, { Component } from 'react'
import '../style/App.css'
import fetchJsonp from 'fetch-jsonp'
import Loader from './Loader'
import Translator from './Translator'
import System from './System'

class App extends Component {
  constructor() {
    super()
    this.state = {
      system: 0, // 0:upwelling || 1:carbon || 2:fog
      display: 'loader', // loader || system || ? || attract?
      data: null,
      dataSystem0: null,
      dataSystem1: null,
      dataSystem2: null,
      currentLanguage: 0, // 0:english || 1:spanish || 2:chinese || 3:filipino
      currentSection: 0,
      preview: false,
      actionTranslate: null,
      inactivityInt: 9000000000,
      dateLastTouch: null
    }

    // handler to track touch events by way of System > Section > Popup
    this.handlerReceivePopupTouch = this._receivePopupTouch.bind(this)

    // Loader handler
    this.handlerLoadComplete = this._loadComplete.bind(this)
    // Translator handler
    this.handlerSelectLanguage = this._selectLanguage.bind(this)
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
          currentLanguage: 0
        })
        if (this.state.currentSection !== 0) {
          this.setState({
            currentSection: 0,
            currentLanguage: 0,
            dateLastTouch: null
          })
        }
      }
    }
  }

  _getData() {
    var _this = this
    fetchJsonp(process.env.REACT_APP_REST_URL)
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
    }
  }

  // Loader method
  _loadComplete() {
    this.setState({
      display: 'system'
    })
  }

  // Translator method
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
    setInterval(() => this._inactivityCheck(), 5000)
  }

  render() {

    var dataSystem = this.state.dataSystem0
    if (this.state.system === 1) {
      dataSystem = this.state.dataSystem1
    } else if (this.state.system === 2) {
      dataSystem = this.state.dataSystem2
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
            handlerSelectSection = {this.handlerSelectSection}
            handlerReceivePopupTouch = {this.handlerReceivePopupTouch}
          />
        </div>
      </div>
    )
  }
}

export default App
