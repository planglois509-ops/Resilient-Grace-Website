"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Cookie } from "lucide-react";

export function CookieBanner() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const accepted = window.localStorage.getItem("rg-cookies");
    if (!accepted) setShow(true);
  }, []);

  const accept = () => {
    window.localStorage.setItem("rg-cookies", "accepted");
    setShow(false);
  };

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 80, opacity: 0 }}
          transition={{ duration: 0.5, ease: [0.21, 0.61, 0.35, 1] }}
          className="fixed bottom-4 left-4 right-4 md:left-auto md:right-6 md:bottom-6 md:max-w-sm z-50"
        >
          <div className="bg-midnight text-mist rounded-2xl p-5 shadow-[0_30px_60px_-20px_rgba(3,45,61,0.6)] border border-mist/15">
            <div className="flex items-start gap-3">
              <span className="mt-0.5 text-bloom">
                <Cookie size={18} />
              </span>
              <div className="flex-1">
                <p className="text-[14px] leading-[1.6] text-mist/85">
                  This site uses essential cookies to make it work. By
                  continuing, you agree to our gentle privacy practices.
                </p>
                <div className="mt-3 flex items-center gap-3">
                  <button
                    onClick={accept}
                    className="inline-flex items-center px-4 py-2 rounded-full bg-bloom text-midnight text-[13px] font-medium hover:bg-mist transition"
                  >
                    Okay
                  </button>
                  <a
                    href="/privacy"
                    className="text-[13px] text-mist/65 hover:text-bloom transition"
                  >
                    Privacy
                  </a>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
