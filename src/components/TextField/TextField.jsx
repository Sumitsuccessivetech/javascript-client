import React from 'react';
import PropTypes from 'prop-types';
import { Error, Input } from './style';

const TextField = (props) => {
  const {
    value, disabled, error, onChange,
  } = props;
  return (
    <>
      <Input type="text" value={value} onChange={onChange} disabled={disabled} />
      {
        (error) ? <Error>{error}</Error> : ''
      }
    </>
  );
};
export default TextField;
TextField.propTypes = {
  value: PropTypes.string,
  disabled: PropTypes.bool,
  error: PropTypes.string,
  onChange: PropTypes.string,
};
TextField.defaultProps = {
  value: '',
  disabled: false,
  error: null,
  onChange: '',
};
