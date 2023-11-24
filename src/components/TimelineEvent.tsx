// TimelineEvent.js
import React from "react"

const TimelineEvent = ({ event }: any) => {
  return (
    <div className="flex flex-col items-center mb-8 animate-fade-in-down">
      <div className="relative p-4 w-full max-w-md bg-white rounded shadow-md animate-slide-in-elliptic-top-fwd">
        <div className="absolute w-1 h-full bg-gray-300 left-1/2 transform -translate-x-1/2"></div>
        <div className="relative z-10">
          <span className="block text-gray-600 text-sm">{event.date}</span>
          <h3 className="text-lg font-bold text-gray-900">{event.title}</h3>
          <p className="mt-1 text-gray-700 text-base">{event.description}</p>
        </div>
      </div>
    </div>
  )
}

export default TimelineEvent
