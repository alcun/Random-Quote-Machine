import React, {useEffect, useState} from 'react';
import './App.scss';
import {FaTwitter} from "react-icons/fa";

let apiUrl = 'https://type.fit/api/quotes'



function App() {
  const [quote, setQuote] = useState("Click to fetch a quote");
  const [author, setAuthor] = useState("alcun");
  const [randomNumber, setRandomNumber] = useState (0)
  const [quotesArray, setquotesArray] = useState (null)
 

  const fetchQuotes = async (url) => {
    const response = await fetch(url)
    const parsedJson = await response.json()
    setquotesArray (parsedJson)
  }

  useEffect(() => {
    fetchQuotes(apiUrl)
    }, [apiUrl])


  const randomArrayQuote = () => {
    let randomInteger = Math.floor(quotesArray.length*Math.random())
    setRandomNumber(randomInteger)
    setQuote(quotesArray[randomInteger].text)
    if (quotesArray[randomInteger].author == null){
      setAuthor('Anon')
    } else {
      setAuthor(quotesArray[randomInteger].author)
    }
  }


  //this was to test button functionality before API was added 
  // const newQuoteAndAuthor = () => {
  //   setQuote("this is the new quote");
  //   setAuthor("jim mk 2")
  // }

  //this was to test a taking key values from local array before API fetching 
  //   const ourQuotesArray = [
  //   {quote: "this is example quote 1", author:"example author 1"}, 
  //   {quote: "this is example quote 2", author:"example author 2"}, 
  //   {quote: "this is example quote 3", author:"example author 3"}
  // ]


  
  return (
    <div className="App">
      <header className="App-header">
        <div id="quote-box">
          {/* <h3>Random Number: {randomNumber}</h3> */}
          <p id="text">
            "{quote}" 
          </p>
          <p id="author" >
            - {author}
          </p>
          <br></br>
            <div class="container">
                   <a id="tweet-quote" href={encodeURI('http://www.twitter.com/intent/tweet?text -${quote} -${author}')}
                   ><FaTwitter />
                   </a>
                   <button id="new-quote" onClick={() => randomArrayQuote()}
                   >New Quote
                   </button>
            </div>
        </div>
        <footer><a href="https://alcun.github.io/Portfolio/">© alcun</a>-2022</footer>
      </header>
    </div>
  ); 
}

export default App;
