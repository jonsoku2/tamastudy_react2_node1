import React from 'react';
import { css } from '@emotion/core';

interface Props {}

const HomeMainContainer: React.FC<Props> = () => {
  return (
    <div>
      <div
        css={css`
          height: 80px;
          background-color: black;
          color: white;
        `}
      >
        LOGO
        <div
          css={css`
            height: 200px;
            background-color: black;
            color: grey;
          `}
        >
          SLIDER
        </div>
        <div
          css={css`
            height: calc(100vh - 320px);
            background-color: black;
            color: black;
          `}
        >
          CONTENTS
        </div>
        <div
          css={css`
            height: 40px;
            background-color: black;
            color: white;
          `}
        >
          FOOTER
        </div>
      </div>
    </div>
  );
};

export default HomeMainContainer;
