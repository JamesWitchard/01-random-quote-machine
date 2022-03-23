import React from 'react';
import './QuoteBox.css';

const QuoteBox = (props) => {
    return (
        <div id="quote-box">
            <div id="text">
                <span><i className="fa fa-quote-left"/></span><h2>{props.quote}</h2>
            </div>
            <div id="author">- {props.author}</div>
            <div className="buttons">
                <ul className="socialLinks">
                    <li>
                        <a id="tweet-quote" target="_top"
                           href={`https://twitter.com/intent/tweet?text=${props.quote} — ${props.author}`}>
                            <i className="fa fa-twitter fa-lg"/>
                        </a>
                    </li>
                </ul>
                <div className="flexGrow"/>
                <button id="new-quote" onClick={props.handleNewQuote}>New quote</button>
            </div>
        </div>
    );
};

export default QuoteBox;