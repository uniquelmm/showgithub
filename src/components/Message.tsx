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

import { Item } from "../interfaces/index";

const SmallTitle = styled.div`
  display: flex;
  align-items: center;
`;

const SmallTitleIcon = styled.nav`
  width: 15px;
  margin: 0 4px;

  color: #ffbf74;
`;

const SmallTitleWord = styled.div`
  padding: 1px 6px;
`;

const Stars = styled.div`
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

const Forks = styled.div`
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

const Issues = styled.div`
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
      <SmallTitle>
        <SmallTitleIcon>
          <FontAwesomeIcon
            className="list-group-item"
            icon={faUser as IconProp}
          />
        </SmallTitleIcon>
        <SmallTitleWord>{data.fullName.substring(0, index)}</SmallTitleWord>
      </SmallTitle>

      <Stars>
        <StarsIcon>
          <FontAwesomeIcon
            className="list-group-item"
            icon={faStar as IconProp}
          />
        </StarsIcon>
        <StarsWord>{data.stargazersCount} stars</StarsWord>
      </Stars>

      <Forks>
        <ForksIcon>
          <FontAwesomeIcon icon={faShareAlt as IconProp} />
        </ForksIcon>
        <ForksWord>{data.forksCount} forks</ForksWord>
      </Forks>

      <Issues>
        <IssuesIcon>
          <FontAwesomeIcon
            className="list-group-item"
            icon={faExclamationTriangle as IconProp}
          />
        </IssuesIcon>
        <IssuesWord>{data.openIssuesCount} open issues</IssuesWord>
      </Issues>
    </>
  );
};
