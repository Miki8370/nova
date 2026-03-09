import EventList from "@/components/sections/EventList"

export default function EventsPage() {
  return (
    <main className="mx-auto max-w-6xl p-6">
      <h1 className="mb-8 text-3xl font-bold">All Events</h1>
      <EventList />
    </main>
  )
}
