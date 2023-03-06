import FormInput from "@/components/ui/inputs/FormInput";
import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
} from "@/utils/firebase";
import { useState } from "react";
import {
  IoAlertCircleOutline,
  IoAlertOutline,
  IoLogoGoogle,
  IoWarningOutline,
} from "react-icons/io5";

const initialFormFields = {
  username: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const LoginPage = () => {
  const [formFields, setFormFields] = useState(initialFormFields);
  const { username, email, password, confirmPassword } = formFields;
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const logGoogleUser = async () => {
    // log user in
    const { user } = await signInWithGooglePopup();
    // save user
    createUserDocumentFromAuth(user);
  };

  const validate = () => {
    const errors = {};

    if (!username) {
      errors.username = "Username is required";
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

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validate();

    if (Object.keys(errors).length === 0) {
      console.log("Form submitted:", { username, email, password });
      // Here you would typically make an API call to register the user
    } else {
      setErrors(errors);
    }
  };

  return (
    <div className="py-24 flex flex-col items-center justify-center gap-4">
      <div className="w-[500px] shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)] p-4 rounded-md">
        <h2 className="text-2xl font-bold p-6">Login</h2>

        <form onSubmit={handleSubmit}>
          <div className="flex flex-col gap-4 mb-4 p-6">
            <div className="flex flex-col">
              <FormInput
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
          </div>

          <div className="flex items-center justify-center gap-4 my-4 px-6">
            <button
              type="submit"
              className="bg-indigo-900 text-white px-4 py-2 rounded-md"
            >
              Login
            </button>
            <button
              type="button"
              className="px-4 py-2 rounded-md border border-blue-400 hover:border-blue-700"
              onClick={logGoogleUser}
            >
              <IoLogoGoogle size={24} />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
