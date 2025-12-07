import React from "react";
import { dummyTrailers } from "../assets/assets";
import BlurCircle from "./BlurCircle";
import { PlayCircle } from "lucide-react";

function TrailersSection() {
  const [currentTrailer, setCurrentTrailer] = React.useState(dummyTrailers[0]);


  const getYouTubeId = (url) => {
    const regExp =
      /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);
    return match && match[2].length === 11 ? match[2] : null;
  };

  const videoId = getYouTubeId(currentTrailer.videoUrl);
  console.log("Video ID:", videoId);

  return (
    <div className="min-h-screen px-6 md:px-16 py-12">
      <p className="mt-6 text-gray-300 font-medium text-xl max-w-4xl ">
        Trailers
      </p>

      <div
        className="relative mt-2">
        <BlurCircle top="-100px" right="0px" />
        <iframe
          className="mx-auto max-w-full"
          width="640px"
          height="360px"
          src={`https://www.youtube.com/embed/${videoId}?autoplay=0&mute=1`}
          title="Movie Trailer"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>

      <div className="group grid grid-cols-4 md:gap-8 mt-8 max-w-3xl mx-auto">
        {dummyTrailers.map((trailer) => (
            <div key={trailer.image} 
                className="relative group-hover:not-hover:opacity-50 hover:-translate-y-1
                duration-300 transition max-md:h-60 md:max-h-60 cursor-pointer"
                onClick={() => setCurrentTrailer(trailer)}>
                    <img src={trailer.image} alt="trailer" className="rounded-lg
                    w-full h-full object-cover brightness-75"/>
                <PlayCircle strokeWidth={1.6} className="absolute top-1/2 left-1/2 
                w-5 md:w-8 h-5 md:h-12 transform -translate-x-1/2 -translate-y-1/2"/>
            </div>
        ))}
      </div>
    </div>
  );
}

export default TrailersSection;
