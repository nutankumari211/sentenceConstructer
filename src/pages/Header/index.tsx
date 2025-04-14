import React from "react";
import { ChevronLeft, MoreVertical } from "lucide-react";
import { Button } from "@/components/ui/button";
import { HeaderProps } from "@/lib/interfaces";

const Header: React.FC<HeaderProps> = ({ title, onBack, onMenu }) => {
  return (
    <div className="w-full flex items-center justify-between px-4 py-3 bg-gray-50 shadow-md">
      <Button
        onClick={onBack}
        className="text-black bg-gray-50 border-none shadow-none focus:ring-0 focus:outline-none"
        aria-label="Back"
      >
        <ChevronLeft size={24} />
      </Button>

      <h1 className="text-xl font-medium text-gray-600">{title}</h1>

      <Button
        onClick={onMenu}
        className="text-black bg-gray-50 border-none shadow-none focus:ring-0 focus:outline-none"
        aria-label="Menu"
      >
        <MoreVertical size={24} />
      </Button>
    </div>
  );
};

export default Header;
