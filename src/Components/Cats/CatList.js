import React, { Component } from 'react';
 
const CatList = (props) => {
 return (
   <div>
     <li>{props.breeds}</li>
     {/* {props.breeds.map((cat) => <li>{cat}</li> )} */}
   </div>
 )
}
 
export default CatList;
