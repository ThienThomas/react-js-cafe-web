import { AxiosServiceGet } from './axios-services';
import { EndpointConfig } from './endpoint-config';

export const getAllProductAPI = async () => {
  return await AxiosServiceGet(
    EndpointConfig.product.GET_ALL_PRODUCTS_WITH_GROUP,
    undefined,
    false
  );
};
