const api = {};

api.getLoginLink = () => {
  return fetch('/api/getLoginLink').then((res) => res.json());
};

api.getUser = () => {
  return fetch('/api/getUserId').then((res) => res.json());
};

api.getUserPoems = (userId) => {
  return fetch(`/api/user/getUserPoems/${userId}`).then((res) => res.json());
};

api.getUserDetails = (userId) => {
  return fetch(`/api/user/getUserDetails/${userId}`).then((res) => res.json());
};

api.fetchPoemsData = () => {
  return fetch('/api/user/fetchPoemsData').then((res) => res.json());
};

api.addPoemData = (details) => {
  return fetch('/api/user/addPoemData', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(details),
  });
};

api.updateLike = (postId) => {
  return fetch(`/api/user/updateLike/${postId}`);
};

api.getLikes = (postId) => {
  return fetch(`/api/user/getLikes/${postId}`).then((res) => res.json());
};

api.addComment = (comment, postId) => {
  return fetch(`/api/user/addComment/${postId}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ comment }),
  });
};

api.getComments = (postId) => {
  return fetch(`/api/user/getComments/${postId}`).then((res) => res.json());
};

api.logout = () => {
  return fetch(`/api/user/logout`);
};

export default api;
