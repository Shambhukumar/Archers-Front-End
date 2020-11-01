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
setdates(data.data.data)
console.log(data);
  }

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
        <select name="cars" id="cars" onChange={e=>props.getnews(e.target.value)}>
          {date && date.map((e,el)=>{
            return(
            <option key={el} value={e.date} selected={e.date === props.date ? true : false} >{e.date}</option>
            )
          })}
         
          {/* <option value="saab">Saab</option>
          <option value="opel">Opel</option>
          <option value="audi">Audi</option> */}
        </select>
      </div>
    </div>
  );
};

export default Filters;
