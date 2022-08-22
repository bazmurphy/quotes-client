import React from 'react';
import './App.css';
import Info from './Info';

function App() {

  const [quote, setQuote] = React.useState([]);

  const [refresh, setRefresh] = React.useState(0)
   
  React.useEffect(() => {
    fetch(`https://cyf-bazmurphy-quotes.herokuapp.com/quotes/random`)
      .then(res => res.json())
      .then(data => setQuote(data))
      .catch(error => console.log(error));
  }, [refresh]);

  const getAnotherQuote = () => {

    // fetch(`https://cyf-bazmurphy-quotes.herokuapp.com/quotes/random`)
    // .then(res => res.json())
    // .then(data => setQuote(data))
    // .catch(error => console.log(error));

    // ^ this is not DRY but i want to FETCH again onClick of the button

    setRefresh(Math.random())
    // ^so i came up with this sillyness to trigger a State Change, to trigger a refresh, to trigger a new fetch!
    // console.log(refresh);
  }


  return (
    <div className="App">
      <Info />
      <div className="functionality-container">
        <button className="functionality-button" onClick={getAnotherQuote}>Get Another Quote</button>
      </div>
      <div className="quote-container">
        <p className="quote-text">"{quote.quote}"</p>
        <p className="quote-author">- {quote.author}</p>
      </div>
    </div>
  );

};

export default App;
