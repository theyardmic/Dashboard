import Image from "next/image";
import { Button } from "@/components/ui/button"
import {UserButton} from "@clerk/nextjs"

export default function SetupPage() {
  return (
   
    <div className="p-4">
      <UserButton  afterSignoutUrl="/" />
      </div>
 
  );
}
