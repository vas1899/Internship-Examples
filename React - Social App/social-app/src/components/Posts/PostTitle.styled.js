import styled from "styled-components";
import { Link } from "react-router-dom";

export const ProfilePicture = styled.img`
  border-radius: 50%;
  border: 0.3rem solid ${(props) => props.theme.themeColor};
  border-right-width: 1rem;
  border-left-width: 1rem;
  margin-right: 1.5rem;
  object-fit: contain;
`;

export const Container = styled.div`
  display: flex;
`;
export const SubContainer = styled(Container)`
  flex-direction: column;
`;
export const ProfileName = styled.div`
  color: #c9d0d4;
  font-family: "Helvetica Neue", sans-serif;
  font-size: 2.6rem;
  font-weight: 5rem;
  line-height: 3rem;
  letter-spacing: 0.05rem;
  border-bottom: double #555;
  cursor: pointer;
  :hover {
    color: ${(props) => props.theme.themeColor};
  }
`;

export const Title = styled.div`
  color: #bbc3c8;
  font-family: "Verdana", sans-serif;
  font-size: 16px;
  line-height: 26px;
  margin: 0;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }
`;
