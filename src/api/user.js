import http from 'utils/http';

export function userSignupPost(data) {
  return http('POST', '/user/signup', data);
}
