import React from 'react'
import "./card.scss";

const  Card = (props) => {

  const {BBC, Guardian, CNN, NYT} = props.data;

  // console.log(props.data)
  console.log(CNN)

  const AllBrodcasterArray = [];

  NYT && AllBrodcasterArray.push(NYT)
  BBC && AllBrodcasterArray.push(BBC)
  
  Guardian && AllBrodcasterArray.push(Guardian)
  CNN && AllBrodcasterArray.push(CNN)


  if(BBC){
const bbcSingleCard = (obj)=>{
  return (
    <a href={obj.anchorLink} className="bbc-small-card">
       <img alt="images" className="bbc-small-card-img" src={obj.Image.replace("{width}",324)}/>
       <div className="bbc-small-card-cnn">
       {obj.brodcaster === "CNN"? obj.Linklist.map((e,el)=>{
         if(el > 0 && el < 3)
         return ( <a href={e.anchorLink}><h4>{e.anchorText}</h4></a>)
       }) :null}
       </div>
       <a href={obj.anchorLink}><h4>{obj.anchorText}</h4></a>
       <p>{obj.pragraphText}</p>
    </a>
  )
}
  return (
    <div className="content">
      
      {AllBrodcasterArray.map((e,el)=>{
        console.log(e[0].brodcaster==="CNN")
        return(
          <div>
            <div className="brodcaster">
             <img alt={`${e[0].brodcaster} logo img`} src={`/img/${e[0].brodcaster}.svg`}/>
              </div>
        
            
      <div className="bbc">
        <a href={e[0].anchorLink} className="bbc-heading-main-1">

          <div className="bbc-heading-main-1-cnn">
          {e[0].brodcaster==="CNN" ? (
            e[0].Linklist.map((e,el)=>{
             return( <a href={e.anchorLink}>
             <h4>{e.anchorText}</h4>
            </a>)
            })
          ): null}
          </div>
          <div>
            <h2>{e[0].anchorText}</h2>
            <p>{e[0].pragraphText}</p>
          </div>
          <img alt="images" className="bbc-card-ul-li-images--img" src={e[0].Image.replace("{width}",524)}/>
        </a>
        <div className="bbc-heading-main-2">
          {e.map((e,el)=>{
            if(el > 0 && el < 3)
            return bbcSingleCard(e)
          })}
        </div>
        <div className="bbc-heading-content-1">
        {e.map((e,el)=>{
            if(el > 3 && el < 7)
            return bbcSingleCard(e)
          })}
        </div>
        <div className="bbc-heading-content-2">
          <ul>
          {e.map((e,el)=>{
            if(el > 7 && el < 12)
            return (<li>
              <a href={e.brodcaster==="CNN" ?e.Linklist[0].anchorLink :e.anchorLink}>
                <img alt="images" className="bbc-card-ul-li-images--img" src={e.Image.replace("{width}",124)}/>
                <span>{e.anchorText}</span>
                {e.brodcaster==="CNN" ? <a href={e.Linklist[0].anchorLink}><span>{e.Linklist[0].anchorText}</span></a>: null}
                </a>
                </li>)
          })}
          </ul>
          <ul>
          {e.map((e,el)=>{
            if(el > 12 && el < 17)
            return <li>
              <a href={e.brodcaster==="CNN" ?e.Linklist[0].anchorLink :e.anchorLink}>
                <img alt="images" className="bbc-card-ul-li-images--img" src={e.Image.replace("{width}",124)}/>
                <span>{e.anchorText}</span>
                {e.brodcaster==="CNN" ? <a href={e.Linklist[0].anchorLink}><span>{e.Linklist[0].anchorText}</span></a>: null}
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
}

return (
  <div>
    Working
  </div>
)
}

export default Card
