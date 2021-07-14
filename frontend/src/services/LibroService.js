import axios from "axios";

const API = "http://localhost:5000";

export const getLibros = async (user) => {
  return await axios.get(`${API}/libros`);
};

export const getLibro = async (id) => {
  return await axios.get(`${API}/libros/${id}`);
};

export const deleteAnotacion = async (idAnotacion, idLibro, idUsuario) => {
  console.log(idAnotacion, idLibro, idUsuario);
  return await axios.put(`${API}/anotaciones/delete/${idAnotacion}`, {
    idLibro: idLibro,
    idUsuario: idUsuario,
  });
};

export const marcarLibroLeido = async (idLibro, idUsuario) => {
  return await axios.put(`${API}/anotaciones/`, {
    idLibro: idLibro,
    idUsuario: idUsuario,
  });
};

export const getAnotaciones = async (userId) => {
  return await axios.get(`${API}/anotaciones/${userId}`);
};
