import React from "react";
import { Link } from "react-router-dom";
import med from "../../assets/img/med.svg";
import Footer from "../Landing Page/Footer";


const LandingPage = () => {

    return(
        <React.Fragment>
             <div className="container ">     
         <nav>
            <ul>
             <li><Link to="/"> WMSU CLINIC </Link></li>
            </ul>
          </nav>
          
          <header>
                <img src={med} alt="" />
                <div>
                    <h1><strong>WMSU CLINIC</strong> MONITORING AND INVENTORY SYSTEM</h1>
                    <p> a web-based clinic system developed by Debug.Go to support the WMSU-Health Service Center's daily operation.  </p>
                    <Link to="/login">Login</Link>
                </div>
          </header>
            <main>
                <section className="services">
                   
                  <div className="service-container" > 
                     <div className="services-card service-one"></div>
                      <div className="service-description">
                          <h3>will involve some of the clinic operation that starts from patient’s registration until giving of medicines. The important thing is it will become easier for the data record and retrieval because of its online and offline database. </h3>
                        
                        </div>
                    </div>
                    <div className="service-container" > 
                    <div className="services-card service-two"></div>
                    <div className="service-description">
                        <h3>will be able to generate reports regarding the clinic operation, monthly. This system also has notifiable inventory system for the medicines.  </h3>
                        
                    </div>
                    </div>
                   
                 </section>
            </main>            
            </div> 
            <Footer></Footer>
        </React.Fragment>
        
    )
}

export default LandingPage;

