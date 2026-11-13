import Image from "next/image";
import profilePhoto from "./../../public/profile.jpg";

export default function ProfilePhoto() {
  return (
    <div className="portrait-composition reveal">
      <div className="portrait-frame">
        <div className="portrait-fallback">
          RK<span>_</span>
        </div>
        <Image
          className="portrait-img"
          src={profilePhoto}
          alt="Rithik"
          priority
        />
      </div>
      <div className="portrait-notes">
        <span>FIG. 01 — THE PERSON BEHIND THE CODE</span>
        <span>HYD / IN</span>
      </div>
      <span className="offset-square" aria-hidden="true" />
    </div>
  );
}
