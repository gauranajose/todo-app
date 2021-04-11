import React from 'react';

const completedContext = React.createContext({
  completedHandler: () => {}
});

export default completedContext;