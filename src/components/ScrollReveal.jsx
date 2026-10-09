"use client";

import { useEffect, useRef, useState } from "react";

export default function ScrollReveal({
  as: Tag = "div",
  children,
  className = "",
  variant = "up",
  delay = 0,
  threshold = 0.16,
  ...props
}) {
  const elementRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = elementRef.current;
    if (!element || typeof IntersectionObserver === "undefined") {
      setIsVisible(true);
      return undefined;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold, rootMargin: "0px 0px -8% 0px" },
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [threshold]);

  return (
    <Tag
      ref={elementRef}
      className={`scroll-reveal scroll-reveal--${variant} ${isVisible ? "is-revealed" : ""} ${className}`}
      style={{ "--reveal-delay": `${delay}ms` }}
      {...props}
    >
      {children}
    </Tag>
  );
}