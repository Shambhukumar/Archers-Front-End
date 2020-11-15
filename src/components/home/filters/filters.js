import React, { useEffect, useState } from "react";
import axios from "axios";
import "./filters.scss";

const Filters = (props) => {
  const [date,setdates] = useState();
  useEffect(() => {
 getdate();
  }, []);

  const getdate= async()=>{
    const data = await axios.get(process.env.REACT_APP_BASE_URL+"getalldates")

console.log(data.data.data);
setdates(data.data.data)
// const changesdates = () =>{
//   const dates = data.data.data.map((e,el)=>{
//       const d = e.date.split("/");
//       const s = d.map((e,el)=>{
//         if(e.length < 2) {
//          return "0"+e
//           }else{
//            return e
//           } 
//       })
//       return s[2]+"-"+s[0]+"-"+s[1]
    
//   })
//   setdates(dates)
// }
// changesdates();
  }
date && console.log(date);
  return (
    <div className="filters">
      <div className="filters-checkbox">
        <span
          className={props.bbc ? "selected" : "not-selected"}
          onClick={() => props.changeCardView("bbc")}
        >
          BBC News
        </span>
        <span
          className={props.wsj ? "selected" : "not-selected"}
          onClick={() => props.changeCardView("wsj")}
        >
          The Wall Street Journal
        </span>
        <span
          className={props.times ? "selected" : "not-selected"}
          onClick={() => props.changeCardView("times")}
        >
          The Times Of India
        </span>
      </div>
      <div className="filters-archive">
        <span>Archive</span>
        <div className="dates">
        {/* {date && <input type="date" id="start" name="trip-start"
        value={e=>e.target.value}
        min={date[0]}
        max={date[date.length-1]}/>
     
        } */}

    
        <select name="cars" id="cars" onChange={e=>props.getnews(e.target.value)}>
          {date && date.map((e,el)=>{
            return(
            <option key={el} value={e.date} selected={e.date === props.date ? true : false} >{e.date}</option>
            )
          })}
        </select>
        </div>
      </div>
    </div>
  );
};

export default Filters;
