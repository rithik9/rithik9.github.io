"use client";
import React, { useState, useRef } from 'react'
import { cn } from './../utils/cn';
import { InputField } from './ui/InputField';
import { Label } from './ui/Label';
import emailjs from "@emailjs/browser";
import { toast, Toaster } from "sonner";
import CircularProgress from '@mui/material/CircularProgress';

const Contact = () => {
    const formRef = useRef<HTMLFormElement>(null);

    const [loading, setLoading] = useState(false);


    function handleSubmit(e: React.FormEvent) {
        e.preventDefault();

        if (!formRef.current) return;

        setLoading(true); // start loader


        emailjs
            .sendForm(
                process.env.NEXT_PUBLIC_EMAIL_JS_SERVICE_ID || '', // EmailJS service ID
                process.env.NEXT_PUBLIC_EMAIL_JS_TEMPLATE_ID || '', // template ID
                formRef.current,
                process.env.NEXT_PUBLIC_EMAIL_JS_PUBLIC_KEY || '' // Public key
            )
            .then(
                () => {
                    toast.success("Message sent successfully!", {
                        description: (
                            <span>
                                Thanks for reaching out. We'll get back to you
                                shortly.
                            </span>
                        ),
                    });
                    formRef.current?.reset();
                },
                (error) => {
                    toast.error("Oops! Failed to send message.", {
                        description: (
                            <span>
                                Please try again in a bit. If the issue persists,
                                contact support.
                            </span>
                        ),
                    });
                    console.error(error);
                }
            ).finally(() => {
                setLoading(false); // stop loader no matter what
            });
        // toast.success("Message sent successfully!", {
        //     description: "This is a test toast without sending an actual email.",
        //     duration: 4000, // optional: how long the toast stays visible
        //   });

        //   console.log('submit clicked')
    }

    function GradientCircularProgress() {
        return (
            <>
                <svg width={0} height={0}>
                    <defs>
                        <linearGradient id="my_gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                            <stop offset="0%" stopColor="#e01cd5" />
                            <stop offset="100%" stopColor="#1CB5E0" />
                        </linearGradient>
                    </defs>
                </svg>
                <CircularProgress size={20} sx={{ 'svg circle': { stroke: 'url(#my_gradient)' } }} />
            </>
        );
    }


    return (
        <div id='contact' className="relative flex h-screen w-full items-center justify-center bg-white dark:bg-black" style={{ backgroundColor: 'var(--background)', color: 'var(--foreground)' }}>

            {/* Dot Background */}
            <div
                className={cn(
                    "absolute inset-0 z-0",
                    "[background-size:20px_20px]",
                    "[background-image:radial-gradient(#d4d4d4_1px,transparent_1px)]",
                    "dark:[background-image:radial-gradient(#404040_1px,transparent_1px)]"
                )}
            />

            {/* Radial fade effect */}
            <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black" style={{ backgroundColor: 'var(--background)' }} />

            {/* Contact Content */}
            <div className="py-20 z-10 w-full flex flex-col items-center justify-center">
                <h1 className="heading">
                    Contact <span className="text-purple-400">Me</span>
                </h1>
                <div className="mt-12 relative inline-flex h-full w-1/2 overflow-hidden rounded-xl p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-700 focus:ring-offset-2 focus:ring-offset-slate-900">
                    <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#2e1a47_0%,#1e1b8c_50%,#2e1a47_100%)]" />

                    <div className="flex flex-col p-7 h-full w-full rounded-xl bg-[var(--background)] text-[var(--foreground)] backdrop-blur-3xl gap-2 z-10">
                        <div className="flex justify-start">
                            <h1 className="text-xl sm:text-2xl md:text-3xl font-sans font-bold text-neutral-600 dark:text-neutral-200 mb-6">
                                Let's get in touch!
                            </h1>
                        </div>


                        <form className="flex flex-col my-2 w-full items-center justify-center" ref={formRef} onSubmit={handleSubmit}>
                            <LabelInputContainer className="mb-4">
                                <Label htmlFor="firstname">First name</Label>
                                <InputField id="firstname" name='from_name' placeholder="Tyler" type="text" required />
                            </LabelInputContainer>
                            <LabelInputContainer className="mb-4">
                                <Label htmlFor="email">Email Address</Label>
                                <InputField id="email" name="reply_to" placeholder="projectmayhem@fc.com" type="email" required />
                            </LabelInputContainer>
                            <LabelInputContainer className="mb-4">
                                <Label htmlFor="message">Message</Label>
                                <InputField id="message" name='message' placeholder="Purpose" type="text" required />
                            </LabelInputContainer>
                            <button
                                className="group/btn relative block h-10 w-full rounded-md bg-gradient-to-br from-black to-neutral-600 font-medium text-white shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:bg-zinc-800 dark:from-zinc-900 dark:to-zinc-900 dark:shadow-[0px_1px_0px_0px_#27272a_inset,0px_-1px_0px_0px_#27272a_inset] disabled:opacity-50 disabled:cursor-not-allowed"
                                type="submit"
                                disabled={loading}
                            >
                                {loading ? (
                                    <span className="flex items-center justify-center gap-2">
                                        <GradientCircularProgress />
                                        Sending...
                                    </span>
                                ) : (
                                    <>
                                        Sign up &rarr;
                                        <BottomGradient />
                                    </>
                                )}
                            </button>
                        </form>
                    </div>
                    <Toaster theme="light" />
                </div>
            </div>
        </div>
    )
}

export default Contact;

const BottomGradient = () => {
    return (
        <>
            <span className="absolute inset-x-0 -bottom-px block h-px w-full bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-0 transition duration-500 group-hover/btn:opacity-100" />
            <span className="absolute inset-x-10 -bottom-px mx-auto block h-px w-1/2 bg-gradient-to-r from-transparent via-indigo-500 to-transparent opacity-0 blur-sm transition duration-500 group-hover/btn:opacity-100" />
        </>
    );
};


const LabelInputContainer = ({
    children,
    className,
}: {
    children: React.ReactNode;
    className?: string;
}) => {
    return (
        <div className={cn("flex w-full flex-col space-y-2", className)}>
            {children}
        </div>
    );
};
