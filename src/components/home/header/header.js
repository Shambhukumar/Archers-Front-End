import React from 'react'
import "./header.scss";
import { useEffect } from "react";


const  Header = (props)=> {

  return (
    <div className="header">
      <div className="header-mini">
        {/* {console.log()} */}
        <div className="header-name">
   { window.localStorage.getItem("name") &&<h4>Hi, {window.localStorage.getItem("name").toLocaleUpperCase()}</h4>}
  
  </div>
  <div> 
  <span>
    Today {Date().split(" ").splice(0,4).join(" ")}
  </span>
  </div>
  <div style={{paddingRight: "20px"}}>
  <span className="header-mini-logout" onClick={() => props.logout()}>Log out</span>
  </div>
     
      </div>
      <h1 className="header-text">The Archers</h1>
      {props.date && <h4 className="header-update-date">Last Updated: {props.date.split(" ").splice(0,5).join(" ")} IST</h4>}
      <div>
        <ul className="header-headline">
          <h4>
        <span>BBC:</span> {props.bbc && props.bbc.map((e,el)=>{
              if(el > 16 && el < 25){
              return<a href={e.link} key={el}>{e.title}</a>
              }
        })}
        <span>The Wall Street Journal</span>{props.wsj && props.wsj.map((e,el)=>{
              if(el > 19 && el < 29){
              return <a href={e.link} key={el} >{e.title}</a>
              }
        })}
        <span>The Times Of India</span>{props.toi && props.toi.map((e,el)=>{
              if(el > 15 && el < 26){
              return <a href={e.link} key={el}>{e.title}</a>
              }
        })}
        </h4>
        </ul>
      </div>
    </div>
  )
}


export default Header
