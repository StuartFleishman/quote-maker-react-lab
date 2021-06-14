// TODO: Create action creators as defined in tests

export const addQuote = (q) => ({type: 'ADD_QUOTE', quote: q})

export const removeQuote = quoteId => ({type: 'REMOVE_QUOTE', quoteId})

export const upvoteQuote = quoteId => {
  return {
    type: 'UPVOTE_QUOTE', 
    quoteId 
  }
}

export const  downvoteQuote = quoteId => ({type: 'DOWNVOTE_QUOTE', quoteId})
