/**
 * Created by MFChen on 26/12/2016.
 */
import request from '../utils/request';

export async function query(params) {
  return request('/api/users', {
    method: 'GET',
    body: params,
  })
}

export async function create(params) {
  return request('/api/users', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(params),
  })
}

export async function remove(params) {
  return request('/api/users', {
    method: 'delete',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(params),
  })
}

export async function update(params) {
  return request('/api/users', {
    method: 'put',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(params),
  })
}
