class NotesApi {
  constructor({ client }) {
    this.client = client;
    this.url = '/notes';
  }
  create = (data) => {
    return this.client.post(this.url, data);
  };
  getMany = (query) => {
    return this.client.get(this.url);
  };
  updateById = (noteId, data) => {
    return this.client.patch(`${this.url}/${noteId}`, data);
  };
  deleteById = (noteId) => {
    return this.client.delete(`${this.url}/${noteId}`);
  };
}

export default NotesApi;
