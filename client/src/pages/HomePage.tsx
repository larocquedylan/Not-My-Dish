// import TaskCreation from "@/components/TaskCreation";
// // import TaskList from "../components/TasksList";

// const HomePage: React.FC = () => {
//     // const tasks: Task[] = [
//     //   // get from backend
//     // ];
  
//     return (
//       <div>
//         <h1>Home</h1>
//         {/* to do create TaskList + Card components for each task */}
//         {/* <TaskList tasks={tasks} /> */}
        

//       </div>
//     );
//   };

//   export default HomePage;

  /**
 * v0 by Vercel.
 * @see https://v0.dev/t/fDssciwMSD5
 */
  import { Link } from 'react-router-dom';
  import { CardHeader, CardContent, Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import TaskCreation from '@/components/TaskCreation';

export default function Home() {
  return (
    <div className="dark min-h-screen flex flex-col bg-gray-900 text-white">
      <header className="flex items-center h-16 px-4 border-b border-gray-700">
        <nav className="flex flex-row items-center gap-5 text-sm lg:gap-6">
          <Link className="text-gray-300 hover:text-white" href="#">
            <HomeIcon className="w-6 h-6" />
            <span className="sr-only">Dashboard</span>
          </Link>
          <Link className="text-gray-300 hover:text-white" href="#">
            <ClipboardIcon className="w-6 h-6" />
            <span className="sr-only">Chores</span>
          </Link>
          <Link className="text-gray-300 hover:text-white" href="#">
            <CreditCardIcon className="w-6 h-6" />
            <span className="sr-only">Expenses</span>
          </Link>
          <Link className="text-gray-300 hover:text-white" href="#">
            <CalendarIcon className="w-6 h-6" />
            <span className="sr-only">Calendar</span>
          </Link>
        </nav>
      </header>
      <main className="flex flex-1 overflow-hidden">
        <aside className="w-64 border-r border-gray-700 p-4 overflow-auto">
          <h2 className="text-lg font-semibold">Settings</h2>
          <nav className="mt-4 space-y-2">
            <Link className="text-gray-300 hover:text-white" href="#">
              Profile
            </Link>
            <Link className="text-gray-300 hover:text-white" href="#">
              Notifications
            </Link>
            <Link className="text-gray-300 hover:text-white" href="#">
              Privacy
            </Link>
          </nav>
        </aside>
        <section className="flex-1 p-6 overflow-auto">
          <h1 className="text-2xl font-semibold">Dashboard</h1>
          <p className="mt-2 text-gray-400">Welcome to your household management dashboard.</p>
          <div className="grid grid-cols-2 gap-4 mt-4">
            <div>
              <h2 className="text-xl font-semibold mb-2">To Do List</h2>
              <Card className="mb-4">
                <CardHeader className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold">Clean the kitchen</h3>
                  <img
                    className="rounded-full"
                    height="40"
                    src="/placeholder.svg"
                    style={{
                      aspectRatio: "40/40",
                      objectFit: "cover",
                    }}
                    width="40"
                  />
                </CardHeader>
                <CardContent>
                  <p className="text-gray-400">Created by: John Doe</p>
                  <p className="text-gray-400">Points: 10</p>
                  <p className="text-gray-400">Clean the kitchen thoroughly including the dishes and the floor.</p>
                  <Button className="mt-2">Claim Task</Button>
                </CardContent>
              </Card>
              <Button className="w-full">Create New Task</Button>
              <TaskCreation />
            </div>
            <div>
              <h2 className="text-xl font-semibold mb-2">Completed Tasks</h2>
              <Card className="mb-4">
                <CardHeader className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold">Buy groceries</h3>
                  <img
                    className="rounded-full"
                    height="40"
                    src="/placeholder.svg"
                    style={{
                      aspectRatio: "40/40",
                      objectFit: "cover",
                    }}
                    width="40"
                  />
                </CardHeader>
                <CardContent>
                  <p className="text-gray-400">Completed by: Jane Doe</p>
                  <p className="text-gray-400">Points: 5</p>
                  <p className="text-gray-400">
                    Bought groceries for the week including fruits, vegetables, and dairy products.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

function CalendarIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
      <line x1="16" x2="16" y1="2" y2="6" />
      <line x1="8" x2="8" y1="2" y2="6" />
      <line x1="3" x2="21" y1="10" y2="10" />
    </svg>
  )
}


function ClipboardIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="8" height="4" x="8" y="2" rx="1" ry="1" />
      <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
    </svg>
  )
}


function CreditCardIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="14" x="2" y="5" rx="2" />
      <line x1="2" x2="22" y1="10" y2="10" />
    </svg>
  )
}


function HomeIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <polyline points="9 22 9 12 15 12 15 22" />
    </svg>
  )
}
  