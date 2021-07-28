import React from 'react'
import "./ModelCategory.scss"

const ModelCategory =(props)=> {
    const onclickfunction = (e) =>{
        props.funSetcategory(e)
        props.display(false)
    }
    const allCategory = props.category.reverse()
    return (
        <div className="modelCategory">
            <div className="modelCategory-head">
                <div className="modelCategory-head-empty"></div>
                <div className="modelCategory-head-text">The Archers</div>
                <div className="modelCategory-head-cross" onClick={()=> props.display(false)}>
                    <div className="modelCategory-head-cross-bar1"></div>
                    <div className="modelCategory-head-cross-bar2"></div>
                    <div className="modelCategory-head-cross-bar3"></div>
                </div>
            </div>
        <ul className="modelCategory-list">
            {props.category.map((e,el)=>{
                if(e !== "home"){
                    return <li className={props.currCategory===e && "active"} onClick={()=> onclickfunction(e)}>{e.toUpperCase()}</li>
                }
               
            })}
        </ul>
        </div>
    )
}
export default ModelCategory

