import React, { Component } from 'react';
import NumberFormat from 'react-number-format';

function YearsFormat(props) {
  const { inputRef, onChange, ...other } = props;

  return (
    <NumberFormat
      {...other}
      dir="rtl"
      getInputRef={inputRef}
      autoComplete="off"
      type="tel"
      onValueChange={values => {
        onChange({
          target: {
            value: values.value,
          },
        });
      }}
      allowNegative={false}
      suffix=" שנים "
    />
  );
}

export default YearsFormat;
