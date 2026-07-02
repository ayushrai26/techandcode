import { useMemo } from "react";
import Globe from "react-globe.gl";

export default function GlobeIntro() {
  const points = useMemo(
    () => [
      {
        lat: 52.2681,
        lng: -113.8112,
        size: 0.35,
        color: "#22d3ee",
      },
    ],
    []
  );

  const rings = useMemo(
    () => [
      {
        lat: 52.2681,
        lng: -113.8112,
        maxR: 4,
        propagationSpeed: 2,
        repeatPeriod: 1500,
      },
    ],
    []
  );

  return (
    <div className="reveal flex flex-col items-center mb-24">

      <div className="relative">

        <div className="absolute inset-0 bg-cyan-500/20 blur-[100px] rounded-full" />

        <Globe
          width={320}
          height={320}
          globeImageUrl="//unpkg.com/three-globe/example/img/earth-dark.jpg"
          bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
          backgroundColor="rgba(0,0,0,0)"
          atmosphereColor="#22d3ee"
          atmosphereAltitude={0.18}
          pointsData={points}
          pointAltitude={0.05}
          pointRadius="size"
          pointColor="color"
          ringsData={rings}
          ringColor={() => "#22d3ee"}
          ringMaxRadius="maxR"
          ringPropagationSpeed="propagationSpeed"
          ringRepeatPeriod="repeatPeriod"
        />

      </div>

      <div className="mt-10 text-center">

        <p className="uppercase tracking-[0.35em] text-zinc-500 text-sm">
          BUILDING
        </p>

        <h2
          className="mt-3 text-4xl md:text-6xl leading-tight"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          Central Alberta's
          <br />
          Tech Community
        </h2>

        <p className="mt-6 max-w-xl text-zinc-400 leading-8">
          Bringing together founders, developers, designers,
          entrepreneurs and builders to create the next generation
          of startups.
        </p>

      </div>

    </div>
  );
}