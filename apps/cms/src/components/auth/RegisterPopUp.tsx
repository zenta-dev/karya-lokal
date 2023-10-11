"use client";
import { useTheme } from "next-themes";
import { useState } from "react";
import { Button } from "../ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { Input } from "../ui/input";
import { Label } from "../ui/label";

import toast, { Toaster } from "react-hot-toast";
const RegisterPopUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(false);
  const { theme } = useTheme();
  const register = async (e: React.FormEvent) => {
    e.preventDefault();
    let config = {};
    if (theme === "dark") {
      config = {
        style: {
          border: "1px solid #473a35",
          borderRadius: "10px",
          background: "#1b1614",
          color: "#fff",
        },
      };
    } else {
      config = {
        style: {
          border: "1px solid #333",
          borderRadius: "10px",
          background: "#fff",
          color: "#333",
        },
      };
    }
    setLoading(true);
    try {
      if (!email || !password || !name)
        throw new Error("Please fill all the fields");
      const res = await fetch("/api/register", {
        method: "POST",
        body: JSON.stringify({
          email,
          password,
          name,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (res.ok) {
        toast.success("Registered successfully", config);
      } else {
        const data = await res.json();
        toast.error(data.error, config);
      }
    } catch (error: any) {
      toast.error(error.toString(), config);
    }

    setLoading(false);
  };

  return (
    <Dialog>
      <Toaster position="top-right" />
      <DialogTrigger asChild>
        <Button variant="outline">Register</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Register</DialogTitle>
          <DialogDescription>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </DialogDescription>
        </DialogHeader>

        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Name
            </Label>
            <Input
              id="name"
              className="col-span-3"
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="email" className="text-right">
              Email
            </Label>
            <Input
              id="email"
              className="col-span-3"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="password" className="text-right">
              Password
            </Label>
            <Input
              id="password"
              className="col-span-3"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
        </div>
        <DialogFooter>
          <Button type="submit" onClick={register}>
            Save changes
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
export default RegisterPopUp;
