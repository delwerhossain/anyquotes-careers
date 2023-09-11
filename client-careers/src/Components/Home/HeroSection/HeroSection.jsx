// import { useEffect, useRef } from "react";
import ReactPlayer from "react-player";

const HeroSection = () => {
  // const videoEl = useRef(null);

  // const attemptPlay = () => {
  //   videoEl &&
  //     videoEl.current &&
  //     videoEl.current.play().catch((error) => {
  //       console.error("Error attempting to play", error);
  //     });
  // };

  // useEffect(() => {
  //   attemptPlay();
  // }, []);
  return (
    <section
      data-aos="fade-up"
      data-aos-duration="2000"
      id="home"
      className=" md:py-5 bg-neutral-100 lg:py-10"
    >
      <div className="gap-5">
        <div className="order-1 lg:order-2 lg:pt-12 lg:h-screen ">
          <div className="h-96 lg:h-5/6">
            {" "}
            <ReactPlayer
              width="100%"
              height="100%"
              url="https://www.youtube.com/embed/lQ0NeAnx0gI?si=9i4IqpHOtJ_zG3_K"
              controls={true}
            />
          </div>
          {/* <video
            className=" lg:h-5/6"
            style={{ maxWidth: "100%", width: "1200px", margin: "0 auto" }}
            loop
            muted
            controls
            preload="auto"
            alt="B&F CORPORATE"
            src="https://chowdhuryinfotech.com/video.mp4"
            ref={videoEl}
          /> */}
          {/* <iframe
            className=" h-5/6"
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/Wo-v5AGm5qk"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe> */}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
