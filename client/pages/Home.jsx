import React, { lazy, Suspense } from "react";
import Loading from "../components/Loading.jsx";

const UsersList = lazy(() =>
  import("../components/UsersList.jsx" /* webpackPrefetch: true */)
);

const Home = ({users}) => {

    return (<Suspense fallback={<Loading />}>
        <UsersList users={users} />
    </Suspense>)
}

export default Home