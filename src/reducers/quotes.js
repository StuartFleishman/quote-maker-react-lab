export default (state = [], action) => {
  let newState 

  switch (action.type) {
    // Do something here based on the different types of actions
    case 'ADD_QUOTE': 
      return [...state, action.quote]
    case 'UPVOTE_QUOTE':
      newState = state.map(quote => {
        if (quote.id === action.quoteId) {
          return { ...quote, votes: quote.votes += 1}
        }
        else {
          return quote;
        }
      })
      return newState; 
    case 'DOWNVOTE_QUOTE': 
      newState = state.map(quote => {
        if(quote.id === action.quoteId && quote.votes > 0) {
          return {...quote, votes: --quote.votes}
        }
        else {
          return quote
        }
      })
      return newState
    case 'REMOVE_QUOTE': 
      return state.filter(quote => quote.id !== action.quoteId)
    
    default:
      // If this reducer doesn't recognize the action type, or doesn't
      // care about this specific action, return the existing state unchanged
      return state
  }
}
