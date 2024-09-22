import React from 'react'
import FormCard from '../components/FormCard'
import Heading from '../components/Heading'
import SubHeading from '../components/SubHeading'
import Input from '../components/Input'
import Button from '../components/Button'
import AccountInstruction from '../components/AccountInstruction'

export default function Signin() {
    return (
        <div>
            <FormCard>
                <Heading title="Sign In"/>
                <SubHeading label={"Enter your credentials to access your \n account"}/>

                <form action="">
                    <Input lable="Email" placeholder="johndoe@gmail.com"/>
                    <Input lable="Password"/>
                    <Button label="Sign In"/>
                    <AccountInstruction label="Don't have an account? " nav="Sign up" route="/signup"/>
                </form>
            </FormCard>
        </div>
    )
}
