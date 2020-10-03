import styled from "styled-components";

export const Image = styled.img`
  display: flex;
  height: 10rem;
  width: 100%;
  object-fit: cover;
  position: relative;
`;

export const UserName = styled.div`
  position: absolute;
  bottom: 0.25rem;
  left: 9.375rem;
  background-color: ${(props) => props.theme.themeColor};
  color: white;
  padding: 0rem 1rem 0rem;
  opacity: 0.7;
`;

export const Container = styled.div`
  display: block;
  position: relative;
`;

export const ProfileImage = styled.img`
  border-radius: 50%;
  border: 0.3rem solid ${(props) => props.theme.themeColor};
  border-right-width: 1rem;
  border-left-width: 1rem;
  margin-top: 1rem;
  object-fit: contain;
  width: 20rem;
  display: flex;
`;

export const Bio = styled.div`
  display: flex;
  width: 70rem;
  height: 20rem;
  margin-top: 1rem;
  padding: 1rem;
  background-color: #bababa;
  opacity: 0.3;
  color: black;
  font-family: "Verdana", sans-serif;
`;
