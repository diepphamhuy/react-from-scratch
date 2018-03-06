import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Tabs, Divider } from 'antd';
import { Loader, VehicleItemDetail } from 'components';
import styles from './VehicleListContainer.scss';
const propsTypes = {
  mostView: PropTypes.array,
  latest: PropTypes.array,
  onFavoriteClick: PropTypes.func.isRequired,
};
class VehicleListContainer extends Component {
  renderVehicleList(data) {
    return data.map((item, index) => {
      return (
        <div key={index}>
          <VehicleItemDetail
            item={item}
            onFavoriteClick={this.props.onFavoriteClick}
          />
          <Divider />
        </div>
      );
    });
  }
  render() {
    const { mostView, latest } = this.props;
    return (
      <div className={styles.listContainer}>
        <Tabs type="card">
          <Tabs.TabPane tab="Most viewed" key="1">
            {mostView && mostView.length > 0 ? (
              this.renderVehicleList(mostView)
            ) : (
              <Loader />
            )}
          </Tabs.TabPane>
          <Tabs.TabPane tab="Latest" key="2">
            {latest && latest.length > 0 ? (
              this.renderVehicleList(latest)
            ) : (
              <Loader />
            )}
          </Tabs.TabPane>
        </Tabs>
      </div>
    );
  }
}

VehicleListContainer.propsTypes = propsTypes;

export default VehicleListContainer;
