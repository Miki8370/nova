import { Event } from "@/lib/events"


export default function EventCard({ event }: { event: Event }) {
  return (
    <article className="rounded-xl border p-4 shadow-sm">
      {event.image && (
        <img
          src={event.image}
          alt={event.title}
          className="mb-3 h-40 w-full rounded-lg object-cover"
        />
      )}

      <h3 className="text-lg font-semibold">{event.title}</h3>

      {(event.date || event.location) && (
        <p className="mt-1 text-sm text-gray-500">
          {event.date}
          {event.location && ` · ${event.location}`}
        </p>
      )}

      <p className="mt-2 text-sm text-gray-700 line-clamp-3">
        {event.description}
      </p>

      {event.link && (
        <a
          href={event.link}
          target="_blank"
          className="mt-3 inline-block text-sm font-medium text-blue-600 hover:underline"
        >
          Learn more →
        </a>
      )}
    </article>
  )
}
