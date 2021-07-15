import React, { useState } from 'react'
import "./header.scss";
import Signin from "../../Modals/Signin/Signin";


const Header = (props) => {
  const name = window.localStorage.getItem("name");
  // const [Sign, SetSignin] = useState(true);
  console.log(name)


  const Account = () => {
    return (
      <div><span onClick={() => props.display(true)}>Sign In</span> / <span>Sign Up</span></div>
    )
  }
  return (
    <div className="header">
      {/* { Sign && <Signin display={SetSignin}/>} */}
      {/* <div className="header-mini">
       
        <div className="header-name">
          {window.localStorage.getItem("name") && <h4>Hi, {window.localStorage.getItem("name").toLocaleUpperCase()}</h4>}

        </div>
        <div>
          <span>
            Today {Date().split(" ").splice(0, 4).join(" ")}
          </span>
        </div>
        <div style={{ paddingRight: "20px" }}>
          <span className="header-mini-logout" onClick={() => props.logout()}>Log out</span>
        </div>

      </div> */}
      <div className="header-menu">
        <div className="header-logo">
          <div className="header-text"><span>The</span>Archers</div>
          <div><img alt="the-bow-and-arrow" className="header-text-img" src={require("../../img/bow-and-arrow.png")} /></div>
        </div>

        <div className="header-menu-account">
          <div className="header-menu-account-content">
            {name ? <span className="header-menu-account-content-username">Hi {name.toLocaleUpperCase()} 
            <ul className="header-menu-account-content-username-actions">
              <li onClick={() => props.logout()}>Sign out</li>
              <li>Settings</li>
              {/* <li>Log Out</li> */}
            </ul>
            </span> : <Account />}

          </div>
        </div>
      </div>
      {/* {props.date && <h4 className="header-update-date">Last Updated: {props.date.split(" ").splice(0, 5).join(" ")} IST</h4>} */}
      <div>
        <ul className="header-headline">
          <h4>
            <span>BBC:</span> {props.bbc && props.bbc.map((e, el) => {
              if (el > 16 && el < 25) {
                return <a href={e.link} key={el}>{e.title}</a>
              }
            })}
            <span>The Wall Street Journal</span>{props.wsj && props.wsj.map((e, el) => {
              if (el > 19 && el < 29) {
                return <a href={e.link} key={el} >{e.title}</a>
              }
            })}
            <span>The Times Of India</span>{props.toi && props.toi.map((e, el) => {
              if (el > 15 && el < 26) {
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
