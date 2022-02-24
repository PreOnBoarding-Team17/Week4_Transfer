import React from "react";
import type { ButtonHTMLAttributes } from "react";
import { forwardRef } from "react";
import styled from "styled-components";
import colors from "styles/colors";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  fullWidth?: boolean;
}

const Button = forwardRef<HTMLButtonElement, Props>(function Button(
  { fullWidth = false, children, ...rest },
  forwardedRef
) {
  return (
    <Base ref={forwardedRef} fullWidth={fullWidth} {...rest}>
      <span>{children}</span>
    </Base>
  );
});

export default Button;

const Base = styled.button<{ fullWidth: boolean }>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: ${({ fullWidth }) => (fullWidth ? "100%" : "auto")};
  padding: 0 16px;
  height: 48px;
  border: 0 solid transparent;
  border-radius: 8px;
  background-color: ${colors.teal500};
  color: ${colors.white};
  font-size: 20px;
  font-weight: 500;
  white-space: nowrap;
  user-select: none;
  -webkit-font-smoothing: antialiased;
  transition: color 0.1s ease-in-out, background-color 0.1s ease-in-out;

  &:focus {
    outline: none;
  }
  &:disabled {
    opacity: 0.26;
    cursor: not-allowed;
  }
  &:active {
    background-color: ${colors.teal700};
  }
`;
