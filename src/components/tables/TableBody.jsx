import React from 'react';
import { Spinner } from 'reactstrap';
import PropTypes from 'prop-types';
import cx from 'classnames';
import styles from './TableBody.module.scss';

function TableBody(props) {
  const { children, isLoading } = props;

  return isLoading ? (
    <tbody className={cx('w-100', styles['table-body__loading'])}>
      <Spinner className={styles['table-body__loading-container']}>
        {' '}
      </Spinner>
    </tbody>
  ) : (
    <tbody>{children}</tbody>
  );
}

TableBody.defaultProps = {
  isLoading: false,
};

TableBody.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  isLoading: PropTypes.bool,
};

export default TableBody;
