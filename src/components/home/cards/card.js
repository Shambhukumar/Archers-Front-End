import React, {useState} from 'react'
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

const [view, setView] = useState({"BBC": false, "Gurdian": false, "CNN": false, "NewYorkTimes": false})

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
          <div className="Card-paragraph-text">
          <h4>{obj.anchorText}</h4>
          </div>
          </a>
          <p>{obj.pragraphText}</p>
          
      </div>
    )
  }

  const viewMoreToggle = (brodcaster) =>{
    setView({...view, [`${brodcaster}`]: !view[`${brodcaster}`]});
    // console.log(view)
  }

  const ViewMoreContent = (e) =>{
    if(!(e.length > 28)){
      return
    }
    return (
      <div className="content-view-card">
            <div  className="content-view-card-text">
              {!view[`${e[0].brodcaster}`] && <h4 onClick={()=>viewMoreToggle(e[0].brodcaster)}>View More</h4>}
            </div>
            
                  {view[`${e[0].brodcaster}`] && (<div className="content-view-card-news"> 
                    
                    
                    {e.map((e,el)=>{
                      if(el > 17){
                        return CardSingleCard(e)
                      }
                    })}
                    
                    </div>)}
              <div  className="content-view-card-text">
              {view[`${e[0].brodcaster}`] && <h4 onClick={()=>viewMoreToggle(e[0].brodcaster)}>View Less</h4>}
              </div>
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
                       })}</div>): (<React.Fragment> <a href={e[0].anchorLink}><h2 className="Card-main-1-hero-container-text-anchor">{e[0].anchorText}</h2></a>
                       <p className="Card-main-1-hero-container-text-para">{e[0].pragraphText}</p> </React.Fragment>)}
                     
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
                <div className="Card-main-2-peragraph"> 
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
               <div className="Card-main-3-peragraph"> 
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
            <div className="content-view">
              
          
                  {ViewMoreContent(e)}

            </div>
          </div>
        )
      })}

    </div>
  )
}

export default Card
