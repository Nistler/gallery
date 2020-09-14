import React from "react";
import "./App.css";
import Modal from "./modal.jsx";

export default class Galerry extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      gallery: [],
      isModalActive: false,
      imageModalId: null,
    };
  }

  componentDidMount() {
    this.getGallery();
  }

  getGallery = async () => {
    const response = await fetch(
      "https://boiling-refuge-66454.herokuapp.com/images"
    );
    const transformed = await response.json();
    this.setState({
      gallery: transformed,
    });
  };

  toggleModal = (id) => (e) => {
    e.preventDefault();
    const { isModalActive } = this.state;
    this.setState({ isModalActive: !isModalActive, imageModalId: id });
  };

  render() {
    const { gallery, imageModalId, isModalActive } = this.state;
    return (
      <div className="main-container">
        <h1 className="main-header">Gallery</h1>
        <div className="gallery-container">
          {isModalActive && (
            <Modal id={imageModalId} toggleModal={this.toggleModal} />
          )}
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
      </div>
    );
  }
}
