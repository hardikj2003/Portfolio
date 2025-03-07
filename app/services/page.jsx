"use client";

import {BsArrowDownRight} from 'react-icons/bs'
import Link from 'next/link';

const services = [
    {
        num: '01',
        title: 'Full Stack Web Development',
        Description: 'Backend Development: Developing robust server-side applications using Node.js. Also capable of creating RESTful APIs and integrating third-party services. Frontend Development: Building responsive and interactive user interfaces using React.js, and TailwindCSS. ',
        href: ""
    },
    {
        num: '02',
        title: 'Database Management',
        Description: 'Designing and implementing databases using MongoDB, , and SQL.  Ensuring efficient data retrieval and storage solutions. ',
        href: ""
    },
    // {
    //     num: '03',
    //     title: 'Web Development',
    //     Description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod ',
    //     href: ""
    // },
    // {
    //     num: '04',
    //     title: 'Web Development',
    //     Description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod ',
    //     href: ""
    // },
]

import { easeIn, motion } from 'framer-motion';

const Services = () => {
  return (
    <section className='min-h-[80vh] flex flex-col justify-center py-12 xl:py-0'>
        <div className='container mx-auto'>
            <motion.div
                initial={{opacity:0}}
                animate={{
                    opacity: 1,
                    transition: {delay: 2.4, duration: 0.4, ease: easeIn}
                }}
                className='grid grid-cols-1 md:grid-cols-2 gap-[60px]'
            >
                {services.map((service, index) => {
                    return (
                        <div 
                            key={index} 
                            className='flex flex-1 flex-col justify-center gap-6 group'>
                            <div className='w-full flex justify-between items-center '>
                                <div className='text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500 '>
                                    {service.num}
                                </div>
                                <Link href={service.href} className='w-[70px] h-[70px] rounded-full bg-white group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:-rotate-45'>
                                    <BsArrowDownRight className='text-primary text-3xl'/>
                                </Link>
                            </div>
                            <h2 className='text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500'>
                                {service.title}
                            </h2>
                            <p className='text-white/60'>{service.Description}</p>
                            <div className='border-b border-white/20 w-full'></div>
                        </div>
                    );
                })}
            </motion.div>
        </div>
    </section>
  );
};

export default Services;
