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

import { Item } from "../interfaces";

const SmallTitle = styled.div`
  display: flex;
  align-items: center;
`;

const SmallTitleIcon = styled.nav`
  color: #ffbf74;
  margin: 0 4px;
  width: 15px;
`;

const SmallTitleWord = styled.div`
  padding: 1px 6px;
`;

const Stars = styled.div`
  display: flex;
  align-items: center;
`;

const StarsIcon = styled.div`
  color: #ffd700;
  margin: 0 4px;
  width: 15px;
`;

const StarsWord = styled.div`
  padding: 1px 6px;
`;

const Forks = styled.div`
  display: flex;
  align-items: center;
`;

const ForksIcon = styled.div`
  color: #8cc6f3;
  margin: 0 4px;
  width: 15px;
`;

const ForksWord = styled.div`
  padding: 1px 6px;
`;

const Issues = styled.div`
  display: flex;
  align-items: center;
`;

const IssuesIcon = styled.div`
  color: #f0949a;
  margin: 0 4px;
  width: 15px;
`;

const IssuesWord = styled.div`
  padding: 1px 6px;
`;

export const Message: FC<Item> = ({
  full_name,
  stargazers_count,
  forks_count,
  open_issues_count,
}) => {
  const index = full_name.lastIndexOf("/");

  return (
    <>
      <SmallTitle>
        <SmallTitleIcon>
          <FontAwesomeIcon
            className="list-group-item"
            icon={faUser as IconProp}
          />
        </SmallTitleIcon>
        <SmallTitleWord>{full_name.substring(0, index)}</SmallTitleWord>
      </SmallTitle>
      <Stars>
        <StarsIcon>
          <FontAwesomeIcon
            className="list-group-item"
            icon={faStar as IconProp}
          />
        </StarsIcon>
        <StarsWord>{stargazers_count} stars</StarsWord>
      </Stars>
      <Forks>
        <ForksIcon>
          <FontAwesomeIcon icon={faShareAlt as IconProp} />
        </ForksIcon>
        <ForksWord>{forks_count} forks</ForksWord>
      </Forks>
      <Issues>
        <IssuesIcon>
          <FontAwesomeIcon
            className="list-group-item"
            icon={faExclamationTriangle as IconProp}
          />
        </IssuesIcon>
        <IssuesWord>{open_issues_count} open issues</IssuesWord>
      </Issues>
    </>
  );
};
