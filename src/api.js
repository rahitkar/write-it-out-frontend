const api = {};

api.fetchPoemsData = () => {
  return fetch('/api/fetchPoemsData')
    .then((res) => res.json())
    .then((details) => JSON.parse(details));
};

// {
//   timeStamp: 'just now',
//   title: 'Every night',
//   poem:
//     'I gaze for a home,\nnLike a nomad,\nRunning around In dreary desert sand.\nTired, But filled with hope.\nLeft alone, But with thousands of stars\nAnd a silver moon.\nSmiling over my head,\nBefore I fall asleep.',
// }

api.addPoemData = (poemData) => {
  return fetch('/api/addPoemData', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      timeStamp: 'just now',
      title: 'Every night',
      poem: poemData,
    }),
  }).then((res) => res.json());
};

export default api;
