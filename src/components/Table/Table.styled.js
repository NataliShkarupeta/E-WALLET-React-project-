import styled from 'styled-components';

export const Box = styled.div`
  width: 100%;
  height: 100vh;
  margin: 0 auto;
  @media screen and (min-width: 768px) {
    width: 336px;
    margin: 0;
  }
  @media screen and (min-width: 1280px) {
    width: 395px;
    margin: 0;
  }
`;
export const FiltersBox = styled.div`
  display: flex;
  width: auto;
  height: auto;
  margin: 0 auto;
  gap: 20px;
  mix-blend-mode: 20px;
  margin-bottom: 20px;
  flex-direction: column;
  align-items: center;

  @media screen and (min-width: 768px) {
    gap: 16px;
    flex-direction: row;
  }
  @media screen and (min-width: 1280px) {
    gap: 32px;
    flex-direction: row;
    width: 395px;
  }
`;

export const RoundedBox = styled(Box)({
  borderRadius: '30px',
  overflow: 'hidden',
  width: '280px',
  height: '50px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: '#fffff',
  border: '1px solid #000000',
  '@media (min-width: 768px)': {
    width: '160px',
  },
  '@media (min-width: 1280px)': {
    width: '152px',
  },
});

export const TotalBox = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 16px;
  padding: 0 20px;
`;

export const TotalItem = styled.div`
  display: flex;
  justify-content: space-between;
  /* gap: 153px; */
  font-size: 16px;
  font-weight: 700;
  margin-bottom: 14px;
`;
export const TotalExpenses = styled.div`
  color: #ff6596;
`;
export const TotalIncom = styled.div`
  color: #24cca7;
`;
export const CategoryBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: var(--main-background-color);
  border-radius: 30px;
  width: 100%;
  height: 58px;
  background-color: var(--form-background-color);
`;
export const ItemTitle = styled.div`
  padding: 20px;
  font-size: 18px;
  font-weight: 700;
`;
// Color box styled by props color from tableData
export const ColorBox = styled.div`
  width: 24px;
  height: 24px;
  border-radius: 2px;
  /* margin-left: 8px; */
  background-color: ${props => props.backgroundColor};
`;

export const borderStyle = {
  backgroundColor: 'transparent',
  border: 'none',
};

export const tableStyle = {
  backgroundColor: 'transparent',
  border: 'none',
  borderRadius: 'none',
  boxShadow: 'none',
};
export const rowStyle = {
  // padding: '0px',
  // border: 'none',
};

export const cellStyle = {
  borderBottom: '1px solid #DCDCDF',
  // borderTop: '1px solid #fff',
  width: '100px',
  padding: '14px',
  paddingLeft: '0px',
};

export const cellColorStyle = {
  borderBottom: '1px solid #DCDCDF',
  // borderTop: '1px solid #fff',
  width: '10px',
  margin: '0px',
  padding: '10px',
};
