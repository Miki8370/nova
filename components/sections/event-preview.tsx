import Link from "next/link"
import { getEvents } from "@/lib/events"
import EventCard from "./events"

export default async function EventsPreview() {
  const events = await getEvents()
  const previewEvents = events.slice(0, 3)

  if (!previewEvents.length) return null

  return (
    <section className="mt-16 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 flex flex-col items-center justify-between gap-4 sm:flex-row sm:items-center">
        <h2 className="text-3xl font-bold tracking-tight text-white md:text-4xl">
            Upcoming Events
            </h2>

          <Link
            href="/events"
            className="inline-flex items-center gap-1 text-base font-medium text-blue-600 hover:text-blue-700 hover:underline"
          >
            View all events
            <span aria-hidden="true">→</span>
          </Link>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {previewEvents.map(event => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
      </div>
    </section>
  )
}