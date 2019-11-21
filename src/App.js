import React from 'react';


//JSXでの表現
function App() {
  const greeting = "Nice!Greeting!"
const dom = <h1 className="foo">{greeting}</h1>

return(
  <React.Fragment>
    <label htmlFor=""bar>bar</label>
    <input type="text" onChange={() => {console.log("I am clicked")}}/>;
  </React.Fragment>
)
}

//Javascriptでの表現
//function App() {
//  return React.createElement("div",null,"Matsumoto Kazuma!!");
//}

export default App;
