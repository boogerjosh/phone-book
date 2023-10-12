"use client";

import React from 'react';
import styled from "@emotion/styled";

const Wrapper = styled.main`
  max-width: 1280px;
  width: 100%;
  min-height: 100vh;
  margin: auto;
  display: flex;
`

const MaxWidthWrapper = ({children}) => {
  return (
    <Wrapper>
      {children}
    </Wrapper>
  )
}

export default MaxWidthWrapper