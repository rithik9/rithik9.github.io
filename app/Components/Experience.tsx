import React from 'react'
import { Button } from './ui/MovingBorders'
import { workExperience } from '@/data'
import { cn } from './../utils/cn';
import { Timeline } from './ui/Timeline';


const data = [
    {
        title: "November 2024 - Present",
        company: "Mango Mass Media Pvt. Ltd.",
        position: "Junior Software Developer",
        content: (
            <div>
                <div className="mb-8">
                    <ul className="list-disc pl-5 space-y-3 text-lg md:text-xl font-bold text-neutral-700 dark:text-neutral-300">
                        <li>Built high-traffic REST APIs with 99.9% uptime and optimized performance.</li>
                        <li>Designed search infrastructure for 1M+ records, reducing latency by 60%.</li>
                        <li>Developed AI-powered document pipelines automating 15K+ agreements weekly.</li>
                        <li>Implemented scalable async export pipelines, cutting 33+ hours/week of manual work.</li>
                        <li>Currently building backend for digital asset management and revenue reporting.</li>
                    </ul>
                </div>
            </div>
        ),
    },
    {
        title: "September 2024 - November 2024",
        company: "Mango Mass Media Pvt. Ltd.",
        position: "Intern",
        content: (
            <div >
                <div className="mb-8">
                    <ul className="list-disc pl-5 space-y-3 text-lg md:text-xl font-bold text-neutral-700 dark:text-neutral-300">
                        <li>Developed Python ETL Scripts for reporting and analytics processing 100K+ records/day,</li>
                        <li>Worked with Superset BI to create interactive dashboards and visualize key business metrics</li>
                        {/* <li>Contributed to customizing Frappe ERP modules to streamline internal business processes</li> */}
                        <li>Developed internal CMS UI components in React, improving editorial workflows and article turnaround.</li>
                    </ul>
                </div>
                {/* <div className="grid grid-cols-2 gap-4">
                    <img
                        src="https://assets.aceternity.com/pro/hero-sections.png"
                        alt="hero template"
                        width={500}
                        height={500}
                        className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
                    />
                    <img
                        src="https://assets.aceternity.com/features-section.png"
                        alt="feature template"
                        width={500}
                        height={500}
                        className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
                    />
                    <img
                        src="https://assets.aceternity.com/pro/bento-grids.png"
                        alt="bento template"
                        width={500}
                        height={500}
                        className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
                    />
                    <img
                        src="https://assets.aceternity.com/cards.png"
                        alt="cards template"
                        width={500}
                        height={500}
                        className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
                    />
                </div> */}
            </div>
        ),
    },
];

const Experience = () => {
    return (
        <div  id='experience' className="relative flex h-full w-full items-center justify-center bg-white dark:bg-black" style={{ backgroundColor: 'var(--background)', color: 'var(--foreground)' }}>

            {/* Dot Background */}
            <div
                className={cn(
                    "absolute inset-0 h-full w-full z-0",
                    "[background-size:20px_20px]",
                    "[background-image:radial-gradient(#d4d4d4_1px,transparent_1px)]",
                    "dark:[background-image:radial-gradient(#404040_1px,transparent_1px)]"
                )}
            />

            {/* Radial fade effect */}
            <div className="pointer-events-none absolute w-full h-full inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black" style={{ backgroundColor: 'var(--background)' }} />

            {/* Experience Content */}
            <div className="flex justify-center relative my-20 z-10">
                <div className='max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center'></div>
                <div className="py-20 w-full">
                    <h1 className="heading">
                        My work experience
                    </h1>

                    <div className="relative w-full overflow-clip">
                        <Timeline data={data} />
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Experience