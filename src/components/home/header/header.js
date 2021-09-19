import React, {useEffect} from 'react'
import "./header.scss";
import {daybuy} from "../../../service/Utility";

const  Header = (props) => {
  const {BBC, Guardian, CNN, NYT} = props.news;


  const AllBrodcasterArray = [];
  NYT && AllBrodcasterArray.push(NYT)
  BBC && AllBrodcasterArray.push(BBC)
  Guardian && AllBrodcasterArray.push(Guardian)
  CNN && AllBrodcasterArray.push(CNN)
  const name = props.name;
  const time = props.news.time;
useEffect(()=>{
  const Nav = document.getElementById("nav")
  const handleScroll=()=>{
    const offset = window.scrollY;    
    if(offset > 190){
      Nav.classList.add("header-menu-links-scrolled");
    }else{
      Nav.classList.remove("header-menu-links-scrolled");
    }
  }
    window.addEventListener("scroll",handleScroll)
})


  const Account = () => {
    return (
      <div className="header-menu-account-content-buttons" onClick={() => props.display(true)}><div>Sign In</div></div>
    )
  }

  const CategorieList = props.fetchcategory.reverse();
  return (
    <div className="header">
      <div className="home-class-model-responsive">
      </div>
      <div className="header-menu">
        <div className="header-menu-date">
          <span className="header-menu-date-date">
            {daybuy()}
            <h6>UPDATED: {time} IST</h6>
            </span>
          <div className="header-menu-responsive" onClick={()=>props.model(true)}>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
        <div className="header-logo">
          <div className="header-text">The Archers</div>
        </div>
        <div className="header-menu-account">
          <div className="header-menu-account-content">
            {name ? <span className="header-menu-account-content-username">Hi {name.toLocaleUpperCase()} <span className="header-menu-account-content-username-arrow"></span>
            <div className="header-menu-account-content-username-actions">
              <div className="header-menu-account-content-username-actions-pointy"></div>
              <div className="header-menu-account-content-username-actions-menu">
              <div className="header-menu-account-content-username-actions-menu-contact">
                <span>Have some suggestion?</span>
                <h4>Contact Me</h4>
              </div>
              <div>
                <ul> 
                <li onClick={() => props.logout()}>Sign out</li>
                <li>Settings</li>
                </ul>
              </div>
            </div>
            </div>
            </span> : <Account />}
          </div>
        </div>
      </div>
      <div>
      <div className="header-menu-links" id="nav">
      <h4 className="header-menu-links-date">
        {daybuy()}
        <h4>Updated: {time} IST</h4>
        </h4>
          <ul className="header-menu-links-list">
            {CategorieList.map((e,el)=>{
              if(e !=="home"){
                return <li className={e === props.category ? "header-menu-links-list-active": null}
              onClick={()=>props.funSetcategory(e)}
              key={el} >{e}</li>
              }
              
            })}
          </ul>
        </div>
        <div className="header-headline-width">
        <ul className="header-headline">
          <h4>
            {
              AllBrodcasterArray.map((e,el)=>{
                return (<span key={el}>
                  <span className="header-headline-brodcaster">{e[0].brodcaster}</span>
                  {e.map((e,el)=>{
                    return <a href={e.anchorLink} key={el} >{e.anchorText}</a>
                  })}
                </span>)
              })
            }
          </h4>
        </ul>
        </div>
        
      </div>
    </div>
  )
}


export default Header
