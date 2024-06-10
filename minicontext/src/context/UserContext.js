import React from 'react';

const UserContext = React.createContext(null);

// We will wrap all our components with UserContext, so all the components can easily access the data

export default UserContext;


// UserContext is now a context object. This object has two main parts:
// Provider: A component that supplies the context value to its children.
// Consumer: A component that subscribes to context changes.