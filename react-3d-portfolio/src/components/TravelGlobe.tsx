import { useEffect, useRef, useState, useCallback } from "react";
import GlobeGL from "react-globe.gl";
import { cities, arcs, type City } from "../data/travel";

interface TravelGlobeProps {
  size?: number;
  interactive?: boolean;
}

const TravelGlobe = ({
  size = 500,
  interactive = false,
}: TravelGlobeProps) => {
  const globeRef = useRef<any>(null);
  const [hoveredCity, setHoveredCity] = useState<City | null>(null);
  const [activePopup, setActivePopup] = useState<string | null>(null);
  const popupTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    if (!globeRef.current) return;

    const globe = globeRef.current;

    globe.controls().autoRotate = true;
    globe.controls().autoRotateSpeed = interactive ? 0.4 : 0.6;
    globe.controls().enableZoom = interactive;
    globe.controls().enablePan = interactive;
    globe.controls().minDistance = 200;
    globe.controls().maxDistance = 500;

    globe.pointOfView({ lat: 25, lng: 10, altitude: 2.2 }, 0);
  }, [interactive]);

  // Random popup cycle for cities with images
  useEffect(() => {
    if (!interactive) return;

    const citiesWithImages = cities.filter((c) => c.image && c.image.length > 0);
    if (citiesWithImages.length === 0) return;

    const showRandomPopup = () => {
      if (hoveredCity) return;

      const randomCity =
        citiesWithImages[Math.floor(Math.random() * citiesWithImages.length)];
      setActivePopup(randomCity.id);

      popupTimerRef.current = setTimeout(() => {
        setActivePopup(null);
        popupTimerRef.current = setTimeout(showRandomPopup, 2000 + Math.random() * 3000);
      }, 3000 + Math.random() * 2000);
    };

    popupTimerRef.current = setTimeout(showRandomPopup, 2000);

    return () => {
      if (popupTimerRef.current) clearTimeout(popupTimerRef.current);
    };
  }, [interactive, hoveredCity]);

  const handlePointHover = useCallback(
    (point: object | null) => {
      if (!interactive) return;
      const city = point as City | null;
      setHoveredCity(city);
      if (!globeRef.current) return;
      globeRef.current.controls().autoRotateSpeed = point ? 0 : 0.4;

      if (city) {
        if (popupTimerRef.current) clearTimeout(popupTimerRef.current);
        setActivePopup(city.image ? city.id : null);
      }
    },
    [interactive]
  );

  const handlePointClick = useCallback(
    (point: object) => {
      if (!interactive || !globeRef.current) return;
      const city = point as City;
      globeRef.current.pointOfView(
        { lat: city.lat, lng: city.lng, altitude: 1.8 },
        800
      );
    },
    [interactive]
  );

  const htmlElementFn = useCallback((d: object) => {
    const city = d as City;
    const el = document.createElement("div");

    if (!city.image || city.image.length === 0) {
      el.style.display = "none";
      return el;
    }

    el.style.cssText = `
      width: 200px;
      background: rgba(23, 23, 34, 0.95);
      backdrop-filter: blur(12px);
      border: 1px solid rgba(255,255,255,0.12);
      border-radius: 12px;
      overflow: hidden;
      pointer-events: none;
      opacity: 0;
      transform: translateY(10px) scale(0.9);
      transition: opacity 0.4s ease, transform 0.4s ease;
      box-shadow: 0 16px 48px rgba(0,0,0,0.6);
    `;

    const img = document.createElement("img");
    img.src = city.image;
    img.alt = city.name;
    img.style.cssText = `
      width: 100%;
      height: 110px;
      object-fit: cover;
      display: block;
    `;

    const info = document.createElement("div");
    info.style.cssText = `padding: 8px 10px;`;
    info.innerHTML = `
      <div style="font-size: 12px; font-weight: 600; color: #e7e5e4;">${city.flag} ${city.name}</div>
      ${city.imageCaption ? `<div style="font-size: 10px; color: #78716c; margin-top: 3px; line-height: 1.3;">${city.imageCaption}</div>` : ""}
    `;

    el.appendChild(img);
    el.appendChild(info);
    el.dataset.cityId = city.id;

    return el;
  }, []);

  // Update popup visibility based on hover or random cycle
  useEffect(() => {
    if (!interactive) return;
    const container = globeRef.current?.renderer()?.domElement?.parentElement;
    if (!container) return;

    const cards = container.querySelectorAll("[data-city-id]");
    cards.forEach((card: Element) => {
      const el = card as HTMLElement;
      const cityId = el.dataset.cityId;
      const isVisible =
        (hoveredCity?.id === cityId) ||
        (!hoveredCity && activePopup === cityId);

      el.style.opacity = isVisible ? "1" : "0";
      el.style.transform = isVisible
        ? "translateY(0) scale(1)"
        : "translateY(10px) scale(0.9)";
    });
  }, [hoveredCity, activePopup, interactive]);

  const citiesWithImages = cities.filter((c) => c.image && c.image.length > 0);

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
        pointAltitude={interactive ? 0.04 : 0.02}
        pointRadius={interactive ? 0.8 : 0.4}
        pointsMerge={false}
        onPointClick={handlePointClick}
        onPointHover={handlePointHover}
        arcsData={arcs}
        arcStartLat="startLat"
        arcStartLng="startLng"
        arcEndLat="endLat"
        arcEndLng="endLng"
        arcColor={() => [
          "rgba(201, 169, 110, 0.6)",
          "rgba(201, 169, 110, 0.15)",
        ]}
        arcStroke={0.4}
        arcAltitudeAutoScale={0.3}
        arcDashLength={0.5}
        arcDashGap={0.3}
        arcDashAnimateTime={2500}
        htmlElementsData={interactive ? citiesWithImages : []}
        htmlLat="lat"
        htmlLng="lng"
        htmlAltitude={0.08}
        htmlElement={htmlElementFn}
      />

      {interactive && hoveredCity && (
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 px-4 py-2 rounded-xl bg-surface/90 backdrop-blur-sm border border-white/[0.1] text-sm text-stone-200 whitespace-nowrap z-10 shadow-lg">
          <span className="mr-2">{hoveredCity.flag}</span>
          <span className="font-medium">{hoveredCity.name}</span>
          <span className="text-stone-500">, {hoveredCity.country}</span>
        </div>
      )}
    </div>
  );
};

export default TravelGlobe;
