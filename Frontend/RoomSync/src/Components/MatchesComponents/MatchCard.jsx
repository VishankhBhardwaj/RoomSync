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
    /* card wrapper: ALWAYS white */
    <div className="relative rounded-xl border border-gray-200 bg-white p-8 shadow-sm">
      {/* Match % badge */}
      <span className="absolute right-6 top-6 rounded-full bg-green-100 px-3 py-1 text-xs font-semibold text-green-700">
        {match.match}% Match
      </span>

      {/* Header */}
      <div className="mb-4 flex gap-4 bg-white">
        <div className="h-20 w-20 shrink-0 rounded-full bg-gray-100 " />
        <div>
          <h2 className="text-xl font-semibold bg-white">
            {match.name}, {match.age}
          </h2>
          <div className="flex items-center text-sm text-gray-500 bg-white">
            <MapPin className="mr-1 h-4 w-4" />
            {match.neighborhood}
          </div>
          <div className="flex items-center gap-1 text-sm text-gray-500 bg-white">
            <Star className="h-3 w-3 fill-yellow-400 text-yellow-400 bg-white" />
            {match.rating}
            <span className="mx-1 bg-white">•</span>
            {match.lastActive}
          </div>
        </div>
      </div>

      {/* Description */}
      <p className="mb-4 text-sm text-gray-700 bg-white">{match.description}</p>

      {/* Budget & photos */}
      <div className="mb-4 flex items-center gap-8 text-sm text-gray-700 bg-white">
        <span className="flex items-center gap-1 bg-white">
          <DollarSign className="h-4 w-4 bg-white" /> ${match.budgetMin}-{match.budgetMax}
        </span>
        <span className="flex items-center gap-1 bg-white">
          <ImageIcon className="h-4 w-4 bg-white" /> {match.photos} photos
        </span>
      </div>

      {/* Interests */}
      <div className="mb-2 text-sm font-semibold bg-white">Interests</div>
      <div className="mb-4 flex flex-wrap gap-2 bg-white">
        {match.interests.slice(0, 4).map((int) => (
          <span
            key={int}
            className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-700"
          >
            {int}
          </span>
        ))}
        {match.interests.length > 4 && (
          <span className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-700">
            +{match.interests.length - 4} more
          </span>
        )}
      </div>

      {/* Preferences */}
      <div className="mb-2 text-sm font-semibold bg-white">Preferences</div>
      <div className="mb-6 grid grid-cols-2 gap-y-2 text-sm text-gray-700 bg-white">
        {match.preferences.map((p, idx) => (
          <span key={idx} className="flex items-center gap-1 bg-white">
            {p.icon} {p.label}
          </span>
        ))}
      </div>

      {/* CTA buttons */}
      <div className="flex items-center gap-3 bg-white">
        <button className="flex-1 rounded-md bg-black py-2 text-sm font-medium text-white hover:bg-gray-800">
          View Profile
        </button>
        <button className="rounded-md border border-gray-300 p-2 text-gray-600 hover:bg-gray-100">
          <Heart className="h-4 w-4" />
        </button>
        <button className="rounded-md border border-gray-300 p-2 text-gray-600 hover:bg-gray-100">
          <MessageCircle className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}
