import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function OpenToWork() {
  const [open, setOpen] = useState(false)

  return (
    <>
      {/* Floating pill trigger at bottom-right */}
      <motion.button
        initial={{ x: 120, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ type: 'spring', stiffness: 200, damping: 20, delay: 0.2 }}
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.98 }}
        onClick={() => setOpen(true)}
        className="fixed bottom-6 right-6 z-[60] btn-primary shadow-lg animate-[knock_2.8s_ease-in-out_infinite]"
      >
        Knock Knock
      </motion.button>

      {/* Slide-in side panel */}
      <AnimatePresence>
        {open && (
          <>
            <motion.div
              initial={{ x: 400 }}
              animate={{ x: 0 }}
              exit={{ x: 400 }}
              transition={{ type: 'spring', stiffness: 220, damping: 26 }}
              className="fixed top-0 right-0 h-full w-[92%] sm:w-[420px] z-[70] border-l border-white/10 bg-[rgb(var(--color-bg))] text-[rgb(var(--color-fg))] shadow-2xl"
            >
              <div className="p-6">
                <div className="text-sm opacity-80">Knock, knock…</div>
                <div className="mt-2 text-lg font-semibold">Who’s there?</div>
                <div className="mt-1">Mandar. Mandar who?</div>
                <div className="mt-2">Mandar who’s <span className="accent-text font-semibold">open to work</span> — let’s talk!</div>
                <div className="mt-5 flex justify-end gap-2">
                  <button className="rounded-lg px-3 py-2 border border-white/20 hover:bg-white/10" onClick={() => setOpen(false)}>Close</button>
                  <a href="mailto:mvp23402@gmail.com" className="btn-primary">Say Hi</a>
                </div>
              </div>
            </motion.div>
            {/* Click-away area (non-blocking look: transparent, only right side panel visible) */}
            <motion.div
              className="fixed inset-0 z-[65]"
              onClick={() => setOpen(false)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 0 }}
              exit={{ opacity: 0 }}
            />
          </>
        )}
      </AnimatePresence>
    </>
  )
}


