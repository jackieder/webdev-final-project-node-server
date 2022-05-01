import userDao, {deleteUser, findAllUsers, updateUser} from "../dao/user-dao.js";


const userController = (app) => {

    const createUser = async (req, res) => {
        const newTuit = req.body;
        const insertedTuit = await userDao.createUser(newTuit);
        res.json(insertedTuit);
    }

    const findAllUsers = async (req, res) => {
        const tuits = await userDao.findAllUsers()
        res.json(tuits);
    }
    const updateUser = async (req, res) => {
        const tuitdIdToUpdate = req.params.tid;
        const updatedTuit = req.body;
        const status = await userDao.updateUser(tuitdIdToUpdate, updatedTuit);
        res.send(status);
    }
    const deleteUser = async (req, res) => {
        const tuitdIdToDelete = req.params.tid;
        const status = await userDao.deleteUser(tuitdIdToDelete);
        res.send(status);
    }

    app.get("/api/users", findAllUsers);
    app.post("/api/users", createUser);
    app.delete("/api/users", deleteUser);
    app.put("/api/users", updateUser);
}

export default userController
