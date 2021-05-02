import React, { Component } from "react";
import "./modal.css";

// Convert date from UNIX timestamp
const normalizeDate = (date) => {
  const transformedDate = new Date(date);
  const day = transformedDate.getDate();
  const month = transformedDate.getMonth() + 1;
  const year = transformedDate.getFullYear();
  return `${day < 10 ? `0${day}` : day}.${
    month < 10 ? `0${month}` : month
  }.${year}`;
};

export default class Modal extends Component {
  constructor(props) {
    super(props);
    const { id } = this.props;
    this.state = {
      id,
      imageUrl: null,
      comments: [],
      name: "",
      comment: "",
      isLoading: true,
    };
  }

  componentDidMount() {
    window.addEventListener("keyup", this.handleKeyUp, false);
    document.body.style.overflow = "hidden";
    this.getImageDetails();
  }

  componentWillUnmount() {
    document.body.style.overflow = "initial";
    window.removeEventListener("keyup", this.handleKeyUp, false);
  }

  // Closing the modal window by pressing the ESC key
  handleKeyUp = (e) => {
    const { toggleModal } = this.props;
    const keys = {
      27: () => {
        toggleModal(null)(e);
        window.removeEventListener("keyup", this.handleKeyUp, false);
      },
    };
    if (keys[e.keyCode]) {
      keys[e.keyCode]();
    }
  };

  // Loading comments and URL of Hi-Res version of the image
  getImageDetails = async () => {
    const { id } = this.state;
    const response = await fetch(
      `https://boiling-refuge-66454.herokuapp.com/images/${id}`
    );
    const transformed = await response.json();
    this.setState({
      imageUrl: transformed.url,
      comments: transformed.comments,
      isLoading: false,
    });
  };

  // Control of input field
  handleChange = ({ target }) => {
    const { name, value } = target;
    if (name === "name") {
      this.setState({ name: value });
      return;
    }
    this.setState({ comment: value });
  };

  // Posting comment request
  handleSubmit = async (e) => {
    e.preventDefault();
    const { name, comment, id, comments } = this.state;
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
    // Imitate of adding a new comment
    const newComments = [
      ...comments,
      { id: 99, text: comment, date: new Date() },
    ];

    this.setState({
      name: "",
      comment: "",
      comments: newComments,
    });
  };

  render() {
    const { toggleModal } = this.props;
    const { imageUrl, comments, name, comment, isLoading } = this.state;
    return (
      <article className="modal-window">
        <div className="modal-container">
          <section className="modal-content">
            <div className="img-container">
              {isLoading ? (
                <div className="donut" />
              ) : (
                <img className="modal-img" src={imageUrl} alt="" />
              )}
            </div>
          </section>
          <section className="modal-comments">
            {comments.length < 1 ? (
              <div className="comment comment-placeholder">
                Комментариев нет
              </div>
            ) : (
              comments.map(({ id, text, date }) => (
                <article className="comment" id={id} key={id}>
                  <time className="modal-date">{normalizeDate(date)}</time>
                  <div className="modal-comment">{text}</div>
                </article>
              ))
            )}
          </section>
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
        <div className="close" onClick={toggleModal(null)} />
      </article>
    );
  }
}
