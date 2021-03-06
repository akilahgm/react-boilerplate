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
  type?: InputType;
  rows?: string;
  validation?: {
    isInValid: boolean;
    validationMsg?: string;
  };
  tabIndex?: number | undefined;
  innerRef?: React.Ref<HTMLInputElement | HTMLTextAreaElement>;
  labelText?: string;
  labelClassName?: string;
}

const TextInput: React.FunctionComponent<IProps> = React.memo(
  ({
    value,
    onChange,
    placeholder,
    className,
    pattern,
    size,
    type,
    rows,
    disabled,
    validation,
    onFocus,
    tabIndex = 0,
    labelText,
    labelClassName
  }: IProps) => {
    return (
      <div className="">
        <div className="row">
          <div className="col">
            <Label className={labelClassName}>{labelText}</Label>
          </div>
          <div
            className="col"
            style={{ display: 'flex', flexDirection: 'column' }}
          >
            <div>
              <Input
                disabled={disabled}
                className={`default-text-input ${
                  validation && validation.isInValid ? 'text-input-error' : ''
                } ${className}`}
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
            </div>
            <div>
              {validation && validation.isInValid ? (
                <Label className={'text-input-error-label'}>
                  {validation.validationMsg
                    ? validation.validationMsg
                    : 'Invalid Field'}
                </Label>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    );
  }
);

export { TextInput };
