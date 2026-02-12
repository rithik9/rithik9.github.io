import React from 'react';
import profilePhoto from './../../public/DSC01066.jpeg';
import Image from 'next/image';

export default function ProfilePhoto() {
    return (
      <div className="w-40 h-40 md:w-52 md:h-52 lg:w-64 lg:h-64 mx-auto mt-10 relative">
        <div className="absolute inset-0 rounded-full bg-black dark:bg-white blur-lg opacity-30 animate-none"></div>
        <Image
          src={profilePhoto} // ✔️ path relative to /public
          alt="Your Name"
          fill
          className="object-cover rounded-full border-4 z-10"
        />
      </div>
    );
  }