import React from 'react';
import { Input } from 'reactstrap';
import { Label } from 'reactstrap';
import { InputType } from 'reactstrap/types/lib/Input';

interface IProps {
  disabled?: boolean;
  value?: string;
  placeholder?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onFocus?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
  pattern?: string;
  size?: number;
  error?: boolean;
  type?: InputType;
  rows?: string;
  validation?: {
    isInValid: boolean;
    validationMsg?: string;
  };
  tabIndex?: number | undefined;
  innerRef?: React.Ref<HTMLInputElement | HTMLTextAreaElement>;
}

const TextInput: React.FunctionComponent<IProps> = React.memo(
  ({
    value,
    onChange,
    placeholder,
    className,
    pattern,
    size,
    error,
    type,
    rows,
    disabled,
    validation,
    onFocus,
    tabIndex = 0
  }: IProps) => {
    return (
      <>
        <Input
          disabled={disabled}
          className={`${error ? 'text-input-error' : className}`}
          placeholder={placeholder}
          onChange={onChange}
          value={value}
          pattern={pattern}
          size={size}
          type={type}
          rows={rows}
          onFocus={onFocus}
          tabIndex={tabIndex}
        />
        {validation && validation.isInValid ? (
          <Label className={'text-input-error-label'}>
            {validation.validationMsg
              ? validation.validationMsg
              : 'Invalid Field'}
          </Label>
        ) : null}
      </>
    );
  }
);

export { TextInput };
