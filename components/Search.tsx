"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import { useRouter, useSearchParams, usePathname } from "next/navigation";

interface SearchProps {
  onUserActive: (active: boolean) => void;
}

const Search: React.FC<SearchProps> = ({ onUserActive }) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const searchPhrase = searchParams.get("searchPhrase") || "";

  const [startedTyping, setStartedTyping] = useState(false);
  const [inputValue, setInputValue] = useState(searchPhrase);

  const handleClick = (takeText: string) => {
    const params = new URLSearchParams(searchParams.toString());

    if (!takeText.trim()) {
      params.delete("searchPhrase");
    } else {
      params.set("searchPhrase", takeText);
    }

    const newQuery = `?${params.toString()}`;

    // ✅ If not already on /browse, go there with params
    if (pathname !== "/browse") {
      router.push(`/browse${newQuery}`);
    } else {
      router.push(newQuery);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
    if (!startedTyping) {
      setStartedTyping(true);
      onUserActive(true);
    }
  };

  const handleFocus = () => {
    if (!startedTyping) {
      setStartedTyping(true);
      onUserActive(true);
    }
  };

  const handleBlur = () => {
    setStartedTyping(false);
    onUserActive(false);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleClick(inputValue);
    }
  };

  const divinTxt = startedTyping ? "w-full" : "w-full max-w-md";

  return (
    <div className={`${divinTxt}`}>
      <div className="relative rounded-[32px] bg-[#2c526f]">
        <Input
          placeholder="Search JIRBDAI library"
          value={inputValue}
          onChange={handleChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          onKeyDown={handleKeyDown}
          className="h-[52px] bg-[#2c526f] px-6 pr-10 text-white placeholder:text-white/40"
        />
        <Image
          onClick={() => handleClick(inputValue)}
          src="/assets/images/search-pics.png"
          alt="Search"
          width={35}
          height={35}
          className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer"
        />
      </div>
    </div>
  );
};

export default Search;
