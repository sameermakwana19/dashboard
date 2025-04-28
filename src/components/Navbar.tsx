"use client";

import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";
import {
	CircleDollarSign,
	LogOut,
	Moon,
	Settings,
	Sun,
	User,
} from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { useTheme } from "next-themes";
import { SidebarTrigger, useSidebar } from "./ui/sidebar";

type Props = {};

const Navbar = (props: Props) => {
	const { theme, setTheme } = useTheme();
	// const { toggleSidebar } = useSidebar();

	return (
		<nav className="p-4 flex items-center justify-between sticky top-0 bg-background z-10">
			<SidebarTrigger size={"lg"} />
			{/* <Button variant={"outline"} onClick={toggleSidebar} className="lg:hidden">
				Toggle
			</Button> */}

			{/* Right Side */}
			<div className="flex items-center gap-4">
				<Link href="/">Dashboard</Link>
				{/* Theme Toggler */}
				<Button
					variant="outline"
					size="icon"
					className="cursor-pointer"
					onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
				>
					<Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
					<Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
					<span className="sr-only">Toggle theme</span>
				</Button>
				{/* Theme Toggle end */}
				<DropdownMenu>
					<DropdownMenuTrigger>
						<Avatar>
							<AvatarImage src="https://avatars.githubusercontent.com/u/130456251?v=4" />
							<AvatarFallback>SM</AvatarFallback>
						</Avatar>
					</DropdownMenuTrigger>
					<DropdownMenuContent sideOffset={10}>
						<DropdownMenuLabel>My Account</DropdownMenuLabel>
						<DropdownMenuSeparator />
						<DropdownMenuItem asChild>
							<Link href="/users/sam" className="flex items-center">
								<User className="h-[1.2rem] w-[1.2rem] mr-2" />
								Profile
							</Link>
						</DropdownMenuItem>
						<DropdownMenuItem>
							<Settings className="h-[1.2rem] w-[1.2rem] mr-2" />
							Settings
						</DropdownMenuItem>
						<DropdownMenuItem asChild>
							<Link href="/payments" className="flex items-center">
								<CircleDollarSign className="h-[1.2rem] w-[1.2rem] mr-2" />
								Payments
							</Link>
						</DropdownMenuItem>
						<DropdownMenuItem variant="destructive">
							<LogOut className="h-[1.2rem] w-[1.2rem] mr-2" />
							Logout
						</DropdownMenuItem>
					</DropdownMenuContent>
				</DropdownMenu>
			</div>
		</nav>
	);
};

export default Navbar;
