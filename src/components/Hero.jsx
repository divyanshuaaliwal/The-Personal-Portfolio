import React, { useState, useEffect } from 'react'
import profilePic from "../assets/divyanshuaaliwal.png"
import { HERO_CONTENT } from "../constants"
import { motion } from 'framer-motion';

const containerVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.5,
            staggerChildren: 0.5,
        },
    }
}

const childVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: {
        opacity: 1,
        x: 0,
        transition: { duration: 0.5 }
    }
}


const Hero = () => {
    const [isExpanded, setIsExpanded] = useState(false);
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    const toggleReadMore = () => setIsExpanded(!isExpanded);

    const getText = () => {
        if (isExpanded || windowWidth >= 768) return HERO_CONTENT;
        return HERO_CONTENT.slice(0, 250) + "...";
    };

    useEffect(() => {
        const handleResize = () => setWindowWidth(window.innerWidth);

        window.addEventListener('resize', handleResize);

        // Cleanup the event listener when the component unmounts
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <div className="pb-4 lg:mb-36">
            <div className="flex flex-wrap lg:flex-row-reverse">
                <div className="w-full lg:w-1/2">
                    <div className="flex justify-center lg:p-8">
                        <motion.img
                            src={profilePic}
                            alt="Divyanshu Aaliwal"
                            className="border border-stone-900 rounded-3xl"
                            width={650}
                            height={650}
                            initial={{ x: 100, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ duration: 1, delay: 1.5 }}
                        />
                    </div>
                </div>
                <div className="w-full lg:w-1/2">
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={containerVariants}
                        className="flex flex-col items-center lg:items-start mt-10"
                    >
                        <motion.h2
                            className="pb-2 text-4xl tracking-tighter lg:text-8xl"
                            variants={childVariants}
                        >
                            Divyanshu Aaliwal
                        </motion.h2>

                        <motion.span
                            variants={childVariants}
                            className="bg-gradient-to-r from-stone-300 to-stone-600 bg-clip-text text-3xl tracking-tight text-transparent"
                        >
                            A Frontend Developer
                        </motion.span>

                        <motion.div variants={childVariants}>
                            <p className="my-2 max-w-lg py-6 text-xl leading-relaxed tracking-tighter">
                                {getText()}
                                {isExpanded ? " " : ""}
                                <button
                                    onClick={toggleReadMore}
                                    className="rounded-sm bg-stone-900 p-1 text-sm font-medium text-stone-300 md:hidden"
                                >
                                    {isExpanded ? "Read less" : "Read more"}
                                </button>
                            </p>
                        </motion.div>

                        <motion.a href='/Divyanshu_Aaliwal_Resume.pdf' target='_blank' rel='noopener-noreferrer'
                            variants={childVariants}
                            className='bg-white rounded-full p-4 text-sm text-stone-800 mb-10'
                            download
                        >
                            Download Resume
                        </motion.a>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}

export default Hero;
