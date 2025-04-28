"use client";
import React from "react";
import {
	ChartConfig,
	ChartContainer,
	ChartTooltip,
	ChartTooltipContent,
} from "./ui/chart";
import { Label, Pie, PieChart } from "recharts";
import { TrendingUp } from "lucide-react";

const chartData = [
	{ browser: "chrome", visitors: 275, fill: "var(--color-chrome)" },
	{ browser: "safari", visitors: 200, fill: "var(--color-safari)" },
	{ browser: "firefox", visitors: 287, fill: "var(--color-firefox)" },
	{ browser: "edge", visitors: 173, fill: "var(--color-edge)" },
	{ browser: "other", visitors: 190, fill: "var(--color-other)" },
];

const chartConfig = {
	visitors: {
		label: "Visitors",
	},
	chrome: {
		label: "Chrome",
		color: "var(--chart-1)",
	},
	safari: {
		label: "Safari",
		color: "var(--chart-2)",
	},
	firefox: {
		label: "Firefox",
		color: "var(--chart-3)",
	},
	edge: {
		label: "Edge",
		color: "var(--chart-4)",
	},
	other: {
		label: "Other",
		color: "var(--chart-5)",
	},
} satisfies ChartConfig;

const AppPieChart = (props: React.PropsWithChildren) => {
	const totalVisitors = chartData.reduce((acc, item) => acc + item.visitors, 0);
	return (
		<div className="">
			<h1 className="text-lg font-medium mb-6">Browser Usage</h1>
			<ChartContainer
				className="mx-auto aspect-square max-h-[250px]"
				config={chartConfig}
			>
				<PieChart>
					<ChartTooltip
						cursor={false}
						content={<ChartTooltipContent hideLabel />}
					/>
					<Pie
						data={chartData}
						dataKey="visitors"
						nameKey="browser"
						innerRadius={60}
						strokeWidth={10}
					>
						<Label
							content={({ viewBox }) => {
								if (viewBox && "cx" in viewBox && "cy" in viewBox) {
									return (
										<text
											x={viewBox.cx}
											y={viewBox.cy}
											textAnchor="middle"
											dominantBaseline="middle"
										>
											<tspan
												x={viewBox.cx}
												y={viewBox.cy}
												className="fill-foreground text-3xl font-bold"
											>
												{totalVisitors.toLocaleString()}
											</tspan>
											<tspan
												x={viewBox.cx}
												y={(viewBox.cy || 0) + 24}
												className="fill-muted-foreground"
											>
												Visitors
											</tspan>
										</text>
									);
								}
							}}
						/>
					</Pie>
				</PieChart>
			</ChartContainer>
			<div className="flex flex-col items-center justify-center gap-2 mt-4">
				<div className="flex items-center gap-2 font-medium leading-none">
					Trending up by 5.2% this month{" "}
					<TrendingUp className="h-4 w-4 text-green-500" />
				</div>
				<div className="leading-none text-muted-foreground">
					Showing total visitors for the last 6 months
				</div>
			</div>
		</div>
	);
};

export default AppPieChart;
