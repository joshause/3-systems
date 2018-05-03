import React, {Component} from 'react'
import '../style/Translator.css'

class Translator extends Component {
  constructor(props) {
    super(props)
    this.state = {
      currentLanguage: null
    }
  }

  componentWillReceiveProps(nextProps) {
    var language = nextProps.language
    this.setState({
      currentLanguage: language
    })
  }

  render() {
    return(
      <div id="translator">
        <button
          className={this.state.currentLanguage === 3 ? 'active' : ''}
          onClick={(e) => this.props.handlerSelectLanguage(e, 3)}><span>FILIPINO</span></button>
        <button
          className={this.state.currentLanguage === 2 ? 'active' : ''}
          onClick={(e) => this.props.handlerSelectLanguage(e, 2)}><span>繁体中文</span></button>
        <button
          className={this.state.currentLanguage === 1 ? 'active' : ''}
          onClick={(e) => this.props.handlerSelectLanguage(e, 1)}><span>ESPAÑOL</span></button>
        <button
          className={this.state.currentLanguage === 0 ? 'active' : ''}
          onClick={(e) => this.props.handlerSelectLanguage(e, 0)}><span>ENGLISH</span></button>
        <button className="credits">
          <span>Credits</span></button>
      </div>
    )
  }
}

export default Translator
