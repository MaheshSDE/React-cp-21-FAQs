// Write your code here.
import {Component} from 'react'

import FaqItem from '../FaqItem'

import './index.css'

class Faqs extends Component {
  render() {
    const {faqsList} = this.props

    return (
      <div className="faqs-container">
        <h1 className="heading">FAQs</h1>
        <div className="card-container">
          <ul className="unOrderList">
            {faqsList.map(eachItem => (
              <FaqItem faqDetails={eachItem} key={eachItem.id} />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}
export default Faqs
