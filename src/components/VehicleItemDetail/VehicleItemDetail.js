import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col, Button } from 'antd';
import { toMoneyFormat } from 'utils';
import styles from './VehicleItemDetail.scss';
const propTypes = {
  item: PropTypes.shape({
    ImageLink: PropTypes.string,
    Title: PropTypes.string.isRequired,
    Make: PropTypes.string.isRequired,
    Model: PropTypes.string.isRequired,
    OtherDescription: PropTypes.string,
    MainPrice: PropTypes.number.isRequired,
    SeoName: PropTypes.string,
    Address: PropTypes.string,
    IsFavorite: PropTypes.boolean,
  }),
  onFavoriteClick: PropTypes.func.isRequired,
};

const generateDescription = item => {
  let description = '';
  if (item.FirstRegistration) {
    description = description.concat('EZ ' + item.FirstRegistration + ', ');
  }
  if (item.Mileage) {
    description = description.concat(item.Mileage + ' km, ');
  }
  if (item.Power) {
    description = description.concat(item.Power + ' kW, ');
  }
  if (item.Make) {
    description = description.concat(item.Make + ', ');
  }
  if (item.Model) {
    description = description.concat(item.Model + ' ');
  }

  return description;
};
const VehicleItemDetail = ({ item, onFavoriteClick, onImageClick }) => (
  <Row gutter={12} className={styles.detail}>
    <Col span={6}>
      <a onClick={onImageClick}>
        <img
          src={item.ImageLink ? item.ImageLink : 'assets/no-image.jpg'}
          alt="null"
        />
      </a>
    </Col>
    <Col span={8} className="car-info">
      <span className="h4 title">{item.Title}</span>
      <div className="info">Make: {item.Make}</div>
      <div className="info">Model: {item.Model}</div>
      <div className="info">{generateDescription(item)}</div>
    </Col>
    <Col span={4} className={styles.price}>
      <span className="h4">{toMoneyFormat(item.MainPrice)} €</span>
    </Col>
    <Col span={6} className="vendor-info">
      <span className="h4 vendor-name">{item.SeoName}</span>
      <div>Adress: {item.Address}</div>
    </Col>
    <div className={styles.actionBox}>
      <Button type="primary">Contact</Button>
      <Button
        icon="star"
        type={item.IsFavorite ? 'primary' : undefined}
        onClick={() => onFavoriteClick(item)}
      >
        {item.IsFavorite ? 'Favorited' : 'Mark as favorite'}
      </Button>
    </div>
  </Row>
);

VehicleItemDetail.propTypes = propTypes;

export default VehicleItemDetail;
