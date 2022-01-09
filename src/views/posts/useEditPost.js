import { useState, useEffect } from 'react';
import { getPost, editPost } from 'api/post';
import swal from 'sweetalert2';

function useEditPost(callback) {
  const [itemToEdit, setItemToEdit] = useState({
    isOpen: false,
    id: null,
  });
  const [dataToEdit, setDataToEdit] = useState({});
  const [isEditing, setIsEditing] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const { isOpen, id } = itemToEdit;

  function toggleOpen(idToEdit) {
    setItemToEdit({ isOpen: !!idToEdit, id: idToEdit });
  }

  async function getData() {
    try {
      setIsLoading(true);
      const data = await getPost(id);
      setDataToEdit(data);

      setIsLoading(false);
    } catch (e) {
      setIsLoading(false);

      swal.fire({
        title: 'Oops',
        text: 'Something went wrong',
      });
    }
  }

  async function editData(data) {
    try {
      setIsEditing(true);
      await editPost(id, data);

      setIsEditing(false);
      toggleOpen(null);
      if (callback) callback();
    } catch (e) {
      setIsEditing(false);

      swal.fire({
        title: 'Oops',
        text: 'Something went wrong',
      });
    }
  }

  useEffect(() => {
    if (id) getData();
    else setDataToEdit({});
  }, [id]);

  return {
    isFetching: isLoading,
    isEditing,
    dataToEdit,
    isEditOpen: isOpen,
    toggleEdit: toggleOpen,
    onEdit: editData,
  };
}

export default useEditPost;
