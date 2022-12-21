/* eslint-disable no-unused-vars */

import axios, { AxiosInstance } from 'axios';
import qs from 'qs';
import { Logger, LogType } from '../utils/logger';
import { getAccessToken } from '../utils/redux-utils';
export const AxiosService = (() => {
  let instance: AxiosInstance;
  const createInstance = () => {
    var object = axios.create({
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
        Accept: '*/*'
      },
      timeout: 3000
    });
    return object;
  };

  const setHeader = (name: string, value: string) => {
    getInstance().defaults.headers.common[name] = value;
  };

  const headerConfig = () => {
    return {
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json'
    };
  };
  const headerConfigWithAuthRequired = () => {
    return {
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + getAccessToken()
    };
  };
  //GET
  const get = async <P, R>(endpoint: string, params?: P, isAuthRequired = true): Promise<R> => {
    return getInstance().request({
      method: 'GET',
      url: endpoint,
      params: params,
      headers: isAuthRequired ? headerConfigWithAuthRequired() : headerConfig()
    });
  };
  //POST
  const post = async <D, R>(endpoint: string, payload: D, isAuthRequired = true): Promise<R> => {
    return getInstance().request({
      method: 'POST',
      url: endpoint,
      responseType: 'json',
      headers: isAuthRequired ? headerConfigWithAuthRequired() : headerConfig(),
      data: JSON.stringify(payload)
    });
  };
  //PUT
  const put = (endpoint: string, payload: any, isAuthRequired = true) => {
    return getInstance().request({
      method: 'PUT',
      url: endpoint,
      responseType: 'json',
      headers: isAuthRequired ? headerConfigWithAuthRequired() : headerConfig(),
      data: qs.stringify(payload)
    });
  };
  //DELETE
  const remove = (endpoint: string, payload: any, isAuthRequired = true) => {
    return getInstance().request({
      method: 'DELETE',
      url: endpoint,
      responseType: 'json',
      headers: isAuthRequired ? headerConfigWithAuthRequired() : headerConfig(),
      data: qs.stringify(payload)
    });
  };

  const getInstance = () => {
    if (!instance) {
      instance = createInstance();
    }
    Logger({ header: instance.defaults.headers }, LogType.INFO, 'getInstance');
    return instance;
  };
  return {
    setHeader: setHeader,
    get: get,
    post: post,
    put: put,
    delete: remove
  };
})();
