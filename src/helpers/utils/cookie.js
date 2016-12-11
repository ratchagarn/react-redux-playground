/**
 * --------------------------------------------------------
 * Helpers - util - cookies
 * --------------------------------------------------------
 */

import Cookie from 'js-cookie';
import { cookieAuthStatusName } from 'cores/config';


export default {
  createAuthCookieStatus,
  removeAuthCookieStatus,
  getAuthCookieStatus
};


const cookiePath = '/';


/**
 * Create cookies auth status
 *
 * @param {mumber} expires - expires days.
 *
 * @return {string} - cookie auth status content.
 */
export function createAuthCookieStatus(expires = 7) {
  const settings = {
    expires,
    path: cookiePath
  };
  const content = new Date().toString().replace(/\s/g, '_');

  Cookie.set(cookieAuthStatusName, content, settings);
  return Cookie.get(cookieAuthStatusName);
}

/**
 * Remove cookies auth status
 *
 * @return {boolean} - remove result.
 */
export function removeAuthCookieStatus() {
  return Cookie.remove(cookieAuthStatusName, {
    path: cookiePath
  });
}

/**
 * Get cookies auth status
 *
 * @return {string} - cookie auth status content.
 */
export function getAuthCookieStatus() {
  return Cookie.get(cookieAuthStatusName);
}
