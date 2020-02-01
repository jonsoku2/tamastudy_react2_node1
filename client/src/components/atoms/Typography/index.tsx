/** @jsx jsx */
import React, { ElementType } from 'react';
import { jsx, css } from '@emotion/core';
import colors from '../../../styles/color';
import useTheme from '../../../utils/useTheme';

interface Props {
  variant?:
    | 'h1'
    | 'h2'
    | 'navTitle'
    | 'h3'
    | 'navText'
    | 'body1'
    | 'body2'
    | 'body3'
    | 'body4'
    | 'caption'
    | 'span';
  display?: 'initial' | 'block' | 'inline';
  color?: string;
  component?: ElementType;
}

const defaultVariantMapping = {
  h1: 'h1',
  h2: 'h2',
  navTitle: 'h2',
  h3: 'h3',
  navText: 'h3',
  body1: 'p',
  body2: 'p',
  body3: 'p',
  body4: 'p',
  caption: 'p',
  span: 'span',
};

const Typography: React.FC<Props> = ({
  variant = 'body1',
  color = colors.text.dark,
  display = 'block',
  component,
  ...other
}) => {
  const theme = useTheme();
  const Component = component ?? defaultVariantMapping[variant];
  return (
    <Component
      css={css(
        `
        font-family: ${theme.font.fontFamily};
        margin: ${theme.font.margin};
        padding: ${theme.font.padding};
        color: ${color};
        display: ${display};
      `,
        { ...theme.font[variant] },
      )}
      {...other}
    />
  );
};

export default Typography;
