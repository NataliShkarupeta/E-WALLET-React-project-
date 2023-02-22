import React, { useEffect, useState, useMemo, useCallback } from 'react';
import { FilterMonth } from 'components/Table/filterMonth';
import { FilterYear } from './filterYear';
import { BasicTable } from './basicTable';
import {
  Box,
  FiltersBox,
  CategoryBox,
  ItemTitle,
  TotalBox,
  TotalItem,
  TotalExpenses,
  TotalIncom,
} from './Table.styled';
import { formatNumber } from 'utils/serviceFunctions';
import { Empty } from 'antd';
import { Rings } from 'react-loader-spinner';
import { useSelector } from 'react-redux';
import { selectIsLoading } from 'redux/categories/categoriesSelectors';
import PropTypes from 'prop-types';


export const Table = ({ data, handlePeriod }) => {
  console.log(data)
  const isDataPerPeriod =
    !data?.expenseSummary === 0 || data?.categoriesSummary?.length > 0;

  const isLoading = useSelector(selectIsLoading);

  const currentMonth = useMemo(() => new Date().getMonth() + 1, []);
  const currentYear = useMemo(() => new Date().getFullYear(), []);

  const [selectedMonth, setSelectedMonth] = useState('');
  const [selectedYear, setSelectedYear] = useState('');

  const handleMonth = useCallback(month => {
    setSelectedMonth(month);
  }, []);

  const handleYear = useCallback(year => {
    setSelectedYear(year);
  }, []);

  useEffect(() => {
    if (selectedMonth && selectedYear)
      handlePeriod(selectedMonth, selectedYear);
    if (selectedMonth && !selectedYear)
      handlePeriod(selectedMonth, currentYear);
    if (!selectedMonth && selectedYear)
      handlePeriod(currentMonth, selectedYear);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedMonth, selectedYear]);

  return (
    <Box>
      <FiltersBox>
        <FilterMonth getMonth={handleMonth} />
        <FilterYear getYear={handleYear} />
      </FiltersBox>

      <CategoryBox>
        <ItemTitle>Category</ItemTitle> <ItemTitle>Sum</ItemTitle>
      </CategoryBox>
      {/* Spinner when loading */}
      {isLoading && (
        <Rings
          height="80"
          width="80"
          color="#4fa94d"
          radius="6"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
          ariaLabel="rings-loading"
        />
      )}

      {isDataPerPeriod && <BasicTable tableData={data.categoriesSummary} />}
      {!isDataPerPeriod && <Empty />}

      <TotalBox>
        <TotalItem>
          <p>Expenses: </p>
          <TotalExpenses>{formatNumber(data.expenseSummary)}</TotalExpenses>
        </TotalItem>
        <TotalItem>
          <p>Income: </p>{' '}
          <TotalIncom>{formatNumber(data.incomeSummary)}</TotalIncom>
        </TotalItem>
      </TotalBox>
    </Box>
  );
};


Table.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
    expenseSummary: PropTypes.number.isRequired,
    incomeSummary: PropTypes.number.isRequired,
    month: PropTypes.number.isRequired,
    year: PropTypes.number.isRequired,
    periodTotal: PropTypes.number.isRequired,
    categoriesSummary: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
        total: PropTypes.number.isRequired,
        color: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
      })
    ).isRequired,
  })).isRequired,
  handlePeriod: PropTypes.func.isRequired,
};