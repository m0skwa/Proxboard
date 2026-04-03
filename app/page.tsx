"use client"
import * as React from "react"

import Navbar from "@/components/app-navbar"
import { ScrollArea } from "@/components/ui/scroll-area"
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Button, buttonVariants } from "@/components/ui/button"
import { Dot, GlobeOff, ExternalLink, RotateCw } from "lucide-react";
import Image from "next/image";

const services = [
  {
    img: "./pi-hole.svg",
    title: "Pihole",
    description: "Network",
    isActive: true,
    cpu: 12,
    ram: 4,
    upTime: 86400, // In Seconds
    href: "https://pihole.m0skwa.xyz/"
  }
]

const totalServices = services.length;
const totalServicesOnline = services.filter(service => service.isActive).length;

export default function Page() {
  return (
    <div className="h-screen w-screen">
      <Navbar />
      <div className="h-9/10 w-8/10 py-20 mx-auto">
        <div className="mb-5">
          <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight text-balance">
            All services ({totalServices})
          </h1>
          <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">
            {totalServicesOnline} services online
          </h4>
        </div>

        <ScrollArea className="gap-4 w-full h-9/10">
          <div className="grid grid-cols-4 gap-y-8">
            {services.map(service =>
              <Card className="w-80 h-70 bg-gray-100 rounded-md bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-10 border" key={service.title}>
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <Image src={service.img} alt="Pihole Logo" height="45" width="45"></Image>
                    <div>
                      <CardTitle>{service.title}</CardTitle>
                      <CardDescription>{service.description}</CardDescription>
                    </div>
                  </div>

                  <CardAction className={`flex items-center text-sm ${service.isActive === true ? "text-green-700" : "text-red-700"}`}>
                    <Dot size={48} className="animate-ping -mr-1" />
                    
                    {service.isActive === true ? "Online" : "Offline"}
                  </CardAction>

                </CardHeader>
                <CardContent className="flex flex-col gap-2">
                  <div className="flex items-center justify-between">
                    <p className="text-base text-slate-400">CPU</p>
                    <p className="text-base text-foreground">{service.cpu}%</p>
                  </div>
                  <div className="flex items-center justify-between">
                    <p className="text-base text-slate-400">RAM</p>
                    <p className="text-base text-foreground">{service.ram} GB</p>
                  </div>
                  <div className="flex items-center justify-between">
                    <p className="text-base text-slate-400">Uptime</p>
                    <p className="text-base text-foreground">{service.upTime}</p>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-center gap-2">
                  <a
                    href={service.href}
                    className={buttonVariants({ variant: "default", size: "sm" }) + " w-50 h-10"}
                  >
                    <ExternalLink data-icon="inline-start" /> Open
                  </a>
                  <Button variant="outline" className="w-10 h-10">
                    <RotateCw />
                  </Button>
                </CardFooter>
              </Card>
            )}
          </div>


        </ScrollArea>
      </div>
    </div>
  )
}
