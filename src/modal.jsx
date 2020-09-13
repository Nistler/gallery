import React from "react";
import "./modal.css";

export default class Modal extends React.Component {
  constructor(props) {
    super(props);
    const { id } = this.props;
    this.state = { id, imageUrl: null, comments: [], name: "", comment: "" };
  }

  componentDidMount() {
    this.getImageDetails();
  }

  getImageDetails = async () => {
    const { id } = this.state;
    const response = await fetch(
      `https://boiling-refuge-66454.herokuapp.com/images/${id}`
    );
    const transformed = await response.json();
    this.setState({
      imageUrl: transformed.url,
      comments: transformed.comments,
    });
  };

  handleChange = ({ target }) => {
    const { name, value } = target;
    if (name === "name") {
      this.setState({ name: value });
      return;
    }
    this.setState({ comment: value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { name, comment } = this.state;
    console.log(name, comment);
  };

  render() {
    const { imageUrl, comments, name, comment } = this.state;
    return (
      <div className="modal-window">
        <div className="modal-container">
          <div className="modal-content">
            {imageUrl && <img className="modal-img" src={imageUrl} alt="" />}
            <form className="comment-form" onSubmit={this.handleSubmit}>
              <input
                className="form-input"
                type="text"
                name="name"
                placeholder="Ваше имя"
                value={name}
                onChange={this.handleChange}
              />
              <input
                className="form-input"
                type="text"
                name="comment"
                value={comment}
                placeholder="Ваш комментарий"
                onChange={this.handleChange}
              />
              <input
                className="send-comment-button"
                type="submit"
                value="Оставить комментарий"
              />
            </form>
          </div>
          <div className="modal-comments">
            {comments.length < 1 ? (
              <div>Комментариев нет</div>
            ) : (
              comments.map(({ id, text, date }) => (
                <div id={id} key={id}>
                  <div className="modal-date">{date}</div>
                  <div className="modal-comment">{text}</div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    );
  }
}
