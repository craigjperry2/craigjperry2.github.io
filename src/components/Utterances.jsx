import React, { useEffect, useRef } from "react";

export default function Utterances() {
  const utterancesParent = useRef(null);
  useEffect(() => {
    while (utterancesParent.current.firstChild) {
      utterancesParent.current.removeChild(utterancesParent.current.firstChild);
    }

    const utterancesScript = document.createElement("script");
    utterancesScript.setAttribute("src", "https://utteranc.es/client.js");
    utterancesScript.setAttribute(
      "repo",
      "craigjperry2/craigjperry2.github.io"
    );
    utterancesScript.setAttribute("issue-term", "pathname");
    utterancesScript.setAttribute("theme", "github-light");
    utterancesScript.setAttribute("crossOrigin", "anonymous");
    utterancesScript.setAttribute("async", "");

    utterancesParent.current.appendChild(utterancesScript);
  }, []);

  return <div className="row" ref={utterancesParent}></div>;
}
