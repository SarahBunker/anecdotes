import { useState } from 'react'

function getRndInteger(min, max) {
  // where min and max are both included
  return Math.floor(Math.random() * (max - min) ) + min;
}

const Button = ({clickFunction, text}) => {
  return <button onClick={clickFunction}>{text}</button>
}

const Quote = ({quote}) => {
  let text = quote.text;
  return (<p>{text}</p>)
}

const Votes = ({quote}) => {
  let votes = quote.votes;
  return (<p>---Number of votes: {votes}</p>)
}

const DisplayQuoteWithVotes =({quote}) => {
  return (
    <>
    <Quote quote={quote} />
    <Votes quote={quote} />
    </>
  )
}

const App = () => {
  const quotes = [
    {votes: 0, text: "If it hurts, do it more often."},
    {votes: 0, text: "Adding manpower to a late software project makes it later!"},
    {votes: 0, text: "The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time."},
    {votes: 0, text: "Any fool can write code that a computer can understand. Good programmers write code that humans can understand."},
    {votes: 0, text: "Premature optimization is the root of all evil."},
    {votes: 0, text: "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it."},
    {votes: 0, text: "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients."},
  ]
  const [anecdotes, setAnecdotes] = useState(quotes);

  function randomInteger() {
    return getRndInteger(0, Object.keys(quotes).length - 1)
  }

  const [index, setIndex] = useState(randomInteger())
  let selectedQuote = anecdotes[index];
  let mostVotesQuote = anecdotes.reduce( (maxVotesQuote, currentQuote) => {
    if (currentQuote.votes > maxVotesQuote.votes) {
      maxVotesQuote = currentQuote;
    }
    return maxVotesQuote;
  })

  let nextAnecdoteFunction = () => {setIndex(randomInteger())};
  let voteFunction = () => {
    let clonedQuotes = [...anecdotes];
    clonedQuotes[index].votes += 1;
    setAnecdotes(clonedQuotes);
  };

  return (
    <>
    <div>
      <h1>Anecdote of the Day</h1>
      <DisplayQuoteWithVotes quote={selectedQuote} />
      <Button clickFunction={voteFunction} text="vote" />
      <Button clickFunction={nextAnecdoteFunction} text="next anecdote" />
    </div>
    <div>
      <h1>Anecdote with most votes</h1>
      <DisplayQuoteWithVotes quote={mostVotesQuote} />
    </div>
    </>
  )
}

export default App

// const [quote1, setQuote1] = useState({votes: 0, text: "If it hurts, do it more often."});
// const [quote2, setQuote2] = useState({votes: 0, text: "Adding manpower to a late software project makes it later"});
// const [quote3, setQuote3] = useState({votes: 0, text: "The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time."});
// const [quote4, setQuote4] = useState({votes: 0, text: "Any fool can write code that a computer can understand. Good programmers write code that humans can understand."});
// const [quote5, setQuote5] = useState({votes: 0, text: "Premature optimization is the root of all evil."});
// const [quote3, setQuote3] = useState({votes: 0, text: ""});
// const [quote3, setQuote3] = useState({votes: 0, text: ""});
// const [quote3, setQuote3] = useState({votes: 0, text: ""});
// const [quote3, setQuote3] = useState({votes: 0, text: ""});
// const [quote3, setQuote3] = useState({votes: 0, text: ""});

// const anecdotes = [
//   'If it hurts, do it more often.',
//   'Adding manpower to a late software project makes it later!',
//   'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
//   'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
//   'Premature optimization is the root of all evil.',
//   'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
//   'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.'
// ]
