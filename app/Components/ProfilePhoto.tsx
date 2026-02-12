import React from 'react';
import profilePhoto from './../../public/DSC01066.jpeg';
import Image from 'next/image';

export default function ProfilePhoto() {
    return (
      <div className="w-40 h-40 md:w-52 md:h-52 lg:w-64 lg:h-64 mx-auto mt-10 relative">
        <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-purple-500 via-indigo-500 to-purple-500 blur-lg opacity-40 animate-pulse"></div>
        <Image
          src={profilePhoto} // ✔️ path relative to /public
          alt="Your Name"
          fill
          className="object-cover rounded-full border-4 border-white dark:border-neutral-900 z-10"
        />
      </div>
    );
  }