const postsFetch = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
  hedaers: {
    Accept: "application/json",
    Authorization: "meunovotoken",
  },
});
