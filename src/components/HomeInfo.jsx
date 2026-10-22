import React from 'react'
import { Link } from 'react-router';
import { arrow } from '../assets/icons'

const Card = ({ text, link, btnText, padding }) => {
    return (
        <div className="info-box">
            <p className={`text-center font-medium sm:text-xl ${padding || "p-3"}`}>{text}</p>
            <Link to={link} className='neo-brutalism-white neo-btn text-center'>
                {btnText}
                <img src={arrow} className='w-4 h-4 object-contain' />
            </Link>
        </div>
    )
}

const contentToDisplay = {
    1: (
        <h1 className='sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 mx-5 text-white'>
            Hi, i am <span className='font-semibold'>Merlin</span>
            <br />
            A Software Engineer from India
        </h1>
    ),
    2: (
        <Card
            text={" I am an AWS Certified Associate Developer." + "\n" + "Proficient in Java, SpringBoot, Javascript, React.Js, Html, CSS"}
            link="/about"
            btnText="click here to know more"
        />
    ),
    3: (
        <Card
            text={"I have enhanced my skills by working on these projects. Check out more of my work here!"}
            link="/projects"
            btnText="Visit my project"
        />
    ),
    4: (
        <Card
            text={"Hire me!"}
            link="/contact"
            btnText="Contact me"
            padding="p-4"
        />
    ),
}



function HomeInfo({ currentStage }) {
    return contentToDisplay[currentStage] || null;
}

export default HomeInfo