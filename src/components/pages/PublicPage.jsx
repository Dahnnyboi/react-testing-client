import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import styles from './PublicPage.module.scss';

function PublicPage(props) {
  const { children, className } = props;
  return (
    <div className={cx(styles['public-page'], className)}>
      {children}
    </div>
  );
}

PublicPage.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

PublicPage.defaultProps = {
  className: '',
};

export default PublicPage;
