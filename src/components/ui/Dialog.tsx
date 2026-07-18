"use client";

import { cn } from "@/lib/cn";
import { useEffect, useRef, useState } from "react";

export default function Dialog({
  isOpen,
  onClose,
  children,
}: {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}) {
  const [shouldRender, setShouldRender] = useState(isOpen);
  const [isClosing, setIsClosing] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    if (isOpen) {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setShouldRender(true);
      // reset closing state di frame berikutnya biar animasi "enter" jalan
      setIsClosing(false);
    } else if (shouldRender) {
      setIsClosing(true);
      // durasi harus sama dengan durasi animasi exit di CSS (200ms)
      timeoutRef.current = setTimeout(() => {
        setShouldRender(false);
        setIsClosing(false);
      }, 200);
    }

    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen]);

  useEffect(() => {
    if (!shouldRender) return;

    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [shouldRender]);

  if (!shouldRender) return null;

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-4 ${
        isClosing ? "dialog-overlay-out" : "dialog-overlay-in"
      }`}
      onClick={onClose}
    >
      <div
        className={cn(
          isClosing ? "dialog-content-out" : "dialog-content-in",
          "mx-auto flex w-full items-center justify-center",
        )}
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>
  );
}
