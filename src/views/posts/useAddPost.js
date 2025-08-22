import { useState } from 'react';
import { addPost as createPost } from 'api/post';
import { toast } from 'react-toastify';

function useAddPost(callback) {
  const [isLoading, setIsLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  function toggleOpen() {
    setIsOpen(!isOpen);
  }

  async function addPost(data) {
    try {
      setIsLoading(true);
      await createPost(data);

      setIsLoading(false);
      toggleOpen();
      if (callback) callback();
    } catch (e) {
      setIsLoading(false);

      toast.error('Something went wrong');
    }
  }

  return {
    isAddOpen: isOpen,
    isAdding: isLoading,
    onAdd: addPost,
    toggleAdd: toggleOpen,
  };
}

export default useAddPost;
