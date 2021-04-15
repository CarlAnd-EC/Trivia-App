import React from 'react';
import Card from "../organisms/Card";
var count = 0;
const otdbLogo = process.env.PUBLIC_URL + "/images/OpenTDb.png";
const Trivia = () => {
  return (
    <React.Fragment>
      <h4>Question: {count}/10</h4>
      <br/>
      <img src={otdbLogo} className="App-logo" alt="logo"/>
      <Card/>
      <section>
        <button>Previous</button>
        <button>Next</button>
      </section>
    </React.Fragment>
  )
}
export default Trivia;