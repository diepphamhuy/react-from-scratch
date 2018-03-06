import React from 'react';
import styles from './ImageSelector.scss';
import PropsType from 'prop-types';
const propsType = {
  imageURLs: PropsType.array,
  onClickImage: PropsType.func,
};
const ImageSelector = ({ imageURLs, onClickImage }) => (
  <div className={styles.wrapper}>
    <div className={styles.subImagesList}>
      {imageURLs.map((image, index) => (
        <div className={styles.imageItem} key={index}>
          <img
            className={styles.subImage}
            src={image}
            alt=""
            onClick={() => onClickImage(image)}
          />
        </div>
      ))}
    </div>
  </div>
);

ImageSelector.propsType = propsType;

export default ImageSelector;
