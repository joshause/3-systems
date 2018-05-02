import React, {Component} from 'react'
import '../style/Loader.css'

class Loader extends Component {

  componentDidUpdate(prevProps, prevState) {
    var _this = this
    if (this.props.data !== prevProps.data) {
      setTimeout(function() {
        _this.props.handlerLoadComplete()
      }, 600)
    }
  }

  render() {

    if (this.props.data) {

      const rows = []

      // animation image sets

      var animFogPlayAll = []
      for (var i = 0; i < 700; i++) {
        var fiver = ('0000' + i).slice(-5)
        animFogPlayAll.push(
          <img key={i} src={"/animation/fog-play-all/03_fog_playAll_" + fiver + ".png"} alt="" />
        )
      }

      rows.push(
        <div key="0">
          <div key="1" id="loader-animation-images">
          {animFogPlayAll}
          </div>
          <div key="2" id="loader-source-images">
            <div id="carbon_land-on-the-move" />
            <div id="carbon_seafood-connection" />
            <div id="carbon_volcano-remains" />
            <div id="fog_field-of-fog" />
            <div id="fog_fog-blanket" />
            <div id="fog_fog-drip" />
            <div id="upwelling_harmful-algae" />
            <div id="upwelling_mammal-impact" />
            <div id="upwelling_ocean-research" />
            <div id="upwelling_plankton-bloom" />
            <div id="upwelling_shelter-kelp" />
          </div>
        </div>
      )

      return(
        <div id="loader">
          <div id="asset-container">
            {rows}
            <p className="wa">Test123!@#</p>
            <p className="wb">Test123!@#</p>
            <p className="wc">Test123!@#</p>
            <p className="wd">Test123!@#</p>
            <p className="we">Test123!@#</p>
            <p className="wf">Test123!@#</p>
            <p className="wg">Test123!@#</p>
            <p className="ca">測試中文字體</p>
            <p className="cb">測試中文字體</p>
            <p className="cc">測試中文字體</p>
          </div>
          <div id="message-container">
            <p>This exhibit is being updated.</p>
          </div>
        </div>
      )

    } else {

      return(
        <div id="loader">
          <div id="message-container">
            <p>This exhibit is being updated.</p>
          </div>
        </div>
      )

    }

  }

}

export default Loader
