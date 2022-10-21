import axios from "axios";

 const basepath = "http://localhost:3002"

 const getUsers = async () => (await axios.get(`${basepath}/users`)).data

 const addUsers = async (data) => (await axios.post(`${basepath}/users`,data))

 export {getUsers, addUsers}