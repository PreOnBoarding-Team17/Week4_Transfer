import React from "react";
import type { PropsWithChildren } from "react";
import styled from "styled-components";

const Container = ({ children }: PropsWithChildren<{}>) => {
  return (
    <Base>
      <Box>{children}</Box>
    </Base>
  );
};

export default Container;

const Base = styled.div`
  margin: 0;
  padding: 0;
  max-width: 100%;
  width: 100%;
  height: 100%;
`;

const Box = styled.div`
  position: absolute;
  inset: 0px;
  overflow: scroll;
  margin: 0 auto;
  padding: 32px 40px;
  max-width: 1024px;
`;
