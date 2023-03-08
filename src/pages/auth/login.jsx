import Button from "@/components/ui/buttons/Button";
import FormInput from "@/components/ui/inputs/FormInput";
import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
  signInAuthUserWithEmailAndPassword,
} from "@/utils/firebase";
import Link from "next/link";
import { useState } from "react";
import { IoAlertOutline, IoLogoGoogle } from "react-icons/io5";
import { useRouter } from "next/router";
import { useUserContext } from "@/contexts/userContext";

const initialFormFields = {
  email: "",
  password: "",
};

const LoginPage = () => {
  const [formFields, setFormFields] = useState(initialFormFields);
  const { email, password } = formFields;
  const [errors, setErrors] = useState({});

  const { setCurrentUser } = useUserContext();

  const router = useRouter();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const resetFormFields = () => {
    setFormFields(initialFormFields);
  };

  const signInWithGoogle = async () => {
    // log user in
    const { user } = await signInWithGooglePopup();

    setCurrentUser(user);
    // save user
    await createUserDocumentFromAuth(user);
    router.push("/");
  };

  const validate = () => {
    const errors = {};

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

    return errors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errors = validate();

    if (Object.keys(errors).length === 0) {
      console.log("Form submitted:", { email, password });
      // Here you would typically make an API call to register the user

      try {
        const { user } = await signInAuthUserWithEmailAndPassword(
          email,
          password
        );

        resetFormFields();
        setCurrentUser(user);

        router.push("/");
      } catch (error) {
        switch (error.code) {
          case "auth/wrong-password":
            alert("incorrect password for email");
            break;
          case "auth/user-not-found":
            alert("no user associated with this email");
            break;
          default:
            console.log(error);
        }
      }
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

          <div className="flex items-center gap-6 px-6 text-sm font-medium -mt-6">
            <p className="text-gray-500">Don&apos;t have account?</p>
            <Link href="/auth/register" className="text-blue-600">
              Register
            </Link>
          </div>

          <div className="flex items-center justify-center gap-4 my-4 px-6">
            <Button type="submit" buttonType="primary">
              Login
            </Button>
            <Button type="button" buttonType="white" onClick={signInWithGoogle}>
              <IoLogoGoogle size={24} />
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
