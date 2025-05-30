"use client";
import React, { useState } from "react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import {
  BarChart,
  FileText,
  LayoutDashboard,
  MessageCircle,
  Settings,
} from "lucide-react";
import Link from "next/link";
const UserSidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      {/* Mobile Sidebar */}
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger asChild>
          <Button variant="outline" className="md:hidden m-4 text-purple-300">
            <LayoutDashboard className="h-5 w-5" />
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="w-[250px]">
          <DashboardSidebar closeSheet={() => setIsOpen(false)} />
        </SheetContent>
      </Sheet>
      <div className="hidden md:block h-screen w-[250px] border-r bg-background">
        <DashboardSidebar />
      </div>
    </div>
  );
};

export default UserSidebar;

function DashboardSidebar({ closeSheet }: { closeSheet?: () => void }) {
  return (
    <div className="h-full px-8 py-6 text-purple-200/50 border-r-1 border-purple-200/40
    ">
      <div className="flex items-center gap-2 mb-8 px-2">
        <Link href={"/"}>
        <span className="text-xl font-bold">Pixel Perfect</span>
        </Link>
      </div>
      <nav className="space-y-1 flex flex-col gap-4">
        <Link href={"/dashboard"}>
          <Button
            variant="ghost"
            className="w-full justify-start  border-purple-200/50 rounded-2xl border-1"
            onClick={closeSheet}
          >
            <LayoutDashboard className="mr-2 h-4 w-4" />
            Overview
          </Button>
        </Link>

        <Link href={"/dashboard/articles/create"}>
          <Button
            variant="ghost"
            className="w-full justify-start s  border-purple-200/50 rounded-2xl border-1"
            onClick={closeSheet}
          >
            <FileText className="mr-2 h-4 w-4" />
            Articles
          </Button>
        </Link>
        <Button
          variant="ghost"
          className="w-full justify-start  border-purple-200/50 rounded-2xl border-1"
          onClick={closeSheet}
        >
          <MessageCircle className="mr-2 h-4 w-4" />
          Comments
        </Button>
        <Button
          variant="ghost"
          className="w-full justify-start  border-purple-200/50 rounded-2xl border-1"
          onClick={closeSheet}
        >
          <BarChart className="mr-2 h-4 w-4" />
          Analytics
        </Button>
        <Button
          variant="ghost"
          className="w-full justify-start  border-purple-200/50  rounded-2xl border-1"
          onClick={closeSheet}
        >
          <Settings className="mr-2 h-4 w-4" />
          Settings
        </Button>
      </nav>
    </div>
  );
}
