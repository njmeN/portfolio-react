import React from 'react';
import './home.css';
import Me from '../../assets/avatar-1.svg';
import HeaderSocials from './headerSocials';
import ScrollDown from './scrolldown';
import Shapes from './shapes';
const Home = () => {
    return (
        <section className="container home" id='home'>
            <div className='intro'>
                <img src={Me} className='home__img'/>
                <h1 className="home__name">Najme nooryan</h1>
                <span className="home__education">I'm a Front-End developer.</span>

                <HeaderSocials />

                <a href='#contact' className='btn'>Hire Me</a>

                <ScrollDown />
            </div>

            <Shapes />
        </section>
        
        );
}
 
export default Home;