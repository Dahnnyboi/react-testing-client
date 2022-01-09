import React from 'react';
import PropTypes from 'prop-types';
import { Container } from 'reactstrap';
import PrivatePageNavbar from './PrivatePageNavbar';
import styles from './PrivatePage.module.scss';

function PrivatePage(props) {
  const { children, centered } = props;

  return (
    <div className={styles['private-page']}>
      <PrivatePageNavbar />
      <div className={styles['private-page__body']}>
        {centered ? <Container>{children}</Container> : children}
      </div>
    </div>
  );
}

PrivatePage.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  centered: PropTypes.bool,
};

PrivatePage.defaultProps = {
  centered: true,
};

export default PrivatePage;
