import React from 'react';
import AdobeStock from './Images/AdobeStock_362497671 1.png';
import AdobeStock2 from './Images/AdobeStock_400053098 1.png';
import grid1 from './Images/grid.136a9256d16888900db0.svg (1).png';
import grid2 from './Images/grid.136a9256d16888900db0.svg.png';
import Icon1 from './Images/iCON 7 1 (1).png';
import Icon2 from './Images/iCON 7 1.png';
import Icon3 from './Images/Icon placeholder (1).png';
import Icon4 from './Images/Icon placeholder (2).png';
import Icon5 from './Images/Icon placeholder.png';
import Icon6 from './Images/Video Repository.png';
import Icon7 from './Images/woman-using-smartphone-technology 2.png';
import './styles/Landing.css';
import Footer from '../Footer/Footer';
import NavBar from '../NavBar/NavBar';
import { Link } from 'react-router-dom';

const Landing = () => {
  return (
    <div>
        {/* <nav className='NavBar'>
            <div className='navTitle'>
                <img className='Icon2' src={Icon2} alt='Icon2' />
                <p>HelpMeOut</p>
            </div>
            <div className='Features'>
                <p>Features</p>
                <p>How it Works</p>
            </div>
            <div className='started'>
                <p>Get Started</p>
            </div>
        </nav><hr id='line1'/> */}

        <NavBar />
        <div className='BelowNav'>
            <div className='TextButton'>
                <h1>Show Them <br /> Don’t Just Tell</h1>
                <p>Help your friends and loved ones by creating and sending <br /> videos on how to get things done on a website.</p>
                <Link to="/Video" >
                <button>Install HelpMeOut</button>
                </Link>
                
            </div>
            <div className='images'>
                <div className='imgRow'>
                    <img className='AdobeStock2' src={AdobeStock2} alt='AdobeStock2' />
                    <div>
                    <img className='grid2' src={grid2} alt='grid2' />
                        <img className='AdobeStock' src={AdobeStock} alt='AdobeStock' />
                    </div>
                </div>
                <div className='imgColumn'>
                <img className='grid1' src={grid1} alt='grid1' />
                    <img className='Icon7' src={Icon7} alt='Icon7' />
                </div>
            </div>
        </div>
        <hr id='line2'/>

        <div className='FeatureDiv'>
        <div className='FeatureText'>
            <h2>Features</h2>
            <p>Key Highlights of Our Extension</p>
        </div>

            <div className='FeaturesIconText'>
                <div className=''>
                    <div className='IconText'>
                        <img className='Icon5' src={Icon5} alt='Icon5' />
                        <div className='FeaturesText'>
                            <h2>Simple Screen Recording</h2>
                            <p>Effortless screen recording for everyone. Record with ease, no tech expertise required.</p>
                        </div>
                    </div>

                    <div className='IconText'>
                        <img className='Icon3' src={Icon3} alt='Icon3' />
                        <div className='FeaturesText' >
                            <h2>Easy-to-Share URL</h2>
                            <p>Share your recordings instantly with a single link. No attachments, no downloads.</p>
                        </div>
                    </div>

                    <div className='IconText'>
                        <img className='Icon4' src={Icon4} alt='Icon4' />
                        <div className='FeaturesText'>
                            <h2>Revisit Recordings</h2>
                            <p>Access and review your past content effortlessly. Your recordings, always at your fingertips.</p>
                        </div>
                    </div>
                </div>

                <div>
                    <img className='Icon6' src={Icon6} alt='Icon6' />
                </div>
            </div>
        </div>
        {/* <hr id='line3'/> */}

        {/* <div>
            <h2>How it Works</h2>
            <div>
                <div>
                    <div>1</div>
                    <h4>Record Screen</h4>
                    <p>Click the "Start Recording" button in our extension.  choose which part of your screen to capture and who you want to send it to.</p>
                </div>

                <div>

                </div>

                <div>

                </div>
            </div>
        </div> */}
        <Footer />
    </div>
  )
}

export default Landing;