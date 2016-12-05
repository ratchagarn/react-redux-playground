/**
 * -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
 * Config
 * -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
 */

let baseEndpointUrl = '';

if (process.env.NODE_ENV === 'production') {
  baseEndpointUrl = 'https://jsonplaceholder.typicode.com';
}
else if (process.env.NODE_ENV === 'development') {
  baseEndpointUrl = 'https://jsonplaceholder.typicode.com';
}

export {
  baseEndpointUrl
};
