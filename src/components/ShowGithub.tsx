/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { FC } from "react";
import styled from "styled-components";

import { GitMain } from "./GitMain";
import { Message } from "./Message";
require("dotenv/config");

const Wrapper = styled.div`
  display: flex;
  display: -webkit-flex;
  flex-wrap: wrap;
  justify-content: space-around;

  width: 100%;
`;

const GitWrapper = styled.div`
  display: inline-block;

  width: 160px;
  margin: 5px;
  padding: 8px 8px;

  background-color: #ebebeb;
`;

const GitId = styled.div`
  padding: 8px 23px 6px 23px;

  text-align: center;
`;

const GitMainWrapper = styled.div`
  text-align: center;
`;

const MessageWrapper = styled.div`
  align-items: center;

  font-size: 14px;
`;

export const ShowGithub: FC<{ data: any }> = ({ data }) => {
  const { SERVER_URL } = process.env;
  console.log(SERVER_URL, "!!!");

  return (
    <Wrapper>
      {data?.items?.map((item: any, index: number) => {
        return (
          <GitWrapper key={item.id}>
            <GitId>#{index + 1}</GitId>

            <GitMainWrapper>
              <GitMain data={item.owner} />
            </GitMainWrapper>

            <MessageWrapper>
              <Message data={item} />
            </MessageWrapper>
          </GitWrapper>
        );
      })}
    </Wrapper>
  );
};
