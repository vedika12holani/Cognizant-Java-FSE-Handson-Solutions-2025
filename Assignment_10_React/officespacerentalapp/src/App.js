import React from "react";
import './App.css';
function App(){
  const heading="Office Space";

  const officeImage=(
    <img src="https://tse4.mm.bing.net/th/id/OIP.tnorkvInUa5PoobmUYXG2QHaFK?w=768&h=536&rs=1&pid=ImgDetMain&o=7&rm=3"
    width="25%" height="25%" alt="Office Space" />
  );

  const officeSpaces=[
    {Name:"DBS", Rent:50000, Address:"Chennai"},
    {Name:"WeWork", Rent:65000, Address:"Bangalore"},
    {Name: "Regus", Rent:45000, Address:"Hyderabad"}
  ];

  return(
    <div className="App">
      <h1>{heading}, at Affordable Range</h1>
      {officeImage}

      {officeSpaces.map((item,index)=>{
        const rentColorClass=item.Rent<=60000?'textRed':'textGreen';
        return(
          <div key={index}>
            <h2>Name: {item.Name}</h2>
            <h3 className={rentColorClass}>Rent: Rs. {item.Rent}</h3>
            <h3>Address: {item.Address}</h3>
            <hr/>
          </div>
        );
      })}
    </div>
  );
};

export default App;
