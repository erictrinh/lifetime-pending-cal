import ical from "ical-generator";

async function getCalendar() {
  const response = await fetch("http://localhost:8080/?status=PENDING");
  const reservations = await response.json();

  const calendar = ical({
    name: `Life Time Pending`,
  });

  reservations.forEach((r: any) => {
    calendar.createEvent({
      start: new Date(r.start),
      end: new Date(r.end),
      summary: r.name,
      description: "",
      location: "PENDING",
      url: `https://my.lifetime.life/clubs/ny/sky-manhattan/classes/class-details.html?eventId=${r.lifetimeId}`,
    });
  });

  const calendarJSON = reservations.map((r: any) => {
    return {
      start: new Date(r.start),
      end: new Date(r.end),
      summary: r.name,
      description: "",
      location: "PENDING",
      url: `https://my.lifetime.life/clubs/ny/sky-manhattan/classes/class-details.html?eventId=${r.lifetimeId}`,
    };
  });

  return { calendar, calendarJSON };
}
const { calendar, calendarJSON } = await getCalendar();
Bun.write("pending.ics", calendar.toString());
Bun.write("pending.json", JSON.stringify(calendarJSON, null, 2));
