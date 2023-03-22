import './App.scss';
import { FaBehance, FaDribbble } from 'react-icons/fa';
import { IoMailOutline, IoChevronForwardCircle, IoStar } from 'react-icons/io5';
import { IconContext } from 'react-icons';
import Card from './component/Card';


function App() {
  return (
    <>
      <header>
        <div className='logo_wrapper'><span>clarapardo</span>dev</div>
        <div className='menu_container'>
          <span>
            <IconContext.Provider value={{ color: "#000", size: "18px", className: "icons_container" }}>
              <div className='icon'><FaBehance /></div>
              <div className='icon'><FaDribbble /></div>
            </IconContext.Provider>
          </span>
          <span>
            <IconContext.Provider value={{ color: '#000', size: "18px" }}>
              <div className='icon'><IoMailOutline /></div>
              hello@example.com
            </IconContext.Provider>
          </span>
          <span className='menu'>
            <span></span>
            <span></span>
            <span></span>
          </span>
        </div>
      </header>

      <div className='content_wrapper'>
        <div className='left_content_wrapper'>
          <h2>
            <span>Design <span className='second'>focused</span></span>
            <span>startup,<span className='second'> for</span> startups.</span>
          </h2>
          <p>When, while lovely valley teems with vapor around meand <br /> meridian sun strikes the upper impenetrable.</p>
          <div className='btn_group'>
            <div className='btn btn_primary'>Hire me
              <IconContext.Provider value={{ color: '#14da8f', size: "25px" }}>
                <IoChevronForwardCircle />
              </IconContext.Provider>
            </div>
            <div className='btn btn_secondary'>Live Chat</div>
          </div>
          <div className='review_container'>
            <p className='total_review'>64+ Reviews</p>
            <IconContext.Provider value={{ color: '#fff', size: "18px" }}>
              <span><IoStar /></span>
              <span><IoStar /></span>
              <span><IoStar /></span>
              <span><IoStar /></span>
              <span><IoStar /></span>
            </IconContext.Provider>
          </div>
          <p className='more_review'>More than 50+ people taking services.</p>
        </div>

        <div className='right_content_wrapper'>
          <img src={process.env.PUBLIC_URL + '/images/bg.png'} alt="bg"></img>
        </div>
      </div>

      <Card />


    </>
  );
}

export default App;
