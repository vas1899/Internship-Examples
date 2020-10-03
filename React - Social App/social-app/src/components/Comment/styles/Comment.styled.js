import React from "react";
import styled from "styled-components";
import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward";
import ArrowDownwardIcon from "@material-ui/icons/ArrowDownward";
import { Button } from "react-bootstrap";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 1rem 0;
`;

export const ArrowUp = styled(ArrowUpwardIcon)`
  :hover {
    color: ${(props) => props.theme.themeColor};
  }
`;

export const ArrowDown = styled(ArrowDownwardIcon)`
  :hover {
    color: ${(props) => props.theme.themeColor};
  }
`;

export const StyledButton = styled(Button)`
  margin: 1rem;
  cursor: pointer;
  :hover,
  :focus,
  :active {
    color: ${(props) => props.theme.themeColor};
  }
`;

export const AddBar = styled.input`
  display: flex;
  width: 50rem;
  margin-left: auto;
  margin-right: auto;
`;

export const SubContainer = styled.div`
  display: block;
  border: 0.025rem solid grey;
  border-radius: 15px;
  height: auto;
  margin-left: auto;
  margin-right: auto;
  margin-top: 1rem;
  width: 60rem;
  padding: 1rem;
`;
