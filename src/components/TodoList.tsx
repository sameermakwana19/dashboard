"use client";
import React, { useState } from "react";
import { ScrollArea } from "./ui/scroll-area";
import { Card } from "./ui/card";
import { Checkbox } from "./ui/checkbox";
import { Calendar } from "./ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { Button } from "./ui/button";
import { CalendarIcon } from "lucide-react";
import { format } from "date-fns";

const List = Array.from({ length: 100 }, (_, i) => i + 1).map((item) => ({
	id: item,
	title: `Item ${item}`,
}));

const TodoList = (props: React.PropsWithChildren) => {
	const [date, setDate] = useState<Date | undefined>(new Date());
	const [open, setOpen] = useState(false);

	return (
		<div>
			<h1 className="text-lg font-medium mb-6">Todo List</h1>
			<Popover open={open} onOpenChange={setOpen}>
				<PopoverTrigger asChild>
					<Button className="w-full">
						<CalendarIcon />
						{date ? format(date, "PPP") : <span>Pick a date</span>}
					</Button>
				</PopoverTrigger>
				<PopoverContent className="w-auto p-0">
					<Calendar
						mode="single"
						selected={date}
						onSelect={(date) => {
							console.log({ date });

							setDate(date);
							setOpen(false);
						}}
					/>
				</PopoverContent>
			</Popover>

			<ScrollArea className="h-[400px] w-full overflow-hidden mt-4">
				{List.map((item) => (
					<Card className="p-4 mb-4 " key={item.id}>
						<div className="flex items-center gap-3 ">
							<Checkbox id={`terms-${item.id}`} />
							<label
								htmlFor={`terms-${item.id}`}
								className="text-sm text-muted-foreground font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
							>
								{item.title}
							</label>
						</div>
					</Card>
				))}
			</ScrollArea>
		</div>
	);
};

export default TodoList;
