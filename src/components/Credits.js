import React, {Component} from 'react'
import '../style/Credits.css'

class Credits extends Component {
  constructor(props) {
    super(props)
    this.state = {
      credits: null
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.credits !== this.state.credits) {
      var credits = nextProps.dataCredits
      this.setState({
        credits: credits
      })
    }
  }

  render() {

    var language = this.props.language
    var lang = ''
    switch (language) {
      case 0:
        lang = 'en'
        break
      case 1:
        lang = 'es'
        break
      case 2:
        lang = 'cn'
        break
      case 3:
        lang = 'tl'
        break
      default:
        lang = 'en'
        break
    }

    const rows = []

    if (this.state.credits) {
      var credits = this.state.credits
      if (credits[0]) {
        if (credits[0].credits) {
          credits[0].credits.forEach(function(cred, i) {

            var header = ''
            var desc = ''
            var markupDesc = ''

            if (cred['header_'+lang].value) {
              header = cred['header_'+lang].value
            }
            if (cred[lang].safe_value) {
              desc = cred[lang].safe_value
              desc = desc.replace(/<\/?a[^>]*>/g, "")
              markupDesc = {__html: desc}
            }

            rows.push(
              <li
                key={i}
                >
                  <h2>{header}</h2>
                  <p dangerouslySetInnerHTML={markupDesc} />
                </li>
            )

          })
        }
      }
    }

    return(
      <div id="credits">
        <button
          onClick={(e) => this.props.handlerCloseCredits(e)} />
        <h1>Credits</h1>
        <ul>
          {rows}
        </ul>
      </div>
    )
  }
}

export default Credits
