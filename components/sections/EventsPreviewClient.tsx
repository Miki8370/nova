"use client"

import Link from "next/link"
import EventCard from "./events"
import { Event } from "@/lib/events"

export default function EventsPreviewClient({
  events,
}: {
  events: Event[]
}) {
  if (!events.length) return null

  return (
    <section className="mt-16">
      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-2xl font-bold">Upcoming Events</h2>

        <Link
          href="/events"
          className="text-sm font-medium text-blue-600 hover:underline"
        >
          Show all →
        </Link>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {events.map(event => (
          <EventCard key={event.id} event={event} />
        ))}
      </div>
    </section>
  )
}

