import React from 'react';

const SnackBarContext = React.createContext(null);

export const SnackBarProvider = SnackBarContext.Provider;
export const SnackBarConsumer = SnackBarContext.Consumer;

export default SnackBarContext;
