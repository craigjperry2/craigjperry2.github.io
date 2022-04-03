import React from "react";
import DocItem from "@theme-original/DocItem";
import Utterances from "../../components/Utterances";

export default function DocItemWrapper(props) {
  return (
    <>
      <DocItem {...props} />
      <Utterances />
    </>
  );
}
