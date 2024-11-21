"use client";
import { useRegisterMutation } from "@/Redux/Features/auth/Auth-api-slice";
import cToastify from "@/shared/Toastify/Toadtify";
import { errorAlert } from "@/utils/alert-function";
import CButton from "@/utils/CButton/CButton";
import CInput from "@/utils/CInput/CInput";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const RegistrationForm = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = useState("");
  const [hide, setHide] = useState(true);
  const [hide1, setHide1] = useState(true);

  //register mutation
  const [
    register,
    { isLoading, isSuccess, data: registerData, isError, error: registerError },
  ] = useRegisterMutation();

  //showing success message
  useEffect(() => {
    if (isSuccess) {
      cToastify({
        type: "success",
        message: "Registration Successful",
      });
      window.location.href = "/login";
    }
  }, [isSuccess]);

  //showing error message
  useEffect(() => {
    if (isError) {
      cToastify({
        type: "warn",
        message: registerError?.data?.message,
      });
    }
  }, [isError, registerError]);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setError("");

    if (!data.name) {
      setError("Name is required");
      return;
    }

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

    if (!data.phone) {
      setError("Phone Number Is Required");
      return;
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

    if (data.password !== data.confirmPassword) {
      setError("Password and Confirm Password Must be Same");
      return;
    }

    const user = {
      name: data.name,
      email: data.email,
      phone: data.phone,
      password: data.password,
    };

    // registration
    try {
      await register(user)?.unwrap();
    } catch (err: any) {
      errorAlert({
        text: err?.data?.error || "Something Went wrong",
      });
    }
  };

  return (
    <div className="max-w-xl mx-auto">
      <p className="text-center text-red-600 font-semibold text-sm">{error}</p>
      <form onSubmit={handleSubmit} className="my-2 space-y-2 p-2">
        <div>
          <CInput
            onChange={(e) => {
              if (e.target.value) {
                setError("");
              }
              setData({ ...data, name: e.target.value });
            }}
            id="name"
            type="name"
            label="Name*"
            placeholder="Name"
          />
        </div>
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
              setData({ ...data, phone: e.target.value });
            }}
            id="Phone"
            type="Phone"
            label="Phone*"
            placeholder="Phone"
          />
        </div>
        <div className="">
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
        <div className="">
          <CInput
            onChange={(e) => {
              if (e.target.value) {
                setError("");
              }
              setData({
                ...data,
                confirmPassword: e.target.value,
              });
            }}
            id="confirmPassword"
            type={`${hide1 ? "password" : "text"}`}
            label="Confirm Password*"
            placeholder="Confirm Password*"
            endIcon={
              <span onClick={() => setHide1(!hide1)}>
                {" "}
                {!hide1 ? <FaEyeSlash /> : <FaEye />}{" "}
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
            Register
          </CButton>
        </div>
        <p className="text-blue-500 cursor-pointer my-4 text-center">
          <Link href={"/login"}>Already Have An account ? Login</Link>
        </p>
      </form>
    </div>
  );
};

export default RegistrationForm;
