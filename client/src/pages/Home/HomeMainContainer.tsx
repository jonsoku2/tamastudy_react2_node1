import React from 'react';
import Button from '../../components/atoms/Button/index';
import Typography from '../../components/atoms/Typography';

const HomeMainContainer = () => {
  return (
    <div>
      <Typography variant="h1">안녕하세요</Typography>
      <Button text="registry" onClick={() => alert('registry')} />
    </div>
  );
};

export default HomeMainContainer;
