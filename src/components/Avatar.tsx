import React from "react";
import type { HTMLAttributes } from "react";
import styled from "styled-components";
import colors from "styles/colors";

interface Props extends HTMLAttributes<HTMLDivElement> {
  text: string;
}

const Avatar = ({ text, ...rest }: Props) => {
  return (
    <Base {...rest}>
      <Text data-text={text}>{text.substring(0, 1)}</Text>
    </Base>
  );
};

export default Avatar;

const Base = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  width: 24px;
  height: 24px;
  font-size: 12px;
  font-weight: 700;
  text-transform: uppercase;
  line-height: 24px;
`;

const Text = styled.span`
  color: ${colors.white};
  background-color: ${colors.teal500};
  border-radius: 100%;
  text-align: center;
  width: 100%;
  font-size: 12px;
`;
