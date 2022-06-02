import styled from "styled-components";
import { categories } from "../data";
import CategoryItem from "./CategoryItem";

export const Categories = () => {
  return (
    <Container>
      {categories.map((item) => (
        <CategoryItem item={item} key={item.id} />
      ))}
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  padding: 20px;
  justify-content: space-between;
`;
