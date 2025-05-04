"use client";

import {
  CredentialValidation,
  CredentialValidationType,
} from "@/app/validation/schema/credentials";
import { Field, Formik } from "formik";
import { signIn } from "next-auth/react";

export default function LoginPage() {
  return (
    <Formik<CredentialValidationType>
      initialValues={{
        username: "",
        password: "",
      }}
      validationSchema={CredentialValidation}
      onSubmit={(payload: CredentialValidationType) =>
        signIn("credentials", payload)
      }
    >
      {({ handleSubmit }) => (
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col gap-4">
            <label htmlFor="firstname">Username</label>
            <Field name="username" className="pb-2 border-b-2" />
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
  );
}
