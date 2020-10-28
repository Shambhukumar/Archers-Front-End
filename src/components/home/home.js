import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import Header from "./header/header";
import Card from "./cards/card";
import axios from "axios";
import { connect } from "react-redux";
import { logoutUser } from "../../store/actions/auth";
import "./home.scss";

const Home = (props) => {
  const [result, setResult] = useState();
  const [loading, setloading]= useState(true);
  const [times, settimes] = useState(true);
  const [bbc,setbbc]=useState(true);
  const [wsj,setwsj]=useState(true);
  useEffect(() => {
    getNews();
  }, []);
  const tok = localStorage.getItem("accesstoken");
  let token = null;
  if (props.user.accesstoken) {
    token = props.user.accesstoken;
  } else {
    token = tok;
  }
  const history = useHistory();

  let jsx;
  const getNews = async () => {

    const d = new Date();
  const date = d.toLocaleDateString();
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
      default:
        break;
    }
  }

  return (
    !loading &&
  <div className="home-class">
      <Header logout={logout}  
      bbc={result && result.data.data.bbc.bbcData.bbccom} 
      wsj={result && result.data.data.wsj.WallStreetJurnal.WSJTopStories}
      toi={result && result.data.data.toi.TheTimesOfIndia.toiTopStories[0]["Latest-Stoies"]}
      />
      <div className="home-class-checkbox">
          <span className={ bbc ? "selected" : "not-selected"} onClick={()=>changeCardView("bbc")}>BBC News</span>
          <span className={ wsj ? "selected" : "not-selected"} onClick={()=>changeCardView("wsj")}>The Wall Street Journal</span>
          <span className={ times ? "selected" : "not-selected"} onClick={()=>changeCardView("times")}>The Times Of India</span>
      </div>
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
