import { Autocomplete, TextField } from '@mui/material';
import React, { useMemo } from 'react';

import PropTypes from 'prop-types';

const options = [
  { label: 'January', id: 1 },
  { label: 'February', id: 2 },
  { label: 'March', id: 3 },
  { label: 'April', id: 4 },
  { label: 'May', id: 5 },
  { label: 'June', id: 6 },
  { label: 'July', id: 7 },
  { label: 'August', id: 8 },
  { label: 'September', id: 9 },
  { label: 'October', id: 10 },
  { label: 'November', id: 11 },
  { label: 'December', id: 12 },
];

export const FilterMonth = ({ getMonth }) => {
  const currentMonth = useMemo(() => {
    return options.find(option => option.id === new Date().getMonth() + 1)
      .label;
  }, []);

  const handleMonthChange = selectedOption => {
    if (selectedOption) {
      getMonth(selectedOption.id);
    }
  };

  return (
    <Autocomplete
      sx={[
        { width: 181 },
        { height: 50 },
        { borderRadius: 30 },
        {
          '& .MuiOutlinedInput-root': {
            borderRadius: 30,
          },
          '& .MuiInputBase-input': {
            fontFamily: 'Circe',
          },
          '& .MuiAutocomplete-paper': {
            background: 'rgba(255, 255, 255, 0.7)',
            boxShadow: '0px 6px 15px rgba(0, 0, 0, 0.1)',
            borderRadius: '20px',
            backdropFilter: 'blur(25px)',
          },
          '& .MuiAutocomplete-option': {
            fontFamily: 'Circe',
            borderRadius: '30px',
          },
          '& .MuiAutocomplete-listbox': {
            borderRadius: '20px',
            fontFamily: 'Circe',
          },
        },
      ]}

      id="filter-month-autocomplete"
      options={options}
      onChange={(_, selectedOption) => handleMonthChange(selectedOption)}
      isOptionEqualToValue={(option, value) => option.id === value.id}
      renderInput={params => (
        <TextField
          {...params}
          label={currentMonth}
          sx={{ borderColor: 'transparent' }}
        />
      )}
    />
  );
};

FilterMonth.propTypes = {
  getMonth: PropTypes.func.isRequired,
};
