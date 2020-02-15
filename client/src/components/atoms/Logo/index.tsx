import React from 'react'
import { css } from '@emotion/core'

interface Props {
    title: 'LINE' | 'RAKUTEN'
    bgColor: string
}

const Logo: React.FC<Props> = ({ title, bgColor }) => {
    return (
        <div
            css={css`
                width: 100px;
                height: 50px;
                background-color: ${bgColor};
                display: flex;
                align-items: center;
                justify-content: center;
                text-transform: uppercase;
                font-size: 1.5rem;
            `}
        >
            {title}
        </div>
    )
}

export default Logo
