import React from 'react';

const SnackContext = React.createContext();

const { Provider, Consumer } = SnackContext;

export { Provider, Consumer };
export default SnackContext;