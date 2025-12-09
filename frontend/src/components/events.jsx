import React from "react";
import { Button } from "../components/ui/button";
import { useQuery } from "@tanstack/react-query";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark } from "@fortawesome/free-regular-svg-icons";
import { Skeleton } from "@/components/ui/skeleton";

export default function EventsPage() {
  const { isPending, error, data, isFetching } = useQuery({
    queryKey: ["repoData"],
    queryFn: async () => {
      const response = await fetch(
        "http://127.0.0.1:2020/user-dashboard/events/"
      );
      return await response.json();
    },
  });

  if (isPending)
    return (
      <div className="flex flex-col space-y-3">
        <Skeleton className="h-[125px] w-[250px] rounded-xl" />
        <div className="space-y-2">
          <Skeleton className="h-4 w-[250px]" />
          <Skeleton className="h-4 w-[200px]" />
        </div>
      </div>
    );

  if (error) return "An error has occurred: " + error.message;
  return data.map((item, index) => {
    return (
      <Card key={index}>
        <CardHeader>
          <CardTitle className="text-4xl">{item.department}</CardTitle>
          <CardDescription>{item.event_name}</CardDescription>
          <CardAction>
            <FontAwesomeIcon icon={faBookmark} className="text-2xl" />
          </CardAction>
        </CardHeader>

        <CardContent className="p-2 grid grid-cols-2 gap-1">
          <img src={item.image} className="w-[40vw] float-end px-5" />
          <div className="flex flex-col  justify-center ">
            <p>Description: {item.description}</p> <br />
            <p>Start Date: {item.start_date}</p> <br />
            <p>End Date: {item.end_date}</p> <br />
            <Button className="w-[10vw]">Register Now</Button>
          </div>
        </CardContent>
        <CardFooter>
          <p>Contact us: {item.contact_number} </p>
        </CardFooter>
      </Card>
    );
  });
}
