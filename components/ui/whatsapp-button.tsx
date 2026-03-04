import React from "react";

export const WhatsappButton = () => (
  <a
    href="https://wa.me/919921789904"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Chat on WhatsApp"
    className="fixed bottom-6 right-6 z-50 hover:scale-105 transition-transform"
  >
    <img
      src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
      alt="WhatsApp"
      className="w-14 h-14 drop-shadow-lg"
    />
  </a>
);