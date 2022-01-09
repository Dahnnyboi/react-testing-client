import React from 'react';
import { PrivatePage } from 'components/pages';
import { TablePagination } from 'components/tables';
import useGetPost from './useGetPost';
import useAddPost from './useAddPost';
import useEditPost from './useEditPost';
import useDeletePost from './useDeletePost';
import PostsActions from './PostsActions';
import PostsTable from './PostsTable';
import PostAddModal from './PostAddModal';
import PostDeleteModal from './PostDeleteModal';

function Index() {
  const { data, meta, isLoading, onReload } = useGetPost();
  const { isAddOpen, isAdding, onAdd, toggleAdd } =
    useAddPost(onReload);
  const {
    isFetching,
    isEditing,
    dataToEdit,
    isEditOpen,
    toggleEdit,
    onEdit,
  } = useEditPost(onReload);
  const {
    isDeleteOpen,
    idToDelete,
    isDeleting,
    toggleDelete,
    onDelete,
  } = useDeletePost(onReload);

  return (
    <PrivatePage>
      <PostsActions toggle={toggleAdd} />

      <PostsTable
        data={data}
        isLoading={isLoading}
        toggleEdit={toggleEdit}
        toggleDelete={toggleDelete}
      />
      <TablePagination meta={meta} />

      <PostAddModal
        isOpen={isAddOpen}
        isSubmitting={isAdding}
        toggle={toggleAdd}
        onSubmit={onAdd}
      />

      <PostAddModal
        data={dataToEdit}
        isLoading={isFetching}
        isOpen={isEditOpen}
        isSubmitting={isEditing}
        toggle={toggleEdit}
        onSubmit={onEdit}
      />

      <PostDeleteModal
        idToDelete={idToDelete}
        isOpen={isDeleteOpen}
        isDeleting={isDeleting}
        toggleDelete={toggleDelete}
        onSubmit={onDelete}
      />
    </PrivatePage>
  );
}

export default Index;
