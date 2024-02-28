import AddTodo from "@/components/shared/AddTodo";
import { todos } from "./actions/todoActions";
import Todo from "@/components/shared/Todo";
const Home = async () => {

  const todoList = await todos() || [];

  return (
    <div className="w-screen py-20 flex justify-center flex-col items-center">
      <AddTodo />
      <div className=" flex flex-col gap-5 items-center justify-center mt-10 w-full">
          {todoList.map((todo, id) => (
            <div className="w-full" key={id}>
              <Todo todo={todo} />
            </div>
          ))}
        </div>
    </div>
  )
}

export default Home;