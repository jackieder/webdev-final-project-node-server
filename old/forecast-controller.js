// import feedDao from "../dao/posts-dao.js";
//
//
// const feedController = (app) => {
//
//     const createPost = async (req, res) => {
//         const newTuit = req.body;
//         const insertedTuit = await feedDao.createPost(newTuit);
//         res.json(insertedTuit);
//     }
//
//     const findAllPosts = async (req, res) => {
//         const tuits = await feedDao.findAllPosts()
//         res.json(tuits);
//     }
//     const updatePost = async (req, res) => {
//         const tuitdIdToUpdate = req.params.tid;
//         const updatedTuit = req.body;
//         const status = await feedDao.updatePost(tuitdIdToUpdate, updatedTuit);
//         res.send(status);
//     }
//     const deletePost = async (req, res) => {
//         const tuitdIdToDelete = req.params.tid;
//         const status = await feedDao.deletePost(tuitdIdToDelete);
//         res.send(status);
//     }
//
//     app.get("/api/posts", findAllPosts);
//     app.post("/api/posts", createPost);
//     app.delete("/api/posts", deletePost);
//     app.put("/api/posts", updatePost);
// }
//
// export default feedController