"use client";

import { signUp } from "@/lib/auth-client";
import {
  Check,
  ArrowPath,
  ArrowRightFromSquare,
  ArrowsRotateRight,
} from "@gravity-ui/icons";
import {
  Button,
  Description,
  FieldError,
  Form,
  Input,
  Label,
  TextField,
} from "@heroui/react";
import Link from "next/link";

const RegisterPage = () => {
  const onSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const userData = Object.fromEntries(formData.entries());

    const { data, error } = await signUp.email({
      name: userData?.name,
      email: userData?.email,
      password: userData?.password,
      callbackURL: "/",
    });

    console.log("User data:", { data, error });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-green-50 via-white to-green-100 px-4">
      <div className="w-full max-w-md rounded-3xl border border-green-100 bg-white/80 backdrop-blur-md shadow-2xl p-8">
        {/* Heading */}
        <div className="text-center mb-8">
          <h2 className="text-4xl font-black text-green-700">Create Account</h2>

          <p className="text-gray-500 mt-2 text-sm">
            Join and explore premium qurbani animals 🐄
          </p>
        </div>

        {/* Form */}
        <Form
          className="flex flex-col gap-5"
          render={(props) => <form {...props} />}
          onSubmit={onSubmit}
        >
          {/* Name */}
          <TextField
            isRequired
            name="name"
            validate={(value) => {
              if (value.length < 3) {
                return "Name must be at least 3 characters";
              }
              return null;
            }}
          >
            <Label className="mb-1 font-semibold text-gray-700">
              Full Name
            </Label>

            <Input
              name="name"
              placeholder="Enter your full name"
              className="rounded-2xl"
            />

            <FieldError />
          </TextField>

          {/* Email */}
          <TextField
            isRequired
            name="email"
            type="email"
            validate={(value) => {
              if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
                return "Please enter a valid email address";
              }
              return null;
            }}
          >
            <Label className="mb-1 font-semibold text-gray-700">
              Email Address
            </Label>

            <Input
              name="email"
              placeholder="Enter your email"
              className="rounded-2xl"
            />

            <FieldError />
          </TextField>

          {/* Password */}
          <TextField
            isRequired
            minLength={8}
            name="password"
            type="password"
            validate={(value) => {
              if (value.length < 8) {
                return "Password must be at least 8 characters";
              }

              if (!/[A-Z]/.test(value)) {
                return "Password must contain at least one uppercase letter";
              }

              if (!/[0-9]/.test(value)) {
                return "Password must contain at least one number";
              }

              return null;
            }}
          >
            <Label className="mb-1 font-semibold text-gray-700">Password</Label>

            <Input
              name="password"
              type="password"
              placeholder="Enter your password"
              className="rounded-2xl"
            />

            <Description className="text-xs text-gray-500">
              Minimum 8 characters, 1 uppercase & 1 number
            </Description>

            <FieldError />
          </TextField>

          {/* Buttons */}
          <div className="flex gap-3 pt-2">
            <Button
              type="submit"
              className="w-full bg-green-700 hover:bg-green-800 text-white font-bold rounded-2xl py-6 shadow-lg transition-all duration-300 hover:scale-[1.02]"
            >
              <Check />
              Create Account
            </Button>

            <Button
              type="reset"
              variant="secondary"
              className="rounded-2xl px-5"
            >
              <ArrowsRotateRight className="text-green-800" />
            </Button>
          </div>
        </Form>

        {/* Footer */}
        <p className="text-center text-sm text-gray-500 mt-6">
          Already have an account?{" "}
          <span className="text-green-700 font-semibold cursor-pointer hover:underline">
            <Link href="/login">Login</Link>
          </span>
        </p>
      </div>
    </div>
  );
};

export default RegisterPage;
