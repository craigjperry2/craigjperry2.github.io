import React from "react";
import DocItem from "@theme-original/DocItem";

export default function DocItemWrapper(props) {
  return (
    <>
      <DocItem {...props} />
      <div className="row">
        <script
          src="https://utteranc.es/client.js"
          repo="craigjperry2/craigjperry2.github.io"
          issue-term="pathname"
          theme="github-light"
          crossOrigin="anonymous"
          async
        ></script>
      </div>
    </>
  );
}
