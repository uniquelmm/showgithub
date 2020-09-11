import { storiesOf } from "@storybook/react";
import React from "react";

import { ShowGithub } from "../components/ShowGithub/ShowGithub";
import { useGetData } from "../hooks/useGetData";

const stories = storiesOf("ShowGithub", module);

stories.add("example", () => {
  const API =
    "search/repositories?q=stars:>1+language:javascript&sort=stars&order=desc&type=Repositories";
  const [data, error] = useGetData(API);

  if (error) return <div>failed to load</div>;

  return (
    <>
      {data?.items?.slice(0, 1).map((item: any, index: number) => {
        return <ShowGithub key={item.id} item={item} index={index} />;
      })}
    </>
  );
});
