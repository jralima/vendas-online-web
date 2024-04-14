import axios from 'axios';
import { useState } from 'react';

export const userRequests = () => {
  const [loading, setLoading] = useState(false);

  const getRequest = async (url: string) => {
    setLoading(true);
    return await axios({
      method: 'get',
      url: url,
    })
      .then((response) => {
        return response.data;
      })
      .catch(() => {
        alert('Erro');
      });
  };

  const postRequest = async (url: string, body: object) => {
    setLoading(true);
    const response = await axios({
      method: 'post',
      url: url,
      data: body,
    })
      .then((response) => {
        alert('success');

        return response.data;
      })
      .catch(() => {
        alert('Erro');
      });
    setLoading(false);

    return response;
  };

  return { loading, getRequest, postRequest };
};
