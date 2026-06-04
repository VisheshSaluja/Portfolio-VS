import { lazy, Suspense, useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  countryCount,
  worldPercent,
  continentCount,
  countriesGrouped,
  bucketList,
} from "../data/travel";

const TravelGlobe = lazy(() => import("../components/TravelGlobe"));

const SMALL_SIZE = 300;
const LARGE_SIZE = 650;

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
      if (e.key === "Escape" && expanded) setExpanded(false);
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [expanded]);

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
          <motion.div
            className="fixed inset-0 z-[100] bg-background overflow-y-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
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

            {/* Globe — inside scroll flow, scrolls away naturally */}
            <motion.div
              className="flex justify-center py-12"
              initial={{
                x: flipOrigin.translateX,
                y: flipOrigin.translateY,
                scale: flipOrigin.scale,
              }}
              animate={{ x: 0, y: 0, scale: 1 }}
              transition={{
                type: "tween",
                duration: 0.55,
                ease: [0.32, 0.72, 0, 1],
              }}
            >
              <Suspense fallback={<GlobeSpinner size={targetSize} />}>
                <TravelGlobe size={targetSize} interactive />
              </Suspense>
            </motion.div>

            {/* Content — flows below the globe */}
            <motion.div
              className="max-w-6xl mx-auto px-6 md:px-16 pb-20"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.3 }}
            >
              {/* Stats */}
              <div className="flex justify-center gap-12 md:gap-20 mb-24">
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

              {/* Countries grid — compact cards like Rafa's */}
              <div className="mb-24">
                <h2 className="font-display text-2xl font-bold text-stone-100 text-center mb-10">
                  Countries I&apos;ve Explored
                </h2>

                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
                  {countriesGrouped.map((group) => (
                    <div
                      key={group.countryCode}
                      className="group relative rounded-xl bg-white/[0.02] border border-white/[0.04] hover:border-white/[0.1] transition-all duration-300 p-4 cursor-default"
                    >
                      <div className="flex items-start justify-between">
                        <div>
                          <div className="flex items-center gap-2 mb-1.5">
                            <span className="text-lg">{group.flag}</span>
                            <p className="text-stone-200 font-medium text-sm">
                              {group.country}
                            </p>
                          </div>
                          <p className="text-accent/60 text-xs">
                            {group.cities.length}{" "}
                            {group.cities.length === 1 ? "place" : "places"}
                          </p>
                        </div>
                        {/* Camera icon placeholder for images */}
                        <button
                          className="mt-0.5 text-stone-700 hover:text-stone-400 transition-colors"
                          title={`Photos from ${group.country}`}
                        >
                          <svg
                            width="14"
                            height="14"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" />
                            <circle cx="12" cy="13" r="4" />
                          </svg>
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bucket list */}
              {bucketList.length > 0 && (
                <div className="mb-20">
                  <h2 className="font-display text-2xl font-bold text-stone-100 mb-2">
                    Bucket List
                  </h2>
                  <p className="text-stone-600 text-sm mb-8">
                    Destinations I dream about.
                  </p>
                  <div className="flex flex-wrap gap-3">
                    {bucketList.map((place) => (
                      <span
                        key={place.country}
                        className="inline-flex items-center gap-2 text-sm px-5 py-2.5 rounded-full bg-white/[0.02] text-stone-400 border border-white/[0.05] hover:border-accent/30 hover:text-stone-200 transition-all duration-300"
                      >
                        <span className="text-base">{place.flag}</span>
                        {place.country}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Travel;
