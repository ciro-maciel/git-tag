import React from "react";
import styled from "styled-components";
import Link from "./link";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${props => props.theme.background};
  padding: 0.75rem;
`;

const Title = styled.div`
  display: flex;
  justify-content: center;
  font-weight: bold;
  font-size: 1.125rem;
  margin-top: 0 !important;
  margin-bottom: 1rem;
  text-transform: uppercase;
`;

const Item = styled.li`
  padding: 5px;
`;

const Items = ({ items }) =>
  items.map(item => (
    <Item key={item.display}>
      <Link url={item.url}>{item.display}</Link>
    </Item>
  ));

const List = styled.ul`
  list-style-type: none;
  padding-left: 0px;
  margin: 0px;
`;

const Menu = ({ title, items, ...props }) => (
  <Container>
    <Title>{title}</Title>
    <List>
      <Items items={items} />
    </List>
  </Container>
);

export default Menu;
