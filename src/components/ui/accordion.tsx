"use client";

import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";

interface AccordionItemProps {
  title: string;
  content: React.ReactNode;
  isOpen?: boolean;
  onClick?: () => void;
}

export function AccordionItem({
  title,
  content,
  isOpen,
  onClick,
}: AccordionItemProps) {
  return (
    <div className="mb-4 w-full border border-[#FDFDFD] transition-all duration-300">
      <button
        className="flex w-full cursor-pointer items-center justify-between p-4 text-left focus:outline-none md:p-8"
        onClick={onClick}
      >
        <h3 className="text-neutral-off-white font-semibold tracking-wide md:text-2xl md:font-medium">
          {title}
        </h3>
        {isOpen ? (
          <Minus className="text-neutral-off-white ml-4 h-8 w-8 shrink-0 stroke-1" />
        ) : (
          <Plus className="text-neutral-off-white ml-4 h-8 w-8 shrink-0 stroke-1" />
        )}
      </button>
      <div
        className={`overflow-hidden px-4 transition-all duration-300 ease-in-out md:px-8 ${
          isOpen ? "max-h-96 pb-6 opacity-100 md:pb-8" : "max-h-0 opacity-0"
        }`}
      >
        <div className="text-neutral-off-white/80 pr-8 text-sm leading-relaxed md:text-base md:font-light">
          {content}
        </div>
      </div>
    </div>
  );
}

interface AccordionProps {
  items: { title: string; content: React.ReactNode }[];
}

export function Accordion({ items }: AccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const handleItemClick = (index: number) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className="mt-6 w-full md:mt-20">
      {items.map((item, index) => (
        <AccordionItem
          key={index}
          title={item.title}
          content={item.content}
          isOpen={openIndex === index}
          onClick={() => handleItemClick(index)}
        />
      ))}
    </div>
  );
}
