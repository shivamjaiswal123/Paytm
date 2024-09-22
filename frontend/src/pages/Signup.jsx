import React from "react";
import Heading from "../components/Heading";
import SubHeading from "../components/SubHeading";
import FormCard from "../components/FormCard";
import Input from "../components/Input";
import Button from "../components/Button";
import AccountInstruction from "../components/AccountInstruction";

export default function Signup() {
  return (
    <div className="h-screen flex items-center justify-center bg-gray-500">
        <div className="h-auto w-auto rounded-md bg-white p-8">
            
            <Heading title="Sign Up"/>
            <SubHeading label={"Enter your information to create your an \n account"}/>

            <form action="">
                <Input lable="First Name" placeholder="John"/>
                <Input lable="Last Name" placeholder="Doe"/>
                <Input lable="Email" placeholder="johndoe@gmail.com"/>
                <Input lable="Password"/>

                <Button label="Sign Up"/>
                <AccountInstruction label="Already have an account? " nav="Sign in" route="/signin"/>
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
