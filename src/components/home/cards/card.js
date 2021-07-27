import React from 'react'
import "./card.scss";
import { daybuy } from "../../../service/Utility";

const Card = (props) => {

  const { BBC, Guardian, CNN, NYT } = props.data;

  // console.log(props.data)
  // console.log(CNN)

  const AllBrodcasterArray = [];

  NYT && AllBrodcasterArray.push(NYT)
  BBC && AllBrodcasterArray.push(BBC)

  Guardian && AllBrodcasterArray.push(Guardian)
  CNN && AllBrodcasterArray.push(CNN)



  const CardSingleCard = (obj) => {
    return (
      <div className="Card-paragraph">
        <a href={obj.anchorLink}>
          <img alt="images" className="Card-paragraph-img" src={obj.Image.replace("{width}", 320)} />
          <div className="Card-paragraph-cnn">
            {obj.brodcaster === "CNN" ? obj.Linklist.map((e, el) => {
              if (el < 3)
                return (<a href={e.anchorLink}><h4>{e.anchorText}</h4></a>)
            }) : null}
          </div>
          <h4>{obj.anchorText}</h4>
          <p>{obj.pragraphText}</p>
        </a>
      </div>
    )
  }
  return (
    <div className="content">

      {AllBrodcasterArray.map((e, el) => {
        // console.log(e[0].brodcaster==="CNN")
        return (
          <div className={`${e[0].brodcaster}`}>
            <div className="brodcaster">
              <img alt={`${e[0].brodcaster} logo img`} src={`/img/${e[0].brodcaster}.svg`} /> <span>{daybuy()}</span>
            </div>


            <div className="Card">
              <div className="Card-main-1">
                <div className="Card-main-1-hero">
                  <div className="Card-main-1-hero-container">
                    <div className="Card-main-1-hero-container-text">
                    {e[0].brodcaster === "CNN" ? (
                         <div className="Card-main-1-cnn">
                       {e[0].Linklist.map((e, el) => {
                         if (el > 0 && el < 6) {
                          return (<a href={e.anchorLink}>
                            <h4>{e.anchorText}</h4>
                          </a>)
                        }
                       })}</div>): null}
                      <a href={e[0].anchorLink}><h2 className="Card-main-1-hero-container-text-anchor">{e[0].anchorText}</h2></a>
                      <p className="Card-main-1-hero-container-text-para">{e[0].pragraphText}</p>
                    </div>
                    <div>
                   <a href={e[0].anchorLink}> <img alt="images" className="Card-card-ul-li-images--img" src={e[0].Image.replace("{width}", 624)} /></a>
                    </div>
                    
                  </div>
                </div>
                <div className="Card-main-1-content">
                  {e.map((e, el) => {
                    if (el > 3 && el < 7)
                      return CardSingleCard(e)
                  })}
                </div>

              </div>


              <div className="Card-main-2">
                <div> 
                {e.map((e, el) => {
                  if (el > 0 && el < 2)
                    return CardSingleCard(e)
                })}
                </div>
                <ul className="Card-ul">
                  {e.map((e, el) => {
                    if (el > 7 && el < 12)
                      return (<li key={el}>
                        <a href={e.brodcaster === "CNN" ? e.Linklist[0].anchorLink : e.anchorLink} key={el}>
                          <img alt="images" className="Card-card-ul-li-images--img" src={e.Image.replace("{width}", 240)} />
                          <span>{e.anchorText}</span>
                          {e.brodcaster === "CNN" ? <span>{e.Linklist[0].anchorText}</span> : null}
                        </a>
                      </li>)
                  })}
                </ul>
              </div>

              <div className="Card-main-3">
                <div> 
                {e.map((e, el) => {
                  if (el > 2 && el < 4)
                    return CardSingleCard(e)
                })}
                </div>
                <ul className="Card-ul">
                  {e.map((e, el) => {
                    if (el > 12 && el < 17)
                      return <li key={el}>
                        <a href={e.brodcaster === "CNN" ? e.Linklist[0].anchorLink : e.anchorLink} key={el} >
                          <img alt="images" className="Card-card-ul-li-images--img" src={e.Image.replace("{width}", 240)} />
                          <span>{e.anchorText}</span>
                          {e.brodcaster === "CNN" ? <span>{e.Linklist[0].anchorText}</span> : null}
                        </a>
                      </li>
                  })}
                </ul>
              </div>
            </div>
          </div>
        )
      })}

    </div>


    // ------------------------------------------- Old Code -------------------------------------------------------------

    //    <div className="bbc-card">
    //      <img alt="images" id="logo" src={require("../../img/bbcheading.png")}/>
    //     <ul className="bbc-card-ul">
    //       {props.bbc.map((e,el)=>{
    //         console.log(e)
    //         if(el <= 4){
    //         return (
    //           <li key={el} className={`bbc-card-ul-li-${el}`}>
    //             <a href={e.anchorlink}>
    //             <div className="bbc-card-ul-li-images">
    //             <div className="bbc-card-ul-li-images--text">
    //             <span className="bbc-card-ul-li-span"> <a href={e.anchorlink}>{e.anchorText}</a></span>
    //               {e.pragraphText && <p className="bbc-card-ul-li-p">{e.pragraphText}</p>}
    //             </div>
    //             {/* <img className="bbc-card-ul-placeholder"src={require("../../img/placeholder.png")} /> */}
    //             {e.Image ? <img alt="images" className="bbc-card-ul-li-images--img" src={e.Image.replace("{width}",624)}/>: <img alt="images" src={require("../../img/placeholder.png")}/>}
    //             </div>
    //             </a>
    //           </li>
    //         )
    //       }
    //       })}
    //     </ul>
    // {/* this is the other part of bbc */}
    //     <ul className="bbc-card-ul-secondheading">
    //       {props.bbc.map((e,el)=>{

    //         if(el > 4){
    //         return (
    //           <li key={el} className={`bbc-card-ul-li-${el}`}>
    //             <a href={e.anchorlink}>
    //             <div className="bbc-card-ul-secondheading-item">
    //             <span className="bbc-card-ul-li-span">{e.anchorText}</span>
    //             <p className="bbc-card-ul-li-p">{e.pragraphText}</p>
    //             </div>
    //             {e.Image ? <img alt="images" src={e.Image.replace("{width}",624)}/> : <img alt="images" src={require("../../img/placeholder.png")}/>}
    //             </a>

    //           </li>
    //         )
    //       }
    //       })}
    //     </ul>

    //    </div>
    //   )

    // }

    // else if(props.wsj){
    //   return(
    //     <div className="wsj">
    //       <img alt="images" src={require("../../img/wsjheading.png")}/>
    //       <div className="wsj--ul">
    //       <ul className="wsj--ul--left">
    //       {props.wsj.map((e,el)=>{
    //         if(el < 6){
    //           return(<li key={el}>
    //             <h3><a href={e.link}>{e.title}</a></h3>
    //             <span>{e.description}</span>
    //             </li>)
    //         }

    //       })}
    //       </ul>
    //       <ul className="wsj--ul--center">
    //       {props.wsj.map((e,el)=>{
    //         if(el > 6  && el < 12){
    //           return(<li key={el}>
    //             <h3><a href={e.link}>{e.title}</a></h3>
    //             <span>{e.description}</span>
    //             </li>)
    //         }
    //       })}
    //       </ul>
    //       <ul className="wsj--ul--right">
    //       {props.wsj.map((e,el)=>{
    //         if(el > 12 && el < 19){
    //           return(<li key={el}>
    //             <h3><a href={e.link}>{e.title}</a></h3>
    //             <span>{e.description}</span>
    //             </li>)
    //         }
    //       })}
    //       </ul>
    //       </div>
    //     </div>
    //   )
    // }

    // else if(props.toi){
    //   return(
    //   <div className="times-of-india">
    //     <img alt="images" src={require("../../img/toi.png")}/>
    //     <div className="toi">
    //     <ul className="toi-top">
    //       <li>Top Stories</li>
    //       {props.toi["Top-Stories"].map((e,el)=>{
    //         return <li key={el}><a href={e.link}>{e.title}</a></li>
    //       })}

    //     </ul>
    //     <ul className="toi-latest">
    //     <li>Latest Stories</li>
    //       {props.toi["Latest-Stoies"].map((e,el)=>{
    //         if(el < 15){
    //           return <li key={el}><a href={e.link}>{e.title}</a></li>
    //         }
    //       })}
    //     </ul>
    //     </div>
    //   </div>
  )


  return (
    <div>
      Working
    </div>
  )
}

export default Card
