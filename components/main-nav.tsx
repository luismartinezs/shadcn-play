import { Navigation } from "@/components/navigation";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/ui/mode-toggle";

import React from "react";

const MainNav = () => {
  return (
    <header className="p-8 flex justify-between">
      <div>Logo</div>
      <div className="flex gap-4">
        <Navigation />

        <Button>Get premium</Button>
        <ModeToggle />
      </div>
    </header>
  );
};

export default MainNav;
