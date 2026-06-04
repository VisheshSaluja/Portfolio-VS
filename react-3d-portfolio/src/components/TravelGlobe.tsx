import { useEffect, useRef, useState, useCallback } from "react";
import GlobeGL from "react-globe.gl";
import { cities, arcs, type City } from "../data/travel";

interface TravelGlobeProps {
  size?: number;
  interactive?: boolean;
  onCityClick?: (city: City) => void;
}

const TravelGlobe = ({ size = 500, interactive = false, onCityClick }: TravelGlobeProps) => {
  const globeRef = useRef<any>(null);
  const [hoveredCity, setHoveredCity] = useState<City | null>(null);

  useEffect(() => {
    if (!globeRef.current) return;

    const globe = globeRef.current;

    globe.controls().autoRotate = true;
    globe.controls().autoRotateSpeed = 0.6;
    globe.controls().enableZoom = interactive;
    globe.controls().enablePan = interactive;
    globe.controls().minDistance = 200;
    globe.controls().maxDistance = 500;

    globe.pointOfView({ lat: 25, lng: 10, altitude: 2.2 }, 0);
  }, [interactive]);

  const handlePointClick = useCallback(
    (point: object) => {
      if (!interactive) return;
      const city = point as City;
      if (onCityClick && city.image) {
        onCityClick(city);
      }
      if (globeRef.current) {
        globeRef.current.pointOfView(
          { lat: city.lat, lng: city.lng, altitude: 1.8 },
          800
        );
      }
    },
    [onCityClick, interactive]
  );

  return (
    <div className="relative" style={{ width: size, height: size }}>
      <GlobeGL
        ref={globeRef}
        width={size}
        height={size}
        backgroundColor="rgba(0,0,0,0)"
        globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
        bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
        showAtmosphere={true}
        atmosphereColor="#c9a96e"
        atmosphereAltitude={0.12}
        pointsData={cities}
        pointLat="lat"
        pointLng="lng"
        pointColor={() => "#c9a96e"}
        pointAltitude={0.02}
        pointRadius={0.4}
        pointsMerge={false}
        onPointClick={handlePointClick}
        onPointHover={(point) => setHoveredCity(point as City | null)}
        arcsData={arcs}
        arcStartLat="startLat"
        arcStartLng="startLng"
        arcEndLat="endLat"
        arcEndLng="endLng"
        arcColor={() => ["rgba(201, 169, 110, 0.6)", "rgba(201, 169, 110, 0.15)"]}
        arcStroke={0.4}
        arcAltitudeAutoScale={0.3}
        arcDashLength={0.5}
        arcDashGap={0.3}
        arcDashAnimateTime={2500}
        labelsData={interactive ? cities : []}
        labelLat="lat"
        labelLng="lng"
        labelText="name"
        labelSize={0.6}
        labelDotRadius={0.3}
        labelColor={() => "rgba(201, 169, 110, 0.7)"}
        labelAltitude={0.025}
        labelResolution={2}
      />

      {interactive && hoveredCity && (
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 px-3 py-1.5 rounded-lg bg-surface/90 backdrop-blur-sm border border-white/[0.08] text-sm text-stone-300 whitespace-nowrap z-10">
          <span className="mr-1.5">{hoveredCity.flag}</span>
          {hoveredCity.name}, {hoveredCity.country}
          {hoveredCity.image && (
            <span className="ml-2 text-stone-500 text-xs">click to view</span>
          )}
        </div>
      )}
    </div>
  );
};

export default TravelGlobe;
