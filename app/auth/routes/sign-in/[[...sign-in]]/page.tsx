import Image from "next/image";
import {Button} from "@/components/ui/button";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
     
          <div>
          
          <p className="m-0 max-w-[30ch] text-balance text-Lg">
           Merchy
          </p>
          <div className="p-4"> 

       <Button>Click Me</Button>
       </div>
      </div>
    </main>
  );
}
