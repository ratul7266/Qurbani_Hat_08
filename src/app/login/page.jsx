"use client";

import { signIn } from "@/lib/auth-client";
import { Check, Eye, EyeSlash } from "@gravity-ui/icons";
import {
  Button,
  FieldError,
  Form,
  Input,
  InputGroup,
  Label,
  TextField,
} from "@heroui/react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useMemo, useState } from "react";

const LoginPage = () => {
  const searchParams = useSearchParams();
  const router = useRouter();

  const callbackURL = useMemo(
    () => searchParams.get("callbackURL") || "/",
    [searchParams]
  );

  const [isVisible, setIsVisible] = useState(false);
  const [loading, setLoading] = useState(false);

  const onSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      const formData = new FormData(e.currentTarget);
      const userData = Object.fromEntries(formData.entries());

      const { data, error } = await signIn.email({
        email: userData.email,
        password: userData.password,
        callbackURL,
      });

      if (error) {
        console.error("Login error:", error);
        return;
      }

      if (data) {
        router.push(callbackURL);
        router.refresh();
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-gray-50 to-green-50 px-4">
      
      <div className="w-full max-w-xl bg-white shadow-2xl rounded-3xl p-8 border border-gray-100">

        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="text-4xl font-extrabold text-green-700">
            Welcome Back
          </h2>
          <p className="text-gray-500 text-sm mt-2">
            Sign in to continue your dashboard
          </p>
        </div>

        {/* Form */}
        <Form
          className="flex flex-col gap-6"
          render={(props) => <form {...props} />}
          onSubmit={onSubmit}
        >

          {/* Email */}
          <TextField
            isRequired
            name="email"
            type="email"
            validate={(value) => {
              if (
                !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)
              ) {
                return "Enter a valid email";
              }
              return null;
            }}
          >
            <Label className="font-medium text-gray-700">Email</Label>
            <Input
              name="email"
              placeholder="you@example.com"
              className="rounded-xl"
            />
            <FieldError />
          </TextField>

          {/* Password */}
          <TextField isRequired name="password">
            <Label className="font-medium text-gray-700">Password</Label>

            <InputGroup>
              <InputGroup.Input
                name="password"
                type={isVisible ? "text" : "password"}
                placeholder="Enter password"
                className="rounded-xl"
              />

              <InputGroup.Suffix>
                <Button
                  isIconOnly
                  variant="ghost"
                  onPress={() => setIsVisible(!isVisible)}
                  className="mr-2"
                >
                  {isVisible ? (
                    <Eye className="w-4 h-4" />
                  ) : (
                    <EyeSlash className="w-4 h-4" />
                  )}
                </Button>
              </InputGroup.Suffix>
            </InputGroup>

            <FieldError />
          </TextField>

          {/* Submit */}
          <Button
            type="submit"
            disabled={loading}
            className="w-full bg-green-700 hover:bg-green-800 text-white font-semibold rounded-xl py-6 transition-all duration-200 active:scale-[0.98]"
          >
            <Check className="w-4 h-4" />
            {loading ? "Signing in..." : "Sign In"}
          </Button>
        </Form>

        {/* Footer */}
        <div className="text-center mt-6 text-sm text-gray-500">
          Don’t have an account?{" "}
          <span className="text-green-700 font-medium cursor-pointer hover:underline">
             <Link href="/register">Create one</Link>
          </span>
        </div>

      </div>
    </div>
  );
};

export default LoginPage;