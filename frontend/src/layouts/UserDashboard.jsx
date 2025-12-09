import React, { useState, useEffect, createContext } from "react";
import { SearchIcon } from "lucide-react";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group";

import { Combobox } from "../components/ui/checkbox";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faCalendar } from "@fortawesome/free-regular-svg-icons";
import RegisteredEventsPage from "../components/user-registered-events";
import EventsPage from "../components/events";
import ProfilePage from "../components/profile";
import useCarousel from "../hooks/useCarousel";

const phrases = [
  "Join us for an unforgettable experience!",
  "Celebrate, connect, and create memories.",
  "Your presence makes the event special.",
  "Don't miss out on the excitement!",
  "Experience moments that matter.",
];
function UserDashboard() {
  const [eventsPage, setEventsPage] = useState(true);
  const [registeredEventsPage, setRegisteredEventsPage] = useState(false);
  const [profilePage, setProfilePage] = useState(false);
  const [isProfilePageSet, setIsProfilePageSet] = useState(false);

  const item = useCarousel(phrases);
  const handleRegisteredEventsPage = () => {
    setEventsPage(false);
    setRegisteredEventsPage(true);
    setProfilePage(false);
     setIsProfilePageSet(false)
  };
  const handleProfilePage = () => {
    setEventsPage(false);
    setRegisteredEventsPage(false);
    setProfilePage(true);
    setIsProfilePageSet(true)
  };
  const handleEventsPage = () => {
    setEventsPage(true);
    setRegisteredEventsPage(false);
    setProfilePage(false);
     setIsProfilePageSet(false)
  };

  return (
    <main className="h-screen flex flex-col gap-5 p-5">
      <header className="text-gray-600 body-font ">
        <div className="container mx-auto flex justify-between  p-5  md:flex-row items-center ">
          <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <img
              src="/uc-logo.png"
              alt="uc-logo"
              className="w-[5vw]"
              onClick={handleEventsPage}
            />
          </a>
          <div>
            <FontAwesomeIcon
              icon={faCalendar}
              className="text-3xl"
              onClick={handleRegisteredEventsPage}
            />
            <FontAwesomeIcon
              icon={faUser}
              className="text-3xl"
              onClick={handleProfilePage}
            />
          </div>
        </div>
      </header>
      <section className="container mx-auto grid grid-rows-2 gap-10 p-5 md:flex-row items-center ">
        {!isProfilePageSet && (
          <>
            <h1 className="text-center text-5xl">{item}</h1>
            <div className="flex justify-between gap-10">
              <InputGroup className="w-[20vw]">
                <InputGroupInput placeholder=" Search event..." />
                <InputGroupAddon>
                  <SearchIcon />
                </InputGroupAddon>
              </InputGroup>
              <Combobox />
            </div>
          </>
        )}
        <div className="grid gap-5">
          {eventsPage && <EventsPage />}
          {registeredEventsPage && <RegisteredEventsPage />}
          {profilePage && <ProfilePage />}
        </div>
      </section>
    </main>
  );
}

export default UserDashboard;
