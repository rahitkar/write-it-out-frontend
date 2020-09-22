const api = {};

api.getUser = () => {
  return fetch('/api/getUser').then((res) => res.json());
};

api.fetchPoemsData = () => {
  return fetch('/api/user/fetchPoemsData')
    .then((res) => res.json())
    .then((details) => JSON.parse(details));
};

api.addPoemData = ({ title, poem, category }) => {
  return fetch('/api/user/addPoemData', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      title,
      poem,
      category,
    }),
  });
};

export default api;
