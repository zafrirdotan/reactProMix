import React, { Component } from 'react';
import NumberFormat from 'react-number-format';

function PercentFormat(props) {
  const { inputRef, onChange, ...other } = props;

  return (
    <NumberFormat
      {...other}
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
      suffix=" % "
    />
  );
}

export default PercentFormat;
