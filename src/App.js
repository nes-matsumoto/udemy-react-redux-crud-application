import React from 'react';


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
    {name:"kazuma",age:10},
    {name:"taro",age:10}
  ]

  return(
    <div>
      {
        profiles.map((profile) => {
          return <user name={"profile.name"} age={profile.age}/>

        }) 
      }

      <user name={"kazuma"} age={39}/>

      <user name={"Taro"} age={19}/>
    </div>
  )
}


const user = (props) => {
  return <div>Hello!!{props.name} age:{props.age}</div>
}


//Javascriptでの表現
/*function App() {
  return React.createElement("div",null,"Matsumoto Kazuma!!");
}
*/
export default App;
