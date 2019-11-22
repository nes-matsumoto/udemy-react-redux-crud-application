import React from 'react';
import PropTypes from 'prop-types';


//JSXでの表現
/*function App() {
  const greeting = "Nice!Greeting!"
const dom = <h1 className="foo">{greeting}</h1>

return(
  <React.Fragment>
    <label htmlFor=""bar>bar</label>
    <input type="text" onChange={() => {console.log("I am clicked")}}/>;
  </React.Fragment>
)
}
*/
const App = () => {

  const profiles = [
    {name:"kazuma",age:24},
    {name:"taro",age:10},
    {name:"NoName" ,age:5}
  ]

  return(
    <div>
      {
        profiles.map((profile,index) => {
          return <User name={profile.name} age={profile.age} key={index}/>

        }) 
      }
    </div>
  )
}


const User = (props) => {
  return <div>Hello!!{props.name} age:{props.age}</div>
}

/*
User.defaultProps = {
  age:1
}
*/
User.propTypes= {
  name: PropTypes.string,
  age: PropTypes.number.isRequired
}

//Javascriptでの表現
/*function App() {
  return React.createElement("div",null,"Matsumoto Kazuma!!");
}
*/
export default App;
