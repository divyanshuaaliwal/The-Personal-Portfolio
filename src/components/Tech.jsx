import { motion } from 'framer-motion';
import React from 'react'
import { BiLogoGit, BiLogoJavascript } from "react-icons/bi";
import { DiHtml5 } from "react-icons/di";
import { FaCss3, FaGithub } from "react-icons/fa";
import { RiReactjsLine } from "react-icons/ri";
import { SiMui } from "react-icons/si";
import { TbBrandTailwind } from "react-icons/tb";

const Technologies = () => {
    
    const iconVariants = (duration) => ({
        initial: { y: -10 },
        animate: {
            y: [10, -10],
            transition: {
                duration: duration,
                ease: "linear",
                repeat: Infinity,
                repeatType: "reverse",
            },
        },
    });


    return (
        <div className="pb-24">
            
            <motion.h2 
                whileInView={{opacity:1, y:0}}
                initial={{opacity:0, y:-100}}
                transition={{duration:1.5}}
                className="my-20 text-center text-4xl"
            >
                Technologies
            </motion.h2>

            <motion.div 
                whileInView={{opacity:1, x:0}}
                initial={{opacity:0, x:-100}}
                transition={{duration:1.5}}
                className="flex flex-wrap items-center justify-center gap-4"
            >
                
                {/* <motion.div
                    className="p-4"
                    initial="initial"
                    animate='animate'
                    variants={iconVariants(2.5)}
                >

                    <RiReactjsLine className="text-7xl text-cyan-400" />
                </motion.div>

                <motion.div 
                    className="p-4"
                    initial="initial"
                    animate='animate'
                    variants={iconVariants(3)}
                >
                    <TbBrandNextjs className="text-7xl" />
                </motion.div>
                
                <motion.div
                    className="p-4"
                    initial="initial"
                    animate='animate'
                    variants={iconVariants(5)}
                >
                    <SiMongodb className="text-7xl text-cyan-500" />
                </motion.div>
                
                <motion.div 
                    className="p-4"
                    initial="initial"
                    animate='animate'
                    variants={iconVariants(2)}
                >
                    <DiRedis className="text-7xl text-red-700" />
                </motion.div>
                
                <motion.div 
                    className="p-4"
                    initial="initial"
                    animate='animate'
                    variants={iconVariants(6)}
                >
                    <FaNodeJs className="text-7xl text-green-500" />
                </motion.div>
                
                <motion.div 
                    className="p-4"
                    initial="initial"
                    animate='animate'
                    variants={iconVariants(4)}
                >
                    <BiLogoPostgresql className="text-7xl text-sky-700" />
                </motion.div> 
                
                <motion.div 
                    className="p-4"
                    initial="initial"
                    animate='animate'
                    variants={iconVariants(4)}
                >
                    <BiLogoVisualStudio className="text-7xl text-sky-500" />
                    
                </motion.div> */}
                

               

                <motion.div 
                    className="p-4"
                    initial="initial"
                    animate='animate'
                    variants={iconVariants(2)}
                >
                    <DiHtml5 className="text-7xl text-orange-500" />
                </motion.div>
                
                <motion.div 
                    className="p-4"
                    initial="initial"
                    animate='animate'
                    variants={iconVariants(6)}
                >
                    <FaCss3 className="text-7xl text-blue-500" />
                </motion.div>   

                <motion.div 
                    className="p-4"
                    initial="initial"
                    animate='animate'
                    variants={iconVariants(4)}
                >
                    <BiLogoJavascript className="text-7xl text-yellow-500" />
                </motion.div>

                <motion.div
                    className="p-4"
                    initial="initial"
                    animate='animate'
                    variants={iconVariants(2.5)}
                >

                    <RiReactjsLine className="text-7xl text-cyan-400" />
                </motion.div>

                <motion.div 
                    className="p-4"
                    initial="initial"
                    animate='animate'
                    variants={iconVariants(3)}
                >

                    <TbBrandTailwind className="text-7xl  text-cyan-400" />
                </motion.div>
                
                
                               
                <motion.div 
                    className="p-4"
                    initial="initial"
                    animate='animate'
                    variants={iconVariants(4)}
                >
                    <SiMui className="text-7xl text-sky-500" />

                </motion.div>
                
                <motion.div 
                    className="p-4"
                    initial="initial"
                    animate='animate'
                    variants={iconVariants(6)}
                >
                    <BiLogoGit className="text-7xl text-orange-500" />
                </motion.div>
                
                <motion.div 
                    className="p-4"
                    initial="initial"
                    animate='animate'
                    variants={iconVariants(4)}
                >
                    <FaGithub className="text-7xl text-sky-700" />
                </motion.div>


            </motion.div>
        </div>

    );
};

export default Technologies;