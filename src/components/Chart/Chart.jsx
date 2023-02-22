import React, { useMemo, useRef } from 'react';
import { StyledChartContainer, TotalBalance } from './Chart.styled';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import { useSelector } from 'react-redux';
import { selectTotalBalance } from 'redux/transaction/transactionSelectors';
import { formatBalance } from 'utils/serviceFunctions';
import PropTypes from 'prop-types';

ChartJS.register(ArcElement, Tooltip, Legend);

const options = {
  plugins: {
    legend: {
      display: false,
    },
  },
  cutout: 95,
};

export const ChartDoughnut = React.memo(({ data }) => {
  console.log('Donut', data)
  const userBalance = useSelector(selectTotalBalance);
  const chartRef = useRef(null);

  const dataChart = useMemo(() => {
    if (data && data.length > 0) {
      const labels = data.map(item => item.name);
      const values = data.map(item => Math.abs(item.total));
      const color = data.map(item => item.color);

      return {
        labels,
        datasets: [
          {
            data: values,
            backgroundColor: color,
            borderWidth: 1,
            hoverOffset: 1,
          },
        ],
      };
    } else {
      return {
        labels: ['No expenses'],
        datasets: [
          {
            label: '',
            data: [1],
            backgroundColor: ['rgb(230, 225, 213)'],
            hoverOffset: 4,
          },
        ],
      };
    }
  }, [data]);

  const totalBalance = useMemo(() => {
    return formatBalance(userBalance);
  }, [userBalance]);

  return (
    <StyledChartContainer>
      <Doughnut data={dataChart} options={options} ref={chartRef} />

      <TotalBalance dangerouslySetInnerHTML={{ __html: totalBalance }} />
    </StyledChartContainer>
  );
});

ChartDoughnut.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      total: PropTypes.number.isRequired,
      color: PropTypes.string.isRequired
    })
  ).isRequired
};