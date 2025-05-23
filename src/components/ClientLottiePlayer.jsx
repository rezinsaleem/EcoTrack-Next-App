"use client";
import { Player } from "@lottiefiles/react-lottie-player";

export default function ClientLottiePlayer({ src }) {
  return (
      <Player
        autoplay
        loop
        src={src}
        className="w-[500px] h-[500px] sm:w-[300px] sm:h-[300px] md:w-[500px] md:h-[500px]"
      />
  );
}
