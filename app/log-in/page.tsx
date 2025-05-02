import { Field, Formik } from "formik";
import {
  UserCreateValidation,
  UserCreateValidationType,
} from "../validation/schema/user";
import { createUser } from "../services/user/client";

export default function LoginPage() {
  const onSubmit = async (payload: UserCreateValidationType) => {
    try {
      await createUser(payload);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <form>
        <input name="email" type="text" placeholder="johndoe@email.com" />
        <input name="password" type="password" placeholder="Your password" />
      </form>
    </div>
  );
}
