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
                    <h1>We care for WMSU</h1>
                    <p> Lorem ipsum dolor sit amet,  torquent per conubia nostra, per inceptos himenaeos. Curabitur turpis velit, semper eget consectetur nec, commodo in felis. Sed tristique elit ut quam vestibulum egestas.</p>
                    <Link to="/login">Login</Link>
                </div>
          </header>
            <main>
                <section className="services">
                   
                  <div className="service-container" > 
                     <div className="services-card service-one"></div>
                      <div className="service-description">
                          <h3> 111 Lorem ipsum dolor sit amet,  </h3>
                        <div> 123 Donec facilisis vitae risus non viverra. Vivamus condimentum sed ipsum vitae ullamcorper. Vestibulum ac mi malesuada, fermentum magna non, tincidunt ligula. Nam in elit sapien. Maecenas interdum quam tellus, a malesuada augue hendrerit eget. Praesent ullamcorper non felis id pulvinar. Donec efficitur semper ultrices. Integer aliquam cursus urna ac ullamcorper. Curabitur pulvinar quis lectus at vehicula. Quisque tempus mattis diam non sodales. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur turpis velit, semper eget consectetur nec, commodo in felis. Sed tristique elit ut quam vestibulum egestas</div>
                        </div>
                    </div>
                    <div className="service-container" > 
                    <div className="services-card service-two"></div>
                    <div className="service-description">
                        <h3>222 Lorem ipsum dolor sit amet,  </h3>
                        <div> 234Donec facilisis vitae risus non viverra. Vivamus condimentum sed ipsum vitae ullamcorper. Vestibulum ac mi malesuada, fermentum magna non, tincidunt ligula. Nam in elit sapien. Maecenas interdum quam tellus, a malesuada augue hendrerit eget. Praesent ullamcorper non felis id pulvinar. Donec efficitur semper ultrices. Integer aliquam cursus urna ac ullamcorper. Curabitur pulvinar quis lectus at vehicula. Quisque tempus mattis diam non sodales. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur turpis velit, semper eget consectetur nec, commodo in felis. Sed tristique elit ut quam vestibulum egestas</div>
                    </div>
                    </div>
                    <div className="service-container" > 
                    <div className="services-card service-three"></div>
                    <div className="service-description">
                        <h3> 333 Lorem ipsum dolor sit amet,  </h3>
                        <div> 345Donec facilisis vitae risus non viverra. Vivamus condimentum sed ipsum vitae ullamcorper. Vestibulum ac mi malesuada, fermentum magna non, tincidunt ligula. Nam in elit sapien. Maecenas interdum quam tellus, a malesuada augue hendrerit eget. Praesent ullamcorper non felis id pulvinar. Donec efficitur semper ultrices. Integer aliquam cursus urna ac ullamcorper. Curabitur pulvinar quis lectus at vehicula. Quisque tempus mattis diam non sodales. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur turpis velit, semper eget consectetur nec, commodo in felis. Sed tristique elit ut quam vestibulum egestas</div>
                    </div>      
                    </div>   
                 </section>
            </main>             
        </React.Fragment>
        
    )
}

export default Main;

