const api = {};

api.getUser = () => {
  return fetch('/api/getUserId').then((res) => res.json());
};

api.getUserDetails = (userId) => {
  return fetch(`/api/user/getUserDetails/${userId}`).then((res) => res.json());
};

api.fetchPoemsData = () => {
  return fetch('/api/user/fetchPoemsData')
    .then((res) => res.json())
    .then((details) => JSON.parse(details));
};

api.addPoemData = (details) => {
  return fetch('/api/user/addPoemData', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(details),
  });
};

export default api;
