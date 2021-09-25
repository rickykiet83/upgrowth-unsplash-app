import React, { BaseSyntheticEvent, InputHTMLAttributes } from 'react';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  onChange?: (...args: any[]) => any;
  onKeyUp?: (...args: any[]) => any;
}

const Input: React.FC<InputProps> = (props: any) => {
  const { className, children, onChange, onKeyUp, ...rest } = props;

  const handleOnChange = (e: BaseSyntheticEvent) => {
    if (onChange) {
      onChange(e.target.value);
    }
    return null;
  };

  const handleOnKeyUp = (e: BaseSyntheticEvent) => {
    if (onKeyUp) {
      onKeyUp(e);
    }
  };

  return (
    <input
      className={className}
      onChange={handleOnChange}
      onKeyUp={handleOnKeyUp}
      autoComplete='off'
      autoCorrect='off'
      autoCapitalize='off'
      spellCheck='false'
      {...rest}
    />
  );
};

export default Input;
