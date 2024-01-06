import Login from "@/components/UsreRegistration/Login";
import Signup from "@/components/UsreRegistration/Signup";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { LogIn } from "lucide-react";

const Registration = () => {
    return (
        <div className="w-fit my-12 h-fit  mx-auto shadow-xl rounded-lg">
            <Tabs defaultValue="account" className="w-[400px] flex flex-col justify-center duration-300">
                <TabsList>
                    <TabsTrigger value="account">Login</TabsTrigger>
                    <TabsTrigger value="password">Sign Up</TabsTrigger>
                </TabsList>
                <TabsContent value="account">
                    <Login />
                </TabsContent>
                <TabsContent value="password">
                    <Signup />
                </TabsContent>
            </Tabs>
        </div>
    );
};

export default Registration;
