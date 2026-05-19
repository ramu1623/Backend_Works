const api = require("../utils/axiosInstance");


// ================= GET USERS =================
const getUsersService = async () => {

  const response = await api.get("/users");

  return response.data;
};


// ================= CREATE USER =================
const createUserService = async (userData) => {

  const response = await api.post("/users", userData);

  return response.data;
};


// ================= UPDATE USER =================
const updateUserService = async (id, userData) => {

  const response = await api.put(`/users/${id}`, userData);

  return response.data;
};


// ================= PATCH USER =================
const patchUserService = async (id, userData) => {

  const response = await api.patch(`/users/${id}`, userData);

  return response.data;
};


// ================= DELETE USER =================
const deleteUserService = async (id) => {

  const response = await api.delete(`/users/${id}`);

  return response.data;
};


module.exports = {
  getUsersService,
  createUserService,
  updateUserService,
  patchUserService,
  deleteUserService,
};