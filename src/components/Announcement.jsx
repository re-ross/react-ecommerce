import styled from "styled-components";

export const Announcement = () => {
  return <Container>SUBSCRIBE AND RECEIVE 10% OFF YOUR NEXT ORDER</Container>;
};

const Container = styled.div`
  height: 30px;
  background-color: teal;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: 500;
`;
