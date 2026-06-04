import { lazy, Suspense, useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  countryCount,
  worldPercent,
  continentCount,
  countriesGrouped,
  bucketList,
  type City,
} from "../data/travel";

const TravelGlobe = lazy(() => import("../components/TravelGlobe"));

const SMALL_SIZE = 300;
const LARGE_SIZE = 550;

const stats = [
  { value: countryCount.toString(), label: "Countries" },
  { value: `${worldPercent}%`, label: "of the world" },
  { value: continentCount.toString(), label: "Continents" },
];

const GlobeSpinner = ({ size = 300 }: { size?: number }) => (
  <div
    className="flex items-center justify-center"
    style={{ width: size, height: size }}
  >
    <div className="w-6 h-6 border-2 border-accent/30 border-t-accent rounded-full animate-spin" />
  </div>
);

const Travel = () => {
  const [expanded, setExpanded] = useState(false);
  const [selectedImage, setSelectedImage] = useState<City | null>(null);
  const [flipOrigin, setFlipOrigin] = useState<{
    translateX: number;
    translateY: number;
    scale: number;
  } | null>(null);

  const smallGlobeRef = useRef<HTMLDivElement>(null);

  const targetSize =
    typeof window !== "undefined"
      ? Math.min(LARGE_SIZE, window.innerWidth - 48)
      : LARGE_SIZE;

  const handleExpand = useCallback(() => {
    if (!smallGlobeRef.current) return;

    const rect = smallGlobeRef.current.getBoundingClientRect();
    const vw = window.innerWidth;

    const finalLeft = (vw - targetSize) / 2;
    const finalTop = 100;

    const deltaX =
      rect.left + rect.width / 2 - (finalLeft + targetSize / 2);
    const deltaY =
      rect.top + rect.height / 2 - (finalTop + targetSize / 2);
    const scale = SMALL_SIZE / targetSize;

    setFlipOrigin({ translateX: deltaX, translateY: deltaY, scale });
    setExpanded(true);
  }, [targetSize]);

  useEffect(() => {
    document.body.style.overflow = expanded ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [expanded]);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        if (selectedImage) setSelectedImage(null);
        else if (expanded) setExpanded(false);
      }
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [expanded, selectedImage]);

  return (
    <>
      {/* ── Teaser section ── */}
      <section id="travel" className="py-32 px-6 md:px-16">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="flex items-baseline gap-4 mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="font-mono text-sm text-accent/70">04</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-stone-100">
              Travel
            </h2>
          </motion.div>

          <motion.div
            className="flex flex-col md:flex-row items-center gap-10 md:gap-16 cursor-pointer group"
            onClick={handleExpand}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div
              ref={smallGlobeRef}
              className="shrink-0"
              style={{ width: SMALL_SIZE, height: SMALL_SIZE }}
            >
              {!expanded && (
                <Suspense fallback={<GlobeSpinner size={SMALL_SIZE} />}>
                  <TravelGlobe size={SMALL_SIZE} />
                </Suspense>
              )}
            </div>

            <div>
              <div className="flex gap-10 md:gap-14 mb-8">
                {stats.map((stat) => (
                  <div key={stat.label}>
                    <p className="font-display text-3xl md:text-4xl font-bold text-stone-100">
                      {stat.value}
                    </p>
                    <p className="text-xs text-stone-400 mt-1 tracking-wider uppercase">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>

              <p className="text-stone-500 leading-relaxed mb-6 max-w-sm">
                Exploring the world, one flight at a time.
              </p>

              <span className="text-sm text-stone-400 group-hover:text-stone-200 transition-colors duration-300">
                Explore my travels &rarr;
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Expanded overlay ── */}
      <AnimatePresence>
        {expanded && flipOrigin && (
          <>
            {/* Backdrop */}
            <motion.div
              className="fixed inset-0 z-[99] bg-background"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.35 }}
            />

            {/* Globe — FLIP animated from small position to center */}
            <motion.div
              className="fixed z-[101] pointer-events-none"
              style={{
                top: 100,
                left: `calc(50vw - ${targetSize / 2}px)`,
                width: targetSize,
                height: targetSize,
                transformOrigin: "center center",
              }}
              initial={{
                x: flipOrigin.translateX,
                y: flipOrigin.translateY,
                scale: flipOrigin.scale,
              }}
              animate={{ x: 0, y: 0, scale: 1 }}
              exit={{
                x: flipOrigin.translateX,
                y: flipOrigin.translateY,
                scale: flipOrigin.scale,
                opacity: 0,
              }}
              transition={{
                type: "tween",
                duration: 0.55,
                ease: [0.32, 0.72, 0, 1],
              }}
            >
              <div className="pointer-events-auto">
                <Suspense fallback={<GlobeSpinner size={targetSize} />}>
                  <TravelGlobe
                    size={targetSize}
                    interactive
                    onCityClick={(city) => setSelectedImage(city)}
                  />
                </Suspense>
              </div>
            </motion.div>

            {/* Scrollable content — fades in after globe lands */}
            <motion.div
              className="fixed inset-0 z-[100] overflow-y-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3, delay: 0.35 }}
            >
              {/* Header */}
              <div className="sticky top-0 z-20 bg-background/80 backdrop-blur-xl border-b border-white/[0.04]">
                <div className="max-w-6xl mx-auto px-6 md:px-16 flex justify-between items-center h-16">
                  <h1 className="font-display font-bold text-lg text-stone-200">
                    My Travel Journey
                  </h1>
                  <button
                    onClick={() => setExpanded(false)}
                    className="text-sm text-stone-500 hover:text-stone-200 transition-colors duration-300"
                  >
                    &larr; Back
                  </button>
                </div>
              </div>

              {/* Spacer for the globe (so content starts below it) */}
              <div style={{ height: targetSize + 130 }} />

              <div className="max-w-6xl mx-auto px-6 md:px-16 pb-20">
                {/* Stats */}
                <div className="flex justify-center gap-12 md:gap-20 mb-20">
                  {stats.map((stat) => (
                    <div key={stat.label} className="text-center">
                      <p className="font-display text-3xl md:text-5xl font-bold text-stone-100">
                        {stat.value}
                      </p>
                      <p className="text-xs text-stone-500 mt-2 tracking-wider uppercase">
                        {stat.label}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Countries */}
                <div className="mb-20">
                  <h2 className="font-display text-2xl font-bold text-stone-100 mb-8">
                    Countries I&apos;ve Explored
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                    {countriesGrouped.map((group) => (
                      <div
                        key={group.countryCode}
                        className="flex items-center gap-3 p-3 rounded-xl bg-white/[0.02] border border-white/[0.04] hover:border-white/[0.1] transition-all duration-300"
                      >
                        <span className="text-2xl shrink-0">{group.flag}</span>
                        <div className="min-w-0">
                          <p className="text-stone-200 font-medium text-sm">
                            {group.country}
                          </p>
                          <p className="text-stone-600 text-xs truncate">
                            {group.cities.join(" · ")}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bucket list */}
                {bucketList.length > 0 && (
                  <div className="mb-20">
                    <h2 className="font-display text-2xl font-bold text-stone-100 mb-3">
                      Bucket List
                    </h2>
                    <p className="text-stone-600 text-sm mb-6">
                      Places I&apos;d love to visit — destinations I dream
                      about.
                    </p>
                    <div className="flex flex-wrap gap-3">
                      {bucketList.map((place) => (
                        <span
                          key={place.country}
                          className="inline-flex items-center gap-2 text-sm px-4 py-2 rounded-full bg-white/[0.02] text-stone-400 border border-white/[0.05] hover:border-white/[0.1] hover:text-stone-200 transition-all duration-300"
                        >
                          <span className="text-base">{place.flag}</span>
                          {place.country}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Image popup */}
      <AnimatePresence>
        {selectedImage && selectedImage.image && (
          <motion.div
            className="fixed inset-0 z-[200] flex items-center justify-center bg-black/80 backdrop-blur-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              className="relative max-w-3xl max-h-[80vh] mx-4"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute -top-10 right-0 w-8 h-8 flex items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
              >
                &times;
              </button>
              <img
                src={selectedImage.image}
                alt={selectedImage.imageCaption || selectedImage.name}
                className="rounded-xl max-h-[70vh] object-contain"
              />
              <div className="mt-4 text-center">
                <p className="text-stone-200 font-medium">
                  {selectedImage.flag} {selectedImage.name},{" "}
                  {selectedImage.country}
                </p>
                {selectedImage.imageCaption && (
                  <p className="text-stone-500 text-sm mt-1">
                    {selectedImage.imageCaption}
                  </p>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Travel;
