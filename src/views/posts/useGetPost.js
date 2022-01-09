import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { getPosts } from 'api/post';
import swal from 'sweetalert2';

function useGetPost() {
  const [isLoading, setIsLoading] = useState(false);
  const { search } = useLocation();
  const [data, setData] = useState([]);
  const [meta, setMeta] = useState({});

  async function getData() {
    try {
      setIsLoading(true);
      const { data: dataResponse, meta: metaResponse } =
        await getPosts(search);

      setData(dataResponse);
      setMeta(metaResponse);
      setIsLoading(false);
    } catch (e) {
      setIsLoading(false);

      swal.fire({
        title: 'Oops',
        text: 'Something went wrong',
      });
    }
  }

  useEffect(() => {
    getData();
  }, [search]);

  return { isLoading, data, meta, onReload: getData };
}

export default useGetPost;
