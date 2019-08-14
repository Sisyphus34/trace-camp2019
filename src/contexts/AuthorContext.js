import React from 'react'

const AuthorContext = React.createContext();

export default AuthorContext;

export const AuthorContextProvider = props => {
    const [author, setAuthor] = React.useState("");
  
    const value = {
      author,
      setAuthor
    };
  
    return (
      <AuthorContext.Provider value={value}>
        {props.children}
      </AuthorContext.Provider>
    );
  };