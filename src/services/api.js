import axios from "axios";

const API = "http://localhost:5000";

export const askQuestion = async (question) => {
  const res = await axios.post(`${API}/query`, { question });
  return res.data;
};

export const uploadFile = async (file) => {
  const formData = new FormData();
  formData.append("file", file);

  const res = await axios.post(`${API}/upload`, formData);
  return res.data;
};

export const getFiles = async () => {
  const res = await axios.get(`${API}/files`);
  return res.data;
};

export const deleteFile = async (filename) => {
  const res = await axios.delete(`${API}/files/${filename}`);
  return res.data;
};  