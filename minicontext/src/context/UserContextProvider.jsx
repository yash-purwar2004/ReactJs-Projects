import React from 'react';
import UserContext from './userContext';

// A Context Provider is a component that provides a context value to its child components.
// Any component inside the provider can access and consume the context value.

const UserContextProvider = ({ children }) => {
  const [user, setUser] = React.useState(null);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;

// UserContextProvider is a functional component.
// It receives children as a prop. children represents any components nested inside UserContextProvider.


// React.useState(null) initializes a state variable user with null as the default value.
// setUser is a function to update the user state.


// UserContext.Provider wraps around children. This means any component inside UserContextProvider can access the context value.
// The value prop of the Provider is an object { user, setUser }. This object contains:
// user: The current state of the user.
// setUser: The function to update the user state.


// This line exports the UserContextProvider component so it can be imported and used in other parts of the application.