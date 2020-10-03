import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2rem;
`;

export const Image = styled.img`
  border: 0.25rem solid black;
  margin-left: 3rem;
  object-fit: contain;
  flex-direction: column;
  max-height: 10rem;
`;

export const Text = styled.div`
  color: black;
  font-family: "Verdana", sans-serif;
  font-size: 16px;
  line-height: 2rem;
  margin-left: 3.125rem;
  flex-direction: column;
`;
