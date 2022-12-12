import axios from 'axios';

const fetcher = (url: string) =>
  axios
    .get(url, {
      withCredentials: true,
    })
    .then((response) => response.data);

// fetcher를 다양하게 사용하기위해서는 용도별로 다양하게 만들어서 그때 그때 다르게 사용할 수 있다.

export default fetcher;
