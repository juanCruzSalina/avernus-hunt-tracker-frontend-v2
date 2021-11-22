import { darken } from 'polished';
import { css } from 'styled-components';
export const getButtonVariants = (
  variant: 'primary' | 'secondary' | undefined,
  isInverted: boolean | undefined,
) => {
  if (variant === 'primary') {
    if (isInverted) {
      return css`
        color: ${(props) => props.theme.colors.dark};
        border: 2px solid ${(props) => props.theme.colors.primary};
        background-color: ${(props) => props.theme.colors.light};
        &:hover {
          border: 2px solid ${(props) => darken('0.2', props.theme.colors.primary)};
          background-color: ${(props) => props.theme.colors['grey-700']};
        }
      `;
    } else {
      return css`
        color: ${(props) => props.theme.colors.light};
        border: 2px solid ${(props) => props.theme.colors.primary};
        background-color: ${(props) => props.theme.colors.primary};
        &:hover {
          border: 2px solid ${(props) => darken('0.1', props.theme.colors.primary)};
          background-color: ${(props) => darken('0.1', props.theme.colors.primary)};
        }
      `;
    }
  } else if (variant === 'secondary') {
    if (isInverted) {
      return css`
        color: ${(props) => props.theme.colors.dark};
        border: 2px solid ${(props) => props.theme.colors.secondary};
        background-color: ${(props) => props.theme.colors.light};
        &:hover {
          border: 2px solid ${(props) => darken('0.2', props.theme.colors.secondary)};
          background-color: ${(props) => props.theme.colors['grey-700']};
        }
      `;
    } else {
      return css`
        color: ${(props) => props.theme.colors.light};
        border: 2px solid ${(props) => props.theme.colors.secondary};
        background-color: ${(props) => props.theme.colors.secondary};
        &:hover {
          border: 2px solid ${(props) => darken('0.1', props.theme.colors.secondary)};
          background-color: ${(props) => darken('0.1', props.theme.colors.secondary)};
        }
      `;
    }
  }

  if (isInverted) {
    return css`
      border: 2px solid #0001;
      color: ${(props) => props.theme.colors.light};
      background-color: ${(props) => props.theme.colors['grey-100']};
      &:hover {
        background-color: ${(props) => props.theme.colors['grey-200']};
      }
    `;
  }
  return css`
    border: 2px solid ${(props) => props.theme.colors['grey-700']};
    background-color: ${(props) => props.theme.colors['grey-700']};
    &:hover {
      border: 2px solid ${(props) => props.theme.colors['grey-500']};
      background-color: ${(props) => props.theme.colors['grey-500']};
    }
  `;
};
