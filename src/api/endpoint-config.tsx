export const EndpointConfig = {
  prefix: {
    BASE_URL: 'http://localhost:8080'
  },
  auth: {
    VALIDATE_TOKEN: '/auth/validateToken', // validate a jwt token
    REGISTER: '/auth/register', // Register a new customer account
    LOGIN: '/auth/login'
  },
  product: {
    GET_ALL_PRODUCTS: '/api/ProductsManagement/common/GetAllProducts',
    GET_ALL_PRODUCTS_WITH_GROUP: '/api/ProductsManagement/common/GetAllProductsWithProductGroup'
  }
};

export const getBaseUrl = () => {
  return EndpointConfig.prefix.BASE_URL;
};
