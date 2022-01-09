import React from 'react';
import PropTypes from 'prop-types';
import { Table, TableBody } from 'components/tables';
import { Button } from 'reactstrap';
import { formatDate } from 'utils/dates';

function PostsTable(props) {
  const { data, isLoading, toggleEdit, toggleDelete } = props;
  const heads = ['Title', 'Created at', 'Actions'];

  return (
    <Table heads={heads}>
      <TableBody data-testid="posts-table-body" isLoading={isLoading}>
        {data.map((item, index) => {
          const { postId, title, createdAt } = item;
          return (
            <tr key={index}>
              <th>{title}</th>
              <th>{formatDate(createdAt)}</th>
              <th>
                <Button
                  color="secondary"
                  className="mx-2"
                  onClick={() => toggleEdit(postId)}
                >
                  Edit
                </Button>
                <Button
                  color="danger"
                  onClick={() => toggleDelete(postId)}
                >
                  Delete
                </Button>
              </th>
            </tr>
          );
        })}
      </TableBody>
    </Table>
  );
}

PostsTable.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  isLoading: PropTypes.bool.isRequired,
  toggleEdit: PropTypes.func.isRequired,
  toggleDelete: PropTypes.func.isRequired,
};

export default PostsTable;
