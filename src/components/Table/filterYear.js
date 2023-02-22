import { TextField, Autocomplete } from '@mui/material';
import React, { useMemo, useCallback } from 'react';
import PropTypes from 'prop-types';

const options = [
  { label: '2019', id: 1 },
  { label: '2020', id: 2 },
  { label: '2021', id: 3 },
  { label: '2022', id: 4 },
  { label: '2023', id: 5 },
];

export const FilterYear = ({ getYear }) => {
  const currentYear = useMemo(
    () => new Date().toLocaleString('default', { year: 'numeric' }),
    []
  );

  const handleYearChange = useCallback(
    selectedOption => {
      if (selectedOption) {
        getYear(selectedOption.label);
      }
    },
    [getYear]
  );

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
          '& .MuiInputBase-input': {},
          '& .MuiAutocomplete-paper': {
            background: 'rgba(255, 255, 255, 0.7)',
            boxShadow: '0px 6px 15px rgba(0, 0, 0, 0.1)',
            borderRadius: '20px',
            backdropFilter: 'blur(25px)',
          },
          '& .MuiAutocomplete-listbox': {
            borderRadius: '20px',
            fontFamily: 'Circe',
          },
        },
      ]}

      id="filter-year-autocomplete"
      options={options}
      onChange={(_, selectedOption) => handleYearChange(selectedOption)}
      isOptionEqualToValue={(option, value) => option.id === value.id}
      renderInput={params => (
        <TextField
          {...params}
          label={currentYear}
          variant="outlined"
          sx={{
            borderRadius: 30,
          }}
        />
      )}
    />
  );
};

FilterYear.propTypes = {
  getYear: PropTypes.func.isRequired,
};
