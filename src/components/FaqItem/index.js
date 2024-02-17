// Write your code here.
import {Component} from 'react'

import './index.css'

class FaqItem extends Component {
  state = {isActive: false}

  onToggleIcon = () => {
    const {isActive} = this.state
    this.setState({isActive: !isActive})
  }

  render() {
    const {faqDetails} = this.props
    const {questionText, answerText} = faqDetails
    const {isActive} = this.state

    const imgUrl = isActive
      ? 'https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png'
      : 'https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png'
    const altText = isActive ? 'minus' : 'plus'

    return (
      <li className="faq-item">
        <div className="question-container">
          <h1 className="question">{questionText}</h1>
          <button type="button" className="button" onClick={this.onToggleIcon}>
            <img src={imgUrl} alt={altText} className="icon" />
          </button>
        </div>
        {isActive && (
          <>
            <hr className="horizontal-line" />
            <p className="answer">{answerText}</p>
          </>
        )}
      </li>
    )
  }
}
export default FaqItem

/* const FaqItem = props => {
  const {faqDetails, isActive} = props
  const {questionText, answerText} = faqDetails

  const imgUrl = isActive
    ? 'https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png'
  const altText = isActive ? 'plus' : 'minus'

  return (
    <li className="faq-item">
      <div className="question-container">
        <p>{questionText}</p>
        <button type="button" className="button">
          <img src={imgUrl} alt={altText} className="icon" />
        </button>
      </div>
      <p className="answer">{answerText}</p>
    </li>
  )
}
export default FaqItem
 */
