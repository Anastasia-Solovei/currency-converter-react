import React from 'react';

import sprite from '../../images/svg_sprite.svg';

export default function Logo() {
  return (
    <svg width="40px" height="40px">
      <use href={sprite + '#icon-wallet'}></use>
    </svg>
  );
}
