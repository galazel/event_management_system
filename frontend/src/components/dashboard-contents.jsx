import { ProfileForm } from "./profile-form";
export function RegisteredEventsPage() {
  return (
    <section>
      <h1>Your Events</h1>
      <h2>Upcoming Events</h2>
      <h2>Ended Events</h2>
    </section>
  );
}
export function ProfilePage() {
  return (
    <section>
      <ProfileForm />
    </section>
  );
}
