import React, { Component } from 'react';
import styles from './ImageSelector.scss';
import PropsType from 'prop-types';
const propsType = {
  imageURLs: PropsType.array.isRequired,
  onClickImage: PropsType.func,
};
class ImageSelector extends Component {
  constructor(props) {
    super(props);
    this.state = { selectedImage: this.props.imageURLs[0] || '' };
  }

  handleClickImage = image => {
    this.setState({ selectedImage: image }, this.props.onClickImage(image));
  };

  render() {
    const { imageURLs, onClickImage } = this.props;
    return (
      <div className={styles.wrapper}>
        <div
          className={styles.subImagesList}
          style={{ width: `${imageURLs.length * 116 + 300}px` }}
        >
          {imageURLs.map((image, index) => (
            <div className={styles.imageItem} key={index}>
              <img
                className={
                  styles.subImage +
                  (image === this.state.selectedImage
                    ? ' ' + styles.active
                    : '')
                }
                src={image}
                alt=""
                onClick={() => this.handleClickImage(image)}
              />
            </div>
          ))}
        </div>
      </div>
    );
  }
}

ImageSelector.propsType = propsType;

export default ImageSelector;
