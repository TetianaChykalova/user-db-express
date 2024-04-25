import React, { lazy, Suspense, useContext } from "react";
import { Routes, Route } from "react-router-dom";
import { UserContext } from "./redux/context.js";
import Html from "./Html.jsx";
import Loading from "./components/Loading.jsx";
import Header from "./components/Header.jsx";

const Home = lazy(() =>
  import("./pages/Home.jsx" /* webpackPrefetch: true */)
);
const Posts = lazy(() =>
  import("./pages/Posts.jsx" /* webpackPrefetch: true */)
);

const App = () => {
  const { users, posts } = useContext(UserContext);

  return (
    <>
      <Html>
        <Suspense fallback={<Loading />}>
          <Header />
          <Routes>
            <Route path='/users' element={<Home users={users} />} />
            <Route path='/users/:userIdPath/posts' element={<Posts posts={posts} />} />
          </Routes>
        </Suspense>
      </Html>
    </>
  );
};

export default App;