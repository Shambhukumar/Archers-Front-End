import React, { useEffect, useState } from "react";
import {useHistory} from "react-router-dom";
import Header from "./header/header";
import Card from "./cards/card";
import axios from "axios";
import { connect } from "react-redux";
import { logoutUser,GetCategories } from "../../store/actions/auth";
import Loader from "./Loader/Loader";
import Signin from "../Modals/Signin/Signin"
import "./home.scss";

const Home = (props) => {
  const [result, setResult] = useState();
  const [loading, setloading]= useState(true);
  const [Sign, SetSignin] = useState(false);
  const [category, SetCategory] = useState("world");
  
  
  useEffect(() => {
  props.GetCategories();
  getNews();

  }, [category]);


  const history = useHistory();
 
  
  const getNews = async (date) => {
   
    try{
      
      console.log(props.user.category)
      setloading(true);
      const res = await axios.get(
      process.env.REACT_APP_BASE_URL+`news/getNews?Category=["${category}"]`, {withCredentials: true});
      // console.log(res)
      if (res) {
        
        if (res.data.status === "Success") {
          // console.log(res.data.data[0])
          const data = res.data.data[0]
          setResult(data);
        }
        setloading(false);
        
      }
      // SetCategory(props.user.category)
    
    }catch(e){
      console.log(e);
    }
    
    
  };

  // console.log(token);

  const logout = () => {
    const jsf = document.cookie;
    console.log(jsf)
    props.logoutUser();
    history.go(0);
  };



  return (
    <div className="wrapper">
      <div className="wrapper-modal">
      { Sign && <Signin display={SetSignin} />}
      </div>
      {/* {result && console.log(result)} */}
   { !loading ?  
  <div className="home-class">
     
      <Header
      display={SetSignin}
      logout={logout}
      funSetcategory={SetCategory}
      fetchcategory={props.user.category}
      category={category}
      news={result}
      name={props.user.userdata ? props.user.userdata.name :null}
      />
      {/* <div className="home-class-filters">
        <div className={filters ? "home-class-filters-text--selected": "home-class-filters-text"} onClick={e=>changeCardView("filters")}>Filters</div>
      </div> */}
      {/* {filters && <Filters bbc={bbc} wsj={wsj} times={times} changeCardView={changeCardView} getnews={getNews} date={result && result.data.data.date}/>} */}
     
      {console.log(props.user)}
        <Card data={result} image={"bbc.png"} />
     
   </div> : <Loader/>}
     
    </div> 
  );
};
const MapStateToProps = (state) => {
  return {
    user: state.user
  };
};

const MapDespatchToProps = (dispatch) => {
  return {
    logoutUser: () => logoutUser(dispatch),
    GetCategories: () => GetCategories(dispatch)
  };
};

export default connect(MapStateToProps, MapDespatchToProps)(Home);
