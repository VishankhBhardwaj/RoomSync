import React from "react";
import {
  MapPin,
  Star,
  DollarSign,
  Image as ImageIcon,
  Heart,
  MessageCircle,
} from "lucide-react";            //  npm i lucide-react

export default function MatchCard({ match }) {
  if (!match) return null;

  return (
    /* card wrapper with dark theme */
    <div className="relative rounded-xl border border-[#374151] bg-[#1f2937] p-4 md:p-6 lg:p-8 shadow-md">
      {/* Match % badge */}
      <span className="absolute right-3 md:right-6 top-3 md:top-6 rounded-full bg-[#5b1c8e] bg-opacity-30 px-3 py-1 text-xs font-semibold text-[#a257e0]">
        {match.match}% Match
      </span>

      {/* Header */}
      <div className="mb-4 flex gap-3 md:gap-4 bg-[#1f2937]">
        <div className="h-16 w-16 md:h-20 md:w-20 shrink-0 rounded-full bg-[#374151]" />
        <div>
          <h2 className="text-lg md:text-xl font-semibold bg-[#1f2937] text-white">
            {match.name}, {match.age}
          </h2>
          <div className="flex items-center text-xs md:text-sm text-[#88a3af] bg-[#1f2937]">
            <MapPin className="mr-1 h-3 w-3 md:h-4 md:w-4" />
            {match.neighborhood}
          </div>
          <div className="flex items-center gap-1 text-xs md:text-sm text-[#88a3af] bg-[#1f2937]">
            <Star className="h-3 w-3 fill-yellow-400 text-yellow-400 bg-[#1f2937]" />
            {match.rating}
            <span className="mx-1 bg-[#1f2937]">•</span>
            {match.lastActive}
          </div>
        </div>
      </div>

      {/* Description */}
      <p className="mb-4 text-xs md:text-sm text-white bg-[#1f2937]">{match.description}</p>

      {/* Budget & photos */}
      <div className="mb-4 flex items-center flex-wrap gap-4 md:gap-8 text-xs md:text-sm text-white bg-[#1f2937]">
        <span className="flex items-center gap-1 bg-[#1f2937]">
          <DollarSign className="h-3 w-3 md:h-4 md:w-4 bg-[#1f2937] text-[#1fadad]" /> ${match.budgetMin}-{match.budgetMax}
        </span>
        <span className="flex items-center gap-1 bg-[#1f2937]">
          <ImageIcon className="h-3 w-3 md:h-4 md:w-4 bg-[#1f2937] text-[#1fadad]" /> {match.photos} photos
        </span>
      </div>

      {/* Interests */}
      <div className="mb-2 text-xs md:text-sm font-semibold bg-[#1f2937] text-white">Interests</div>
      <div className="mb-4 flex flex-wrap gap-2 bg-[#1f2937]">
        {match.interests.slice(0, 4).map((int) => (
          <span
            key={int}
            className="rounded-full bg-[#374151] px-2 py-1 text-xs font-medium text-white"
          >
            {int}
          </span>
        ))}
        {match.interests.length > 4 && (
          <span className="rounded-full bg-[#374151] px-2 py-1 text-xs font-medium text-white">
            +{match.interests.length - 4} more
          </span>
        )}
      </div>

      {/* Preferences */}
      <div className="mb-2 text-xs md:text-sm font-semibold bg-[#1f2937] text-white">Preferences</div>
      <div className="mb-4 md:mb-6 grid grid-cols-2 gap-y-1 md:gap-y-2 text-xs md:text-sm text-white bg-[#1f2937]">
        {match.preferences.map((p, idx) => (
          <span key={idx} className="flex items-center gap-1 bg-[#1f2937]">
            {p.icon} {p.label}
          </span>
        ))}
      </div>

      {/* CTA buttons */}
      <div className="flex items-center gap-2 md:gap-3 bg-[#1f2937]">
        <button className="flex-1 rounded-md bg-[#5b1c8e] py-2 text-xs md:text-sm font-medium text-white hover:bg-[#a257e0] transition-all duration-200">
          View Profile
        </button>
        <button className="rounded-md border border-[#374151] p-2 text-white hover:bg-[#374151]">
          <Heart className="h-3 w-3 md:h-4 md:w-4" />
        </button>
        <button className="rounded-md border border-[#374151] p-2 text-white hover:bg-[#374151]">
          <MessageCircle className="h-3 w-3 md:h-4 md:w-4" />
        </button>
      </div>
    </div>
  );
}
