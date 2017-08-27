let url = 'http://localhost:5001';
let headers = { 'Authorization': 'vongdarakia' };

export const getAllCategories = () => fetch(`${url}/categories`, { headers })
    .then((res) => res.json())
    .then(data => data.categories)
    .catch(error => { console.log('request failed', error); });

export const getPost = (id) => {
    let fetchPostUrl = `${url}/posts/${id}`;

    return fetch(fetchPostUrl, { headers })
    .then((res) => res.json())
    .catch(error => { console.log('request failed', error); })
};

export const getPosts = (category='all') => {
    let fetchPostsUrl = `${url}/posts`;

    if (category !== 'all') {
        fetchPostsUrl = `${url}/${category}/posts`;
    }
    return fetch(fetchPostsUrl, { headers })
    .then((res) => res.json())
    .catch(error => { console.log('request failed', error); })
};

export const editPost = (post) => {
    let editPostUrl = `${url}/posts/${post.id}`;

    return fetch(editPostUrl,
        { 
            headers: {
                ...headers,
                "Content-Type": "application/json"
            },
            method: 'post',
            body: JSON.stringify({
                title: post.title,
                body: post.body
            })
        }
    )
    .then((res) => res.json())
    .catch(error => { console.log('request failed', error); })
}

export const upvotePost = (postId, callback) => fetch(`${url}/posts/${postId}`,
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

export const downvotePost = (postId, callback) => fetch(`${url}/posts/${postId}`,
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

export const getComments = postId =>
    fetch(`${url}/posts/${postId}/comments`, { headers })
    .then(res => res.json())
    .catch(error => { console.log('request failed', error); });

// comment object has id, timestamp, body, owner, parentId
export const postComment = comment =>
    fetch(`${url}/comments`,
    {
        headers: {
            ...headers,
            "Content-Type": "application/json"
        },
        method: 'post',
        body: JSON.stringify(comment),
    })
    .then(res => res.json())
    .catch(error => { console.log('request failed', error); });