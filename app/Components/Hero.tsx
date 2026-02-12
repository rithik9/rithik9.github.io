import React from 'react'
import { Spotlight } from './ui/Spotlight'
import { cn } from './../utils/cn';
import { TextGenerateEffect } from './ui/TextGenerateEffect';
import MagicButton from './ui/MagicButton';
import { FaLocationArrow } from 'react-icons/fa6';
import ProfilePhoto from './ProfilePhoto';

const Hero = () => {
    return (
        <div className="pb-20 pt-36">
            {/* Spotlights */}
            <div>
                <Spotlight className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen" fill="white" />
                <Spotlight className="top-10 left-full h-[80vh] w-[50vw]" fill="purple" />
                <Spotlight className="top-28 left-80 h-[80vh] w-[50vw]" fill="blue" />
            </div>

            {/* Hero Section with Dot Background */}
            <div className="relative flex h-screen w-full items-center justify-center bg-white dark:bg-black" style={{ backgroundColor: 'var(--background)', color: 'var(--foreground)' }}>
                
                {/* Dot Background */}
                <div
                    className={cn(
                        "absolute w-full inset-0 z-0",
                        "[background-size:20px_20px]",
                        "[background-image:radial-gradient(#d4d4d4_1px,transparent_1px)]",
                        "dark:[background-image:radial-gradient(#404040_1px,transparent_1px)]"
                    )}
                />

                {/* Radial fade effect */}
                <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black" style={{ backgroundColor: 'var(--background)' }} />

                {/* Hero Content */}
                <div className="flex justify-center relative my-20 z-10">
                    <div className='max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center'>
                        <ProfilePhoto />
                        {/* <h2 className="uppercase tracking-widest text-xs text-center text-blue-100 max-w-80">
                            My Portfolio
                        </h2> */}
                        <TextGenerateEffect
                            className="text-center text-[40px] md:text-5xl lg:text-6xl"
                            words="Hi, I&apos;m Rithik, an SDE developer based in Hyderabad, India."
                            duration={4}
                            filter={false}
                        />
                        {/* <p className='text-center md-tracking-wider mb-4 text-small md:text-lg lg:text-2xl'>Hi, I&apos;m Rithik, an SDE developer based in Hyderabad, India.</p> */}
                        <a href="#about">
                            <MagicButton
                                title="Show my work"
                                icon={<FaLocationArrow />}
                                position='left'
                            />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero
