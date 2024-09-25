import React, { useState } from "react";
import Heading from "../components/Heading";
import SubHeading from "../components/SubHeading";
import FormCard from "../components/FormCard";
import Input from "../components/Input";
import Button from "../components/Button";
import AccountInstruction from "../components/AccountInstruction";
import { useNavigate } from "react-router-dom";

export default function Signup() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  async function handleClick() {
    try {
      event.preventDefault();
      const res = await fetch("http://localhost:3000/api/v1/user/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          username,
          email,
          password
        })
      });
      const data = await res.json();
      if (data.msg) {
        localStorage.setItem("accessToken", data.token);
        navigate("/");
      }else{
        alert("Failed")
      }
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className="h-screen flex items-center justify-center bg-gray-500">
      <div className="h-auto w-auto rounded-md bg-white p-8">
        <Heading title="Sign Up" />
        <SubHeading
          label={"Enter your information to create your an \n account"}
        />

        <form action="">
          {/* <Input lable="First Name" placeholder="John"/>
                <Input lable="Last Name" placeholder="Doe"/> */}

          <Input
            onChange={e => setUsername(e.target.value)}
            lable="Username"
            placeholder="john"
          />
          <Input
            onChange={e => setEmail(e.target.value)}
            lable="Email"
            placeholder="johndoe@gmail.com"
          />
          <Input onChange={e => setPassword(e.target.value)} lable="Password" />

          <Button label="Sign Up" onClick={handleClick} />
          <AccountInstruction
            label="Already have an account? "
            nav="Sign in"
            route="/signin"
          />
        </form>
      </div>
    </div>

    // <FormCard>
    //   <Heading title="Sign Up" />
    //   <SubHeading label={"Enter your information to create your an account"} />
    //   <form action="">
    //     <Input lable="First Name" placeholder="John" />
    //     <Input lable="Last Name" placeholder="Doe" />
    //     <Input lable="Email" placeholder="johndoe@gmail.com" />
    //     <Input lable="Password" />

    //     <Button label="Sign Up" />
    //     <AccountInstruction label="Sign In" />
    //   </form>
    // </FormCard>
  );
}
