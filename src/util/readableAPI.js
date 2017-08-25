let url = 'http://localhost:5001/';
let headers = { 'Authorization': 'vongdarakia' };

export const getAllCategories = () => fetch(url + 'categories', {headers})
    .then((res) => res.json())
    .then(data => data.categories)
    .catch(error => { console.log('request failed', error); });

export const getPosts = () => fetch(url + 'posts', {headers})
    .then((res) => res.json())
    .catch(error => { console.log('request failed', error); });

export const upvotePost = (postId, callback) => fetch(`${url}posts/${postId}`,
    {
        headers: {
            ...headers,
            "Content-Type": "application/json"
        },
        method: 'post',
        body: JSON.stringify({
            option: "upVote"
        }),
    })
    .then(res => res.json().then(callback))
    .catch(error => { console.log('request failed', error); });