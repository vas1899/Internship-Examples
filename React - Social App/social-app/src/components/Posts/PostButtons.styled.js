import styled from "styled-components";
import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward";
import ArrowDownwardIcon from "@material-ui/icons/ArrowDownward";
import { Button } from "react-bootstrap";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
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
