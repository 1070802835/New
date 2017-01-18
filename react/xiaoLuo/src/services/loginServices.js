/**
 * login 请求
 * Created by MFChen on 21/12/2016.
 */
import request from '../utils/request';

export function login(params) {
  return request('/auth/login', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(params),
  });
}

