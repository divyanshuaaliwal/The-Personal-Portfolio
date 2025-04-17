import React from 'react'
import { BiLogoPostgresql } from "react-icons/bi";
import { DiCss3, DiHtml5, DiRedis } from "react-icons/di";
import { FaNodeJs } from "react-icons/fa";
import { RiReactjsLine } from "react-icons/ri";
import { SiJavascript, SiMongodb, SiTailwindcss } from "react-icons/si";
import { TbBrandGit, TbBrandGithub, TbBrandJavascript, TbBrandNextjs, TbBrandTailwind, TbGif, TbGitBranch } from "react-icons/tb";

const Technologies = () => {
    return (
        <div className="pb-24">
            <h2 className="my-20 text-center text-4xl">Technologies</h2>
            <div className="flex flex-wrap items-center justify-center gap-4">
                
                <div className="p-4">
                    <DiHtml5 className="text-7xl text-orange-600" />
                </div>
                
                <div className="p-4">
                    <DiCss3 className="text-7xl text-blue-500" />
                </div>
                
                <div className="p-4">
                    <TbBrandJavascript className="text-7xl text-yellow-500" />
                </div>
                
                <div>
                    <RiReactjsLine className="text-7xl text-cyan-400" />
                </div>
                
                <div className="p-4">
                    <TbBrandTailwind className="text-7xl text-cyan-500" />
                </div>
                
                <div className="p-4">
                    <TbBrandGit className="text-7xl text-sky-700" />
                </div>
                
                <div className="p-4">
                    <TbBrandGithub className="text-7xl text-sky-700" />
                </div>
            </div>
        </div>
    );
};

export default Technologies;
