/**
 * -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
 * Config
 * -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
 */

const _baseEndpointUrl = {
  production: 'https://jsonplaceholder.typicode.com',
  development: 'https://jsonplaceholder.typicode.com',
};
const baseEndpointUrl = _baseEndpointUrl[process.env.NODE_ENV];

const cookieAuthStatusName = 'rardpg_auth_status';


export {
  baseEndpointUrl,
  cookieAuthStatusName
};
