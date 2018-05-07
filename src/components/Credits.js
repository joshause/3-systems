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
    var credits = nextProps.crdits
    this.setState({
      credits: credits
    })
  }

  render() {
    return(
      <div id="credits">
        <button
          onClick={(e) => this.props.handlerCloseCredits(e)} />
        <h1>Credits</h1>
      </div>
    )
  }
}

export default Credits
