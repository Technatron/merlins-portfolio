import React from 'react'
import {skills, experiences } from '../constants'
import { div } from 'three/tsl'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import CTA from '../components/CTA';


function About() {
  return (
    <section className='max-container'>
      <div className='m-0'>
        <h1 className='head-text'>
          Hi I'm <span className='font-semibold drop-shadow blue-gradient_text'>Merlin</span>
        </h1>
        <div className='flex flex-col gap-3 text-slate-500 mt-5'>
          <p>
            Software Engineer based in India, I Have over three years of experience working with Data intensive applications And cloud infrastructure. 
          </p>
        </div>

        <div className="flex flex-col py-10">
          <h3 className="subhead-text">My Skills</h3>
          <div className="flex flex-wrap gap-12 mt-20 ">
            {skills.map( skill => (
              <div className='block-container w-30 h-30 bg-white/40 '>
                <div className="btn-back rounded-xl "></div>
                <div className='btn-front rounded-xl flex justify-center items-center'>
                  <img src={skill.imageUrl}
                  alt={skill.name}
                  className='w-1/2 h-1/2 object-contain'
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="py-16">
          <h3 className="subhead-text">Work Experience</h3>
          <div className='flex flex-col gap-3 text-slate-500 mt-5'>
          <p>
            I have worked on different projects 
            ranging from building an ETL pipeline for a banking company to creating workflows to reduce manual tasks by 80%.
          </p>
        </div>
        <div className="flex mt-12">
          <VerticalTimeline>
            {experiences.map( experience => (
              <VerticalTimelineElement 
              key={experience.company_name}
              date={experience.date}
              icon={
                <div className='flex justify-center items-center w-full h-full'>
                  <img 
                  src={experience.icon} 
                  alt={experience.company_name} 
                  className=' w-[90%] h-[90%] object-contain'
                  />
                </div>
              }
              contentStyle={{
                borderBottom: '8px',
                borderStyle: 'solid',
                borderBottomColor: experience.iconBg,
                boxShadow: 'none'
              }
              }
              iconStyle={
                {
                  background: experience.iconBg
                }
              }
              >
                <div>
                  <h3 className='text-black text-xl font-poppins font-semibold'>
                    {experience.title} 
                  </h3>
                  <p className="text-black-500">
                    {experience.company_name}
                  </p>
                </div>

                <ul className="my-5 ml-5 list-disc space-y-2">
                  {experience.points.map( (point, index) => (
                    <li
                    key={`exp-point-${index}`} 
                    className='text-black-500/60 font-normal pl-1 text-sm'>
                      {point}  
                    </li>
                  ))}
                </ul>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </div>

        </div>
      </div>
      <CTA />
    </section>
  )
}

export default About