const { getDB } = require("../config/db");

// INSERT ONE
exports.createUser = async (req, res) => {
    const db = getDB();
    const result = await db.collection("users").insertOne(req.body);
    res.json(result);
};

// FIND
exports.getUsers = async (req, res) => {
    const db = getDB();
    const users = await db.collection("users").find({}).toArray();
    res.json(users);
};

// UPDATE
exports.updateUser = async (req, res) => {
    const db = getDB();
    const result = await db
        .collection("users")
        .updateOne({ name: req.params.name }, { $set: req.body });
    res.json(result);
};

// DELETE
exports.deleteUser = async (req, res) => {
    const db = getDB();
    const result = await db
        .collection("users")
        .deleteOne({ name: req.params.name });
    res.json(result);
};
