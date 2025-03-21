"use client";

import { useEffect } from "react";

export default function Loading() {
  useEffect(() => {
    setTimeout(() => {}, 3000);
  }, []);
  return <div>Loading...</div>;
}
