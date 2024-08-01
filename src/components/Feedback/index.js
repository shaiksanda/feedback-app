import {Component} from 'react'
import Emoji from '../Emoji'
import './index.css'

class Feedback extends Component {
  state = {emojiId: null}

  clickEmoji = id => {
    this.setState({emojiId: id})
  }

  render() {
    const {resources} = this.props
    const {loveEmojiUrl, emojis} = resources
    const {emojiId} = this.state
    const selectedEmoji = emojis.find(emoji => emoji.id === emojiId)

    return (
      <div className="feedback-bg-container">
        <div className="feedback-card">
          {selectedEmoji ? (
            <div className="selected-emoji-containers">
              <img
                className="selected-emoji-image"
                src={loveEmojiUrl}
                alt="Love Emoji"
              />
              <h1 className="thank-you-heading">Thank You!</h1>
              <p className="feedback-message">
                We will use your feedback to improve our customer support
                performance
              </p>
            </div>
          ) : (
            <div>
              <h1 className="heading">
                How Satisfied are you with our Customer support Performance?
              </h1>
              <ul className="emojis-container">
                {emojis.map(each => (
                  <Emoji
                    onClickEmoji={this.clickEmoji}
                    data={each}
                    key={each.id}
                  />
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    )
  }
}

export default Feedback
