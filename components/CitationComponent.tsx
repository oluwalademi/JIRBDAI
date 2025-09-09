"use client";
import React, { useState, useEffect } from "react";
import { generateCitation } from "@/lib/generateCitation";

export default function CitationComponent({
  article,
  show = false,
  onClose,
}: {
  article: any;
  show?: boolean;
  onClose: () => void;
}) {
  const [style, setStyle] = useState<"APA" | "MLA" | "Chicago">("APA");
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(generateCitation(article, style));
    setCopied(true);
  };

  // Reset copied when modal is closed
  useEffect(() => {
    if (!show) {
      setCopied(false);
    }
  }, [show]);

  if (!show) return null;

  return (
    <div className="fixed inset-0 z-50 flex size-full items-center justify-center bg-black/70">
      <div className="relative size-full max-h-[65%] max-w-[50%] overflow-y-auto rounded-lg bg-white p-6 shadow-lg">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute right-3 top-3 font-extrabold text-white hover:text-white/70"
        >
          <div className="bg-red-500 px-2 py-1 hover:bg-red-950">✕</div>
        </button>

        {/* Citation Content */}
        <div className="flex h-full flex-col gap-3">
          <h2 className="text-lg font-semibold">Citation</h2>

          <select
            value={style}
            onChange={(e) => setStyle(e.target.value as any)}
            className="rounded border border-black/50 px-2 py-1"
          >
            <option value="APA">APA</option>
            <option value="MLA">MLA</option>
            <option value="Chicago">Chicago</option>
          </select>

          <textarea
            readOnly
            value={generateCitation(article, style)}
            className="size-full rounded border border-black/50 p-2 text-sm"
          />

          <button
            onClick={handleCopy}
            className={`inline-flex items-center justify-center
    rounded-md border border-transparent
    px-4 py-2 text-sm font-medium text-white
    shadow-sm transition-all duration-200
    ${
      copied
        ? "bg-indigo-950 hover:bg-indigo-900 focus:ring-indigo-900 active:bg-indigo-800"
        : "bg-brand-100 hover:bg-indigo-600 focus:ring-indigo-500 active:bg-indigo-700"
    }
    focus:outline-none focus:ring-2 focus:ring-offset-2
  `}
          >
            {copied ? "Copied!" : "Copy Citation"}
          </button>
        </div>
      </div>
    </div>
  );
}
