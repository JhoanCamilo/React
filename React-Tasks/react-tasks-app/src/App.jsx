import TaskList from "./components/TaskList";
import TaskFomr from "./components/TaskFomr";

function App() {
  return (
    <main className="bg-zinc-700 h-screen">
      <div className="container mx-auto p-10">
        <TaskFomr />
        <TaskList />
      </div>
    </main>
  );
}

export default App;
