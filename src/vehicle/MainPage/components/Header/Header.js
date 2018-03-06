import React from 'react';
import styles from './Header.scss';
const Header = () => {
  return (
    <div className={styles.header}>
      <h1
        style={{
          background: 'url(assets/index_oglasi_logo.svg) no-repeat top center',
        }}
      >
        {}
      </h1>
    </div>
  );
};

export default Header;
