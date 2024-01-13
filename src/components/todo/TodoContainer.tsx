/* eslint-disable @typescript-eslint/no-unused-vars */
import { useAppDispatch, /* useAppSelector  */} from "@/redux/hook";
import AddTodoModal from "./AddTodoModal";
import TodoCard from "./TodoCard";
import TodoFilter from "./TodoFilter";
import { TTodo, filterTodo } from "@/redux/features/todoSlice";
import { useGetTodosQuery } from "@/redux/api/api";

const TodoContainer = () => {
  // From local store
  // const { todos } = useAppSelector((state) => state.todos);

  // From server store
  const {data : todos, isLoading, error} = useGetTodosQuery(undefined)
  const dispatch = useAppDispatch();


  if(isLoading){
    return <p>Loading . . . </p>
  }


  const handleFilter = (priority: string) => {
    dispatch(filterTodo(priority));
  };

  return (
    <div>
      <div className="flex justify-between my-4">
        <AddTodoModal></AddTodoModal>
        <TodoFilter onFilter={handleFilter} ></TodoFilter>
      </div>
      <div className="bg-primary-gradient w-full h-full rounded-xl p-5 space-y-1">
        <div className="w-full h-full rounded-xl space-y-1">
          <div className="bg-white rounded-lg p-5 grid grid-cols-12 gap-6 items-center shadow-inner shadow-zinc-400 text-xl text-purple-800">
            <div className="col-span-2 font-bold">
              <h6>Select task</h6>
            </div>

            <div className="col-span-8 ">
              <div className="grid grid-cols-4 gap-4 items-center">
                <p className="font-bold align-middle">Task Name</p>
                <p className="font-bold align-middle">Priority</p>
                {/* <p>Time</p> */}
                <p className="align-middle">Task Details</p>
                <p className="font-bold align-middle">Status</p>
              </div>
            </div>
            <div className="col-span-2 items-center font-bold">
              <div className="grid grid-cols-2 gap-4">
              <p>Delete</p>
              <p>Update</p>
              </div>
            </div>
          </div>
          {todos?.data.map((todo : TTodo) => (
            <TodoCard
              {...todo}
            ></TodoCard>
          ))}
        </div>
        {/* <div className="bg-white p-5 text-2xl flex justify-center items-center rounded-md font-bold">
          <p>There is no pending task</p>
        </div> */}
      </div>
    </div>
  );
};

export default TodoContainer;
