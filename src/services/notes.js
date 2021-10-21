import axios from "axios";
const token = localStorage.getItem("token");

const getNotes = () => {
  return new Promise((resolve, reject) => {
    axios
      .get(
        "/notes",
        // { _id: id },
        {
          headers: {
            authorization: `Bearer ${token}`,
          },
        }
      )
      .then((data) => resolve(data))
      .catch((err) => reject(err));
  });
};

const addNote = (body) => {
  console.log(token);
  return new Promise((resolve, reject) => {
    axios
      .post("/notes", body, {
        // body: body,
        headers: {
          authorization: `Bearer ${token}`,
        },
      })
      .then((data) => resolve(data))
      .catch((err) => reject(err));
  });
};

export { getNotes, addNote };
