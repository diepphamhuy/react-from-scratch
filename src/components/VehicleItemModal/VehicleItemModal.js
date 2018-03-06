import React, { Component } from 'react';
import { Modal, Col, Row, Divider, List, Button } from 'antd';
import PropsType from 'prop-types';
import styles from './VehicleItemModal.scss';
import { ImageSelector } from '../ImageSelector/';
import { toMoneyFormat } from 'utils';
const propsType = {
  vehicle: PropsType.shape({
    Title: PropsType.string,
    ImageLink: PropsType.string,
  }).isRequired,
  visible: PropsType.bool,
  onCancel: PropsType.func.isRequired,
  onFavoriteClick: PropsType.func.isRequired,
};
const defaultProps = {
  vehicle: {
    MainPrice: 0,
  },
};

class VehicleItemModal extends Component {
  handleClickImage = image => {
    this.setState({
      mainImage: image,
    });
  };
  constructor(props) {
    super(props);
    console.log(props);
    this.state = { mainImage: null };
  }

  componentWillUpdate(nextprops) {
    if (nextprops.vehicle.ID != this.props.vehicle.ID) {
      this.setState({ mainImage: nextprops.vehicle.ImageLink });
    }
  }

  shouldComponentUpdate(nextprops) {
    return !!nextprops.vehicle && nextprops.vehicle != {};
  }

  render() {
    const { vehicle, visible, onCancel, onFavoriteClick } = this.props;
    return (
      <Modal
        className={styles.modal}
        visible={visible}
        onCancel={onCancel}
        footer={null}
      >
        <h3>{vehicle.Title}</h3>
        <Row gutter={24}>
          <Col span={16}>
            <img
              className={styles.mainImage}
              src={
                this.state.mainImage
                  ? this.state.mainImage
                  : vehicle.ImageLink
                    ? vehicle.ImageLink
                    : 'assets/no-image.jpg'
              }
            />
          </Col>
          <Col span={8}>
            <h3 className={styles.price}>
              {toMoneyFormat(vehicle.MainPrice)} €
            </h3>
            <div className={styles.basicInfo}>
              <p>{vehicle.Category}</p>
              <p>{vehicle.Type}</p>
              <p>Status: {vehicle.Status}</p>
            </div>
            <br />
            <p>EZ {vehicle.FirstRegistration}</p>
            <p>{vehicle.Mileage} km</p>
            <p>{vehicle.Fuel}</p>
            <p>{vehicle.Power} kW</p>
            <p>{vehicle.GearBox}</p>
            <br />
          </Col>
          <div className={styles.actionBox}>
            <Button className={styles.button} type="primary">
              Contact
            </Button>
            <Button
              className={styles.button}
              icon="star"
              type={vehicle.IsFavorite ? 'primary' : undefined}
              onClick={() => onFavoriteClick(vehicle)}
            >
              {vehicle.IsFavorite ? 'Favorited' : 'Mark as favorite'}
            </Button>
          </div>
        </Row>
        <Divider />
        <ImageSelector
          imageURLs={[
            vehicle.ImageLink,
            'https://preview.ibb.co/cUKHEw/DSC_7343.jpg',
            'https://preview.ibb.co/jPd51b/ryan_waring_370068.jpg',
            'https://preview.ibb.co/dkhyMb/joey_banks_259792.jpg',
            'https://preview.ibb.co/b2sb7G/matthew_bennett_418903.jpg',
            'https://preview.ibb.co/b81a1b/jonathan_daniels_368207.jpg',
            'https://preview.ibb.co/cYMQ1b/mateusz_delegacz_401912.jpg',
          ]}
          onClickImage={this.handleClickImage}
        />
      </Modal>
    );
  }
}

VehicleItemModal.propsType = propsType;
VehicleItemModal.defaultProps = defaultProps;
export default VehicleItemModal;
