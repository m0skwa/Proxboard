import Image from "next/image";
import { BadgeCheck, Clock12 } from "lucide-react";
import { Badge } from "@/components/ui/badge"

export default function Navbar() {
    return (
        <div className="h-1/10 w-8/10 flex items-center justify-between mx-auto">
            <div className="h-full flex items-center gap-4">
                <Image src="./cloud.svg" alt="Dashboard Logo" height="60" width="60"></Image>

                <Badge className="bg-green-50 text-green-700 dark:bg-green-950 dark:text-green-300 text-sm h-7">
                    <BadgeCheck />
                    Server Status: Healty
                </Badge>
            </div>
            <div className="h-full flex items-center gap-2">
                <Clock12 size={48} />
                <div className="flex-flex-col">
                    <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">
                        12:00
                    </h4>
                    <p>
                        12.12.2026
                    </p>
                </div>
            </div>
        </div>
    );
}