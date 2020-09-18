const api = {};

api.fetchPoemsData = () => {
  return fetch('/api/fetchPoemsData')
    .then((res) => res.json())
    .then((details) => JSON.parse(details));
};

api.addPoemData = ({ title, poem }) => {
  return fetch('/api/addPoemData', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      title,
      poem,
    }),
  });
};

export default api;
