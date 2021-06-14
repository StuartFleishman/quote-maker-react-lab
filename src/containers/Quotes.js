import React, { Component } from 'react';
import { connect } from 'react-redux';
import QuoteCard from '../components/QuoteCard';
import {addQuote, removeQuote, upvoteQuote, downvoteQuote} from '../actions/quotes'

class Quotes extends Component {

  render() {
    const renderQuotes = this.props.quotes.map((q, i) => {
      return <QuoteCard key={i} quote={q} removeQuote={this.props.removeQuote} upvoteQuote={this.props.upvoteQuote} downvoteQuote={this.props.downvoteQuote} />
    })
    return (
      <div>
        <hr />
        <div className="row justify-content-center">
          <h2>Quotes</h2>
        </div>
        <hr />
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              {renderQuotes}
              {/*
                TODO:

                Render Quotes With QuoteCard component and pass down callback props for removing, upvoting and downvoting quotes
               */}
               {/* {this.renderQuotes()} */}
               {/* <QuoteCard content={this.props.quotes} remove={this.props.removeQuote} upVote={this.props.upvoteQuote} downVote={this.props.downvoteQuote} /> */}
            </div>
          </div>
        </div>
      </div>
    );
  }
}



const mapStateToProps = state => {
  return {
    quotes: state.quotes
  }
}

//add arguments to connect as needed
export default connect(mapStateToProps, {addQuote, removeQuote, upvoteQuote, downvoteQuote})(Quotes);
