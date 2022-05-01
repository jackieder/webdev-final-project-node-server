const postDao = require('../dao/posts-dao.js');

const findAllPosts = async (req, res) => {
    const posts = await postDao.findAllPosts();
    res.json(posts)
}
const createPost = async (req, res) => {
    const newPost = req.body;
    const insertedPost = await postDao.createPost(newPost)
        .then((insertedPost) => res.json(insertedPost))
}
const updatePost = async (req, res) => {
    const postIdUpdate = req.params.pid;
    const updatedPost = req.body;
    const status = await postDao.updatePost(postIdUpdate, updatedPost);
    res.send(status);
}
const deletePost = async (req, res) => {
    const postToDelete = req.params.pid;
    const status = await postDao.deletePost(postToDelete);
    res.send(status);
}


module.exports = (app) => {
    app.get("/api/posts", findAllPosts);
    app.post("/api/posts", createPost);
    app.delete("/api/posts", deletePost);
    app.put("/api/posts", updatePost);
}

