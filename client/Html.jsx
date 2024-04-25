import React from "react";

const Html = ({ children }) => {
  return (
    <html>
      <head>
        {/* <link rel="apple-touch-icon" sizes="180x180" href="/images/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/images/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/images/favicon-16x16.png" />
        <link rel="manifest" href="/assets/site.webmanifest"></link> */}
        <link rel="shortcut icon" href="#" />
      </head>
      <body>
        <div id="root">{children}</div>
      </body>
    </html>
  );
};

export default Html;