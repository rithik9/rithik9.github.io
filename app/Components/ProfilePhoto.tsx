import Image from "next/image";
import profilePhoto from "./../../public/profile.jpg";

export default function ProfilePhoto() {
  return (
    <div className="portrait-composition reveal">
      <div className="portrait-frame">
        <Image
          className="portrait-img"
          src={profilePhoto}
          alt="Rithik Kishen Saride"
          priority
        />
      </div>
      <div className="portrait-notes">
        <span>RITHIK KISHEN SARIDE</span>
        <span>HYD / IN</span>
      </div>
      <span className="offset-square" aria-hidden="true" />
    </div>
  );
}
