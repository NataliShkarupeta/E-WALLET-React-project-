import styled from 'styled-components';

// import Icons from 'images/icons.svg';

export const Container = styled.div`
  font-family: var(--main-font);
  font-style: normal;
  color: var(--title-main-color);
  height: 520px;
  /* overflow: auto; */
`;

export const Table = styled.table``;

// Head of table

export const TrHead = styled.tr`
  background: var(--form-background-color);
  font-weight: 700;
  font-size: 18px;
  line-height: 1.5;
`;

export const ThDay = styled.th`
  width: 15%;
  text-align: left;
  padding-left: 20px;
  padding-top: 15px;
  padding-bottom: 16px;
  border-top-left-radius: 30px;
  border-bottom-left-radius: 30px;
`;

export const ThType = styled.th`
  width: 10%;
  text-align: center;
`;

export const ThCategore = styled.th`
  width: 15%;
  text-align: left;
`;

export const ThComment = styled.th`
  width: 30%;
  text-align: left;
`;

export const ThCurrency = styled.th`
  width: 10%;
  text-align: right;
`;

export const ThEdit = styled.th`
  width: 5%;
  text-align: center;
`;

export const ThDel = styled.th`
  width: 5%;
  text-align: right;
  padding-right: 30px;
  border-top-right-radius: 30px;
  border-bottom-right-radius: 30px;
`;

// Body of table

export const TrData = styled.tr`
  font-weight: 400;
  font-size: 16px;
  line-height: 1.5;
  border-bottom: 1px solid #dcdcdf;
  :not(:last-child) {
    box-shadow: 0px 1px 0px rgba(255, 255, 255, 0.6);
  }
  :last-child {
    border-bottom: 0;
  }
`;

export const TdDate = styled.td`
  padding-left: 20px;
  padding-top: 16px;
  padding-bottom: 14px;
`;

export const TdType = styled.td`
  text-align: center;
`;

export const TdCadegory = styled.td`
  text-align: left;
`;

export const TdComment = styled.td`
  text-align: left;
`;

export const TdAmount = styled.td`
  font-weight: 700;
  line-height: 1.5;
  text-align: right;
  color: ${props =>
    props.type === 'INCOME'
      ? 'var(--text-green-color)'
      : 'var(--text-pink-color)'};
`;

export const TdEdit = styled.td`
  text-align: right;
`;

export const TdDel = styled.td`
  text-align: left;
`;

// Buttons

export const EditButton = styled.button`
  font-size: 16px;
  cursor: pointer;
  background-color: transparent;
  padding-right: 0;
  border: none;
  display: flex;
  align-items: center;
  margin-right: 5px;
  margin-left: 12px;
  padding: 0;
`;

export const DelButton = styled.button`
  min-width: 67px;
  min-height: 26px;
  border-radius: 18px;
  margin-right: 12px;
  background-color: var(--text-green-color);
  color: var(--text-white-color);
  border: none;
  cursor: pointer;
`;

// Mobile
export const MobList = styled.ul`
  font-size: 16px;
  font-family: var(--main-font);
  font-style: normal;
  color: var(--title-main-color);

  width: 100%;
  margin: 0 auto 8px;
  background: var(--form-background-color);
  border-radius: 10px;
  border-left: 5px solid
    ${props =>
      props.type === 'income'
        ? 'var(--text-green-color)'
        : 'var(--text-pink-color)'};
`;

export const MobItem = styled.li`
  padding: 12px 20px;
  height: 47px;
  display: flex;
  align-items: center;
  &:not(:last-child) {
    border-bottom: 1px solid #dcdcdf;
  }
  justify-content: space-between;
  line-height: calc(27 / 18);
`;

export const MobHeader = styled.span`
  font-weight: 700;
  font-size: 18px;
`;

export const MobComment = styled.span`
  width: 80px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: pre-line;
`;

export const MobSum = styled.span`
  color: ${props =>
    props.type === 'income'
      ? 'var(--text-green-color)'
      : 'var(--text-pink-color)'};
`;
