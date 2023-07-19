import {GoPrimitiveDot} from 'react-icons/go'
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';



const Project = (props) => {

  return (
    <Swiper navigation={true} modules={[Navigation]} className='mySwiper project_container'>
      {
        props.projects.map((project, index) => {
          return (
            <SwiperSlide key={index} className="project">
              <div className="project-details">
                <h5 className="project-title">{project.title}</h5>
                <div className="p-details-description">
                  <i> <GoPrimitiveDot/></i>
                  <span className='pd p-type'>{project.type}</span>
                  <i> <GoPrimitiveDot/></i>
                  <span className='pd p-year'>{project.year}</span>
                </div>
                <p className='p-description'>{project.description}</p>
                <div className='p-stack'>
                  {project.stacks.map((stack, index) => {
                    return (
                      <span key={index} className='t-stack'>{stack}</span>
                    )
                  })}
                </div>
                <div className='p-links'>
                  {project.links.map((link, index) => {
                    return (
                      <a key={index} target='_blank' rel='noreferrer' href={link.url}>{link.type}</a>
                    )
                  })}
                </div>
              </div>
              <div className="project-image">
                <img src={project.image} alt={project.title} />
              </div>
            </SwiperSlide>
          )
        })
      }

      {/* <div className="project-container flex flex-col items-center justify-center">
        <div className="project-container-container flex items-center justify-center w-full mt-0 md:mt-24">
          <div className="prev-btn-container hidden w-2/12 text-center md:block">
            <button id="prevbtn" className="rounded-full transition focus:ring-1 ring-white ring-opacity-10 ring-offset-2 focus:outline-none bg-blue-700">
              <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-12 h-12 "><circle r="20" transform="matrix(1 0 0 -1 20 20)" fill="white" fill-opacity="0.1"></circle> <path d="M23.125 13.75L16.875 20L23.125 26.25" stroke="white" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"></path></svg>
            </button>
          </div> 
          <div className="relative w-full px-6 md:w-8/12 md:px-6">
            <div className="project-img-container relative z-40 w-24 h-24 mx-auto transform translate-y-12 rounded-full border-8 border-white md:transform-none md:absolute md:w-40 md:h-40 md:-top-16 md:-left-12">
              <img id="testimony-image" src="" alt='project-display' className="firstImage project-img absolute w-full h-full z-20 border-white border object-cover inset-0 rounded-full"/> 
              <img id="testimony-image" src="" alt='project-display'  className="secondImage project-img absolute w-full h-full border-white border z-10 object-cover inset-0 rounded-full"/>
              <img id="testimony-image" src="" alt='project-display' className="absolute project-img w-full h-full hidden object-cover inset-0 rounded-full" loading="lazy"/>
              <img id="testimony-image" src={props.projects[0].image} alt='project-display' className="absolute project-img w-full h-full hidden object-cover inset-0 rounded-full" loading="lazy"/>
            </div> 
            <div className="relative">
              <div id="testimony" className="testimony testimony-to-show swipe relative z-30 flex items-center justify-center px-6  text-sm bg-white rounded-lg shadow-md  lg:px-32 md:text-base h-96 sm:px-20 py-20 md:px-20 before:content-[' '] before:absolute before:top-6 before:right-6 before:h-10 before:w-10 before:rounded-xl before:bg-blue-700 before:transition-all before:duration-[300ms]">
                <div className="z-10 overflow-y-scroll h-full">
                  <div id="testimony-data" className="">
                    I’ve used quite a number of e-commerce platforms, but Selar’s amazing! They’re truly interested in your growth and are constantly listening to the customers and tweaking and fine tuning their app. They do the heavy lifting Totally recommend them! 
                  </div> 
                  <div className="mt-6">
                    <div class="flex items-center space-x-2">
                      <div id="name" className="font-bold">Steve Harris</div>
                    </div> 
                    <p id="username" className="mt-2 text-sm">
                     Business Accelerator &amp; Coach  
                    </p>
                  </div>
                </div>
                <span className="transition-colors duration-[300ms] h-10 w-10 flex items-center justify-center text-center text-white absolute top-6 right-6 ">
                  <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" height="20" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M928 254.3c-30.6 13.2-63.9 22.7-98.2 26.4a170.1 170.1 0 0 0 75-94 336.64 336.64 0 0 1-108.2 41.2A170.1 170.1 0 0 0 672 174c-94.5 0-170.5 76.6-170.5 170.6 0 13.2 1.6 26.4 4.2 39.1-141.5-7.4-267.7-75-351.6-178.5a169.32 169.32 0 0 0-23.2 86.1c0 59.2 30.1 111.4 76 142.1a172 172 0 0 1-77.1-21.7v2.1c0 82.9 58.6 151.6 136.7 167.4a180.6 180.6 0 0 1-44.9 5.8c-11.1 0-21.6-1.1-32.2-2.6C211 652 273.9 701.1 348.8 702.7c-58.6 45.9-132 72.9-211.7 72.9-14.3 0-27.5-.5-41.2-2.1C171.5 822 261.2 850 357.8 850 671.4 850 843 590.2 843 364.7c0-7.4 0-14.8-.5-22.2 33.2-24.3 62.3-54.4 85.5-88.2z"></path></svg>
                </span>
              </div> 
              <div id="testimony" className="comeup testimony testimony-second absolute top-0 z-20 flex items-center justify-center px-6 mx-3 text-sm transform translate-y-2 bg-white rounded-lg shadow-md md:translate-y-3 py-20 sm:px-20 md:px-20 lg:px-32 md:text-base md:w-auto h-96">
                <div class="overflow-y-scroll h-full">
                  <div id="testimony-data"> 
                    Selar has an Affiliate System that works! They rescued me during my Monetize Your Knowledge Course Launch. It’s easy to host your courses and digital products on Selar and you can quickly receive your product payment from them. 
                  </div> 
                  <div class="mt-6">
                    <div class="flex items-center space-x-2">
                      <div id="name" class="font-bold">Tricia Biz</div>
                    </div> 
                    <p id="username" class="mt-2 text-sm">
                      Marketing &amp; Launch Expert
                    </p>
                  </div>
                </div>
              </div> 
              <div id="testimony" className="comeup2 testimony absolute top-0 z-10 flex items-center justify-center px-6 pb-20 mx-6 text-xs transform translate-y-4 bg-white rounded-lg shadow-md pt-28 md:translate-y-6 sm:px-24 md:px-20 lg:32 md:text-base md:py-0 md:pt-0 md:w-auto h-96">
                <div>
                  <p id="testimony-data">
                    Anim nisi in sint proident pariatur fugiat quis ea cupidatat. Ipsum sit adipisicing in ut. Esse aliquip officia sunt anim incididunt irure ex cillum excepteur sit eu cupidatat laborum. Non commodo laborum tempor adipisicing esse et minim veniam cupidatat ipsum officia nostrud excepteur. In nisi sint ex dolore nostrud eu. Qui amet do consequat qui aute ad. Aute velit anim sit fugiat duis aliqua consectetur velit.
                  </p>
                  <div class="mt-10">
                    <div class="flex items-center space-x-2">
                      <div id="name" class="font-bold">Tricia Biz</div>
                    </div> 
                    <p id="username" class="mt-3 text-sm">
                      Marketing &amp; Launch Expert
                    </p>
                  </div>
                </div>
              </div> 
              <div id="testimony" className="testimony hidden absolute top-0 z-10 items-center justify-center px-6 pb-20 mx-6 text-xs transform translate-y-4 bg-white rounded-lg shadow-md pt-28 md:translate-y-6 md:px-32 md:text-base md:py-0 md:pt-0 md:w-auto h-96">
                <div>
                  <p id="testimony-data">
                    Anim nisi in sint proident pariatur fugiat quis ea cupidatat. Ipsum sit adipisicing in ut. Esse aliquip officia sunt anim incididunt irure ex cillum excepteur sit eu cupidatat laborum. Non commodo laborum tempor adipisicing esse et minim veniam cupidatat ipsum officia nostrud excepteur. In nisi sint ex dolore nostrud eu. Qui amet do consequat qui aute ad. Aute velit anim sit fugiat duis aliqua consectetur velit.
                  </p>
                  <div class="mt-10">
                    <div class="flex items-center space-x-2">
                      <div id="name" class="font-bold">Tricia Biz</div>
                    </div> 
                    <p id="username" class="mt-3 text-sm">
                      Marketing &amp; Launch Expert
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div> 
          <div className="hidden text-center md:block md:w-2/12">
            <button id="nextbtn" class="transform rotate-180 rounded-full bg-blue-700 focus:ring-1 ring-white ring-opacity-10 ring-offset-2 focus:outline-none">
              <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-12 h-12"><circle r="20" transform="matrix(1 0 0 -1 20 20)" fill="white" fill-opacity="0.1"></circle> <path d="M23.125 13.75L16.875 20L23.125 26.25" stroke="white" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"></path></svg>
            </button>
          </div>
        </div>
        <div className="mt-20">
          <div className="flex items-center justify-center mb-12 space-x-10 md:hidden">
            <button id="smallPrevBtn" className="rounded-full focus:ring-1 ring-white ring-opacity-10 bg-blue-700 ring-offset-2 focus:outline-none">
              <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-12 h-12"><circle r="20" transform="matrix(1 0 0 -1 20 20)" fill="white" fill-opacity="0.1"></circle> <path d="M23.125 13.75L16.875 20L23.125 26.25" stroke="white" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"></path></svg>
            </button> 
            <button id="smallNextBtn" className="transform rotate-180 rounded-full focus:ring-1 bg-blue-700 ring-white ring-opacity-10 ring-offset-2 focus:outline-none">
              <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-12 h-12"><circle r="20" transform="matrix(1 0 0 -1 20 20)" fill="white" fill-opacity="0.1"></circle> <path d="M23.125 13.75L16.875 20L23.125 26.25" stroke="white" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"></path></svg>
            </button>
          </div> 
          <div className="flex items-center justify-center space-x-2 selection">
            
          </div>
        </div>
      </div> */}
    </Swiper>
  )
}

export default Project