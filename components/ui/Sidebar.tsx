'use client';
import { MenuIcon } from "lucide-react";
import NewDocumentButton from "./NewDocumentButton";
import { useCollection } from "react-firebase-hooks/firestore";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useUser } from "@clerk/nextjs";

function Sidebar() {
    const { user} = useUser();

    const [data, loading, error] = useCollection(
        
    );


   const menuOptions = (
        <>
         <NewDocumentButton />

         {/*My Documents  */}


         {/* list...... */}



         {/* shared with me */}



         {/* list.... */}


        </>
    );
  return (
    <div className="p-2 md:p-5 bg-slate-400 relative">
        <div className="md:hidden">
      <Sheet>
        <SheetTrigger>
            <MenuIcon className="p-2 hover:opacity-30 rounded-lg" size={40} />
        </SheetTrigger>
        <SheetContent side={"left"}>
          <SheetHeader>
            <SheetTitle>Menu</SheetTitle>
            <div>{menuOptions}</div>
          </SheetHeader>
        </SheetContent>
      </Sheet>
      </div>

      <div className="hidden md:inline">
       {menuOptions}
      </div>
    </div>
  );
}

export default Sidebar;
