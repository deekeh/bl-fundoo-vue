import axios from "axios";

const getNotes = () => {
  const token = localStorage.getItem("token");
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

export { getNotes };
