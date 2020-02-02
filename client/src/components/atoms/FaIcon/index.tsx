import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as Icons from '@fortawesome/free-solid-svg-icons';
import { SizeProp } from '@fortawesome/fontawesome-svg-core';

interface Props {
  icon: 'faCoffee' | 'faSpinner';
  spin?: boolean;
  size?: SizeProp;
  color?: string;
  onClick?: () => void;
}

const FaIcon: React.FC<Props> = ({ icon, spin, size, color, onClick, ...rest }) => {
  return (
    <FontAwesomeIcon
      icon={Icons[icon]}
      size={size}
      color={color}
      spin={spin}
      onClick={onClick}
      {...rest}
    />
  );
};

export default FaIcon;
