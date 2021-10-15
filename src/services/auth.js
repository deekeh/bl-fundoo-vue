import axios from "axios";

const register = (data) => {
  return new Promise((resolve, reject) => {
    axios
      .post("/u/register", data)
      .then((res) => resolve(res))
      .catch((err) => reject(err));
  });
};

const login = (data) => {
  return new Promise((resolve, reject) => {
    axios
      .post("/u/login", data)
      .then((res) => resolve(res))
      .catch((err) => reject(err));
  });
};

const reset = (email) => {
  return new Promise((resolve, reject) => {
    axios
      .post(`/u/reset?email=${email}`)
      .then(() => resolve())
      .catch((err) => reject(err));
  });
};

const resetVerify = (token, password) => {
  return new Promise((resolve, reject) => {
    axios
      .post(`/u/reset/verify/${token}`, { password })
      .then((res) => resolve(res))
      .catch((err) => reject(err));
  });
};

export { register, login, reset, resetVerify };
