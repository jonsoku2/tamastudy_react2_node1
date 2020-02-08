/** @jsx jsx */
import React from 'react'
import { jsx, css } from '@emotion/core'
import colors from '../../../styles/color'

interface Props {
    onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void
    theme: 'primary' | 'secondary' | 'tertiary'
    size?: 'small' | 'medium' | 'big'
    disabled?: boolean
    width?: string | number
    height?: string | number
    fontSize?: string | number
}

// onClick 함수가 있을 때 : active
// onClick 함수가 없을 때 : inActive

const BackupButton: React.FC<Props> = ({ theme, size = 'medium', onClick, children, disabled, width, height, fontSize, ...rest }) => {
    return (
        <button
            onClick={onClick}
            disabled={disabled}
            css={[
                css`
                    cursor: ${!onClick && 'not-allowed'};
                    pointer-events: ${!onClick && 'none'};
                `,
                style,
                themes[theme],
                sizes[size],
                { width, height, fontSize },
            ]}
            {...rest}
        >
            {children}
        </button>
    )
}

const style = css`
    text-transform: uppercase;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 0.25rem;
    &:focus {
        box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.2);
    }
    &:disabled {
        cursor: not-allowed;
    }
    svg {
        width: 1em;
        margin-right: 1em;
    }
`

const themes = {
    primary: css`
        background: ${colors.primary.blue};
        color: ${colors.primary.white.primary};
        svg {
            fill: white;
        }
        &:hover:enabled {
            opacity: 0.95;
        }
        &:active:enabled {
            opacity: 0.95;
        }
        &:disabled {
            background: ${colors.primary.grey.silver};
        }
    `,
    secondary: css`
        background: ${colors.brand.line};
        color: ${colors.primary.white.primary};
        svg {
            fill: #343a40;
        }
        &:hover:enabled {
            opacity: 0.95;
        }
        &:active:enabled {
            opacity: 0.95;
        }
        &:disabled {
            background: ${colors.primary.grey.silver};
        }
    `,
    tertiary: css`
        background: none;
        color: ${colors.primary.black.primary};
        &:hover:enabled {
            background: ${colors.system.grey};
        }
        &:active:enabled {
            background: ${colors.system.grey};
        }
        &:disabled {
            background: ${colors.primary.grey.silver};
        }
    `,
}
const sizes = {
    small: css`
        font-size: 0.75rem;
        padding: 0.5rem 1.5rem;
    `,
    medium: css`
        font-size: 1rem;
        padding: 1rem 2rem;
    `,
    big: css`
        font-size: 1.125rem;
        padding: 1.5rem 2.5rem;
    `,
}

export default BackupButton
