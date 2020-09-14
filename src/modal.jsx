import React from "react";
import "./modal.css";

const normalizeDate = (date) => {
  const transformedDate = new Date(date);
  const day = transformedDate.getDate();
  const month = transformedDate.getMonth() + 1;
  const year = transformedDate.getFullYear();
  return `${day < 10 ? `0${day}` : day}.${
    month < 10 ? `0${month}` : month
  }.${year}`;
};

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

  handleSubmit = async (e) => {
    e.preventDefault();
    const { name, comment, id } = this.state;
    try {
      const response = await fetch(
        `https://boiling-refuge-66454.herokuapp.com/images/${id}/comments`,
        {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ name, comment }),
        }
      );
      if (!response.ok) {
        throw new Error("response not 'OK'");
      }
    } catch (error) {
      console.log("Fetch request error:", error.message);
    }
    this.setState({ name: "", comment: "" });
  };

  render() {
    const { toggleModal } = this.props;
    const { imageUrl, comments, name, comment } = this.state;
    return (
      <div className="modal-window">
        <div className="modal-container">
          <div className="modal-content">
            {imageUrl && <img className="modal-img" src={imageUrl} alt="" />}
          </div>
          <div className="modal-comments">
            {comments.length < 1 ? (
              <div className="comment comment-placeholder">
                Комментариев нет
              </div>
            ) : (
              comments.map(({ id, text, date }) => (
                <div className="comment" id={id} key={id}>
                  <div className="modal-date">{normalizeDate(date)}</div>
                  <div className="modal-comment">{text}</div>
                </div>
              ))
            )}
          </div>
          <form className="comment-form" onSubmit={this.handleSubmit}>
            <input
              className="form-input"
              type="text"
              name="name"
              required
              placeholder="Ваше имя"
              value={name}
              onChange={this.handleChange}
            />
            <input
              className="form-input"
              type="text"
              name="comment"
              required
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
        <div className="close" onClick={toggleModal(null)}></div>
      </div>
    );
  }
}
