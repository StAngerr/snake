import React, { useCallback, useState } from 'react';
import ReactDOM from 'react-dom';

import { AppRouter } from './AppRouter';
import { Card, SnackBarEnum } from './common/types/SnackBar';
import { SnackBarProvider } from './common/context/SnackBarContext';
import { SnackBar } from './common/components/SnackBar/SnackBar';

export const App = () => {
  // const [snackBar, setSnackBar] = useState<React.ReactPortal | null>();
  const [snackBarCards, setSnackBarCards] = useState<Card[]>([]);

  const showSnackBar = useCallback(
    (type: SnackBarEnum, text: string) => {
      setSnackBarCards([
        ...snackBarCards,
        {
          type,
          text,
          date: new Date(),
        },
      ]);
    },
    [snackBarCards],
  );

  return (
    <SnackBarProvider value={showSnackBar}>
      <AppRouter />
      {ReactDOM.createPortal(
        <SnackBar updateCards={setSnackBarCards} cards={snackBarCards} />,
        document.getElementById('snackBar'),
      )}
    </SnackBarProvider>
  );
};
