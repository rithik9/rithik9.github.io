// import React from 'react'

// const MagicButton = ({ title, icon, position, handleClick, otherClasses
// }: {
//     title: string; icon: React.ReactNode, position: string; handleClick?: () => void; otherClasses?: string
// }) => {
//     return (
//         <button className="relative inline-flex h-12 w-full overflow-hidden rounded-lg p-[1px] focus:outline-none md:w-60 md:mt-10">
//             <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
//               <span className={`z-10 inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg px-7 text-sm font-medium text-black backdrop-blur-3xl ${otherClasses}`}>
//                 {position === 'left' && icon }
//                 {title}
//                 {position === 'right' && icon }
//             </span>
//         </button>
//     )
// }

// export default MagicButton

import React from 'react'

const MagicButton = ({ title, icon, position, handleClick, otherClasses
}: {
    title: string; icon: React.ReactNode, position: string; handleClick?: () => void; otherClasses?: string
}) => {
    return (
    //    <button className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
    //         <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
    //         <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg bg-neutral-900 px-7 text-sm font-medium text-white backdrop-blur-3xl gap-2">
    //             {position === 'left' && icon}
    //             {title}
    //             {position === 'right' && icon}
    //         </span>
    //     </button>

        <button
            className="relative inline-flex h-12 items-center justify-center cursor-pointer
            rounded-full border border-black/10 dark:border-white/10
            hover:bg-black/20 dark:hover:bg-neutral-800/70 transition-all duration-300 ease-in-out
            bg-transparent"
            onClick={handleClick}

        >
            <span
                className="inline-flex h-full w-full items-center justify-center
                rounded-full
                px-7 text-sm font-medium
                 bg-black/10 text-black
                 dark:bg-neutral-900 dark:text-white
                backdrop-blur-3xl gap-2"
            >
                {position === 'left' && icon}
                {title}
                {position === 'right' && icon}
            </span>
        </button>


    )
}

export default MagicButton