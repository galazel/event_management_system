import React from "react";
import { Button } from "../components/ui/button";
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
import { useGetItems } from "../hooks/useGetItems";
export default function DashboardCommonLayout(props) {
  const data = useGetItems(props.link);
  if (data.pending)
    return (
      <div className="flex flex-col space-y-3">
        <Skeleton className="h-[125px] w-[250px] rounded-xl" />
        <div className="space-y-2">
          <Skeleton className="h-4 w-[250px]" />
          <Skeleton className="h-4 w-[200px]" />
        </div>
      </div>
    );

  if (data.isError) return "An error has occurred: " + data.isError.message;

  if (data.data.length < 1) return <h1>No registered events.</h1>;
  if (Array.isArray(data.data)) {
    return data.data.map((item, index) => {
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
  } else {
    return (
      <Card key="1">
        <CardHeader>
          <CardTitle className="text-4xl">{data.data.department}</CardTitle>
          <CardDescription>{data.data.name}</CardDescription>
          <CardAction>
            <FontAwesomeIcon icon={faBookmark} className="text-2xl" />
          </CardAction>
        </CardHeader>

        <CardContent className="p-2 grid grid-cols-2 gap-1">
          <img src={data.data.image} className="w-[40vw] float-end px-5" />
          <div className="flex flex-col  justify-center ">
            <p>Description: {data.data.description}</p> <br />
            <p>Start Date: {data.data.start_date}</p> <br />
            <p>End Date: {data.data.end_date}</p> <br />
            <Button className="w-[10vw]">Register Now</Button>
          </div>
        </CardContent>
        <CardFooter>
          <p>Contact us: {data.data.contact_number} </p>
        </CardFooter>
      </Card>
    );
  }
}
