const postDao = require('../dao/posts-dao.js');
const {findUserById, findUserByIds} = require("../dao/users-dao");

const findAllPosts = async (req, res) => {
    query = req.query
    console.log(query.user)
    let posts;
    if(query.user !== undefined) {
        posts = await postDao.findPostsByUser(query.user)
    } else {
        posts = await postDao.findAllPosts();
    }
    res.json(posts)
}

const findMoviePosts = async (req, res) => {

    const response = await postDao.findMoviePosts(req.params.movie)
        .then(posts => {
            return findUserByIds(posts.map(p => p.user)).then(users => {
                usersDict = {}
                users.forEach(user => usersDict[user._id] = user)
                return posts.map(p => {
                    u = usersDict[p.user];
                    return {
                        id: p._id,
                        text: p.text,
                        email: u.email,
                        user_id: u._id
                    }
                })
            })
        })

    res.json(response)
}
const createPost = async (req, res) => {
    const newPost = req.body;
    const insertedPost = await postDao.createPost(newPost.body.text, newPost.body.movieId, newPost.userId)
        .then((insertedPost) => res.json(insertedPost))
}

const upvotePost = async (req, res) => {
    const data = req.body;
    const onePost = await postDao.findOnePost(data.reviewId)
    let currCount = onePost.upvote
    currCount++
    const status = await postDao.updatePost(data.reviewId, {
        upvote: currCount
    });
    const another = await postDao.findOnePost(data.reviewId)

}
const updatePost = async (req, res) => {
    const postIdUpdate = req.params.pid;
    const updatedPost = req.body;
    const status = await postDao.updatePost(postIdUpdate, updatedPost);
    res.send(status);
}
const deletePost = async (req, res) => {
    const postToDelete = req.params.pid
    const status = await postDao.deletePost(postToDelete);
    res.send(status);
}

const findPostsByUser = async (req, res) => {
    const posts = await postDao.findPostsByUser(req.params.userId)
    res.json(posts)
}
module.exports = (app) => {
    app.get("/api/posts", findAllPosts);
    app.get("/api/posts/:movie", findMoviePosts);
    app.post("/api/posts", createPost);
    app.delete("/api/posts/:pid", deletePost);
    app.put("/api/posts", updatePost);
    app.put("/api/posts/upvote", upvotePost);
    app.get("api/posts?user=:userId", findPostsByUser);
}

