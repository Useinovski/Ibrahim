import { useEffect, useState } from "react";

export default function ImageCarousel({ images, interval = 4000, rounded = "rounded-full" }) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, interval);
    return () => clearInterval(timer);
  }, [images, interval]);

  return (
    <div className={`relative w-48 h-48 overflow-hidden shadow-md ${rounded}`}>
      {images.map((src, index) => (
        <img
          key={index}
          src={src}
          alt={`Slide ${index + 1}`}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${rounded} ${
            index === current ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}
    </div>
  );
}
