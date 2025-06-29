import React from "react";

export default function SkipToContent() {
  return (
    <a href="#main-content" className="visually-hidden" tabIndex={0}>
      Skip to main content
    </a>
  );
}
