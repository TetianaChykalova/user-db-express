import React, { useState, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import { UserContext } from "./redux/context.js";
import App from "./App.jsx";
import Html from "./Html.jsx";

export const Render = ({data}) => {
    // console.log('client data', data)

    const [isLoaded, setIsLoaded] = useState(false);
    useEffect(() => { setIsLoaded(true); }, []);

    return (<>
        {isLoaded && <BrowserRouter>
            <UserContext.Provider value={data}>
                <Html>
                    <App />
                    {/* <div>I'm here</div> */}
                </Html>
            </UserContext.Provider>
        </BrowserRouter>}
    </>)
}
