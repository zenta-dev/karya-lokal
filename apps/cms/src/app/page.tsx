"use client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { toastConfig } from "@/lib/utils";
import { Label } from "@radix-ui/react-label";
import { signIn, useSession } from "next-auth/react";
import { useTheme } from "next-themes";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
export default function Home() {
  const { data: session } = useSession();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const { theme } = useTheme();
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const config = toastConfig(theme);
    setLoading(true);
    try {
      if (!email || !password) throw new Error("Please fill all the fields");
      const res = await signIn("credentials", {
        redirect: false,
        email: email,
        password: password,
      });

      if (res?.error) {
        throw new Error(res.error);
      } else {
        toast.success("Logged in successfully", config);
        router.push("/dashboard");
      }
    } catch (error: any) {
      toast.error(error.toString(), config);
    }
    setLoading(false);
  };

  useEffect(() => {
    if (session) {
      router.push("/dashboard");
    }
  }, [session, router]);
  const CONTAINER_CLASSNAME =
    " bg-gray-900 text-white p-4 rounded-md shadow-md";
  return (
    <main>
      <div>
        {session?.user?.name ? (
          <div className={CONTAINER_CLASSNAME}>
            <p className="text-lg font-semibold">
              Welcome, {session.user.name}
            </p>
            <p className="text-sm font-light">{session.user.email}</p>
          </div>
        ) : (
          <div>
            <form
              onSubmit={handleSubmit}
              className="grid items-center justify-center h-screen"
            >
              <Card>
                <CardHeader className="space-y-1">
                  <CardTitle className="text-2xl">Login</CardTitle>
                  <CardDescription>
                    Only authorized users can access this page.
                  </CardDescription>
                </CardHeader>
                <CardContent className="grid gap-4">
                  <div className="relative">
                    <div className="absolute inset-0 flex items-center">
                      <span className="w-full border-t" />
                    </div>
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      onChange={(e) => setEmail(e.target.value)}
                      id="email"
                      type="email"
                      placeholder="john@gmail.com"
                    />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="password">Password</Label>
                    <Input
                      onChange={(e) => setPassword(e.target.value)}
                      id="password"
                      type="password"
                    />
                  </div>
                  <div className="flex justify-end">
                    <Button
                      variant="ghost"
                      onClick={() => router.push("/register")}
                    >
                      Register
                    </Button>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button type="submit" className="w-full" disabled={loading}>
                    Login
                  </Button>
                </CardFooter>
              </Card>
            </form>
            <Toaster position="top-right" />
          </div>
        )}
      </div>
    </main>
  );
}
