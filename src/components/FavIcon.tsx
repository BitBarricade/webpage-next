import React from "react";

const Favicon = (): JSX.Element => {
    return (
        <>
            <link rel="apple-touch-icon" sizes="180x180" href="/favicons/apple-touch-icon.png" />
            <link rel="icon" type="image/png" sizes="32x32" href="/favicons/favicon-32x32.png" />
            <link rel="icon" type="image/png" sizes="16x16" href="/favicons/favicon-16x16.png" />
            <link rel="manifest" href="/favicons/site.webmanifest" />
            <link rel="mask-icon" href="/favicons/safari-pinned-tab.svg" color="#5bbad5" />
            <link rel="shortcut icon" href="/favicons/favicon.ico" />
            <meta name="msapplication-TileColor" content="#2d89ef" />
            <meta name="msapplication-TileImage" content="/favicons/mstile-144x144.png" /> 
            <meta name="msapplication-config" content="/favicons/browserconfig.xml" />
            <meta name="theme-color" content="#6222CC" />
        </>
     );
}

export default Favicon;