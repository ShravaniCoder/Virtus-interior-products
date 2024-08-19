import { UserButton } from "@clerk/clerk-react";


const Dashboard = () => {
    return (
      <div className="flex flex-col items-center justify-center p-10">
            <h1 className="text-3xl font-semibold">👋Welcome to your dashboard!</h1>
            <UserButton />
      </div>
    );
}

export default Dashboard;
