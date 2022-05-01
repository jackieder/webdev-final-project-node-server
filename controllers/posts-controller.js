import postDao from "../dao/posts-dao.js";


const postsController = (app) => {

    const findAllPosts = async (req, res) => {
        const posts = await postDao.findAllPosts()
        res.json(posts);
    }
    const updatePost = async (req, res) => {
        const tuitdIdToUpdate = req.params.tid;
        const updatedTuit = req.body;
        const status = await postDao.updatePost(tuitdIdToUpdate, updatedTuit);
        res.send(status);
    }
    const deletePost = async (req, res) => {
        const tuitdIdToDelete = req.params.tid;
        const status = await postDao.deletePost(tuitdIdToDelete);
        res.send(status);
    }

    app.get("/api/posts", findAllPosts);
    app.delete("/api/posts", deletePost);
    app.put("/api/posts", updatePost);
}

export default postsController

