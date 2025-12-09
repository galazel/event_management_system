import React, { useState, useEffect } from "react";
import { SearchIcon } from "lucide-react";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Combobox } from "../components/ui/checkbox";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faCalendar,
  faBookmark,
} from "@fortawesome/free-regular-svg-icons";
import { faExpand } from "@fortawesome/free-solid-svg-icons";

const phrases = [
  "Join us for an unforgettable experience!",
  "Celebrate, connect, and create memories.",
  "Your presence makes the event special.",
  "Don't miss out on the excitement!",
  "Experience moments that matter.",
];
function UserDashboard() {
  const [index, setIndex] = useState(0);
  const [phrase, setPhrase] = useState(phrases[0]);

  useEffect(() => {
    const timer = setTimeout(() => {
      const nextIndex = (index + 1) % phrases.length;
      setIndex(nextIndex);
      setPhrase(phrases[nextIndex]);
    }, 5000);

    return () => clearTimeout(timer);
  }, [index]);

  return (
    <main className="h-screen flex flex-col gap-5 p-5">
      <header className="text-gray-600 body-font ">
        <div className="container mx-auto flex justify-between  p-5  md:flex-row items-center ">
          <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <img src="/uc-logo.png" alt="uc-logo" className="w-[5vw]" />
          </a>
          <div>
            <FontAwesomeIcon icon={faCalendar} className="text-3xl" />
            <FontAwesomeIcon icon={faUser} className="text-3xl" />
          </div>
        </div>
      </header>
      <section className="container mx-auto grid grid-rows-2 gap-10 p-5 md:flex-row items-center ">
        <h1 className="text-center text-3xl">{phrase}</h1>
        <div className="flex justify-between gap-10">
          <InputGroup className="w-[20vw]">
            <InputGroupInput placeholder=" Search event..." />
            <InputGroupAddon>
              <SearchIcon />
            </InputGroupAddon>
          </InputGroup>
          <Combobox />
        </div>
        <div className="grid gap-5">
          <Card>
            <CardHeader>
              <CardTitle>Card Title</CardTitle>
              <CardDescription>Card Description</CardDescription>
              <CardAction className="flex gap-1">
                <FontAwesomeIcon icon={faBookmark} className="text-2xl" />
                <FontAwesomeIcon icon={faExpand} className="text-2xl" />
              </CardAction>
            </CardHeader>
            <CardContent>
              <p>Card Content</p>
            </CardContent>
            <CardFooter>
              <p>Card Footer</p>
            </CardFooter>
          </Card>
        </div>
      </section>
    </main>
  );
}

export default UserDashboard;
