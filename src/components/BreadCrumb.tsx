"use client";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
import {
	Breadcrumb,
	BreadcrumbItem,
	BreadcrumbLink,
	BreadcrumbList,
	BreadcrumbPage,
	BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

const BreadCrumb = () => {
	const location = usePathname();

	const [paths, setPaths] = useState<string[]>([]);

	useEffect(() => {
		if (location) {
			const pathSegments = location.split("/").filter((path) => path !== "");
			setPaths(pathSegments);
		}
	}, [location]);

	if (paths.length === 0) {
		return null; // or a loading state
	}

	return (
		<Breadcrumb>
			<BreadcrumbList>
				<BreadcrumbItem>
					<BreadcrumbLink href="/">Dashboard</BreadcrumbLink>
				</BreadcrumbItem>
				<BreadcrumbSeparator />
				{paths.map((path, index) => {
					if (index === paths.length - 1) {
						return (
							<BreadcrumbItem key={index}>
								<BreadcrumbPage>{path}</BreadcrumbPage>
							</BreadcrumbItem>
						);
					}
					return (
						<React.Fragment key={index}>
							<BreadcrumbItem>
								<BreadcrumbLink
									href={`/${paths.slice(0, index + 1).join("/")}`}
								>
									{path}
								</BreadcrumbLink>
							</BreadcrumbItem>
							<BreadcrumbSeparator key={index} />
						</React.Fragment>
					);
				})}
			</BreadcrumbList>
		</Breadcrumb>
	);
};

export default BreadCrumb;
