import axios from 'axios';
import { useState } from 'react';

import { useGlobalContext } from './useGlobalContext';

export const userRequests = () => {
  const [loading, setLoading] = useState(false);
  const { setNotification } = useGlobalContext();

  const getRequest = async (url: string) => {
    setLoading(true);
    return await axios({
      method: 'get',
      url: url,
    })
      .then((response) => {
        setNotification('Login OK', 'success');

        return response.data;
      })
      .catch(() => {
        setNotification('Erro no login', 'error');
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
        setNotification('Login OK', 'success');

        return response.data;
      })
      .catch(() => {
        setNotification('Erro no login', 'error');
      });
    setLoading(false);

    return response;
  };

  return { loading, getRequest, postRequest };
};
