import React from "react";
import { IoMailOutline, IoChevronForward, IoApps, IoNotifications, IoPieChart, IoNewspaper, IoCard, IoColorFill } from "react-icons/io5";
import { IconContext } from "react-icons";

function Card() {
    return (
        <div className="service_container">
            <div className="title_wrapper">
                <span className="service_title">Our Services</span>
                <h2>Save Time Managing Social Media<br />For Your Business.</h2>
            </div>
            <div className="service_card">
                <div className="card">
                    <span className="service_icon" style={{ backgroundColor: "#ddfbf9" }}>
                        <IconContext.Provider value={{ color: '#14da8f', size: "22px" }}>
                            <IoMailOutline />
                        </IconContext.Provider>
                    </span>
                    <h3>Ui/Ux Design<br />For Mobile & Web</h3>
                    <a href="#">
                        <span>learn more</span>
                        <IconContext.Provider value={{ color: '#14da8f', size: "18px" }}>
                            <IoChevronForward />
                        </IconContext.Provider>
                    </a>
                </div>

                <div className="card">
                    <span className="service_icon" style={{ backgroundColor: "#e7daf8" }}>
                        <IconContext.Provider value={{ color: '#5700cf', size: "22px" }}>
                            <IoApps />
                        </IconContext.Provider>
                    </span>
                    <h3>Web & Mobile<br />App Development</h3>
                    <a href="#">
                        <span>learn more</span>
                        <IconContext.Provider value={{ color: '#14da8f', size: "18px" }}>
                            <IoChevronForward />
                        </IconContext.Provider>
                    </a>
                </div>

                <div className="card">
                    <span className="service_icon" style={{ backgroundColor: "#ffede6" }}>
                        <IconContext.Provider value={{ color: '#ff8559', size: "22px" }}>
                            <IoColorFill />
                        </IconContext.Provider>
                    </span>
                    <h3>Ilustration Design<br />(Flat, 3d & More)</h3>
                    <a href="#">
                        <span>learn more</span>
                        <IconContext.Provider value={{ color: '#14da8f', size: "18px" }}>
                            <IoChevronForward />
                        </IconContext.Provider>
                    </a>
                </div>

                <div className="card">
                    <span className="service_icon" style={{ backgroundColor: "#ffe1e9" }}>
                        <IconContext.Provider value={{ color: '#fa3970', size: "22px" }}>
                            <IoNotifications />
                        </IconContext.Provider>
                    </span>
                    <h3>Strategy & Product<br />Management</h3>
                    <a href="#">
                        <span>learn more</span>
                        <IconContext.Provider value={{ color: '#14da8f', size: "18px" }}>
                            <IoChevronForward />
                        </IconContext.Provider>
                    </a>
                </div>

                <div className="card">
                    <span className="service_icon" style={{ backgroundColor: "#dcedff" }}>
                        <IconContext.Provider value={{ color: '#56a8f4', size: "22px" }}>
                            <IoNewspaper />
                        </IconContext.Provider>
                    </span>
                    <h3>Custome Wordpress<br />Design & Dev.</h3>
                    <a href="#">
                        <span>learn more</span>
                        <IconContext.Provider value={{ color: '#14da8f', size: "18px" }}>
                            <IoChevronForward />
                        </IconContext.Provider>
                    </a>
                </div>

                <div className="card">
                    <span className="service_icon" style={{ backgroundColor: "#dbf9ed" }}>
                        <IconContext.Provider value={{ color: '#06d786', size: "22px" }}>
                            <IoPieChart />
                        </IconContext.Provider>
                    </span>
                    <h3>Digital Marketing<br />& Management</h3>
                    <a href="#">
                        <span>learn more</span>
                        <IconContext.Provider value={{ color: '#14da8f', size: "18px" }}>
                            <IoChevronForward />
                        </IconContext.Provider>
                    </a>
                </div>

                <div className="card">
                    <span className="service_icon" style={{ backgroundColor: "#fffada" }}>
                        <IconContext.Provider value={{ color: '#f1df11', size: "22px" }}>
                            <IoCard />
                        </IconContext.Provider>
                    </span>
                    <h3>Branding Design<br />(Logo & Packaging)</h3>
                    <a href="#">
                        <span>learn more</span>
                        <IconContext.Provider value={{ color: '#14da8f', size: "18px" }}>
                            <IoChevronForward />
                        </IconContext.Provider>
                    </a>
                </div>

                <div className="card dark">
                    <img src={process.env.PUBLIC_URL + '/images/line.png'} alt="line" className="line"></img>
                    <h2>+4<br />More...</h2>
                    <a href="#">
                        <span>View more...</span>
                        <span className="service_icon" style={{ backgroundColor: "#14da8f" }}>
                            <IconContext.Provider value={{ color: '#fff', size: "18px" }}>
                                <IoChevronForward />
                            </IconContext.Provider>
                        </span>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Card