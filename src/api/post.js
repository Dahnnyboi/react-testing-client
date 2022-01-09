import http, { parseSearchToObject } from 'utils/http';

export function getPosts(query) {
  return http('GET', '/post', parseSearchToObject(query));
}

export function addPost(data) {
  return http('POST', '/post', data);
}

export function getPost(postId) {
  return http('GET', `/post/${postId}`);
}

export function editPost(postId, data) {
  return http('PUT', `/post/${postId}`, data);
}

export function deletePost(postId) {
  return http('DELETE', `/post/${postId}`);
}
