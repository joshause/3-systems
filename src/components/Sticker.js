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
                  x: 450,
                  y: 780
                },
                {
                  name: 'kelp-healthy',
                  x: 1200,
                  y: 700
                }
              ]
            },
            {
              arrStickers: [
                {
                  name: 'kelp-unhealthy',
                  x: 1200,
                  y: 700
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

              ]
            },
            {
              arrStickers: [

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
