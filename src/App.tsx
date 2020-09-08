import React, { ReactElement, useMemo } from "react";
import useSWR from "swr";

import { ShowGithub } from "./components/ShowGithub";
import { fetcher } from "./fetcher";
import { transform } from "./utils/transform";

const API =
  process.env.REACT_APP_SERVER_URL +
  "/search/repositories?q=stars:%3E1&sort=stars&order=desc&type=Repositories";

// const fetcher = (url: RequestInfo) => fetch(url).then((r) => r.json());
function App(): ReactElement {
  const { data, error } = useSWR(API, fetcher);

  const newData = useMemo(() => transform(data), [data]);

  if (error) return <div>failed to load</div>;
  if (!data) return <div>loading...</div>;

  return <ShowGithub data={newData} />;
}
export default App;
