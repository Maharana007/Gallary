// Write your code here.
import './index.css'

const ThumbnailItem = props => {
  const {thumbnailImages} = props
  const {
    id,
    thumbnailUrl,
    thumbnailAltText,
    isActive,
    onClickUpdateId,
  } = thumbnailImages

  const updateImage = () => {
    onClickUpdateId(id)
  }

  const activateButton = isActive ? 'thumbnail-list' : 'active-btn'

  return (
    <li key={id} onClick={updateImage} className={activateButton}>
      <img
        className="thumbnail-image"
        src={thumbnailUrl}
        alt={thumbnailAltText}
      />
    </li>
  )
}

export default ThumbnailItem
