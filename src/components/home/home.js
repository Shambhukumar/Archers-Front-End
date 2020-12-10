import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import Header from "./header/header";
import Card from "./cards/card";
import axios from "axios";
import { connect } from "react-redux";
import { logoutUser } from "../../store/actions/auth";
import Filters from "./filters/filters";
import Loader from "./Loader/Loader";
import "./home.scss";

const Home = (props) => {
  const [result, setResult] = useState();
  const [loading, setloading]= useState(true);
  const [times, settimes] = useState(true);
  const [bbc,setbbc]=useState(true);
  const [wsj,setwsj]=useState(true);
  const [filters,setFilters] =  useState(false);
  const [token, setToken] = useState(null);
  useEffect(() => {
    
    const d = new Date();
  const date = d.toLocaleDateString();
    getNews(date);

  }, [token]);


  const history = useHistory();

  let jsx;
  const getNews = async (date) => {
    try{
      // alert("working");
      setToken("false")
      const tok = window.localStorage.getItem("accesstoken");
      if (props.user.accesstoken) {
        // console.log("i am here")
        setToken(props.user.accesstoken);
      } else {
        setToken(window.localStorage.getItem("accesstoken"));
        // token && console.log("i am ", token)
      }
      setloading(true);
    
    if(token){
      const data = await axios.post(
       "https://cors-anywhere.herokuapp.com/"+process.env.REACT_APP_BASE_URL+"getdata",
        { date },
        {
          headers: {
            Authorization: "Bearer " + `${token}`,
          },
        }
      );
      // alert(data);
      if (data) {
        if (data.data.status === "Success") {
          setResult(data);
        }
        setloading(false);
      }
    }
    }catch(e){
      console.log(e);
      alert(e)
    }
    
    
  };

  // console.log(token);

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
    !loading ?  
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
    </div> : <Loader/>
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
