import { LogOut } from "lucide-react";
import { Button } from "../Button";

export function Profile() {
  return (
    <div className="flex items-center gap-3 grid-cols-profile">
      <img src="https://github.com/Murilo-Salesse.png" alt="image" className="w-10 h-10 rounded-full"/>

      <div className=" truncate flex flex-1 flex-col">
        <span className="text-sm font-semibold text-zinc-700 dark:text-zinc-100">Murilo Salesse</span>
        <span className="truncate text-sm text-zinc-500 dark:text-zinc-400">salessedev@gmail.com</span>
      </div>

      <Button variant="ghost" type="button">
        <LogOut className="w-5 h-5 text-zinc-500"/>
      </Button>
    </div>
  );
}