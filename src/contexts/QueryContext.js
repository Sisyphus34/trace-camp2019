import React from 'react'
import useRouter from "hooks/useRouter";

const QueryContext = React.createContext();
export default QueryContext;

export const QueryProvider = (props) => {
// import router props
  const { history, match, location } = useRouter();
  const initialQuery = match.params.query || location.pathname.split('/')[2] || "";
// create state
  const [query, setQuery] = React.useState(initialQuery)
  const [querySubmission, setQuerySubmission] = React.useState(initialQuery);
// create handlers
  const queryHandler = (event) => setQuery(event.target.value)
  const querySubmitHandler = (event) => {
    event.preventDefault();
    history.push(`/search/${query}`)
    setQuerySubmission(query)
    setQuery('')
  }
// update state when url changes
  React.useEffect(() => {
    setQuery(query)
  }, [match.params.query])
// value for provider
  const value = {
    query,
    queryHandler,
    querySubmitHandler,
    querySubmission,
  }

  return <QueryContext.Provider value={value}>{props.children}</QueryContext.Provider>
}