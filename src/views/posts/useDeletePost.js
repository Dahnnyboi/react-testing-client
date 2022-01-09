import { useState } from 'react';
import { deletePost } from 'api/post';
import swal from 'sweetalert2';

function useDeletePost(callback) {
  const [isLoading, setIsLoading] = useState(false);
  const [itemToDelete, setItemToDelete] = useState({
    isOpen: false,
    id: '',
  });

  function toggleOpen(id = '') {
    setItemToDelete({ isOpen: !!id, id });
  }

  async function deleteData() {
    const { id } = itemToDelete;
    try {
      setIsLoading(true);
      await deletePost(id);
      setIsLoading(false);

      toggleOpen();
      if (callback) callback();
    } catch (e) {
      setIsLoading(false);
      swal.fire({
        title: 'Oops',
        text: 'Something went wrong',
      });
    }
  }

  const { id, isOpen } = itemToDelete;

  return {
    isDeleteOpen: isOpen,
    idToDelete: id,
    isDeleting: isLoading,
    toggleDelete: toggleOpen,
    onDelete: deleteData,
  };
}

export default useDeletePost;
