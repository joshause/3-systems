import React, { Component } from 'react'
import '../style/Sticker.css'

class Sticker extends Component {
  constructor(props) {
    super(props)
    this.state = {
      activeStickers: [], // more than 1 sticker can be active at once
      arrSystems: [
        { // system 0
          arrSections: [
            {
              arrStickers: []
            },
            {
              arrStickers: [
                {
                  name: 'whale',
                  x: 570,
                  y: 790
                },
                {
                  name: 'kelp-healthy',
                  x: 1400,
                  y: 650
                },
                {
                  name: 'otter',
                  x: 1020,
                  y: 420
                }
              ]
            },
            {
              arrStickers: [
                {
                  name: 'kelp-unhealthy',
                  x: 1430,
                  y: 680
                },
                {
                  name: 'crab',
                  x: 1030,
                  y: 420
                },
                {
                  name: 'bouy',
                  x: 760,
                  y: 490
                }
              ]
            }
          ]
        },
        { // system 1
          arrSections: [
            {
              arrStickers: [

              ]
            },
            {
              arrStickers: [
                {
                  name: 'elk',
                  x: 1670,
                  y: 465
                }
              ]
            },
            {
              arrStickers: [
                {
                  name: 'car',
                  x: 1470,
                  y: 530
                },
                {
                  name: 'oil-rig',
                  x: 680,
                  y: 440
                },
                {
                  name: 'oyster',
                  x: 1240,
                  y: 600
                },
                {
                  name: 'wind-turbine',
                  x: 1700,
                  y: 420
                },
                {
                  name: 'redwood',
                  x: 1020,
                  y: 250
                }
              ]
            }
          ]
        },
        { // system 2
          arrSections: [
            {
              arrStickers: [

              ]
            },
            {
              arrStickers: [

              ]
            },
            {
              arrStickers: [
                {
                  name: 'redwood-fog',
                  x: 1000,
                  y: 270
                },
                {
                  name: 'wine',
                  x: 1365,
                  y: 360
                }
              ]
            }
          ]
        }
      ]

    }
  }

  componentDidMount() {}

  componentDidUpdate(prevProps, prevState) {}

  componentWillReceiveProps(nextProps) {

    if ((nextProps.activeSticker !== this.props.activeSticker) || (nextProps.activeSticker === ''))  {
      var arr = []
      if (nextProps.activeSticker !== '') {
        arr.push(nextProps.activeSticker)
      }
      this.setState({
        activeStickers: arr
      })
    }

    if (nextProps.currentSection !== this.props.currentSection) {
      // on section load make any section stickers active
      var arrActiveStickers = []
      var stickers = this.state.arrSystems[this.props.system].arrSections[nextProps.currentSection].arrStickers
      stickers.forEach(function(stick) {
        if (stick['name']) {
          arrActiveStickers.push(stick['name'])
        }
      })
      this.setState({
        activeStickers: arrActiveStickers
      })

    }

  }

  render() {

    var _this = this

    const rows = []
    // render elements for current sys / sec stickers
    var stickers = this.state.arrSystems[this.props.system].arrSections[this.props.currentSection].arrStickers

    stickers.forEach(function(stick, i) {

      var stickerStyle = {
        left: stick['x'],
        top: stick['y']
      }

      rows.push(
        <div
          key={i}
          className={_this.state.activeStickers.indexOf(stick['name']) > -1 ? 'sticker on' : 'sticker'}
          id={'sticker-' + stick['name']}
          style={stickerStyle} />
      )

    })

    return (
      <div id="sticker">
        {rows}
      </div>
    )

  }
}

export default Sticker
