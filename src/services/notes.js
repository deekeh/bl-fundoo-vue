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

const getArchivedNotes = () => {
  return new Promise((resolve, reject) => {
    axios
      .get("/notes/archived", {
        headers: {
          authorization: `Bearer ${token}`,
        },
      })
      .then((data) => resolve(data))
      .catch((err) => reject(err));
  });
};

const getDeletedNotes = () => {
  return new Promise((resolve, reject) => {
    axios
      .get("/notes/deleted", {
        headers: {
          authorization: `Bearer ${token}`,
        },
      })
      .then((data) => resolve(data))
      .catch((err) => reject(err));
  });
};

const setArchiveNote = (id) => {
  return new Promise((resolve, reject) => {
    axios
      .patch(
        `/notes/archive/${id}`,
        {},
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

const setDeleteNote = (id) => {
  return new Promise((resolve, reject) => {
    axios
      .patch(
        `/notes/delete/${id}`,
        {},
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

const editNote = (note) => {
  // console.log(note, "inside edit note");
  return new Promise((resolve, reject) => {
    axios
      .patch(
        `/notes/${note.id}`,
        {
          title: note.title,
          description: note.description,
          color: note.color,
        },
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

export {
  getNotes,
  addNote,
  getArchivedNotes,
  getDeletedNotes,
  setArchiveNote,
  setDeleteNote,
  editNote,
};
