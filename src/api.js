const api = {};

api.fetchPoemsData = () => {
  return fetch('/api/fetchPoemsData')
    .then((res) => res.json())
    .then((details) => JSON.parse(details));
};

api.addPoemData = ({ title, poem, category }) => {
  return fetch('/api/addPoemData', {
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
