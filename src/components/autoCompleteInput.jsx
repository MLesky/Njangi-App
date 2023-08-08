import React from 'react';
import PropTypes from 'prop-types';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';

const AutoCompleteInput = ({
  options,
  value,
  onChange,
  error,
  helperText,
  placeholder,
  variant,
  type,
  canInsert,
}) => {
  const handleInputChange = (event, newValue) => {
    onChange(newValue);
  };

  return (
    <Box>
      <Autocomplete
        freeSolo={canInsert}
        options={options}
        value={value}
        onChange={handleInputChange}
        renderInput={(params) => (
          <TextField
            {...params}
            label={placeholder}
            error={error}
            helperText={helperText}
            variant={variant}
            type={type}
            fullWidth
          />
        )}
      />
    </Box>
  );
};

AutoCompleteInput.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  error: PropTypes.bool,
  helperText: PropTypes.string,
  placeholder: PropTypes.string,
  canInsert: PropTypes.bool,
};

export default AutoCompleteInput;