import React from 'react';
import NumberFormat from 'react-number-format';
import './styles.scss';
function CurrencyFormat(props) {
  const { inputRef, onChange, ...other } = props;
  return (
    <NumberFormat
      {...other}
      getInputRef={inputRef}
      autoComplete="off"
      className="input-style"
      type="tel"
      onValueChange={values => {
        onChange({
          target: {
            value: values.value,
          },
        });
      }}
      allowNegative={false}
      thousandSeparator
      prefix="  &#8362;  "
      allowEmptyFormatting={false}
    />
  );
}

export default CurrencyFormat;
