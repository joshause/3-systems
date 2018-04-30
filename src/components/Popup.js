import React, { Component } from 'react'
import '../style/Popup.css'

class Popup extends Component {
  constructor(props) {
    super(props)
    this.state = {

      dataSectionPopupText: null,

      dataSectionPopupHeader: null,
      dataSectionPopupDescription: null,

      arrSystems: [
        { // system 0
          arrSections: [
            {
              arrPopups: []
            },
            {
              arrPopups: [
                {
                  xPos: 1166,
                  yPos: 490,
                  image: '',
                  sticker: '',
                  anim: 'fog-play-all',
                  origin: 'left' // left, right, top-left, top-right, bottom-left, bottom-right
                },
                {
                  xPos: 700,
                  yPos: 390,
                  image: '',
                  sticker: '',
                  anim: 'fog-play-all',
                  origin: 'bottom-left'
                },
                {
                  xPos: 350,
                  yPos: 590,
                  image: '',
                  sticker: '',
                  anim: 'fog-play-all',
                  origin: 'bottom-left'
                },
                {
                  xPos: 1400,
                  yPos: 600,
                  image: 'upwelling-plankton-bloom',
                  sticker: '',
                  anim: '',
                  origin: 'bottom-left'
                },
                {
                  xPos: 845,
                  yPos: 740,
                  image: '',
                  sticker: 'kelp-healthy',
                  anim: '',
                  origin: 'bottom-right'
                },
                {
                  xPos: 920,
                  yPos: 910,
                  image: 'upwelling-shelter-kelp',
                  sticker: 'kelp-healthy',
                  anim: '',
                  origin: 'right'
                },
                {
                  xPos: 510,
                  yPos: 700,
                  image: '',
                  sticker: 'whale',
                  anim: '',
                  origin: 'bottom-right'
                }
              ]
            },
            {
              arrPopups: [
                {
                  xPos: 660,
                  yPos: 750,
                  image: '',
                  sticker: '',
                  anim: 'fog-play-all',
                  origin: 'left'
                },
                {
                  xPos: 1350,
                  yPos: 520,
                  image: 'upwelling-harmful-algae',
                  sticker: '',
                  anim: '',
                  origin: 'left'
                },
                {
                  xPos: 1250,
                  yPos: 540,
                  image: 'upwelling-mammal-impact',
                  sticker: '',
                  anim: '',
                  origin: 'bottom-right'
                },
                {
                  xPos: 710,
                  yPos: 365,
                  image: '',
                  sticker: '',
                  anim: '',
                  origin: 'bottom-right'
                },
                {
                  xPos: 660,
                  yPos: 820,
                  image: '',
                  sticker: 'kelp-unhealthy',
                  anim: '',
                  origin: 'right'
                },
                {
                  xPos: 780,
                  yPos: 510,
                  image: 'upwelling-ocean-research',
                  sticker: '',
                  anim: '',
                  origin: 'left'
                }
              ]
            }
          ]
        },
        { // system 1
          arrSections: [
            {
              arrPopups: []
            },
            {
              arrPopups: [
                {
                  xPos: 1050,
                  yPos: 440,
                  image: 'carbon-landscape-in-motion',
                  sticker: '',
                  anim: '',
                  origin: 'left' // left, right, top-left, top-right, bottom-left, bottom-right
                },
                {
                  xPos: 1050,
                  yPos: 640,
                  image: '',
                  sticker: '',
                  anim: '',
                  origin: 'right'
                },
                {
                  xPos: 1320,
                  yPos: 380,
                  image: '',
                  sticker: '',
                  anim: '',
                  origin: 'top-left'
                },
                {
                  xPos: 1460,
                  yPos: 340,
                  image: '',
                  sticker: '',
                  anim: '',
                  origin: 'top-left'
                },
                {
                  xPos: 1100,
                  yPos: 930,
                  image: '',
                  sticker: '',
                  anim: '',
                  origin: 'left'
                },
                {
                  xPos: 1350,
                  yPos: 640,
                  image: '',
                  sticker: '',
                  anim: '',
                  origin: 'top-right'
                }
              ]
            },
            {
              arrPopups: [
                {
                  xPos: 1290,
                  yPos: 720,
                  image: '',
                  sticker: '',
                  anim: '',
                  origin: 'top-left'
                },
                {
                  xPos: 830,
                  yPos: 850,
                  image: '',
                  sticker: '',
                  anim: '',
                  origin: 'bottom-right'
                },
                {
                  xPos: 960,
                  yPos: 500,
                  image: '',
                  sticker: '',
                  anim: '',
                  origin: 'bottom-left'
                },
                {
                  xPos: 940,
                  yPos: 460,
                  image: 'carbon-seafood-connection',
                  sticker: '',
                  anim: '',
                  origin: 'left'
                },
                {
                  xPos: 1060,
                  yPos: 640,
                  image: 'carbon-volcano-remains',
                  sticker: '',
                  anim: '',
                  origin: 'right'
                },
                {
                  xPos: 1350,
                  yPos: 660,
                  image: '',
                  sticker: '',
                  anim: '',
                  origin: 'top-right'
                },
                {
                  xPos: 1250,
                  yPos: 760,
                  image: '',
                  sticker: '',
                  anim: '',
                  origin: 'top-right'
                }
              ]
            }
          ]
        },
        { // system 2
          arrSections: [
            {
              arrPopups: []
            },
            {
              arrPopups: [
                {
                  xPos: 1200,
                  yPos: 600,
                  image: '',
                  sticker: '',
                  anim: '',
                  origin: 'left'
                },
                {
                  xPos: 880,
                  yPos: 400,
                  image: '',
                  sticker: '',
                  anim: '',
                  origin: 'right'
                },
                {
                  xPos: 400,
                  yPos: 630,
                  image: '',
                  sticker: '',
                  anim: '',
                  origin: 'top-left'
                },
                {
                  xPos: 880,
                  yPos: 500,
                  image: 'fog-fog-bank',
                  sticker: '',
                  anim: '',
                  origin: 'left'
                },
                {
                  xPos: 600,
                  yPos: 690,
                  image: '',
                  sticker: '',
                  anim: '',
                  origin: 'top-left'
                },
                {
                  xPos: 1260,
                  yPos: 720,
                  image: '',
                  sticker: '',
                  anim: '',
                  origin: 'top-left'
                },
                {
                  xPos: 1260,
                  yPos: 520,
                  image: '',
                  sticker: '',
                  anim: '',
                  origin: 'right'
                }
              ]
            },
            {
              arrPopups: [
                {
                  xPos: 680,
                  yPos: 380,
                  image: '',
                  sticker: '',
                  anim: '',
                  origin: 'bottom-right'
                },
                {
                  xPos: 1200,
                  yPos: 500,
                  image: 'fog-fog-drip',
                  sticker: '',
                  anim: '',
                  origin: 'left'
                },
                {
                  xPos: 1400,
                  yPos: 360,
                  image: '',
                  sticker: '',
                  anim: '',
                  origin: 'bottom-right'
                },
                {
                  xPos: 1400,
                  yPos: 530,
                  image: '',
                  sticker: '',
                  anim: '',
                  origin: 'bottom-right'
                },
                {
                  xPos: 1200,
                  yPos: 530,
                  image: 'fog-field-of-fog',
                  sticker: '',
                  anim: '',
                  origin: 'bottom-right'
                },
                {
                  xPos: 500,
                  yPos: 700,
                  image: '',
                  sticker: '',
                  anim: '',
                  origin: 'top-left'
                }
              ]
            }
          ]
        }
      ]

    }

  }

  componentDidMount() {
  }

  componentDidUpdate(prevProps, prevState) {

    if (this.props.data) {

      // let's get array of section identifiers for later
      // filtering of popups for current section
      var arrSectionHeaderIdentifiers = []

      if ((prevProps.currentSection !== this.props.currentSection) ||
      (prevProps.data !== this.props.data)) {

        this.props.data.forEach(function(item) {

          if (item.sectionHeaderEnglish !== "") {
            var arrSection = item.sectionHeaderEnglish

            var jsonSection = JSON.stringify(arrSection)
            var jsonSectionData = JSON.stringify(arrSectionHeaderIdentifiers)
            var jsonTestSection = jsonSectionData.indexOf(jsonSection)
            if (jsonTestSection === -1) {
              // push unique section identifier (by english header) since
              // there are multiple array members for same sections
              arrSectionHeaderIdentifiers.push(arrSection)
            }

          }

        })

        // now let's get those popup text bits
        var arrSectionPopupHeaders = []
        var arrSectionPopupDescriptions = []
        var _this = this

        this.props.data.forEach(function(item) {

          var id = arrSectionHeaderIdentifiers[_this.props.currentSection]

          if (item.sectionHeaderEnglish === id) {

            if (item.popupHeaderEnglish !== '') {

              var arrPopupHeaders = [
                item.popupHeaderEnglish,
                item.popupHeaderSpanish,
                item.popupHeaderChinese,
                item.popupHeaderFilipino
              ]
              arrSectionPopupHeaders.push(arrPopupHeaders)

              var arrPopupDescriptions = [
                item.popupDescriptionEnglish,
                item.popupDescriptionSpanish,
                item.popupDescriptionChinese,
                item.popupDescriptionFilipino
              ]
              arrSectionPopupDescriptions.push(arrPopupDescriptions)

            }

          }

        })

        var arrJoin = []
        for (var i = 0; i < arrSectionPopupHeaders.length; i++) {
          arrJoin.push([arrSectionPopupHeaders[i], arrSectionPopupDescriptions[i]]);
        }

        this.setState({
          dataSectionPopupText: arrJoin,
          dataSectionPopupHeader: arrSectionPopupHeaders,
          dataSectionPopupDescription: arrSectionPopupDescriptions
        })

      }
    }
  }

  componentWillReceiveProps(nextProps) {}

  render() {

    var _this = this
    const rows = []

    if (this.state.dataSectionPopupHeader) {
      //let i = 0
      this.state.dataSectionPopupText.forEach(function(item, i) {
        var markupHeader = {__html: item[0][_this.props.language]}
        var markupDescription = {__html: item[1][_this.props.language]}
        var cpopx = ''
        var cpopy = ''
        var origin = ''
        var sticker = ''
        var anim = ''
        var image = ''

        if (_this.state.arrSystems[_this.props.system].arrSections[_this.props.currentSection].arrPopups[i]) {
          cpopx = _this.state.arrSystems[_this.props.system].arrSections[_this.props.currentSection].arrPopups[i]['xPos']
          cpopy = _this.state.arrSystems[_this.props.system].arrSections[_this.props.currentSection].arrPopups[i]['yPos']
          origin = _this.state.arrSystems[_this.props.system].arrSections[_this.props.currentSection].arrPopups[i]['origin']
          sticker = _this.state.arrSystems[_this.props.system].arrSections[_this.props.currentSection].arrPopups[i]['sticker']
          anim = _this.state.arrSystems[_this.props.system].arrSections[_this.props.currentSection].arrPopups[i]['anim']
          image = _this.state.arrSystems[_this.props.system].arrSections[_this.props.currentSection].arrPopups[i]['image']
        }

        var containerPopStyle = {
          left: cpopx,
          top: cpopy
        }

        var popStyle = {}
        if ((origin === 'top-left') || (origin === 'top-right')) {
          popStyle = {
            top: 0
          }
        } else if ((origin === 'bottom-left') || (origin === 'bottom-right')) {
          popStyle = {
            bottom: 0
          }
        } else if ((origin === 'left') || (origin === 'right')) {
          popStyle = {
            top: '50%',
            transform: 'translateY(-50%)'
          }
        }

        rows.push(
          <div className="container-popup-pop" key={i} style={containerPopStyle}>
            <div style={popStyle}
              className={(image !== '') ? 'popup-pop wide' : 'popup-pop'}
              >
              <div
                className={_this.props.activePop === i ? 'popup-pop-bubble' : 'popup-pop-bubble mask'}
                >
                <div
                  className={((_this.props.activePop === i) && (image !== '')) ? 'popup-pop-image' : 'popup-pop-image mask'}
                  id={'pop-image-' + image}
                />
                <div
                  className="popup-pop-bubble-btn-close"
                  onClick={(e) => _this.props.handlerClosePop(e)}
                />
                <div
                  className="popup-pop-bubble-text-container"
                  >
                  <h1 dangerouslySetInnerHTML={markupHeader} />
                  <p dangerouslySetInnerHTML={markupDescription} />
                </div>
              </div>
              <div
                id={"popup-pop-button-"+i}
                className={_this.props.activePop === i ? "popup-pop-button " + origin + " selected" : "popup-pop-button " + origin}
                onClick={(e) => _this.props.handlerSelectPop(e, i, sticker, anim)}
              />
              <div
                className={_this.props.activePop === i ? '' : 'hide'}
              >
                <div className={origin === 'top-left' ? 'popup-pop-bubble-tail-top-left' : 'popup-pop-bubble-tail-top-left hide'} />
                <div className={origin === 'top-right' ? 'popup-pop-bubble-tail-top-right' : 'popup-pop-bubble-tail-top-right hide'} />
                <div className={origin === 'right' ? 'popup-pop-bubble-tail-right' : 'popup-pop-bubble-tail-right hide'} />
                <div className={origin === 'bottom-left' ? 'popup-pop-bubble-tail-bottom-left' : 'popup-pop-bubble-tail-bottom-left hide'} />
                <div className={origin === 'bottom-right' ? 'popup-pop-bubble-tail-bottom-right' : 'popup-pop-bubble-tail-bottom-right hide'} />
                <div className={origin === 'left' ? 'popup-pop-bubble-tail-left' : 'popup-pop-bubble-tail-left hide'} />
              </div>
            </div>
          </div>
        )
        //i++
      })
    }

    return (
      <div id="popup">
        {rows}
      </div>
    )

  }
}

export default Popup
