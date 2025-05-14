"use client";
import { Player } from "@lottiefiles/react-lottie-player";

export default function ClientLottiePlayer({ src }) {
  return (
    <div className="w-full flex justify-center">
      <Player
        autoplay
        loop
        src={src}
        className="w-[250px] h-[250px] sm:w-[300px] sm:h-[300px] md:w-[380px] md:h-[380px]"
      />
    </div>
  );
}
