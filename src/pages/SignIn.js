import React, { useEffect } from "react";
import Button from "../components/button/Button";
import FormError from "../components/error/FormError";
import { useFormik } from "formik";
import { signInValidation } from "../validation/FormikValidation";
import { useNavigate } from "react-router";
import { CheckServer } from "../api/ApiIndex";
import toast from "react-hot-toast";
import { useAuth } from "../context/AuthContext";
import Loader from "../components/common/Loader";

function SignIn() {
  const { userSignIn, loading } = useAuth();
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
    },
    validationSchema: signInValidation,
    onSubmit: () => {
      console.log(formik.values);
      userSignIn(formik.values);
    },
  });
  const navigate = useNavigate();
  return (
    <section className="grid lg:grid-cols-2 min-h-screen">
      <div className="p-5 py-12 max-w-[422px] w-full mx-auto">
        <h1 className="text-lg lg:text-3xl font-semibold leading-3">Sign in</h1>
        <p className="text-offBlack text-sm font-medium mt-3 leading-3">
          Create your account in a seconds
        </p>

        <form className="mt-8  space-y-4">
          <div className="space-y-1">
            <input
              type="text"
              placeholder="First Name:"
              name="firstName"
              id="firstName"
              onChange={formik.handleChange}
              className="border border-offBlack p-4 py-2.5 rounded-[10px] w-full placeholder:text-offBlack text-sm"
            />

            <FormError
              error={formik.errors.firstName && formik.touched.firstName}
              message={formik.errors.firstName}
            />
          </div>
          <div className="space-y-1">
            <input
              type="text"
              placeholder="Last Name:"
              name="lastName"
              id="lastName"
              onChange={formik.handleChange}
              className="border border-offBlack p-4 py-2.5 rounded-[10px] w-full placeholder:text-offBlack text-sm"
            />
            <FormError
              error={formik.errors.lastName && formik.touched.lastName}
              message={formik.errors.lastName}
            />
          </div>
          <div className="space-y-1">
            <input
              type="text"
              placeholder="Email Address:"
              name="email"
              id="email"
              onChange={formik.handleChange}
              className="border border-offBlack p-4 py-2.5 rounded-[10px] w-full placeholder:text-offBlack text-sm"
            />
            <FormError
              error={formik.errors.email && formik.touched.email}
              message={formik.errors.email}
            />
          </div>
          <div className="space-y-1">
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Create Password:"
              onChange={formik.handleChange}
              className="border border-offBlack p-4 py-2.5 rounded-[10px] w-full placeholder:text-offBlack text-sm"
            />
            <FormError
              error={formik.errors.password && formik.touched.password}
              message={formik.errors.password}
            />
          </div>
          <p className="text-offBlack text-xs font-medium cursor-default !mt-6 ">
            I agree to the terms and privacy policy
          </p>
          <Button
            title={loading ? <Loader /> : "Create an account"}
            onclick={formik.submitForm}
            disable={loading}
          />
        </form>
        <p className="text-offBlack cursor-default text-sm font-light mt-6">
          Already a member?{" "}
          <span
            className="font-semibold cursor-pointer text-accent"
            onClick={() => navigate("/log-in")}
          >
            Login
          </span>
        </p>
      </div>
      <div className="bg-gray-50 hidden lg:block">
        <div>
          <img
            src="https://images.unsplash.com/photo-1521206698660-5e077ff6f9c8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGxlYWZ8ZW58MHx8MHx8fDA%3D"
            className="object-cover aspect-square w-full h-screen"
          />
        </div>
      </div>
    </section>
  );
}

export default SignIn;
