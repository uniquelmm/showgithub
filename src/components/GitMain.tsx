import React, { FC } from "react";
import styled from "styled-components";

import { Owner } from "../interfaces/index";

const Image = styled.img`
  width: 100px;
  height: 100px;
`;

const Title = styled.div`
  margin: 3px 0;

  color: #bf4131;

  font-weight: bold;
`;

export const GitMain: FC<Owner> = ({ data }) => {
  return (
    <>
      <a href={data.htmlUrl}>
        <Image src={data.avatarUrl} />
      </a>
      <Title>{data.login}</Title>
    </>
  );
};
