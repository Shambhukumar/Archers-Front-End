import React from 'react'
import "./header.scss";
import {daybuy} from "../../../service/Utility";

const Header = (props) => {
  const {BBC, Guardian, CNN, NYT} = props.news;

  // console.log(props.data)
  // console.log(CNN)
  
  const AllBrodcasterArray = [];
  NYT && AllBrodcasterArray.push(NYT)
  BBC && AllBrodcasterArray.push(BBC)
  Guardian && AllBrodcasterArray.push(Guardian)
  CNN && AllBrodcasterArray.push(CNN)
  const name = props.name;
  // console.log(name)

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
          <span className="header-menu-date-date">{daybuy()}</span>
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
            {name ? <span className="header-menu-account-content-username">Hi {name.toLocaleUpperCase()} 
            <ul className="header-menu-account-content-username-actions">
              <li onClick={() => props.logout()}>Sign out</li>
              <li>Settings</li>
            </ul>
            </span> : <Account />}
          </div>
        </div>
      </div>
      <div>
      <div className="header-menu-links">
      <h4 className="header-menu-links-date">{daybuy()}</h4>
          <ul className="header-menu-links-list">
            {CategorieList.map((e,el)=>{
              if(e !=="home"){
                return <li className={e === props.category ? "header-menu-links-list-active": null}
              onClick={()=>props.funSetcategory(e)}
              >{e}</li>
              }
              
            })}
          </ul>
        </div>
        <ul className="header-headline">
          <h4>
            {
              AllBrodcasterArray.map((e,el)=>{
                return (<span>
                  <span className="header-headline-brodcaster">{e[0].brodcaster}</span>
                  {e.map((e,el)=>{
                    return <a href={e.anchorLink} key={el}>{e.anchorText}</a>
                  })}
                </span>)
              })
            }
          </h4>
        </ul>
        
      </div>
    </div>
  )
}


export default Header
