const express = require("express");
const path = require("path");
const axios = require("axios");
const { render } = require("./render");

const app = express();

app.use(express.static(path.resolve(__dirname, "build")));
// app.use(express.static(path.resolve(__dirname, "../build"), {
//   setHeaders: (res, path, stat) => {
//     if (path.endsWith('.js')) {
//       res.setHeader('Content-Type', 'application/javascript');
//     }
//   }
// }));
app.use(express.static(path.resolve(__dirname, "assets")));

// app.get("/", (req, res) => {
//   render(res);
// });

app.get("/users", async (req, res) => {
  const usersResponse = await axios.get("https://jsonplaceholder.typicode.com/users");
  const usersData = usersResponse.data;
  render(res, { users: usersData }, req.url);
});
app.get("/users/:userId/posts", async (req, res) => {
  const { userId } = req.params;
  const postsResponse = await axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`);
  const postsData = postsResponse.data;
  render(res, { posts: postsData }, req.url);
});
app.get("/users/:userId/albums", async (req, res) => {
  const { userId } = req.params;
  const albumsResponse = await axios.get(`https://jsonplaceholder.typicode.com/albums?userId=${userId}`);
  const albumsData = albumsResponse.data;
  render(res, { albums: albumsData }, req.url);
});
app.get("/users/:userId/albums/:albumId/photos", async (req, res) => {
  const { albumId } = req.params;
  const photosResponse = await axios.get(`https://jsonplaceholder.typicode.com/photos?albumId=${albumId}`);
  const photosData = photosResponse.data;
  render(res, { photos: photosData }, req.url);
});

app.listen(3000, () => {
  console.log("listening on port 3000");
});