import React from "react";
import { useState, createContext } from "react";
import { GalleryVerticalEnd } from "lucide-react";
import { LoginForm } from "@/components/login-form";
import { SignupForm } from "@/components/signup-form";

export const AccountContext = createContext();

export default function SetupAccount() {
  const [registering, setRegistering] = useState(false);
  return (
    <div className="grid min-h-svh lg:grid-cols-2">
      <div className="flex flex-col gap-4 p-6 md:p-10 bg-muted">
        <div className="flex justify-center  gap-2 md:justify-start ">
          <a href="#" className="flex items-center gap-2 font-medium">
           <img src="/uc-logo.png" alt="uc-logo" className="w-[5vw]" />
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
          src="https://images.pexels.com/photos/17131943/pexels-photo-17131943.jpeg?_gl=1*1tm69zo*_ga*MTAwOTIwNzk0MS4xNzY1MDkzMzM5*_ga_8JE65Q40S6*czE3NjUyNjI1MzgkbzMkZzEkdDE3NjUyNjI3MDkkajE4JGwwJGgw"
          alt="Image"
          className="absolute inset-0 h-full w-full object-cover dark:brightness-[0.2] dark:grayscale "
        />
      </div>
    </div>
  );
}
