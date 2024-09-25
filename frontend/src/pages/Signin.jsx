import React from 'react'
import FormCard from '../components/FormCard'
import Heading from '../components/Heading'
import SubHeading from '../components/SubHeading'
import Input from '../components/Input'
import Button from '../components/Button'
import AccountInstruction from '../components/AccountInstruction'

export default function Signin() {
    async function handleClick() {
        try {
          event.preventDefault();
          const res = await fetch("http://localhost:3000/api/v1/user/signin", {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify({
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
        <div>
            <FormCard>
                <Heading title="Sign In"/>
                <SubHeading label={"Enter your credentials to access your \n account"}/>

                <form action="">
                    <Input lable="Email" placeholder="johndoe@gmail.com"/>
                    <Input lable="Password"/>
                    <Button onClick={handleClick} label="Sign In"/>
                    <AccountInstruction label="Don't have an account? " nav="Sign up" route="/signup"/>
                </form>
            </FormCard>
        </div>
    )
}
