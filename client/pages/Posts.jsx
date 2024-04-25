import React, { lazy, Suspense } from "react";
import Loading from "../components/Loading.jsx";

const PostsList = lazy(() =>
  import("../components/PostsList.jsx" /* webpackPrefetch: true */)
);

const Home = ({users}) => {

    return (<Suspense fallback={<Loading />}>
        <PostsList users={users} />
    </Suspense>)
}

export default Home