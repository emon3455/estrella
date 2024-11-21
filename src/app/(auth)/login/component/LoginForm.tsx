"use client";
import { useLoginMutation } from "@/Redux/Features/auth/Auth-api-slice";
import CButton from "@/utils/CButton/CButton";
import React, { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { errorAlert } from "@/utils/alert-function";
import cToastify from "@/shared/Toastify/Toadtify";
import CInput from "@/utils/CInput/CInput";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import Link from "next/link";

const LoginForm = () => {
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const [hide, setHide] = useState(true);

  const search = useSearchParams();
  const from = search.get("redirectUrl") || "/";

  //login mutation
  const [
    login,
    { isLoading, isSuccess, data: LoginData, isError, error: loginError },
  ] = useLoginMutation();

  //showing success message
  useEffect(() => {
    if (isSuccess) {
      cToastify({
        type: "success",
        message: "Login Successful",
      });

      const value = JSON.stringify(LoginData);
      document.cookie = `authToken=${value}; max-age=18000; path=/; secure;`;

      if (LoginData?.user?.role === "ADMIN") {
        window.location.href = "/admin";
      } else if (LoginData?.user?.role === "CUSTOMER") {
        window.location.href = "/customer";
      } else {
        window.location.href = from;
      }
    }
  }, [LoginData, from, isSuccess]);

  //showing error message
  useEffect(() => {
    if (isError) {
      cToastify({
        type: "warn",
        message: loginError?.data?.message,
      });
    }
  }, [isError, loginError]);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setError("");

    if (!data.email) {
      setError("Email Is Required");
      return;
    }
    if (data.email) {
      const regXEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!regXEmail.test(data.email)) {
        setError("Please Enter Valid Email");
        return;
      }
    }

    if (!data.password) {
      setError("Password Is Required");
      return;
    }
    if (data.password) {
      if (data.password.length < 6) {
        setError("Password must contain at least 6 characters");
        return;
      }
      const regXPass =
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+{}[\]:;<>,.?~\\/-]).{6,}$/;
      if (!regXPass.test(data.password)) {
        setError(
          "Password Must Contain: Capital Latter, Small Latter, Number and Special Character"
        );
        return;
      }
    }

    const user = {
      email: data.email,
      password: data.password,
    };

    try {
      await login(user)?.unwrap();
    } catch (err: any) {
      errorAlert({
        text: err?.data?.error || "Something Went wrong",
      });
    }
  };

  return (
    <div className="max-w-xl mx-auto">
      <p className="text-center text-red-600 font-semibold text-sm">{error}</p>
      <form onSubmit={handleSubmit} className="my-4 space-y-4 p-2">
        <div>
          <CInput
            onChange={(e) => {
              if (e.target.value) {
                setError("");
              }
              setData({ ...data, email: e.target.value });
            }}
            id="email"
            type="email"
            label="Email*"
            placeholder="Email"
          />
        </div>
        <div>
          <CInput
            onChange={(e) => {
              if (e.target.value) {
                setError("");
              }
              setData({
                ...data,
                password: e.target.value,
              });
            }}
            id="password"
            type={`${hide ? "password" : "text"}`}
            label="Password*"
            placeholder="Password*"
            endIcon={
              <span onClick={() => setHide(!hide)}>
                {" "}
                {!hide ? <FaEyeSlash /> : <FaEye />}{" "}
              </span>
            }
          />
        </div>
        <div>
          <CButton
            type="submit"
            variant="solid"
            className="w-full"
            loading={isLoading}
          >
            {" "}
            Log In
          </CButton>
        </div>
        <div className="flex space-x-4 justify-center">
          <p className="text-blue-500 cursor-pointer">Forget Password ?</p>
          <span>|</span>
          <p className="text-blue-500 cursor-pointer">
            <Link href={"/register"}>{"Don't"} Have An account? Register</Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
