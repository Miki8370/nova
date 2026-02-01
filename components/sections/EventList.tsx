import { getEvents } from "@/lib/events"
import EventCard from "./events"

export default async function EventList() {
  const events = await getEvents()

  if (!events.length) {
    return <p className="text-gray-500">No upcoming events.</p>
  }

  return (
    <div className="grid gap-6 md:grid-cols-3">
      {events.map(event => (
        <EventCard key={event.id} event={event} />
      ))}
    </div>
  )
}
