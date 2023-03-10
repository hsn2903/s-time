import FormInput from "@/components/ui/inputs/FormInput";
import { useUserContext } from "@/contexts/userContext";
import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
} from "@/utils/firebase";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { IoAlertOutline } from "react-icons/io5";

const initialFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const RegisterPage = () => {
  const [formFields, setFormFields] = useState(initialFormFields);
  const { displayName, email, password, confirmPassword } = formFields;
  const [errors, setErrors] = useState({});

  const router = useRouter();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const resetFormFields = () => {
    setFormFields(initialFormFields);
  };

  const validate = () => {
    const errors = {};

    if (!displayName) {
      errors.displayName = "displayName is required";
    }

    if (!email) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errors.email = "Email is invalid";
    }

    if (!password) {
      errors.password = "Password is required";
    } else if (password.length < 6) {
      errors.password = "Password must be at least 6 characters";
    }

    if (!confirmPassword) {
      errors.confirmPassword = "Confirm Password is required";
    } else if (password !== confirmPassword) {
      errors.confirmPassword = "Passwords do not match";
    }

    return errors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errors = validate();

    if (Object.keys(errors).length === 0) {
      console.log("Form submitted:", { displayName, email, password });
      // Here you would typically make an API call to register the user

      try {
        const { user } = await createAuthUserWithEmailAndPassword(
          email,
          password
        );

        await createUserDocumentFromAuth(user, { displayName });
        resetFormFields();

        router.push("/dashboard");
      } catch (error) {
        if (error.code === "auth/email-already-in-use") {
          alert("Cannot create user. Email already exist");
        }

        console.log("user creation encountered an error", error);
      }
    } else {
      setErrors(errors);
    }
  };

  return (
    <div className="py-24 flex flex-col items-center justify-center gap-4">
      <div className="w-[500px] shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)] p-4 rounded-md">
        <h2 className="text-2xl font-bold p-6">Register</h2>

        <form onSubmit={handleSubmit}>
          <div className="flex flex-col gap-4 mb-4 p-6">
            <div className="flex flex-col">
              <FormInput
                type="text"
                labelText="User Name"
                name="displayName"
                value={displayName}
                handleChange={handleChange}
              />
              {errors.displayName && (
                <span className="text-red-500 font-medium flex items-center">
                  <IoAlertOutline size={20} /> {errors.displayName}
                </span>
              )}
            </div>

            <div className="flex flex-col">
              <FormInput
                type="email"
                labelText="Email"
                name="email"
                value={email}
                handleChange={handleChange}
              />
              {errors.email && (
                <span className="text-red-500 font-medium flex items-center">
                  <IoAlertOutline size={20} /> {errors.email}
                </span>
              )}
            </div>

            <div className="flex flex-col">
              <FormInput
                type="password"
                labelText="Password"
                name="password"
                value={password}
                handleChange={handleChange}
              />
              {errors.password && (
                <span className="text-red-500 font-medium flex items-center">
                  <IoAlertOutline size={20} /> {errors.password}
                </span>
              )}
            </div>

            <div className="flex flex-col">
              <FormInput
                type="password"
                labelText="Confirm Password"
                name="confirmPassword"
                value={confirmPassword}
                handleChange={handleChange}
              />
              {errors.confirmPassword && (
                <span className="text-red-500 font-medium flex items-center">
                  <IoAlertOutline size={20} /> {errors.confirmPassword}
                </span>
              )}
            </div>
          </div>

          <div className="flex items-center gap-6 px-6 text-sm font-medium -mt-6">
            <p className="text-gray-500">Already have account?</p>
            <Link href="/auth/login" className="text-blue-600">
              Login
            </Link>
          </div>

          <div className="flex items-center justify-center gap-4 my-4 px-6">
            <button
              type="submit"
              className="bg-indigo-900 text-white px-4 py-2 rounded-md"
            >
              Register
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegisterPage;
