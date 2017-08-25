let url = 'http://localhost:5001/';
let headers = { 'Authorization': 'vongdarakia' };

export const getAllCategories = () => fetch(`${url}categories`, { headers })
    .then((res) => res.json())
    .then(data => data.categories)
    .catch(error => { console.log('request failed', error); });

export const getPost = (category='all', id) => {
    let fetchPostsUrl = `${url}posts/${id}`;

    if (category !== 'all') {
        fetchPostsUrl = `${url}${category}/posts/${id}`;
    }
    return fetch(fetchPostsUrl, { headers })
    .then((res) => res.json())
    .catch(error => { console.log('request failed', error); })
};

export const getPosts = (category='all') => {
    let fetchPostsUrl = `${url}posts`;

    if (category !== 'all') {
        fetchPostsUrl = `${url}${category}/posts`;
    }
    return fetch(fetchPostsUrl, { headers })
    .then((res) => res.json())
    .catch(error => { console.log('request failed', error); })
};

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

export const downvotePost = (postId, callback) => fetch(`${url}posts/${postId}`,
    {
        headers: {
            ...headers,
            "Content-Type": "application/json"
        },
        method: 'post',
        body: JSON.stringify({
            option: "downVote"
        }),
    })
    .then(res => res.json().then(callback))
    .catch(error => { console.log('request failed', error); });