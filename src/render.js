import React from "react";
import { renderToPipeableStream } from "react-dom/server";
import { StaticRouter } from "react-router-dom/server";
import { Render } from "../client/Render.jsx";

export const render = async (response, data, url) => {
  // console.log('server data', data)
  const context = {};
  const stream = renderToPipeableStream(
      <StaticRouter location={url} context={context}>
        <Render data={data} />
      </StaticRouter>, {
      bootstrapScripts: ["client.bundle.js"],
      onShellReady() {
        response.setHeader("content-type", "text/html");
        stream.pipe(response);
      },
  });

  setTimeout(() => {
    stream.abort()
  }, 10000)
};