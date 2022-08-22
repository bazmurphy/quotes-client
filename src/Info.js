import React from "react";

const Info = () => {
    return (
        <div className="info-container">
            
            <div className="info-back-end">
            
                <p className="info-back-end-title">Back End</p>

                <div className="info-source-code">
                    <span className="info-source-code-text">Source Code</span>
                    <img className="info-source-code-image" src="github-dark.png" alt="github logo"></img>
                    <a href="https://github.com/bazmurphy/node-quotes-server" target="_blank" rel="noreferrer">https://github.com/bazmurphy/node-quotes-server</a>
                </div>
                <div className="info-hosted">
                    <span className="info-hosted-text">Hosted</span>
                    <img className="info-hosted-image" src="heroku.png" alt="heroku logo"></img>
                    <a href="https://cyf-bazmurphy-quotes.herokuapp.com/" target="_blank" rel="noreferrer">https://cyf-bazmurphy-quotes.herokuapp.com/</a>
                </div>
            </div>

            <div className="info-front-end">

                <p className="info-front-end-title">Front End</p>
                
                <div className="info-source-code">
                    <span className="info-source-code-text">Source Code</span>
                    <img className="info-source-code-image" src="github-dark.png" alt="github logo"></img>
                    <a href="https://github.com/bazmurphy/react-quotes" target="_blank" rel="noreferrer">https://github.com/bazmurphy/react-quotes</a>
                </div>
                
                <div className="info-hosted">
                    <span className="info-hosted-text">Hosted</span>
                    <img className="info-hosted-image" src="netlify.png" alt="netlify logo"></img>
                    <a href="https://cyf-bazmurphy-quotes.netlify.app" target="_blank" rel="noreferrer">https://cyf-bazmurphy-quotes.netlify.app</a>
                </div>
                
            </div>            
        </div>
    );
};

export default Info;