/**
 * Canonical booking link. Every "schedule a call" button on the site points here.
 *
 * Google Calendar appointment schedule, replacing the retired Calendly link.
 * If this ever changes, it also has to be changed by hand in the three Pages
 * Functions that send email (functions/api/contact.ts, subscribe.ts and
 * wisewomen-lead.ts) — those are deliberately dependency-free, so they cannot
 * import this file.
 */
export const BOOKING_URL = "https://calendar.app.google/ELbmUSC49AdBuBQe7";
