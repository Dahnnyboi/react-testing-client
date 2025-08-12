import { useState, useEffect, useCallback } from 'react';
import { useLocation } from 'react-router-dom';
import { getPosts } from 'api/post';
import swal from 'sweetalert2';

function useGetPost() {
  const [isLoading, setIsLoading] = useState(false);
  const { search } = useLocation();
  const [data, setData] = useState([]);
  const [meta, setMeta] = useState({});

  const getData = useCallback(async () => {
    try {
      setIsLoading(true);
      const { data: dataResponse, meta: metaResponse } = await getPosts(search);

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
  }, [search]);

  useEffect(() => {
    getData();
  }, [search, getData]);

  return { isLoading, data, meta, onReload: getData };
}

export default useGetPost;
