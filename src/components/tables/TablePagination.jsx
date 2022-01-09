import React from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import ReactPaginate from 'react-paginate';
import qs from 'qs';

function TablePagination(props) {
  const { meta } = props;
  const { totalPages } = meta;
  const history = useHistory();
  const location = useLocation();

  function handleChange(event) {
    const { selected } = event;
    let searchQuery;
    if (selected) {
      searchQuery = qs.stringify({ offset: selected });
    }

    history.push({
      pathname: location.pathname,
      search: searchQuery || '',
    });
  }

  return (
    <ReactPaginate
      breakLabel="..."
      // eslint-disable-next-line react/jsx-no-bind
      onPageChange={handleChange}
      pageRangeDisplayed={5}
      pageCount={totalPages}
      renderOnZeroPageCount={null}
      pageClassName="page-item"
      pageLinkClassName="page-link"
      previousClassName="page-item"
      previousLinkClassName="page-link"
      nextClassName="page-item"
      nextLinkClassName="page-link"
      breakClassName="page-item"
      breakLinkClassName="page-link"
      containerClassName="pagination"
      activeClassName="active"
    />
  );
}

TablePagination.propTypes = {
  meta: PropTypes.shape({
    totalPages: PropTypes.number.isRequired,
  }).isRequired,
};

export default TablePagination;
