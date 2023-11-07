"use client"
import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";

export default function error  () {
return(
        <div className="flex h-full flex-col gap-3 justify-center items-center">
        <h1 className="font-cal text-6xl text-center ">ERROR</h1>
        <Link href="/" className={buttonVariants({variant:"default"})}>Home</Link>        
        </div>
)
}