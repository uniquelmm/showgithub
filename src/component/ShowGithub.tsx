import styled from "styled-components";
import { FC } from "react";
import React from "react";
import data from "../data";
import { RootObject } from "../interfaces";
import { Message } from "./Message";
import { GitMain } from "./GitMain";

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  display: -webkit-flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;

const GitWrapper = styled.div`
  background-color: #ebebeb;
  display: inline-block;
  padding: 8px 8px;
  margin: 5px;
  width: 160px;
`;

const GitId = styled.div`
  text-align: center;
  padding: 8px 23px 6px 23px;
`;

const GitMainWrapper = styled.div`
  text-align: center;
`;

const MessageWrapper = styled.div`
  align-items: center;
  font-size: 14px;
`;

export const ShowGithub: FC<RootObject> = ({ items }) => {
  return (
    <Wrapper>
      {data?.items?.map((item: any, count) => {
        return (
          <GitWrapper>
            <GitId>#{count + 1}</GitId>
            <GitMainWrapper>
              <GitMain
                login={item.owner.login}
                avatar_url={item.owner.avatar_url}
                html_url={item.owner.html_url}
              />
            </GitMainWrapper>
            <MessageWrapper>
              <Message
                full_name={item.full_name}
                stargazers_count={item.stargazers_count}
                forks_count={item.forks_count}
                open_issues_count={item.open_issues_count}
              />
            </MessageWrapper>
          </GitWrapper>
        );
      })}
    </Wrapper>
  );
};
