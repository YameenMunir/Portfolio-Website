import React, { useRef, useEffect, useState } from "react";

export default function LazyImage({ src, alt, className = "", ...props }) {
  const [loaded, setLoaded] = useState(false);
  const imgRef = useRef();

  useEffect(() => {
    const img = imgRef.current;
    if (!img) return;
    if (img.complete) {
      setLoaded(true);
      return;
    }
    const onLoad = () => setLoaded(true);
    img.addEventListener("load", onLoad);
    return () => img.removeEventListener("load", onLoad);
  }, [src]);

  return (
    <img
      ref={imgRef}
      src={src}
      alt={alt}
      className={`lazy-img${loaded ? " loaded" : ""} ${className}`}
      loading="lazy"
      {...props}
    />
  );
}
