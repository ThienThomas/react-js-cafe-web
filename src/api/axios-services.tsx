/* eslint-disable no-unused-vars */

import axios from 'axios';
import { getAccessToken } from '../utils/redux-utils';
import { getBaseUrl } from './endpoint-config';



const headerConfig = () => {
  return {
    Accept: '*/*',
    'Content-Type': 'application/json'
  };
};
const headerConfigWithAuthRequired = () => {
  return {
    Accept: '*/*',
    'Content-Type': 'application/json',
    Authorization: 'Bearer ' + getAccessToken()
  };
};

const configHeader = (authRequired: boolean) => {
  return authRequired ? headerConfigWithAuthRequired() : headerConfig();
};

export const AxiosServiceGet = async (url: string, params?: any, authRequired = false) => {
  try {
    return await axios.get(`${getBaseUrl()}${url}`, {
      params: params,
      headers: configHeader(authRequired)
    });
  } catch (e) {
    console.log(e);
    return {};
  }
};

export const AxiosServicePost = async (url: string, data?: any, authRequired = false) => {
  try {
    return await axios.post(`${getBaseUrl()}${url}`, {
      ...data
    });
  } catch (e) {
    console.log(e);
    return {};
  }
};
