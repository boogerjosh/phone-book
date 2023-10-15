"use client";

import React, { ReactNode } from "react";
import styled from "@emotion/styled";

const Wrapper = styled.main`
  max-width: 1280px;
  width: 100%;
  box-sizing: border-box;
  margin: auto;
`;

interface MaxWidthWrapperProps {
  children: ReactNode;
}

const MaxWidthWrapper = ({ children }: MaxWidthWrapperProps) => {
  return <Wrapper>{children}</Wrapper>;
};

export default MaxWidthWrapper