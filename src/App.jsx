import React from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Tech from './components/Tech'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Contact from './components/Contact'

function App() {


    return (
        <>
            <div className='overflow-x-hidden text-stone-300 antialiased'>

                <div className='fixed inset-0 -z-10'>
                    <div class="relative h-full w-full bg-black">
                        <div class="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"></div>
                        <div class="absolute left-0 right-0 top-[-10%] h-[1000px] w-[1000px] rounded-full bg-[radial-gradient(circle_400px_at_50%_300px,#fbfbfb36,#000)]"></div>
                    </div>

                    {/* <div class="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div> */}
                </div>
                
                <div className='container mx-auto px-8'>
                    <Navbar/>
                    <Hero/>
                    <Tech/>
                    <Projects/>
                    <Experience/>
                    <Contact/>
                </div>

            </div>
        </>
    )
}

export default App
