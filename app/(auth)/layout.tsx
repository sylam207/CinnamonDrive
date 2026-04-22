import { Layers } from "lucide-react";
import { Metadata } from "next";
import Image from "next/image";

import { HERO_IMAGE } from "@/lib/constants";

export const metadata: Metadata = {
    title: "Login",
    description: "Login to your CinnamonDrive",
};


const Layout = ({children}: {children: React.ReactNode}) => {
    return (
        <div className="h-screen flex">
            <section className="bg-froly flex-1">
                <div className="flex items-start justify-center flex-col gap-4 max-w-125 m-auto h-full">
                    <div className="flex items-center justify-center gap-3">
                        <Layers className="w-10 h-10 text-white"/>
                        <span className="text-2xl font-bold">CinnamonDrive</span>
                    </div>
                    <div className="flex items-start gap-4 flex-col mt-8">
                        <span className="font-bold text-[32px] text-white">A Better Way to Store, Organize, and Access Your Files</span>
                        <span className="text-lg text-white">With it you can easily manage your files and folders, and access them from anywhere.</span>
                        <Image src={HERO_IMAGE} width={450} height={450} alt="hero-image" className="mt-15"/>
                    </div>
                </div>
            </section>
        
            <section className="flex-1 bg-white">{children}</section>
        </div>
    );
};

export default Layout;