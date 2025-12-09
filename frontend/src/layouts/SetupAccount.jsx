import React from "react";
import { useState, createContext } from "react";
import { GalleryVerticalEnd } from "lucide-react";
import { LoginForm } from "@/components/login-form";
import { SignupForm } from "@/components/signup-form";
import useCarousel from "../hooks/useCarousel";

export const AccountContext = createContext();
const images = [
  {
    url: "https://images.pexels.com/photos/210922/pexels-photo-210922.jpeg?_gl=1*tinpur*_ga*MTAwOTIwNzk0MS4xNzY1MDkzMzM5*_ga_8JE65Q40S6*czE3NjUyNzM2NjkkbzUkZzEkdDE3NjUyNzUyMTAkajI5JGwwJGgw",
    caption: "Live Music Concert in the City Center",
  },
  {
    url: "https://images.pexels.com/photos/14043164/pexels-photo-14043164.jpeg?_gl=1*13nxj36*_ga*MTAwOTIwNzk0MS4xNzY1MDkzMzM5*_ga_8JE65Q40S6*czE3NjUyNzM2NjkkbzUkZzEkdDE3NjUyNzUyNzAkajM4JGwwJGgw",
    caption: "Modern Art Exhibition Downtown",
  },
  {
    url: "https://images.pexels.com/photos/30477314/pexels-photo-30477314.jpeg?_gl=1*13qr0p*_ga*MTAwOTIwNzk0MS4xNzY1MDkzMzM5*_ga_8JE65Q40S6*czE3NjUyNzM2NjkkbzUkZzEkdDE3NjUyNzUzNDIkajI2JGwwJGgw",
    caption: "Annual Food & Drinks Festival",
  },
  {
    url: "https://images.pexels.com/photos/8348626/pexels-photo-8348626.jpeg?_gl=1*13mv4ep*_ga*MTAwOTIwNzk0MS4xNzY1MDkzMzM5*_ga_8JE65Q40S6*czE3NjUyNzM2NjkkbzUkZzEkdDE3NjUyNzUzODIkajQ3JGwwJGgw",
    caption: "Tech Conference 2026: Innovations Unveiled",
  },
  {
    url: "https://images.pexels.com/photos/26781604/pexels-photo-26781604.jpeg?_gl=1*w38ys1*_ga*MTAwOTIwNzk0MS4xNzY1MDkzMzM5*_ga_8JE65Q40S6*czE3NjUyNzM2NjkkbzUkZzEkdDE3NjUyNzU0NDIkajUwJGwwJGgw",
    caption: "Weekend Outdoor Fair & Market",
  },
];

export default function SetupAccount() {
  const [registering, setRegistering] = useState(false);
  const item = useCarousel(images);

  return (
    <div className="grid min-h-svh lg:grid-cols-2">
      <div className="flex flex-col gap-4 p-6 md:p-10 bg-muted">
        <div className="flex justify-center  gap-2 md:justify-start ">
          <a href="#" className="flex items-center gap-2 font-medium">
            <img src="/todays-logo.png" alt="todays-logo" className="w-[6vw]" />
          </a>
        </div>
        <div className="flex flex-1 items-center justify-center ">
          <div className="w-[30vw]  ">
            <AccountContext.Provider value={setRegistering}>
              {!registering ? <LoginForm /> : <SignupForm />}
            </AccountContext.Provider>
          </div>
        </div>
      </div>
      <div className="bg-muted relative hidden lg:block">
        <img
          src={item.url}
          alt={item.caption}
          className="absolute inset-0 h-full w-full object-cover dark:brightness-[0.2] dark:grayscale "
        />
        <div className="flex items-center absolute bottom-0 left-0 right-0 h-[20vh] p-5">
          <h1 className="text-4xl text-white">{`${item.caption}`}</h1>
        </div>
      </div>
    </div>
  );
}
