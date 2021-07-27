import React from 'react'
import "./footer.scss"
const Footer=(props)=> {

    return (
        <div className="footer">
            <div className="footer-main">
            <h3>The Archers</h3>
            <p>
            Through this website you are able to link to 
            other websites which are not under the control of The Archers.
            which is only for the showcaseing the skills of an individual developer
            We have no control over the nature, 
            content and availability of those sites.
            and nor we want to monetize it The inclusion of any links does not necessarily 
            imply a recommendation or endorse the views expressed within them.
            </p>
            </div>

            <div className="footer-category">
            <h4>Top Categories</h4>
            <ul>
                <li onClick={()=>props.funSetcategory("world")}><span>World</span></li>
                <li onClick={()=>props.funSetcategory("business")}><span>Business</span></li>
                <li onClick={()=>props.funSetcategory("politics")}><span>Politics</span></li>
                <li onClick={()=>props.funSetcategory("coronavirus")}><span>Coronavirus</span></li>
                <li onClick={()=>props.funSetcategory("technology")}><span>Technology</span></li>
            </ul>
            </div>

            <div className="footer-follow">
            <h4>Orgnization</h4>
            <ul>
                <li><a href="https://www.nytimes.com/">New York Times</a></li>
                <li><a href="https://edition.cnn.com/">CNN</a></li>
                <li><a href="https://www.bbc.com/news">BBC</a></li>
                <li><a href="https://www.theguardian.com/international">The Guardian</a></li>
            </ul>
            </div>
            
            <div className="footer-contact">
                <h4>Like my Work?</h4>
                <ul>
                    <li><a href="https://www.linkedin.com/in/shambhukumar-shau/"><img src="/img/linkdin.svg" alt="linkdin"/></a></li>
                    <li><a href="https://github.com/Shambhukumar"><img src="/img/github.svg" alt="github"/></a></li>
                    <li><a href="mailto:shau.shambhukumar@gmail.com"><img src="/img/mail.svg" alt="mail"/></a></li>
                </ul>
            </div>
        </div>
    )
}


export default Footer

