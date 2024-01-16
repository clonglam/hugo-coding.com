import React from "react"
import TimelineEvent from "./TimelineEvent" // Import the TimelineEvent component

const Timeline = ({ events }: any) => {
  return (
    <div className="flex flex-col items-center justify-center w-full py-8">
      {events.map((event: any) => (
        <TimelineEvent key={event.id} event={event} />
      ))}
    </div>
  )
}

export default Timeline
