import { useState, lazy, Suspense } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  countriesGrouped,
  bucketList,
  countryCount,
  worldPercent,
  continentCount,
  type City,
} from "../data/travel";

const TravelGlobe = lazy(() => import("../components/TravelGlobe"));

interface TravelPageProps {
  onClose: () => void;
}

const stats = [
  { value: countryCount.toString(), label: "Countries" },
  { value: `${worldPercent}%`, label: "of the world" },
  { value: continentCount.toString(), label: "Continents" },
];

const TravelPage = ({ onClose }: TravelPageProps) => {
  const [selectedImage, setSelectedImage] = useState<City | null>(null);

  return (
    <motion.div
      className="fixed inset-0 z-[100] bg-background overflow-y-auto"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
    >
      {/* Top bar */}
      <div className="sticky top-0 z-20 bg-background/80 backdrop-blur-xl border-b border-white/[0.04]">
        <div className="max-w-6xl mx-auto px-6 md:px-16 flex justify-between items-center h-16">
          <h1 className="font-display font-bold text-lg text-stone-200">
            My Travel Journey
          </h1>
          <button
            onClick={onClose}
            className="text-sm text-stone-500 hover:text-stone-200 transition-colors duration-300"
          >
            &larr; Back
          </button>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 md:px-16 py-12">
        {/* Globe — scales up from teaser size */}
        <motion.div
          className="flex justify-center mb-16"
          initial={{ scale: 0.55, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <Suspense
            fallback={
              <div className="w-[550px] h-[550px] flex items-center justify-center">
                <div className="w-8 h-8 border-2 border-accent/30 border-t-accent rounded-full animate-spin" />
              </div>
            }
          >
            <TravelGlobe
              size={Math.min(
                550,
                typeof window !== "undefined" ? window.innerWidth - 48 : 550
              )}
              interactive
              onCityClick={(city) => setSelectedImage(city)}
            />
          </Suspense>
        </motion.div>

        {/* Stats */}
        <motion.div
          className="flex justify-center gap-12 md:gap-20 mb-20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
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
        </motion.div>

        {/* Countries visited */}
        <motion.div
          className="mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h2 className="font-display text-2xl font-bold text-stone-100 mb-8">
            Countries I&apos;ve Explored
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {countriesGrouped.map((group) => (
              <div
                key={group.countryCode}
                className="flex items-center gap-3 p-3 rounded-xl bg-white/[0.02] border border-white/[0.04] hover:border-white/[0.1] transition-all duration-300 group cursor-default"
              >
                <span className="text-2xl shrink-0">{group.flag}</span>
                <div className="min-w-0">
                  <p className="text-stone-200 font-medium text-sm group-hover:text-stone-100 transition-colors">
                    {group.country}
                  </p>
                  <p className="text-stone-600 text-xs truncate">
                    {group.cities.join(" · ")}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Bucket list */}
        {bucketList.length > 0 && (
          <motion.div
            className="mb-20"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <h2 className="font-display text-2xl font-bold text-stone-100 mb-3">
              Bucket List
            </h2>
            <p className="text-stone-600 text-sm mb-6">
              Places I&apos;d love to visit — not necessarily next, but
              destinations I dream about.
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
          </motion.div>
        )}
      </div>

      {/* Image popup modal */}
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
              transition={{ duration: 0.3 }}
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
    </motion.div>
  );
};

export default TravelPage;
