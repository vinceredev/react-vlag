import React, { FC, InputHTMLAttributes } from 'react';

interface SwitchProps {
  checked?: boolean;
  disabled?: boolean;
}

const Switch: FC<SwitchProps & InputHTMLAttributes<HTMLInputElement>> = ({
  checked = false,
  disabled = false,
  ...rest
}) => {
  return (
    <div className="vlag-switch">
      <label className="vlag-switch__label">
        <div
          className={`vlag-switch__item ${checked ? 'vlag-switch__item-active' : ''} ${
            disabled ? 'vlag-switch__item-disabled' : ''
          }`}
          {...rest}
        >
          <div className="vlag-switch__item__box"></div>
          <div className="vlag-switch__item__dots"></div>
        </div>
      </label>
    </div>
  );
};

export default Switch;
