
import YouTube from "react-youtube";

const Video = () =>{

    return (
        <iframe
  width={560}
  height={315}
  src={movieDetails?.fields?.linkTrailer}
  title="YouTube video player"
  frameBorder={0}
  allow="accelerometer; 
  autoplay; 
  clipboard-write; 
  encrypted-media; 
  gyroscope; 
  picture-in-picture; 
  web-share"
  allowFullScreen=""
/>
    )


}

export default Video