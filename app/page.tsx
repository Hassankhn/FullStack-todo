import Image from "next/image";
import Todos from "../components/todos"
import AddTodo from '../components/addTodo'

export default function Home() {
  return (
    <main className="bg-gradient-to-tr from-primary to-secondary h-screen flex justify-center items-center">
      <div className="rounded-xl bg-gradient-to-br from-[#D9D9D9]/50 to-[#D9D9D9]/60 backdrop-blur-xl w-full max-w-md px-6 py-8">
        {/* Adding tasks */}
        {/* @ts-ignore */}
        <Todos />

        {/* Add tasks */}
        <AddTodo />

        {/* Adding the black line  */}
        <div className="bg-black h-1.5 rounded-full mx-auto mb-2 w-1/2"></div>

      </div>
    </main>
  );
}
