'use client';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative bg-hero-pattern bg-cover bg-center text-white pt-32 pb-20">
      <div className="absolute inset-0 bg-gradient-to-r from-brand-light/80 to-brand/80" />
      <div className="relative max-w-3xl mx-auto text-center px-4">

        {/* Animated headline */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-6xl font-extrabold mb-4">
            Real-time Crypto KOL Tracking &amp; Insights
          </h1>
        </motion.div>

        {/* Animated subhead */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <p className="text-lg md:text-xl mb-8">
            Discover top influencers, monitor on-chain moves, and gain actionable data.
          </p>
        </motion.div>

        {/* Search bar */}
        <div className="flex justify-center">
          <input
            type="text"
            placeholder="Search wallets or handles"
            className="w-full max-w-md px-4 py-3 rounded-l-lg focus:outline-none text-gray-800"
          />
          <button className="px-6 py-3 bg-white text-gray-900 font-semibold rounded-r-lg shadow-lg hover:bg-gray-100">
            Search
          </button>
        </div>

      </div>
    </section>
  );
}