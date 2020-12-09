import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import Header from "./header/header";
import Card from "./cards/card";
import axios from "axios";
import { connect } from "react-redux";
import { logoutUser } from "../../store/actions/auth";
import Filters from "./filters/filters";
import "./home.scss";

const Home = (props) => {
  const [result, setResult] = useState();
  const [loading, setloading]= useState();
  const [times, settimes] = useState(true);
  const [bbc,setbbc]=useState(true);
  const [wsj,setwsj]=useState(true);
  const [filters,setFilters] =  useState(false);
  useEffect(() => {
    const d = new Date();
  const date = d.toLocaleDateString();
    getNews(date);
  }, []);
  const tok = window.localStorage.getItem("accesstoken");
  let token = null;
  if (props.user.accesstoken) {
    token = props.user.accesstoken;
  } else {
    token = tok;
  }
  const history = useHistory();

  let jsx;
  const getNews = async (date) => {
setloading(true);
    
    const data = await axios.post(
      process.env.REACT_APP_BASE_URL+"getdata",
      { date },
      {
        headers: {
          Authorization: "Bearer " + token,
        },
      }
    );
    if (data) {
      if (data.data.status === "Success") {
        setResult(data);
        setloading(false);
      }
    }
  };

  console.log(result);

  const logout = () => {
    props.logoutUser();
    history.push("/");
  };

  const changeCardView = (value)=>{
    switch (value) {
      case "times":
        settimes(!times) 
        break;
        case "wsj":
        setwsj(!wsj) 
        break;
        case "bbc":
          setbbc(!bbc)
        break;
        case "filters":
         setFilters(!filters)
        break;
      default:
        break;
    }
  }

  return (
    !loading &&
  <div className="home-class">
      <Header logout={logout}  
      bbc={result && result.data.data.bbc.bbcData.bbccom} 
      date={result && result.data.data.Updated_At}
      wsj={result && result.data.data.wsj.WallStreetJurnal.WSJTopStories}
      toi={result && result.data.data.toi.TheTimesOfIndia.toiTopStories[0]["Latest-Stoies"]}
      />
      <div className="home-class-filters">
        <div className={filters ? "home-class-filters-text--selected": "home-class-filters-text"} onClick={e=>changeCardView("filters")}>Filters</div>
      </div>
      {filters && <Filters bbc={bbc} wsj={wsj} times={times} changeCardView={changeCardView} getnews={getNews} date={result && result.data.data.date}/>}
     
      {result && bbc && (
        <Card bbc={result.data.data.bbc.bbcData.bbccom} image={"bbc.png"} />
      )}

      {result && wsj && (
        <Card wsj={result.data.data.wsj.WallStreetJurnal.WSJTopStories} />
      )}

      {result && times && (
        <Card toi={result.data.data.toi.TheTimesOfIndia.toiTopStories[0]} />
      )}
    </div>
  );
};
const MapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

const MapDespatchToProps = (dispatch) => {
  return {
    logoutUser: () => logoutUser(dispatch),
  };
};

export default connect(MapStateToProps, MapDespatchToProps)(Home);
