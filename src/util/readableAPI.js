let url = 'http://localhost:5001/';
let headers = { headers: { 'Authorization': 'vongdarakia' } };

export const getAllCategories = () => fetch(url + 'categories', headers)
    .then((res) => res.json())
    .then(data => data.categories)
    .catch(error => { console.log('request failed', error); });

export const getAllPosts = () => fetch(url + 'posts', headers)
    .then((res) => res.json());