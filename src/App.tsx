import React, { ReactElement } from "react";
import styled from "styled-components";

import { ShowGithub } from "./components/ShowGithub/ShowGithub";
import { useGetData } from "./useGetData";
const Wrapper = styled.div`
  display: flex;
  display: -webkit-flex;
  flex-wrap: wrap;
  justify-content: space-around;

  width: 100%;
`;
function App(): ReactElement {
  const API =
    "search/repositories?q=stars:%3E1&sort=stars&order=desc&type=Repositories";
  const [data, error] = useGetData(API);

  if (error) return <div>failed to load</div>;
  if (!data) return <div>loading...</div>;

  return (
    <Wrapper>
      {data?.items?.map((item: any, index: number) => {
        return (
          <ShowGithub data={data} key={item.id} item={item} index={index} />
        );
      })}
    </Wrapper>
  );
}
export default App;
