import React, { useCallback, useEffect, useState } from 'react';

import './SnackBar.scss';
import { Card } from '../../types/SnackBar';
import { SnackBarCard } from './SnackBarCard/SnackBarCard';

interface Props {
  cards: Card[];
  updateCards: (cards: Card[]) => void;
}

export const SnackBar = ({ cards, updateCards }: Props) => {
  const [lifeTimer, setLifeTimer] = useState(null);

  useEffect(() => {
    if (cards.length && !lifeTimer) {
      setLifeTimer(
        setInterval(() => {
          const currentDate = new Date().getTime();
          const filtered = cards.filter((card: Card) => currentDate - card.date.getTime() < 3000);
          updateCards(filtered);
        }, 1000),
      );
    } else if (!cards.length && lifeTimer) {
      clearInterval(lifeTimer);
      setLifeTimer(null);
    }
  }, [cards]);

  return (
    <div className="snack-bar-container">
      {cards.map((card: Card) => (
        <SnackBarCard key={card.date.getTime()} text={card.text} />
      ))}
    </div>
  );
};
