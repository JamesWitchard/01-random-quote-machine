import {useState, useEffect} from "react";
import './App.css';
import QuoteBox from "./QuoteBox";

// Colours that are displayed
const COLOURS = [
    "007EA7",
    "E49AB0",
    "904C77",
    "EF5D60",
    "99C24D",
    "F18F01",
    "2E4057",
    "374B4A"
];
const QUOTE_URL = "https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json";

function App() {
    const [colour, setColour] = useState(COLOURS[Math.floor(Math.random() * (COLOURS.length - 1))]);
    const [quotes, setQuotes] = useState([]);
    const [quote, setQuote] = useState();
    const [author, setAuthor] = useState();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        newColour();
    });
    // fetch our list of quotes then set our initial quote
    useEffect(() => {
        setLoading(true);
       fetch(QUOTE_URL).then(res => res.json()).then(data => {
           setLoading(false);
           setQuotes(data.quotes)
           let newQuoteIndex = Math.floor(Math.random()*data.quotes.length - 1);
           setQuote(data.quotes[newQuoteIndex].quote);
           setAuthor(data.quotes[newQuoteIndex].author);
       });
    }, []);

    function handleNewQuote() {
        newColour();
        newQuote();
    }

    function newQuote() {
        let newQuoteIndex = Math.floor(Math.random()*quotes.length - 1);
        setQuote(quotes[newQuoteIndex].quote);
        setAuthor(quotes[newQuoteIndex].author);
    }

    function newColour() {
        setColour(COLOURS[Math.floor(Math.random() * (COLOURS.length - 1))]);
        document.documentElement.style.setProperty('--colour', `#${colour}`);
    }

    console.log(colour);
    console.log(quotes[0]);
    console.log(quote, author);

    return (
        <div className="App">
            <div className="content">
                {!loading && <QuoteBox
                    quote={quote}
                    author={author}
                    handleNewQuote={handleNewQuote}
                />}
              <div className="creator">
                  <a href="https://github.com/JamesWitchard?tab=repositories" rel="noreferrer" target="_blank" >By James Witchard</a>
              </div>
            </div>
        </div>
    );
}

export default App;
