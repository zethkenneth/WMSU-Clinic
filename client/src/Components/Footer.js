import React from "react";
import styled from 'styled-components';
import 'bootstrap/dist/css/bootstrap.min.css'
import '../Footer.css';
const Footer = () => {
    return(
    <FooterContainer className="main-footer">
                    <div className="footer-middle">
                    <div className="container">
                        <div className="row">
                            {/* Column1 */}
                            <div className="col-md-3 col-sm-6">
                                <h4>Contact Us</h4>
                                <ul className="list-unstyled">
                                    <li>Mobile: +6394254987</li>
                                    <li>Hotline: 5578 945</li>
                                   
                                </ul>
                            </div>
                             {/* Column2 */}
                             <div className="col-md-3 col-sm-6">
                                <h4>Lorem ipsum</h4>
                                <ul className="list-unstyled">
                                    <li><a href="/">Lorem</a></li>
                                    <li><a href="/">Lorem</a></li>
                                    
                                </ul>
                            </div>
                             {/* Column3 */}
                             <div className="col-md-3 col-sm-6">
                                <h4>Lorem ipsum</h4>
                                <ul className="list-unstyled">
                                    <li><a href="/">Lorem</a></li>
                                    <li><a href="/">Lorem</a></li>
                                    
                                </ul>
                            </div>
                             {/* Column4 */}
                             <div className="col-md-3 col-sm-6">
                                <h4>Lorem ipsum</h4>
                                <ul className="list-unstyled">
                                    <li><a href="/">Lorem</a></li>
                                    <li><a href="/">Lorem</a></li>
                                    
                                </ul>
                            </div>
                        </div>
                        {/* Footer Bottom */}
                    <div className="footer-bottom">
                        <p className="text-xs-center">
                            &copy;{new Date().getFullYear()} Western Mindanao State University-Clinic - All Rights Reserved
                        </p>
                    </div>
                    </div>
                    
                    
                </div>
    </FooterContainer>

);}
export default Footer;

const FooterContainer = styled.footer`
.footer-middle {
    background: var(--mainDark);
    padding-top: 3rem;
    color: var(--mainWhite);
    
}
.footer-bottom{
    padding-top: 3rem;
    padding-tp: 2rem;

}
ul li a{
    color: var(--mainGrey);

}
ul li a:hover{
    color: var(--mainLightGrey);
}

`;