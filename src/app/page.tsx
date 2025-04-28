import AppAreaChart from "@/components/AppAreaChart";
import AppBarChart from "@/components/AppBarChart";
import AppPieChart from "@/components/AppPieChart";
import CardList from "@/components/CardList";
import TodoList from "@/components/TodoList";

export default function Home() {
	return (
		<div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-4">
			<div className="bg-primary-foreground p-4 rounded-lg m-2 lg:col-span-2 xl:col-span-1 2xl:col-span-2">
				<AppBarChart />
			</div>
			<div className="bg-primary-foreground p-4 rounded-lg m-2">
				<CardList title="Popular Content" />
			</div>
			<div className="bg-primary-foreground p-4 rounded-lg m-2">
				<AppPieChart />
			</div>
			<div className="bg-primary-foreground p-4 rounded-lg m-2 ">
				<TodoList />
			</div>
			<div className="bg-primary-foreground p-4 rounded-lg m-2 lg:col-span-2 xl:col-span-1 2xl:col-span-2">
				<AppAreaChart />
			</div>
			<div className="bg-primary-foreground p-4 rounded-lg m-2 ">
				<CardList title="Latest Transactions" />
			</div>
		</div>
	);
}
