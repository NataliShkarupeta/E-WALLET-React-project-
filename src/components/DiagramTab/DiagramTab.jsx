import { ChartDoughnut } from 'components/Chart/Chart';
import { Table } from 'components/Table/Table';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchSummary } from 'redux/summary/summaryOperationst';
import { selectSummary } from 'redux/summary/summarySelectors';
import { Wrapper, StatisticsTitle, Box } from './DiagramTab.styled';
import { colorMap } from './colorMap';
import {
  deleteIncomeInArray,
  addArrayToObj,
  addColorToArray,
} from './serviceFunctions';


export const DiagramTab = () => {
  const dispatch = useDispatch();
  const summary = useSelector(selectSummary);
  const [renderChart, setRenderChart] = useState('');
  const [renderTable, setRenderTable] = useState('');

  const { month, year } = {
    month: new Date().getMonth() + 1,
    year: new Date().getFullYear(),
  };

  useEffect(() => {
    dispatch(fetchSummary({ month, year }));
  }, [dispatch, month, year]);

  const handleFilterChange = (newMonth, newYear) => {
    dispatch(
      fetchSummary({
        month: newMonth ?? month,
        year: newYear ?? year,
      })
    );
  };

  useEffect(() => {
    if (summary.length === 0 || summary === undefined) return;

    const updatedCategoriesSummary = addColorToArray(summary, colorMap);

    setRenderChart(deleteIncomeInArray(updatedCategoriesSummary));
    setRenderTable(
      addArrayToObj(summary, deleteIncomeInArray(updatedCategoriesSummary))
    );
  }, [summary]);

  return (
    <Wrapper>
      <StatisticsTitle>Statistics</StatisticsTitle>
      <Box>
        <ChartDoughnut data={renderChart} />
        <Table data={renderTable} handlePeriod={handleFilterChange} />
      </Box>
    </Wrapper>
  );
};

