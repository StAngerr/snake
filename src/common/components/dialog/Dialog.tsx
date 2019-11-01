import React, { useCallback } from 'react';
import './dialog.scss';

export interface Props {
  title?: string;
  children: React.ReactNode;
  onClose?: () => void;
}

const closeBtnId = 'closeBtn';
const wrapperId = 'modalWrapper';

export const Dialog = ({ title = '', children, onClose }: Props) => {
  const handleClose = useCallback(
    (e: React.MouseEvent) => {
      e.stopPropagation();
      // @ts-ignore
      if (onClose && (e.target.id === closeBtnId || e.target.id === wrapperId)) {
        onClose();
      }
    },
    [onClose],
  );

  return (
    <div id={wrapperId} className="modal-wrapper" onClick={handleClose}>
      <header className="dialog-header">
        <h4>{title}</h4>
        <button id={closeBtnId} onClick={handleClose}>
          close
        </button>
      </header>
      <section className="modal-body">{children}</section>
    </div>
  );
};
