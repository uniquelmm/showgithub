import React, { FC } from "react";
import styled from "styled-components";

import { Owner } from "../interfaces";

const Image = styled.img`
  width: 100px;
  height: 100px;
`;

const Title = styled.div`
  color: #bf4131;
  margin: 3px 0;
  font-weight: bold;
`;

export const GitMain: FC<Owner> = ({ login, avatar_url, html_url }) => {
  return (
    <>
      <a href={html_url}>
        <Image src={avatar_url} />
      </a>
      <Title>{login}</Title>
    </>
  );
};
