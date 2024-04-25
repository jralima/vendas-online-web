import axios from 'axios';
import { useState } from 'react';

import { connectionAPIPost } from '../functions/connection/connectionAPI';
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
      .catch((error: Error) => {
        setNotification(error.message, 'error');
      });
  };

  const postRequest = async <T>(url: string, body: object): Promise<T | undefined> => {
    setLoading(true);
    const response = await connectionAPIPost<T>(url, body)
      .then((response) => {
        setNotification('Login OK', 'success');

        return response;
      })
      .catch((error: Error) => {
        setNotification(error.message, 'error');
        return undefined;
      });
    setLoading(false);

    return response;
  };

  return { loading, getRequest, postRequest };
};
