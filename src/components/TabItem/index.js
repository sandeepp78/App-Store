// Write your code here

import './index.css'

const TabItem = props => {
  const {tabDetails, onChangeTab} = props
  const {tabId, displayText} = tabDetails
  const tabChange = () => {
    onChangeTab(tabId)
  }

  return (
    <li className="tab-item-container">
      <button type="button" className="tab-btn" onClick={tabChange}>
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
