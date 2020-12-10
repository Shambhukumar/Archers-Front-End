import React from 'react'
import "./card.scss";


const  Card = (props) => {
  if(props.bbc){

  return (
   <div className="bbc-card">
     <img id="logo" src={require("../../img/bbcheading.png")}/>
    <ul className="bbc-card-ul">
      {props.bbc.map((e,el)=>{

        if(el <= 4){
        return (
          <li key={el} className={`bbc-card-ul-li-${el}`}>
            <a href={e.link}>
            <div className="bbc-card-ul-li-images">
            <div className="bbc-card-ul-li-images--text">
            <span className="bbc-card-ul-li-span"> <a href={e.link}>{e.title}</a></span>
              {e.description && <p className="bbc-card-ul-li-p">{e.description}</p>}
            </div>
            {/* <img className="bbc-card-ul-placeholder"src={require("../../img/placeholder.png")} /> */}
            {e.image ? <img className="bbc-card-ul-li-images--img" src={e.image.replace("{width}",624)}/>: <img src={require("../../img/placeholder.png")}/>}
            </div>
            </a>
           
          </li>
        )
      }
      })}
    </ul>
{/* this is the other part of bbc */}
    <ul className="bbc-card-ul-secondheading">
      {props.bbc.map((e,el)=>{

        if(el > 4 && el <= 16){
        return (
          <li key={el} className={`bbc-card-ul-li-${el}`}>
            <a href={e.link}>
            <div className="bbc-card-ul-secondheading-item">
            <span className="bbc-card-ul-li-span">{e.title}</span>
            <p className="bbc-card-ul-li-p">{e.description}</p>
            </div>
            {e.image ? <img src={e.image.replace("{width}",624)}/> : <img src={require("../../img/placeholder.png")}/>}
            </a>
           
          </li>
        )
      }
      })}
    </ul>

   </div>
  )
      
}

else if(props.wsj){
  return(
    <div className="wsj">
      <img src={require("../../img/wsjheading.png")}/>
      <div className="wsj--ul">
      <ul className="wsj--ul--left">
      {props.wsj.map((e,el)=>{
        if(el < 6){
          return(<li key={el}>
            <h3><a href={e.link}>{e.title}</a></h3>
            <span>{e.description}</span>
            </li>)
        }
        
      })}
      </ul>
      <ul className="wsj--ul--center">
      {props.wsj.map((e,el)=>{
        if(el > 6  && el < 12){
          return(<li key={el}>
            <h3><a href={e.link}>{e.title}</a></h3>
            <span>{e.description}</span>
            </li>)
        }
      })}
      </ul>
      <ul className="wsj--ul--right">
      {props.wsj.map((e,el)=>{
        if(el > 12 && el < 19){
          return(<li key={el}>
            <h3><a href={e.link}>{e.title}</a></h3>
            <span>{e.description}</span>
            </li>)
        }
      })}
      </ul>
      </div>
    </div>
  )
}

else if(props.toi){
  return(
  <div className="times-of-india">
    <img src={require("../../img/toi.png")}/>
    <div className="toi">
    <ul className="toi-top">
      <li>Top Stories</li>
      {props.toi["Top-Stories"].map((e,el)=>{
        return <li key={el}><a href={e.link}>{e.title}</a></li>
      })}
      
    </ul>
    <ul className="toi-latest">
    <li>Latest Stories</li>
      {props.toi["Latest-Stoies"].map((e,el)=>{
        if(el < 15){
          return <li key={el}><a href={e.link}>{e.title}</a></li>
        }
      })}
    </ul>
    </div>
  </div>
  )
}

return (
  <div>
    Working
  </div>
)
}

export default Card
