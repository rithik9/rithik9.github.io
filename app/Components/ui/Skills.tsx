import React from 'react'
import { cn } from './../../utils/cn';
import { motion } from 'framer-motion';
import { HexGrid, Layout, Hexagon } from 'react-hexgrid';
import { GlareCard } from './GlareCard';
import Divider, { dividerClasses } from '@mui/material/Divider';


const iconList = [
    { id: '1', src: '/react-svgrepo-com.svg', alt: 'React' },
    { id: '2', src: '/node-js-svgrepo-com.svg', alt: 'Node.js' },
    { id: '3', src: '/python-svgrepo-com.svg', alt: 'Python' },
    { id: '4', src: '/mongo-svgrepo-com.svg', alt: 'MongoDB' },
    { id: '5', src: '/javascript-svgrepo-com.svg', alt: 'JavaScript' },
    { id: '6', src: '/docker-svgrepo-com.svg', alt: 'Docker' },
    { id: '7', src: '/aws-svgrepo-com.svg', alt: 'AWS' },
    { id: '8', src: '/sql-database-generic-svgrepo-com.svg', alt: 'SQL' },
    { id: '9', src: '/html5-svgrepo-com.svg', alt: 'HTML' },
    { id: '10', src: '/css-3-svgrepo-com.svg', alt: 'CSS' },
    { id: '11', src: '/typescript-logo-svgrepo-com.svg', alt: 'Typescript' },
    { id: '12', src: '/tailwind-svgrepo-com.svg', alt: 'Tailwind' },
    { id: '13', src: '/next-js-svgrepo-com.svg', alt: 'NextJS' },

];

const programmingLanguages = [
    { id: '1', src: '/python-svgrepo-com.svg', alt: 'Python' },
    { id: '2', src: '/javascript-svgrepo-com.svg', alt: 'JavaScript' },
    { id: '3', src: '/sql-database-generic-svgrepo-com.svg', alt: 'SQL' },
    { id: '4', src: '/typescript-logo-svgrepo-com.svg', alt: 'Typescript' },
]

const frontEnd = [
    { id: '1', src: '/react-svgrepo-com.svg', alt: 'React' },
    { id: '2', src: '/tailwind-svgrepo-com.svg', alt: 'Tailwind' },
    { id: '3', src: '/css-3-svgrepo-com.svg', alt: 'CSS' },
    { id: '4', src: '/html5-svgrepo-com.svg', alt: 'HTML' },
    { id: '5', src: '/next-js-svgrepo-com.svg', alt: 'NextJS' },
]

const backend = [
    { id: '1', src: '/node-js-svgrepo-com.svg', alt: 'Node.js' },
    { id: '2', src: '/mongo-svgrepo-com.svg', alt: 'MongoDB' },
    { id: '3', src: '/aws-svgrepo-com.svg', alt: 'AWS' },
    { id: '4', src: '/docker-svgrepo-com.svg', alt: 'Docker' },
]

const SkillCategory = ({
    title,
    icons,
    showDivider
}: {
    title: string;
    icons: typeof programmingLanguages;
    showDivider?: boolean;
}) => (
    <div className="flex flex-col justify-between space-y-4 relative">
        <h2 className="text-center font-sans mb-8 font-bold text-neutral-600 dark:text-neutral-200">{title}</h2>

        <div className="flex flex-wrap justify-center gap-4">
            {icons.map((item) => (
                // <motion.div
                //     key={item.id}
                //     whileHover={{ scale: 1.05 }}
                //     transition={{ type: 'spring', stiffness: 200, damping: 20 }}
                //     className="flex flex-row items-center justify-center bg-black dark:bg-black rounded-md p-4 shadow-sm gap-3"
                // >
                <div className="flex flex-row items-center justify-center bg-black dark:bg-black rounded-md p-4 shadow-sm gap-3">

                    <img
                        src={item.src}
                        alt={item.alt}
                        className="h-7 w-7 object-contain"
                        title={item.alt}
                        onContextMenu={(e) => e.preventDefault()}
                        draggable={false}
                    />
                    <h2 className="text-base font-semibold font-sans text-gray-200">{item.alt}</h2>
                </div>
                // </motion.div>
            ))}
        </div>


        {/* {showDivider && <div
            className="absolute left-0 top-0 h-full w-[2px] rounded bg-current opacity-40"
            style={{ backgroundColor: 'var(--foreground)' }}
        />} */}
    </div>
);

const chunkArray = (arr: any[], size: number) => {
    return Array.from({ length: Math.ceil(arr.length / size) }, (_, i) =>
        arr.slice(i * size, i * size + size)
    );
};

const Skills = () => {
    const rows = chunkArray(iconList, 3); // split into rows of 3

    return (
        <div id="skills" className="relative flex h-screen w-full items-center justify-center bg-white dark:bg-black" style={{ backgroundColor: 'var(--background)', color: 'var(--foreground)' }}>

            {/* Dot Background */}
            <div
                className={cn(
                    "absolute inset-0 z-0",
                    "[background-size:20px_20px]",
                    "[background-image:radial-gradient(#d4d4d4_1px,transparent_1px)]",
                    "dark:[background-image:radial-gradient(#404040_1px,transparent_1px)]"
                )}
            />
            <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black" style={{ backgroundColor: 'var(--background)' }} />

            {/* Hex Grid */}
            {/* Section content */}
            <div className="relative z-20 flex max-w-5xl flex-col items-center justify-center">
                <div className="py-20 w-full">
                    <h1 className="heading">
                        My skills
                    </h1>

                    <div className="mt-12 flex flex-col gap-5 items-stretch">
                        <SkillCategory title="Programming Languages" icons={programmingLanguages} />

                        {/* Divider with fade effect
                        <div className="relative flex items-stretch">
                            <Divider
                                orientation="vertical"
                                flexItem
                                style={{
                                    borderColor: 'var(--foreground)',
                                    opacity: 0.4,
                                    zIndex: 0,
                                }}
                            />
                            <div className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-b from-[var(--background)] via-transparent to-[var(--background)]" />
                        </div> */}

                        <SkillCategory title="Frontend" icons={frontEnd} />

                        {/* Divider with fade effect
                        <div className="relative flex items-stretch">
                            <Divider
                                orientation="vertical"
                                flexItem
                                style={{
                                    borderColor: 'var(--foreground)',
                                    opacity: 0.4,
                                    zIndex: 0,
                                }}
                            />
                            <div className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-b from-[var(--background)] via-transparent to-[var(--background)]" />
                        </div> */}

                        <SkillCategory title="Backend / DevOps" icons={backend} />
                    </div>


                </div>
            </div>
        </div>

    )
}

export default Skills
