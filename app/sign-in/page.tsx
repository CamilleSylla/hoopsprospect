"use client";

import { Field, Formik } from "formik";
import { createUser } from "../services/user/client";
import {
  UserCreateValidation,
  UserCreateValidationType,
} from "../validation/schema/user";

export default function SignInPage() {
  const onSubmit = async (payload: UserCreateValidationType) => {
    try {
      await createUser(payload);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <Formik<UserCreateValidationType>
        initialValues={{
          firstname: "",
          lastname: "",
          email: "",
          password: "",
          date_of_birth: new Date(),
        }}
        validationSchema={UserCreateValidation}
        onSubmit={onSubmit}
      >
        {({ handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col gap-4">
              <label htmlFor="firstname">First Name</label>
              <Field name="firstname" className="pb-2 border-b-2" />
            </div>
            <div className="flex flex-col gap-4">
              <label htmlFor="lastname">Last Name</label>
              <Field name="lastname" className="pb-2 border-b-2" />
            </div>
            <div className="flex flex-col gap-4">
              <label htmlFor="date_of_birth">Date of Birth</label>
              <Field
                type="date"
                name="date_of_birth"
                className="pb-2 border-b-2"
              />
            </div>
            <div className="flex flex-col gap-4">
              <label htmlFor="email">Email</label>
              <Field name="email" className="pb-2 border-b-2" />
            </div>
            <div className="flex flex-col gap-4">
              <label htmlFor="password">Password</label>
              <Field
                type="password"
                name="password"
                className="pb-2 border-b-2"
              />
            </div>
            <button type="submit">Submit</button>
          </form>
        )}
      </Formik>
    </div>
  );
}
