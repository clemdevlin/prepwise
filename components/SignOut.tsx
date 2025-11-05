"use client";

import React from "react";
import { Button } from "./ui/button";
import { signOut } from "@/lib/actions/auth.action";
import { toast } from "sonner";
import { LogOut } from "lucide-react";

export const SignOut = () => {
  const handleSignout = async () => {
    await signOut();
    toast.message("Logged out success");
    window.location.href = "/sign-in";
  };
  return (
    <Button
      onClick={handleSignout}
      variant={"destructive"}
      className="flex items-center justify-center cursor-pointer"
    >
      <LogOut /> Logout
    </Button>
  );
};
