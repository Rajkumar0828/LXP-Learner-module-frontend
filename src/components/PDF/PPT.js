import React from "react";

const linkToPPTFile = "URL_TO_YOUR_PPT_FILE";

export default function App() {
  return (
    <>
      <iframe 
        src={`https://view.officeapps.live.com/op/embed.aspx?src=${linkToPPTFile}`}
        width="100%" 
        height="600px" 
        frameBorder="0" 
        title="slides" 
      />
    </>
  );
}
