import React from 'react'
import "./header.scss";
import { useEffect } from "react";


const  Header = (props)=> {

  return (
    <div className="header">
      <div className="header-mini">
      <h4>Hi, {localStorage.getItem("name").toLocaleUpperCase()}</h4>
      <span>Home</span>
      <span>Accout Settings</span>
      <span className="header-mini-logout" onClick={() => props.logout()}>Log out</span>
      </div>
      <h1 className="header-text">The Archers</h1>
      
      <div>
        <ul className="header-headline">
          <h4>
        <span>BBC:</span> {props.bbc && props.bbc.map((e,el)=>{
              if(el > 16 && el < 25){
              return<a href={e.link}>{e.title}</a>
              }
        })}
        <span>The Wall Street Journal</span>{props.wsj && props.wsj.map((e,el)=>{
              if(el > 19 && el < 29){
              return <a href={e.link}>{e.title}</a>
              }
        })}
        <span>The Times Of India</span>{props.toi && props.toi.map((e,el)=>{
              if(el > 15 && el < 26){
              return <a href={e.link}>{e.title}</a>
              }
        })}
        </h4>
        </ul>
      </div>
    </div>
  )
}


export default Header
