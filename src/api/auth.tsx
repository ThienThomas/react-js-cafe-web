/* eslint-disable no-undef */

import { AxiosServicePost } from './axios-services';
import { EndpointConfig } from './endpoint-config';

export enum EGender {
  MALE = 'MALE',
  FEMALE = 'FEMALE'
}
export interface IUserRegisterParams {
  username: string;
  password: string;
  name: string;
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
  return AxiosServicePost(EndpointConfig.auth.REGISTER, data, false);
};

export const loginUser = (data: any) => {
  return AxiosServicePost(EndpointConfig.auth.LOGIN, data, false);
};
