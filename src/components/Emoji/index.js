import './index.css'

const Emoji = props => {
  const {data, onClickEmoji} = props
  const {name, imageUrl, id} = data
  const click = () => {
    onClickEmoji(id)
  }

  return (
    <li className="emoji-item">
      <img onClick={click} className="image" src={imageUrl} alt={name} />
      <p className="content">{name}</p>
    </li>
  )
}
export default Emoji
