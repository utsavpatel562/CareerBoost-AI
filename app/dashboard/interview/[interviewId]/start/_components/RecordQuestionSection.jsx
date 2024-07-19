import Image from "next/image";
import React from "react";
import Webcam from "react-webcam";

function RecordQuestionSection() {
  return (
    <>
      <div className="flex flex-col justify-center items-center rounded-lg p-5 my-20 bg-black">
        <Image
          src="/webcam3.png"
          alt="WebCAM"
          width={180}
          height={180}
          className="absolute"
        />
        <Webcam
          mirrored={true}
          style={{
            height: 300,
            width: 300,
            zIndex: 300,
          }}
        />
      </div>
    </>
  );
}

export default RecordQuestionSection;
