import React from "react";
import {
	Sidebar,
	SidebarContent,
	SidebarFooter,
	SidebarGroup,
	SidebarGroupAction,
	SidebarGroupContent,
	SidebarGroupLabel,
	SidebarHeader,
	SidebarMenu,
	SidebarMenuButton,
	SidebarMenuItem,
	SidebarSeparator,
} from "./ui/sidebar";

import {
	Calendar,
	ChevronUp,
	Home,
	Inbox,
	Plus,
	Search,
	Settings,
	User2,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

type Props = {};

const items = [
	{
		title: "Home",
		url: "/",
		icon: Home,
	},
	{
		title: "Inbox",
		url: "/",
		icon: Inbox,
	},
	{
		title: "Calendar",
		url: "/",
		icon: Calendar,
	},
	{
		title: "Search",
		url: "/",
		icon: Search,
	},
	{
		title: "Settings",
		url: "/",
		icon: Settings,
	},
];

const AppSidebar = (props: React.PropsWithChildren) => {
	return (
		<Sidebar collapsible="icon">
			<SidebarHeader className="py-4">
				<SidebarMenu>
					<SidebarMenuItem>
						<SidebarMenuButton asChild>
							<Link href="/">
								<Image
									src="/avatar.png"
									alt="Logo"
									width={100}
									height={100}
									className="w-6 h-6 rounded-full"
								/>
								<span>Dashboard</span>
							</Link>
						</SidebarMenuButton>
					</SidebarMenuItem>
				</SidebarMenu>
			</SidebarHeader>
			<SidebarSeparator />

			<SidebarContent>
				<SidebarGroup>
					<SidebarGroupContent>
						<SidebarMenu>
							{items.map((item) => (
								<SidebarMenuItem key={item.title}>
									<SidebarMenuButton asChild>
										<Link href={item.url}>
											<item.icon />
											<span>{item.title}</span>
										</Link>
									</SidebarMenuButton>
								</SidebarMenuItem>
							))}
						</SidebarMenu>
					</SidebarGroupContent>
				</SidebarGroup>

				<SidebarGroup>
					<SidebarGroupLabel>Projects</SidebarGroupLabel>
					<SidebarGroupAction title="Add Project">
						<Plus /> <span className="sr-only">Add Project</span>
					</SidebarGroupAction>
					<SidebarGroupContent>
						<SidebarMenu>
							<SidebarMenuItem>
								<SidebarMenuButton asChild>
									<Link href="/">
										<Image
											src="/avatar.png"
											alt="Logo"
											width={100}
											height={100}
											className="w-6 h-6 rounded-full"
										/>
										<span>Project 1</span>
									</Link>
								</SidebarMenuButton>
							</SidebarMenuItem>
							<SidebarMenuItem>
								<SidebarMenuButton asChild>
									<Link href="/">
										<Image
											src="/avatar.png"
											alt="Logo"
											width={100}
											height={100}
											className="w-6 h-6 rounded-full"
										/>
										<span>Project 2</span>
									</Link>
								</SidebarMenuButton>
							</SidebarMenuItem>
						</SidebarMenu>
					</SidebarGroupContent>
				</SidebarGroup>
			</SidebarContent>

			<SidebarFooter>
				<SidebarMenu>
					<SidebarMenuItem>
						<DropdownMenu>
							<DropdownMenuTrigger asChild>
								<SidebarMenuButton>
									<Avatar>
										<AvatarImage src="https://avatars.githubusercontent.com/u/130456251?v=4" />
										<AvatarFallback>SM</AvatarFallback>
									</Avatar>
									SAM
									<ChevronUp className="ml-auto" />
								</SidebarMenuButton>
							</DropdownMenuTrigger>
							<DropdownMenuContent align="end">
								<DropdownMenuItem>Account</DropdownMenuItem>
								<DropdownMenuItem>Settings</DropdownMenuItem>
								<DropdownMenuItem>Signout</DropdownMenuItem>
							</DropdownMenuContent>
						</DropdownMenu>
					</SidebarMenuItem>
				</SidebarMenu>
			</SidebarFooter>
		</Sidebar>
	);
};

export default AppSidebar;
