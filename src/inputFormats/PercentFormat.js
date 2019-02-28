import React from 'react';
import NumberFormat from 'react-number-format';

function PercentFormat(props) {
  const { inputRef, onChange, ...other } = props;

  return (
    <NumberFormat
      {...other}
      getInputRef={inputRef}
      autoComplete="off"
      type="tel"
      className="input-style"
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
