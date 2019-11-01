import React, { useCallback, useState } from 'react';
import { Props as DialogProps, Dialog } from './Dialog';

interface Props extends DialogProps {
  btnText?: string;
  faIconName?: string;
  isOpened?: boolean;
  children: React.ReactNode;
}

export const BtnDialog = ({ isOpened: opened, faIconName, btnText, children, onClose, ...dialogProps }: Props) => {
  const [isOpened, setIsOpened] = useState<boolean>(opened || false);

  const openDialog = useCallback(() => {
    setIsOpened(true);
  }, [setIsOpened]);

  const closeDialog = useCallback(() => {
    setIsOpened(false);
    if (onClose) {
      onClose();
    }
  }, [onClose]);

  return (
    <>
      <button onClick={openDialog}>
        <span className="btn-text">{btnText}</span>
        {faIconName && <i title="name" className={`fas ${faIconName}`} />}
      </button>
      {isOpened && (
        <Dialog onClose={closeDialog} {...dialogProps}>
          {children}
        </Dialog>
      )}
    </>
  );
};
