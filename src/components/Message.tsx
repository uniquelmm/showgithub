import {
  faExclamationTriangle,
  faShareAlt,
  faStar,
  faUser,
} from "@fortawesome/fontawesome-free-solid";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { FC } from "react";
import styled from "styled-components";

import { Item } from "../interfaces/showGithub";

const MessageTitle = styled.div`
  display: flex;
  align-items: center;
`;

const MessageTitleIcon = styled.nav`
  width: 15px;
  margin: 0 4px;

  color: #ffbf74;
`;

const MessageTitleWord = styled.div`
  padding: 1px 6px;
`;

const MessageStars = styled.div`
  display: flex;
  align-items: center;
`;

const StarsIcon = styled.div`
  width: 15px;
  margin: 0 4px;

  color: #ffd700;
`;

const StarsWord = styled.div`
  padding: 1px 6px;
`;

const MessageForks = styled.div`
  display: flex;
  align-items: center;
`;

const ForksIcon = styled.div`
  width: 15px;
  margin: 0 4px;

  color: #8cc6f3;
`;

const ForksWord = styled.div`
  padding: 1px 6px;
`;

const MessageIssues = styled.div`
  display: flex;
  align-items: center;
`;

const IssuesIcon = styled.div`
  width: 15px;
  margin: 0 4px;

  color: #f0949a;
`;

const IssuesWord = styled.div`
  padding: 1px 6px;
`;

export const Message: FC<Item> = ({ data }) => {
  const index = data.fullName.lastIndexOf("/");

  return (
    <>
      <MessageTitle>
        <MessageTitleIcon>
          <FontAwesomeIcon
            className="list-group-item"
            icon={faUser as IconProp}
          />
        </MessageTitleIcon>
        <MessageTitleWord>{data.fullName.substring(0, index)}</MessageTitleWord>
      </MessageTitle>

      <MessageStars>
        <StarsIcon>
          <FontAwesomeIcon
            className="list-group-item"
            icon={faStar as IconProp}
          />
        </StarsIcon>
        <StarsWord>{data.stargazersCount} stars</StarsWord>
      </MessageStars>

      <MessageForks>
        <ForksIcon>
          <FontAwesomeIcon icon={faShareAlt as IconProp} />
        </ForksIcon>
        <ForksWord>{data.forksCount} forks</ForksWord>
      </MessageForks>

      <MessageIssues>
        <IssuesIcon>
          <FontAwesomeIcon
            className="list-group-item"
            icon={faExclamationTriangle as IconProp}
          />
        </IssuesIcon>
        <IssuesWord>{data.openIssuesCount} open issues</IssuesWord>
      </MessageIssues>
    </>
  );
};
