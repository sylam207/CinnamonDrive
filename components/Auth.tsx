'use client'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useState } from "react";
import CustomInput from "./CustomInput";
import { Mail, UserRoundPen } from "lucide-react";
import ContinueButton from "./ContinueButton";

const Auth = () => {

    const [formData, setFormData] = useState({
        fullName: "",
        registerEmail: "",
    })
    const [email, setEmail] = useState("");
    const [tabValue, setTabValue] = useState("signIn");
    const [loading, setLoading] = useState(false);


    const handleTabValueChange = (value: string) => {
        setTabValue(value);
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({...prev, [name]: value}));
    };

    const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    };

    const handleContinueClick = () => {

    }

    return (
        <div className="flex flex-col items-center justify-center h-full">
            <div className="flex flex-col items-center justify-center">
                <span className="font-bold text-3xl">Welcome Back</span>
                <span className="text-gray-500 mt-1">Welcome Back, please enter your details</span>
                <Tabs value={tabValue} className="mt-6" onValueChange={handleTabValueChange}>
                    <TabsList className="w-100 min-h-12.5">
                        <TabsTrigger value="signIn" className="font-medium cursor-pointer">Sign In</TabsTrigger>
                        <TabsTrigger value="signUp" className="font-medium cursor-pointer">Sign Up</TabsTrigger>
                    </TabsList>
                    <TabsContent value="signUp">
                        <div className="flex flex-col gap-4 mt-6">
                            <CustomInput Icon={UserRoundPen} labelTitle={"Full Name"} labelHtmlFor="fullName" value={formData.fullName} onChange={handleChange}  inputName="fullName"/>
                            <CustomInput Icon={Mail} labelTitle={"Email"} labelHtmlFor="email" value={formData.registerEmail} onChange={handleChange}  inputName="registerEmail"/>
                        </div>
                        </TabsContent>
                    <TabsContent value="signIn">
                        <div className="flex flex-col gap-4 mt-6">
                            <CustomInput Icon={Mail} labelTitle={"Email"} labelHtmlFor="email" value={email} onChange={handleEmailChange}  inputName="email"/>
                        </div>
                    </TabsContent>
                </Tabs>
                <ContinueButton loading={loading} onClick={handleContinueClick} label="Continue"/>
            </div>
        </div>
    );
};
export default Auth;