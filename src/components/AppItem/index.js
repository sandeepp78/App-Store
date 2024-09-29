// Write your code here

import './index.css'

const AppItem = props => {
  const {appDetails} = props
  const {appName, imageUrl, category, appId} = appDetails

  return (
    <>
      <li className="project-item-container">
        <img src={imageUrl} alt={appName} className="image" />
        <p>{appName}</p>
      </li>
    </>
  )
}

export default AppItem
