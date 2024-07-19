import Image from "next/image";
import React from "react";
import Webcam from "react-webcam";
import { Button } from "../../../../../../components/ui/button";

function RecordQuestionSection() {
  return (
    <>
      <div className="flex items-center justify-center flex-col">
        <div className="flex flex-col justify-center items-center rounded-lg p-5 mt-20 bg-black">
          <Image
            src="/webcam3.png"
            alt="WebCAM"
            width={140}
            height={140}
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
        <Button variant="outline" className="my-10">
          Record Answer
        </Button>
      </div>
    </>
  );
}

export default RecordQuestionSection;
