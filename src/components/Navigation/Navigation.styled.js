import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const List = styled.ul`
  display: flex;
  flex-wrap: nowrap;
  gap: 32px;
  margin: 0 auto;
  @media screen and (min-width: 768px) {
    flex-direction: column;
    gap: 12px;
    margin: 0;
  }
`;

export const Item = styled.li``;

export const Link = styled(NavLink)`
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  gap: 20px;
  font-family: var(--secondary-font);
  font-weight: 400;
  font-size: 18px;
  line-height: 1.5;
  color: var(--title-main-color);
  text-decoration: none;
  &.active {
    font-weight: 700;
  }
  &:hover {
    opacity: 0.5;
  }
`;

export const Icon = styled.svg`
  width: 38px;
  height: 38px;
  @media screen and (min-width: 768px) {
    width: 18px;
    height: 18px;
  }
`;

export const Text = styled.p`
  display: none;
  @media screen and (min-width: 768px) {
    display: contents;
  }
`;
