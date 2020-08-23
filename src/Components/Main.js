import React, {useState} from "react";
import { Link } from "react-router-dom";
import med from "../med.svg";
import Footer from "./Footer";


const Main = () => {

    return(
        <React.Fragment>
          <header>
                <img src={med} alt="" />
                <div>
                    <h1><strong>WMSU CLINIC</strong> MONITORING AND INVENTORY SYSTEM</h1>
                    <p> a web-based clinic system is developed to support the Health Service Center daily operation which is done manually before. This system will involve some of the clinic operation that starts from patient’s registration until giving of medicines. The important thing is it will become easier for the data record and retrieval because of its database on the cloud. This system also has notifiable inventory system for the medicines. </p>
                       
                    <Link to="/login">Login</Link>
                </div>
          </header>
            <main>
                <section className="services">
                  <div className="service-container" > 
                     <div className="services-card service-one"></div>
                      <div className="service-description">
                          <h3>  </h3>
                           <div> </div>
                        </div>
                    </div>
                    <div className="service-container" > 
                    <div className="services-card service-two"></div>
                    <div className="service-description">
                        <h3> Less effort for chating notes </h3>
                        <div> </div>
                    </div>
                    </div>
                    <div className="service-container" > 
                    <div className="services-card service-three"></div>
                    <div className="service-description">
                        <h3> Data Analytics  </h3>
                            <div> This system will be able to generate reports regarding the clinic operation, monthly. For example, the number of patients per day and the number of patients diagnosed for a certain illness for the whole month. </div>
                    </div>      
                    </div>   
                 </section>
            </main>             
        </React.Fragment>
        
    )
}

export default Main;

