"use client";
import { Player } from "@lottiefiles/react-lottie-player";

export default function ClientLottiePlayer({ src }) {
  return (
    <Player
      autoplay
      loop
      src={src}
      style={{ height: "380px", width: "380px" }}
    />
  );
}
