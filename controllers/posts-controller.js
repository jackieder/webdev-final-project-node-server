const postDao = require('../dao/posts-dao.js');
const {findUserById} = require("../dao/users-dao");

const findAllPosts = async (req, res) => {
    const posts = await postDao.findAllPosts();

    res.json(posts)
}

const findMoviePosts = async (req, res) => {
    const posts = await postDao.findMoviePosts(req.params.movie);
    const formatted = []
    for(i = 0; i < posts.length; i++) {
        const user =  await findUserById(posts[i].user)
        formatted[i] = {
            text: posts[i].text,
            email: user.email
        }
    }


    const responseData = posts.map(async (e) => {
        const u = await findUserById(e.user);
        console.log(u.email)
        return {
            text: e.text,
            user: u.email
        }
    })
    console.log(responseData)
    res.json(formatted)
}
const createPost = async (req, res) => {
    const newPost = req.body;
    console.log(newPost)
    const insertedPost = await postDao.createPost(newPost.body.text, newPost.body.movieId, newPost.userId)
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

const findPostsByUser = async (req, res) => {
    const posts = await postDao.findPostsByUser(req.params.user.Id)
    res.json(posts)
}
module.exports = (app) => {
    app.get("/api/posts", findAllPosts);
    app.get("/api/posts/:movie", findMoviePosts);
    app.post("/api/posts", createPost);
    app.delete("/api/posts", deletePost);
    app.put("/api/posts", updatePost);
    app.get("api/posts/&user=:userId", findPostsByUser)
}

