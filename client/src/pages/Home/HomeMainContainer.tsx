import React from 'react';
import { css } from '@emotion/core';

interface Props {}

const HomeMainContainer: React.FC<Props> = () => {
  return (
    <div>
      <div
        css={css`
          height: 80px;
          background-color: blue;
          color: white;
          display: flex;
          align-items: center;
          justify-content: center;
        `}
      >
        <div
          css={css`
            width: 100px;
            height: 50px;
            background-color: brown;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 1.5rem;
            text-transform: uppercase;
            color: yellow;
          `}
        >
          LOGO
        </div>
      </div>
      <div
        css={css`
          height: 200px;
          background-color: grey;
          color: white;
        `}
      >
        SLIDER
      </div>
      <div
        css={css`
          height: calc(100vh - 320px);
          background-color: black;
          color: white;
        `}
      >
        contents
      </div>
      <div
        css={css`
          height: 40px;
          background-color: green;
          color: white;
        `}
      >
        footer
      </div>
    </div>
  );
};

export default HomeMainContainer;
