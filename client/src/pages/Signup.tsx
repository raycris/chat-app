import { FormEvent, useRef } from "react";
import Button from "../components/Button";
import { Input } from "../components/Input";

import { useAuth } from "../context/AuthContext";

const Signup = () => {
  const { signup } = useAuth();
  const usernameRef = useRef<HTMLInputElement>(null);
  const nameRef = useRef<HTMLInputElement>(null);
  const imageURLRef = useRef<HTMLInputElement>(null);

  function handlerSubmit(e: FormEvent) {
    e.preventDefault();
    if (signup.isLoading) return;

    const username = usernameRef.current?.value;
    const name = nameRef.current?.value;
    const imageUrl = imageURLRef.current?.value;
    if (username == null || username === "" || name == null || name === "") {
      return;
    }
    signup.mutate({ id: username, name, image: imageUrl });
  }

  return (
    <>
      <h1 className="text-3xl font-bold mb-8 text-center">Sign Up</h1>
      <form
        onSubmit={handlerSubmit}
        className="grid grid-cols-[auto,1fr] gap-x-3 gap-y-5 items-center justify-items-end"
      >
        <label htmlFor="userName">Username</label>
        <Input id="userName" pattern="\S*" required ref={nameRef} />

        <label htmlFor="name">Name</label>
        <Input id="name" required ref={usernameRef} />

        <label htmlFor="imageURL">Image URL</label>
        <Input id="imageURL" type="url" ref={imageURLRef} />
        <Button
          disabled={signup.isLoading}
          type="submit"
          className="col-span-full"
        >
          {signup.isLoading ? "Loading..." : "Sign Up"}
        </Button>
      </form>
    </>
  );
};

export default Signup;
