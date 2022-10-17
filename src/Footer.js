import React from "react";
import {Link} from "react-router-dom"
import './Footer.css'

const Footer = () => {
  return (
    <div id="footerContainer"> 
        <h4 style={{ textAlign: "center", marginTop: "10px", fontSize: "25px", fontWeight: "bold", color: "#8dadca" }}>&copy; Preetan Goud</h4>
            <div className="row " style={{textAlign: "center", fontSize: "30px"}}>
                <div className="col-sm-12 icons" >
                    <Link to = "http://https://www.facebook.com/">
                    <i class="fa-brands fa-facebook"></i>
                    </Link>
                    <Link to = "https://www.youtube.com/">
                    <i class="fa-brands fa-youtube"></i>
                    </Link>
                    <Link to = "https://www.instagram.com/">
                    <i class="fa-brands fa-instagram"></i>
                    </Link>
                </div>
            </div>
    </div>
  );
};
export default Footer;
