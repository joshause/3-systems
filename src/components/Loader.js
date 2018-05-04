import React, {Component} from 'react'
import '../style/Loader.css'

class Loader extends Component {

  componentDidUpdate(prevProps, prevState) {
    var _this = this
    if (this.props.data !== prevProps.data) {
      setTimeout(function() {
        _this.props.handlerLoadComplete()
      }, 120000)
    }
  }

  render() {

    if (this.props.data) {

      const rows = []
      var fiver = ''
      var i = 0

      var animCarbonPlayAll = []
      var animCarbonSanAndreasFault = []
      var animCarbonVolcanoesSpewCarbon = []
      var animCarbonCarbonReturnsToRock = []
      var animCarbonOilReservoirs = []

      var animFogPlayAll = []
      var animFogCaliforniaCurrent = []
      var animFogValleyVacuum = []
      var animFogFogBlanket = []
      var animFogEphemeralFog = []
      var animFogFantasticFogFlows = []
      var animFogCoastalContours = []
      var animFogWatershedRefill = []
      var animFogNavigatingFog = []

      var animUpwellingPlayAll = []
      var animUpwellingCaliforniaCurrent = []
      var animUpwellingPrevailingWinds = []
      var animUpwellingNutrientRichWater = []
      var animUpwellingPlanktonBloom = []
      var animUpwellingSeaOfChange = []
      var animUpwellingToxicBloom = []

      // animation image sets based upon system

      var urlParams = new URLSearchParams(window.location.search)

      if (urlParams.get('system') === "carbon") {

        for (i = 0; i < 1007; i++) {
          fiver = ('0000' + i).slice(-5)
          animCarbonPlayAll.push(
            <img key={i} src={process.env.REACT_APP_ANIMATION_PATH + "/carbon-play-all/carbon_v17_playAll_" + fiver + ".png"} alt="" />
          )
        }
        for (i = 0; i < 301; i++) {
          fiver = ('0000' + i).slice(-5)
          animCarbonSanAndreasFault.push(
            <img key={i} src={process.env.REACT_APP_ANIMATION_PATH + "/carbon-san-andreas-fault/carbon_v16_SanAndreasFault_" + fiver + ".png"} alt="" />
          )
        }
        for (i = 0; i < 301; i++) {
          fiver = ('0000' + i).slice(-5)
          animCarbonVolcanoesSpewCarbon.push(
            <img key={i} src={process.env.REACT_APP_ANIMATION_PATH + "/carbon-volcanoes-spew-carbon/carbon_v16_volcanoesSpewCarbon_" + fiver + ".png"} alt="" />
          )
        }
        for (i = 0; i < 400; i++) {
          fiver = ('0000' + i).slice(-5)
          animCarbonCarbonReturnsToRock.push(
            <img key={i} src={process.env.REACT_APP_ANIMATION_PATH + "/carbon-carbon-returns-to-rock/carbon_v17_carbonReturnsToRock_" + fiver + ".png"} alt="" />
          )
        }
        for (i = 0; i < 302; i++) {
          fiver = ('0000' + i).slice(-5)
          animCarbonOilReservoirs.push(
            <img key={i} src={process.env.REACT_APP_ANIMATION_PATH + "/carbon-oil-reservoirsl/carbon_v16_OilReservoirs_" + fiver + ".png"} alt="" />
          )
        }


      } else if (urlParams.get('system') === "fog") {

        for (i = 0; i < 996; i++) {
          fiver = ('0000' + i).slice(-5)
          animFogPlayAll.push(
            <img key={i} src={process.env.REACT_APP_ANIMATION_PATH + "/fog-play-all/fog_v16_playAll_" + fiver + ".png"} alt="" />
          )
        }
        for (i = 0; i < 301; i++) {
          fiver = ('0000' + i).slice(-5)
          animFogCaliforniaCurrent.push(
            <img key={i} src={process.env.REACT_APP_ANIMATION_PATH + "/fog-california-current/fog_v16_caCurrent_" + fiver + ".png"} alt="" />
          )
        }
        for (i = 0; i < 301; i++) {
          fiver = ('0000' + i).slice(-5)
          animFogValleyVacuum.push(
            <img key={i} src={process.env.REACT_APP_ANIMATION_PATH + "/fog-valley-vacuum/fog_v16_valleyVacuum_" + fiver + ".png"} alt="" />
          )
        }
        for (i = 0; i < 446; i++) {
          fiver = ('0000' + i).slice(-5)
          animFogFogBlanket.push(
            <img key={i} src={process.env.REACT_APP_ANIMATION_PATH + "/fog-fog-blanket/fog_v16_fogBlanket_" + fiver + ".png"} alt="" />
          )
        }
        for (i = 0; i < 321; i++) {
          fiver = ('0000' + i).slice(-5)
          animFogEphemeralFog.push(
            <img key={i} src={process.env.REACT_APP_ANIMATION_PATH + "/fog-ephemeral-fog/fog_v16_ephemeralFog_" + fiver + ".png"} alt="" />
          )
        }
        for (i = 0; i < 301; i++) {
          fiver = ('0000' + i).slice(-5)
          animFogFantasticFogFlows.push(
            <img key={i} src={process.env.REACT_APP_ANIMATION_PATH + "/fog-fantastic-fog-flows/fog_v16_fantasticFogFlows_" + fiver + ".png"} alt="" />
          )
        }
        for (i = 0; i < 301; i++) {
          fiver = ('0000' + i).slice(-5)
          animFogCoastalContours.push(
            <img key={i} src={process.env.REACT_APP_ANIMATION_PATH + "/fog-coastal-contours/fog_v16_coastalContours_" + fiver + ".png"} alt="" />
          )
        }
        for (i = 0; i < 301; i++) {
          fiver = ('0000' + i).slice(-5)
          animFogWatershedRefill.push(
            <img key={i} src={process.env.REACT_APP_ANIMATION_PATH + "/fog-watershed-refill/fog_v16_watershedRefill_" + fiver + ".png"} alt="" />
          )
        }
        for (i = 0; i < 301; i++) {
          fiver = ('0000' + i).slice(-5)
          animFogNavigatingFog.push(
            <img key={i} src={process.env.REACT_APP_ANIMATION_PATH + "/fog-navigating-fog/fog_v16_navigatingFog_" + fiver + ".png"} alt="" />
          )
        }

      } else {
        // upwelling default

        for (i = 0; i < 792; i++) {
          fiver = ('0000' + i).slice(-5)
          animUpwellingPlayAll.push(
            <img key={i} src={process.env.REACT_APP_ANIMATION_PATH + "/upwelling-play-all/upwelling_v16_playAll_" + fiver + ".png"} alt="" />
          )
        }
        for (i = 0; i < 792; i++) {
          fiver = ('0000' + i).slice(-5)
          animUpwellingCaliforniaCurrent.push(
            <img key={i} src={process.env.REACT_APP_ANIMATION_PATH + "/upwelling-play-all/upwelling_v16_caCurrent_" + fiver + ".png"} alt="" />
          )
        }
        for (i = 0; i < 792; i++) {
          fiver = ('0000' + i).slice(-5)
          animUpwellingPrevailingWinds.push(
            <img key={i} src={process.env.REACT_APP_ANIMATION_PATH + "/upwelling-play-all/upwelling_v16_prevailingWinds_" + fiver + ".png"} alt="" />
          )
        }
        for (i = 0; i < 792; i++) {
          fiver = ('0000' + i).slice(-5)
          animUpwellingNutrientRichWater.push(
            <img key={i} src={process.env.REACT_APP_ANIMATION_PATH + "/upwelling-play-all/upwelling_v16_nutrientUpwelling_" + fiver + ".png"} alt="" />
          )
        }
        for (i = 0; i < 792; i++) {
          fiver = ('0000' + i).slice(-5)
          animUpwellingPlanktonBloom.push(
            <img key={i} src={process.env.REACT_APP_ANIMATION_PATH + "/upwelling-play-all/upwelling_v16_planktonBloom_" + fiver + ".png"} alt="" />
          )
        }
        for (i = 0; i < 792; i++) {
          fiver = ('0000' + i).slice(-5)
          animUpwellingSeaOfChange.push(
            <img key={i} src={process.env.REACT_APP_ANIMATION_PATH + "/upwelling-play-all/upwelling_v16_seoOfChange_" + fiver + ".png"} alt="" />
          )
        }
        for (i = 0; i < 792; i++) {
          fiver = ('0000' + i).slice(-5)
          animUpwellingToxicBloom.push(
            <img key={i} src={process.env.REACT_APP_ANIMATION_PATH + "/upwelling-play-all/upwelling_v16_toxicBloom_" + fiver + ".png"} alt="" />
          )
        }

      }

      rows.push(
        <div key="0">
          <div key="1" id="loader-animation-images">
          {animCarbonPlayAll}
          {animCarbonSanAndreasFault}
          {animCarbonVolcanoesSpewCarbon}
          {animCarbonCarbonReturnsToRock}
          {animCarbonOilReservoirs}
          {animFogPlayAll}
          {animFogCaliforniaCurrent}
          {animFogValleyVacuum}
          {animFogFogBlanket}
          {animFogEphemeralFog}
          {animFogFantasticFogFlows}
          {animFogCoastalContours}
          {animUpwellingPlayAll}
          {animUpwellingCaliforniaCurrent}
          {animUpwellingPrevailingWinds}
          {animUpwellingNutrientRichWater}
          {animUpwellingPlanktonBloom}
          {animUpwellingSeaOfChange}
          {animUpwellingToxicBloom}
          </div>
          <div key="2" id="loader-source-images">
            <div id="carbon_air-and-ocean-interact" />
            <div id="carbon_oil-reservoirs" />
            <div id="carbon_forests-store-carbon" />
            <div id="carbon_land-on-the-move" />
            <div id="carbon_seafood-connection" />
            <div id="carbon_volcano-remnants" />
            <div id="fog_chardonnay-loves-fog" />
            <div id="fog_coastal-contours" />
            <div id="fog_drink-from-sea" />
            <div id="fog_fantastic-fog-flows" />
            <div id="fog_field-of-fog" />
            <div id="fog_fog-blanket" />
            <div id="fog_fog-drip" />
            <div id="fog_water-in-the-air" />
            <div id="fog_watershed-refill" />
            <div id="upwelling_dining-destinations" />
            <div id="upwelling_disappearing-kelp" />
            <div id="upwelling_harmful-algae-bloom" />
            <div id="upwelling_kelp-forest" />
            <div id="upwelling_mammal-mammal-impacts" />
            <div id="upwelling_ocean-research" />
            <div id="upwelling_plankton-bloom" />
            <div id="upwelling_sheltered-by-kelp" />
            <div id="upwelling_toxic-buffet" />
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
