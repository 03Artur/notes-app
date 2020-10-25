import axios from 'axios';
import AuthApi from './AuthApi';
import NotesApi from './NotesApi';

const baseURL = 'http://localhost:5000/api';

const client = axios.create({
  baseURL,
});

export const auth = new AuthApi({
  client,
});

export const notes = new NotesApi({
  client,
});
