// app/lib/events.ts

export type Event = {
    id: string
    title: string
    description: string
    image?: string
    date?: string
    time?: string
    location?: string
    link?: string
    status?: string
  }
  
  const SHEET_URL =
    "https://opensheet.elk.sh/1WDkIYsBKa5PLsmyktFIB6AC-_AwJ-8EBZA4fiLOOzcQ/Sheet1"
  
  export async function getEvents(): Promise<Event[]> {
    const res = await fetch(SHEET_URL, {
      next: { revalidate: 60 },
    })
  
    if (!res.ok) return []
  
    const events = await res.json()
  
    const today = new Date()
  
    return events
      .filter((e: Event) => e.status !== "draft")
      .filter((e: Event) => !e.date || new Date(e.date) >= today)
      .sort(
        (a: Event, b: Event) =>
          new Date(a.date ?? "").getTime() -
          new Date(b.date ?? "").getTime()
      )
  }
  