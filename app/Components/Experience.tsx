import React from 'react'
import { Button } from './ui/MovingBorders'
import { workExperience } from '@/data'
import { cn } from './../utils/cn';
import { Timeline } from './ui/Timeline';


const data = [
    {
        title: "Nov 2024 - Present",
        company: "Mango Mass Media Pvt. Ltd.",
        position: "Junior Software Developer",
        content: (
            <div>
                <div className="mb-8">
                    <ul className="list-disc pl-5 space-y-3 text-lg md:text-xl font-medium text-neutral-700 dark:text-neutral-300">
                        <li>
                            Optimized high-traffic **REST APIs** and search infrastructure for 1M+ records, reducing latency by **60%** via query profiling and caching.
                        </li>
                        <li>
                            Architected an **AI ingestion pipeline** (OCR + LangChain) processing 15K+ agreements weekly, automating 30+ hours of manual data entry.
                        </li>
                        <li>
                            Built a distributed **Asset Management System** using React and Node.js, implementing metadata normalization for cross-module integrity.
                        </li>
                        <li>
                            Engineered scalable **async export pipelines** using worker queues, eliminating timeouts and reducing weekly manual workloads by **33 hours**.
                        </li>
                        <li>
                            Ensured production stability on Linux environments using **PM2** for zero-downtime deployments and 99.9% uptime.
                        </li>
                    </ul>
                </div>
            </div>
        ),
    },
    {
        title: "Sep 2024 - Nov 2024",
        company: "Mango Mass Media Pvt. Ltd.",
        position: "Software Developer Intern",
        content: (
            <div>
                <div className="mb-8">
                    <ul className="list-disc pl-5 space-y-3 text-lg md:text-xl font-medium text-neutral-700 dark:text-neutral-300">
                        <li>
                            Developed **Python ETL scripts** processing 100K+ daily records, reducing reporting turnaround from 4 hours to 15 minutes.
                        </li>
                        <li>
                            Built real-time **BI dashboards** in Apache Superset to provide data-driven insights for 50+ stakeholders.
                        </li>
                        <li>
                            Enhanced editorial efficiency by developing **React CMS components**, significantly reducing article turnaround time through better UX.
                        </li>
                    </ul>
                </div>
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