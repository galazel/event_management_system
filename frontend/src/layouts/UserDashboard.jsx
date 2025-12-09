import React from "react";
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

function UserDashboard() {
  return (
    <main className="h-screen flex flex-col gap-5 p-5">
      <header class="text-gray-600 body-font ">
        <div class="container mx-auto flex justify-between  p-5  md:flex-row items-center ">
          <a class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              class="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full"
              viewBox="0 0 24 24"
            >
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
            </svg>
            <span class="ml-3 text-xl">Tailblocks</span>
          </a>
         
          <button class="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">
            Button
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              class="w-4 h-4 ml-1"
              viewBox="0 0 24 24"
            >
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </button>
        </div>
      </header>
      <section className="container mx-auto grid grid-rows-2 gap-10 p-5 md:flex-row items-center ">
        <h1 className="text-center">
          Look for events currently available in your school
        </h1>
        <div className="flex justify-between gap-10">
          <InputGroup className="w-[20vw]">
            <InputGroupInput placeholder=" Search event..." />
            <InputGroupAddon>
              <SearchIcon />
            </InputGroupAddon>
          </InputGroup>
          <Combobox/>
        </div>
        <div className="grid gap-5">
          <Card>
            <CardHeader>
              <CardTitle>Card Title</CardTitle>
              <CardDescription>Card Description</CardDescription>
              <CardAction>Card Action</CardAction>
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
