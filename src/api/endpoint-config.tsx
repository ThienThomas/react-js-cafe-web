export const EndpointConfig = {
  prefix: {
    BASE_URL: 'https://web-clone-the-coffee-house-production.up.railway.app'
  },
  auth: {
    VALIDATE_TOKEN: '/auth/validateToken', // validate a jwt token
    REGISTER: '/auth/validateToken', // Register a new customer account
    LOGIN: '/auth/login'
  },
  product: {
    GET_ALL_PRODUCTS: '/api/ProductsManagement/common/GetAllProducts'
  }
};

export const getBaseUrl = () => {
  return EndpointConfig.prefix.BASE_URL;
};
