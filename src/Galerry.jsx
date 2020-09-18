import React, { Component } from "react";
import "./galerry.css";
import Modal from "./Modal.jsx";

export default class Galerry extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gallery: [],
      isModalActive: false,
      imageModalId: null,
      isLoading: true,
    };
  }

  // loading a gallery on startup
  componentDidMount() {
    this.getGallery();
  }

  // GET request to the server
  getGallery = async () => {
    try {
      const response = await fetch(
        "https://boiling-refuge-66454.herokuapp.com/images"
      );
      if (!response.ok) {
        throw new Error("failed to load gallery");
      }
      const transformed = await response.json();
      this.setState({
        gallery: transformed,
        isLoading: false,
      });
    } catch (error) {
      console.log("error: ", error.message);
    }
  };

  // Toggle modal window state
  toggleModal = (id) => (e) => {
    e.preventDefault();
    const { isModalActive } = this.state;
    this.setState({ isModalActive: !isModalActive, imageModalId: id });
  };

  render() {
    const { gallery, imageModalId, isModalActive, isLoading } = this.state;
    const galleryStyle = isModalActive
      ? "gallery-container modal-opened"
      : "gallery-container";

    return (
      <div className="main-container">
        <h1 className="main-header">Gallery</h1>
        {isLoading ? (
          <div className="donut" />
        ) : (
          <div className={galleryStyle}>
            {gallery.map((image) => (
              <img
                className="main-img"
                key={image.id}
                src={image.url}
                alt=""
                onClick={this.toggleModal(image.id)}
              />
            ))}
          </div>
        )}
        {isModalActive && (
          <Modal id={imageModalId} toggleModal={this.toggleModal} />
        )}
      </div>
    );
  }
}
