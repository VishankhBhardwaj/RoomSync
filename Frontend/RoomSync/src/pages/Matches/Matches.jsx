import React, { useState } from "react";
import { Search, Filter as FilterIcon, ChevronDown } from "lucide-react"; 
import MatchCard from "../../Components/MatchesComponents/MatchCard";
import Chatbot from "../../Components/Chatbot/Chatbot";
const Matches = () => {
  
  const initialMatches = [
    {
      id: 1,
      name: "Sarah Wilson",
      age: 25,
      neighborhood: "Capitol Hill, Seattle",
      rating: 4.9,
      lastActive: "2 hours ago",
      match: 94,
      description:
        "Software engineer who loves yoga and cooking. Looking for a clean, respectful roommate to share a 2BR apartment.",
      budgetMin: 800,
      budgetMax: 1000,
      photos: 4,
      interests: ["Yoga", "Cooking", "Reading", "Hiking"],
      preferences: [
        { icon: "🥕", label: "Very Clean" },
        { icon: "🚭", label: "Non‑smoker" },
        { icon: "🐱", label: "Cat‑friendly" },
        { icon: "🔈", label: "Quiet" }
      ]
    },
    {
      id: 2,
      name: "Mike Chen",
      age: 27,
      neighborhood: "Fremont, Seattle",
      rating: 4.7,
      lastActive: "1 day ago",
      match: 91,
      description:
        "Graphic designer and coffee enthusiast. Easy‑going person looking for someone to share expenses and good conversations.",
      budgetMin: 700,
      budgetMax: 900,
      photos: 6,
      interests: ["Design", "Coffee", "Gaming", "Movies"],
      preferences: [
        { icon: "🥕", label: "Clean" },
        { icon: "🚭", label: "Non‑smoker" },
        { icon: "🐱", label: "No Pets" },
        { icon: "🔈", label: "Moderate" }
      ]
    },
    {
      id: 3,
      name: "Emma Davis",
      age: 24,
      neighborhood: "Ballard, Seattle",
      rating: 4.8,
      lastActive: "3 hours ago",
      match: 89,
      description:
        "Graduate student studying psychology. Organized, studious, and looking for a quiet living environment.",
      budgetMin: 600,
      budgetMax: 800,
      photos: 3,
      interests: ["Psychology", "Reading", "Music", "Art"],
      preferences: [
        { icon: "🥕", label: "Very Clean" },
        { icon: "🚭", label: "Non‑smoker" },
        { icon: "🐶", label: "Dog‑friendly" },
        { icon: "🔈", label: "Very Quiet" }
      ]
    },
    {
      id: 4,
      name: "Alex Johnson",
      age: 26,
      neighborhood: "University District, Seattle",
      rating: 4.6,
      lastActive: "5 hours ago",
      match: 87,
      description:
        "PhD student in environmental science. Passionate about sustainability and looking for like‑minded roommate.",
      budgetMin: 750,
      budgetMax: 950,
      photos: 5,
      interests: ["Environment", "Science", "Hiking", "Cooking"],
      preferences: [
        { icon: "🥕", label: "Very Clean" },
        { icon: "🚭", label: "Non‑smoker" },
        { icon: "🐶", label: "Pet‑friendly" },
        { icon: "🔈", label: "Quiet" }
      ]
    },
    {
      id: 5,
      name: "Jordan Kim",
      age: 28,
      neighborhood: "Queen Anne, Seattle",
      rating: 4.5,
      lastActive: "12 hours ago",
      match: 85,
      description:
        "Marketing professional who travels occasionally. Looking for a responsible roommate for a modern downtown apartment.",
      budgetMin: 900,
      budgetMax: 1200,
      photos: 7,
      interests: ["Travel", "Fitness", "Food", "Photography"],
      preferences: [
        { icon: "🥕", label: "Very Clean" },
        { icon: "🚭", label: "Occasional" },
        { icon: "🐶", label: "No Pets" },
        { icon: "🔈", label: "Very Quiet" }
      ]
    },
    {
      id: 6,
      name: "Taylor Brown",
      age: 23,
      neighborhood: "Wallingford, Seattle",
      rating: 4.4,
      lastActive: "1 day ago",
      match: 83,
      description:
        "Recent graduate working in healthcare. Friendly, organized, and looking for someone to share a cozy apartment with.",
      budgetMin: 650,
      budgetMax: 850,
      photos: 4,
      interests: ["Music", "Running", "Board Games", "Cooking"],
      preferences: [
        { icon: "🥕", label: "Very Clean" },
        { icon: "🚭", label: "Non‑smoker" },
        { icon: "🐶", label: "Dog‑friendly" },
        { icon: "🔈", label: "Very Quiet" }
      ]
    }
  ];

  const [query, setQuery] = useState("");
  const [location, setLocation] = useState("Any location");
  const [gender, setGender] = useState("Any gender");
  const [budget, setBudget] = useState("Any budget");

  const filteredMatches = initialMatches.filter((m) => {
    // text search
    const textOK =
      m.name.toLowerCase().includes(query.toLowerCase()) ||
      m.neighborhood.toLowerCase().includes(query.toLowerCase());

    // location
    const locationOK =
      location === "Any location" ||
      m.neighborhood.toLowerCase().includes(location.toLowerCase());

    // (your objects don’t have gender, but keep placeholder)
    const genderOK = gender === "Any gender";

    // budget range
    let budgetOK = true;
    if (budget !== "Any budget") {
      const [minStr, maxStr] = budget.replace("$", "").split("‑");
      const min = Number(minStr);
      const max = Number(maxStr);
      budgetOK =
        m.budgetMin >= min && m.budgetMax <= max;
    }

    return textOK && locationOK && genderOK && budgetOK;
  });

  return (
    <div className="flex flex-col px-4 py-4 md:px-20 md:py-6 h-[100%] w-[100%] space-y-3 overflow-y-scroll bg-[#0f1625] text-white">
      {/* Header row  */}
      <div className="flex flex-row gap-4 border-b border-[#374151] md:border-b md:p-4">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold">YOUR MATCHES</h1>
          <p className="text-[#88a3af]">
            Discover compatible roommates based on your preferences
          </p>
        </div>
      </div>

      {/*  Filters Card */}
      <div className="mt-4 md:mt-6">
        <div className="rounded-xl border border-[#374151] bg-[#1f2937] p-4 md:p-8 shadow-md">
          {/* title */}
          <h3 className="mb-4 md:mb-6 flex items-center gap-2 text-lg md:text-xl font-semibold text-white bg-[#1f2937]">
            <FilterIcon className="h-5 w-5 text-[#1fadad]" /> Filters
          </h3>

          <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
            {/* Search */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[#88a3af] bg-[#1f2937]" />
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Name or location…"
                className="w-full rounded-md border border-[#374151] py-2 pl-10 pr-3 text-sm bg-[#374151] text-white outline-[#611d98] shadow-inner focus:border-[#611d98] focus:ring-[#611d98]"
              />
            </div>

            <SelectInput
              value={location}
              onChange={setLocation}
              defaultLabel="Any location"
              options={["Capitol Hill", "Fremont", "Ballard", "Queen Anne"]}
            />

            <SelectInput
              value={gender}
              onChange={setGender}
              defaultLabel="Any gender"
              options={["Female", "Male", "Non‑binary"]}
            />

            <SelectInput
              value={budget}
              onChange={setBudget}
              defaultLabel="Any budget"
              options={["$500‑700", "$700‑900", "$900‑1200"]}
            />
          </div>
        </div>
      </div>
      <section className="mt-6 md:mt-8 grid gap-4 md:gap-6 grid-cols-1 sm:grid-cols-2">
        {filteredMatches.map((m) => (
          <MatchCard key={m.id} match={m} />
        ))}
        {filteredMatches.length === 0 && (
          <p className="px-4 py-10 text-center text-[#88a3af] col-span-full">
            No matches found with current filters.
          </p>
        )}
      </section>
       <Chatbot />
    </div>
  );
};

export default Matches;

function SelectInput({ value, onChange, defaultLabel, options }) {
  return (
    <div className="relative">
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="peer w-full appearance-none rounded-md border border-[#374151] bg-[#374151] py-2 pl-3 pr-8 text-sm text-white outline-[#611d98] shadow-inner focus:border-[#611d98] focus:ring-[#611d98]"
      >
        <option>{defaultLabel}</option>
        {options.map((o) => (
          <option key={o} className="bg-[#374151] text-white">{o}</option>
        ))}
      </select>
      <ChevronDown className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[#88a3af]" />
    </div>
  );
}