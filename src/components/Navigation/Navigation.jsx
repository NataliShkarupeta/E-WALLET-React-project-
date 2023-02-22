import { List, Item, Link, Icon, Text } from './Navigation.styled.js';
import Icons from 'images/icons.svg';
import { useMedia } from 'react-use';

export const Navigation = () => {
  const isTablet = useMedia('(min-width: 768px)');
  return (
    <List>
      <Item>
        <Link to="/">
          <Icon>
            <use href={`${Icons}#icon-home`}></use>
          </Icon>
          <Text>Home</Text>
        </Link>
      </Item>

      <Item>
        <Link to="diagram">
          <Icon>
            <use href={`${Icons}#icon-statistics`}></use>
          </Icon>
          <Text>Statistics</Text>
        </Link>
      </Item>

      {!isTablet && (
        <Item>
          <Link to="/currency">
            <Icon>
              <use href={`${Icons}#icon-currency-icon`}></use>
            </Icon>
          </Link>
        </Item>
      )}
    </List>
  );
}