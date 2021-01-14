import React from 'react';
import PropTypes from 'prop-types';
import { Error, Input } from './style';

const TextField = (props) => {
  const {
    value, error, onChange, onBlur,
  } = props;
  return (
    <>
      <Input type="text" value={value} onChange={onChange} onBlur={onBlur} />
      {
        (error) ? <Error>{error}</Error> : ''
      }
    </>
  );
};
export default TextField;
TextField.propTypes = {
  value: PropTypes.string.isRequired,
  error: PropTypes.string,
  onChange: PropTypes.func,
  onBlur: PropTypes.string.isRequired,
};
TextField.defaultProps = {
  error: '',
  onChange: '',
};
