import "./styles.css";
import createGlobe from "cobe";
import { useEffect, useRef } from "react";

// https://github.com/shuding/cobe

export default function Globe() {
  const canvasRef = useRef();

  useEffect(() => {
    let phi = 0;

    const globe = createGlobe(canvasRef.current, {
      devicePixelRatio: 2,
      width: 600 * 2,
      height: 600 * 2,
      phi: 0,
      theta: 0,
      dark: 5,
      diffuse: 1.2,
      mapSamples: 4000,
      mapBrightness: 6,
      baseColor: [0.3, 0.3, 0.3],
      markerColor: [0.1, 0.8, 1],
      glowColor: [1, 1, 1],
      markers: [
        // longitude latitude
        { location: [37.7595, -122.4367], size: 0.03 },
        { location: [40.7128, -74.006], size: 0.1 },
      ],
      onRender: (state) => {
        // Called on every animation frame.
        // `state` will be an empty object, return updated params.
        state.phi = phi;
        phi += 0.001;
      },
    });

    return () => {
      globe.destroy();
    };
  }, []);

  return (
    <div
      data-aos="zoom-in-up"
      className="bg-orange-600 text-center text-white mt-16 rounded-xl hidden md:block"
    >
      <h1 className="text-5xl pt-8 font-bold">Our Mission</h1>
      <p className="text-xl mt-8 w-8/12 mx-auto">
        Equipage businesses with value-driven goals and excel across all
        ventures. Also, provide maximum satisfaction to our consumers with a
        high standard of products and services. And be a part of social
        development.
        {/* <a href="https://github.com/shuding/cobe" target="_blank">
          GitHub
        </a> */}
      </p>
      <div className="grid justify-center items-center">
        {" "}
        <canvas
          ref={canvasRef}
          style={{ width: 600, height: 600, maxWidth: "100%", aspectRatio: 1 }}
        />
      </div>
    </div>
  );
}
