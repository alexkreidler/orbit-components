// @flow
import React, { useContext, useCallback, useEffect } from "react";
import styled, { css } from "styled-components";

import defaultTheme from "../../defaultTheme";
import media from "../../utils/mediaQuery";
import { StyledModalFooter } from "../ModalFooter";
import { ModalContext } from "../ModalContext";

import type { Props } from "./index";

export const StyledModalSection = styled.section`
  width: 100%;
  padding: ${({ theme }) => `${theme.orbit.spaceLarge} ${theme.orbit.spaceMedium}`};
  background-color: ${({ theme, suppressed }) =>
    suppressed ? theme.orbit.paletteCloudLight : theme.orbit.paletteWhite};
  border-bottom: 1px solid ${({ theme }) => theme.orbit.paletteCloudNormal};
  box-sizing: border-box;

  &:first-of-type {
    border-top: ${({ suppressed, theme }) =>
      suppressed && `1px solid ${theme.orbit.paletteCloudNormal}`};
    border-top-left-radius: ${({ isMobileFullPage }) =>
      !isMobileFullPage && "9px"}; // TODO: create token
    border-top-right-radius: ${({ isMobileFullPage }) =>
      !isMobileFullPage && "9px"}; // TODO: create token
    margin-top: ${({ suppressed, theme }) => suppressed && theme.orbit.spaceLarge};
  }

  &:last-of-type {
    border-bottom: ${({ suppressed, theme }) =>
      suppressed ? `1px solid ${theme.orbit.paletteCloudNormal}` : "0"};
    border-bottom-left-radius: ${({ isMobileFullPage }) =>
      !isMobileFullPage && "9px"}; // TODO: create token
    border-bottom-right-radius: ${({ isMobileFullPage }) =>
      !isMobileFullPage && "9px"}; // TODO: create token
    & ~ ${StyledModalFooter} {
      margin-top: ${({ theme, suppressed }) => suppressed && theme.orbit.spaceMedium};
    }
    &:not(:last-child) {
      border-radius: 0;
    }
  }

  ${media.largeMobile(css`
    padding: ${({ theme }) => theme.orbit.spaceXXLarge};

    &:first-of-type {
      margin-top: ${({ suppressed, theme }) => suppressed && theme.orbit.spaceXXLarge};
    }
    &:last-of-type {
      & ~ ${StyledModalFooter} {
        padding-top: ${({ suppressed }) => !suppressed && "0"};
        margin-top: 0;
      }
    }
  `)};
`;

StyledModalSection.defaultProps = {
  theme: defaultTheme,
};

const ModalSection = ({ children, suppressed, dataTest }: Props) => {
  const {
    removeHasModalSection,
    setHasModalSection,
    manageFocus,
    isMobileFullPage,
    setDimensions,
    decideFixedFooter,
  } = useContext(ModalContext);

  const callContextFunctions = useCallback(() => {
    if (setDimensions) setDimensions();
    if (decideFixedFooter) decideFixedFooter();
  }, [decideFixedFooter, setDimensions]);

  useEffect(() => {
    callContextFunctions();
    if (manageFocus) manageFocus();
    if (setHasModalSection) setHasModalSection();
    return () => {
      if (removeHasModalSection) removeHasModalSection();
    };
  }, [callContextFunctions, manageFocus, removeHasModalSection, setHasModalSection]);

  return (
    <StyledModalSection
      suppressed={suppressed}
      data-test={dataTest}
      isMobileFullPage={isMobileFullPage}
    >
      {children}
    </StyledModalSection>
  );
};

export default ModalSection;
