import React from 'react';
import PropTypes from 'prop-types';
import { Table as ReactTable } from 'reactstrap';

function Table(props) {
  const { heads, children } = props;

  return (
    <ReactTable>
      <thead>
        <tr>
          {(heads || []).map((head) => (
            <th key={head}>{head}</th>
          ))}
        </tr>
      </thead>
      {children}
    </ReactTable>
  );
}

Table.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  heads: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Table;
