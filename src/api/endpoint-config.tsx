export const EndpointConfig = {
  prefix: {
    BASE_URL: 'https://web-clone-the-coffee-house-production.up.railway.app'
  },
  auth: {
    VALIDATE_TOKEN: '/auth/validateToken', // validate a jwt token
    REGISTER: '/auth/register', // Register a new customer account
    LOGIN: '/auth/login',
    FORGOT_PASSWORD: '/auth/forgotPassword',
    UPDATE: '/UsersManagement/UpdateUser',
    FILE_UPLOAD: '/UsersManagement/saveUserAvatar',
    CHANGE_PASSWORD: '/auth/changePassword',
    RESET: '/auth/resetPassword'
  },
  product: {
    GET_ALL_PRODUCTS: '/api/ProductsManagement/common/GetAllProducts',
    GET_ALL_PRODUCTS_WITH_GROUP: '/api/ProductsManagement/common/GetAllProductsWithProductGroup',
    GET_ALL_PRODUCT_GROUP: '/api/ProductGroupManagement/common/GetAllProductGroups'
  }, 
  file: {

  }
};

export const getBaseUrl = () => {
  return EndpointConfig.prefix.BASE_URL;
};
