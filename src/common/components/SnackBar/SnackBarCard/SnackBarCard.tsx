import './SnackBarCard.scss';
import React from 'react';

interface Props {
  text: string;
}

export const SnackBarCard = ({ text }: Props) => {
  return (
    <div>
      <h4>Card header</h4>
      <p>{text}</p>
    </div>
  );
};
