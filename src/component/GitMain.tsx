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

const A = styled.a``;

export const GitMain: FC<Owner> = ({ login, avatar_url, html_url }) => {
  return (
    <>
      <A href={html_url}>
        <Image src={avatar_url}></Image>
      </A>
      <Title>{login}</Title>
    </>
  );
};
