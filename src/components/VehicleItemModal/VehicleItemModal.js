import React, { Component } from 'react';
import { Modal, Col, Row, Divider, List } from 'antd';
import PropsType from 'prop-types';
import styles from './VehicleItemModal.scss';
import { ImageSelector } from '../ImageSelector/';
const propsType = {
  vehicle: PropsType.shape({}).isRequired,
  visible: PropsType.bool,
  onCancel: PropsType.func.isRequired,
};

class VehicleItemModal extends Component {
  handleClickImage = image => {
    this.setState({
      mainImage: image,
    });
  };
  constructor(props) {
    super(props);
    this.state = { mainImage: null };
  }

  render() {
    const { vehicle, visible, onCancel } = this.props;
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
          <Col span={8} />
        </Row>
        <Divider />
        <ImageSelector
          imageURLs={[
            vehicle.ImageLink,
            'https://preview.ibb.co/cUKHEw/DSC_7343.jpg',
            vehicle.ImageLink,
            vehicle.ImageLink,
            vehicle.ImageLink,
            vehicle.ImageLink,
            vehicle.ImageLink,
          ]}
          onClickImage={this.handleClickImage}
        />
      </Modal>
    );
  }
}

VehicleItemModal.propsType = propsType;

export default VehicleItemModal;
