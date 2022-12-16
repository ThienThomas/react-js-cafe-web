/* eslint-disable no-undef */

import { AxiosService } from './axios-services';
import { EndpointConfig, getBaseUrl } from './endpoint-config';

export enum EGender {
  MALE = 'MALE',
  FEMALE = 'FEMALE'
}
export interface IUserRegisterParams {
  username: string;
  password: string;
  email: string;
  birth: string | Date | number;
  avatar: string;
  phone: string;
  gender: EGender;
}

export interface IUserLoginParams {
  username: string;
  password: string;
}

export interface IIUserRegisterResult extends IUserRegisterParams {
  id: string;
}

export const registerUser = (data: IUserRegisterParams) => {
  const url = `${getBaseUrl()}${EndpointConfig.auth.REGISTER}`;
  return AxiosService.post<IUserRegisterParams, IIUserRegisterResult>(url, data, false);
};

export const loginUser = (data: any) => {
  const url = `${getBaseUrl()}${EndpointConfig.auth.LOGIN}`;
  return AxiosService.post(url, data, false);
};
