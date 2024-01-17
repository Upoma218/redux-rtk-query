/* eslint-disable @typescript-eslint/no-unused-vars */
import { TTodo } from "@/redux/features/todoSlice";
import { Button } from "../ui/button";
import { useDeleteTodoMutation, useUpdateTodoMutation } from "@/redux/api/api";
import EditTodoModal from "./EditTodoModal";

const TodoCard = ({
  _id,
  title,
  description,
  isCompleted,
  priority,
}: TTodo) => {
  // const dispatch = useAppDispatch() //for local state mangement

  const [updateTodo, { isLoading }] = useUpdateTodoMutation();
  const [deleteTodo] = useDeleteTodoMutation();

  const toggleState = () => {
    // dispatch(toggleComplete(id)); //for local state management

    const taskData = {
      title,
      description,
      priority,
      isCompleted: !isCompleted,
    };

    const options = {
      id: _id,
      data: taskData,
    };

    updateTodo(options);
  };
  const deleteState = () => {
    // dispatch(toggleComplete(id)); //for local state management

    const taskData = {
      title,
      description,
      priority,
      isCompleted: !isCompleted,
    };

    const options = {
      id: _id,
      data: taskData,
    };

    deleteTodo(options);
  };

  return (
    <div className="bg-white rounded-lg p-5 grid grid-cols-12 gap-6 items-center shadow-inner shadow-zinc-400">
      <div className="col-span-2">
        <input
          onChange={toggleState}
          type="checkbox"
          name="status"
          id="status"
          defaultChecked={isCompleted}
        />
      </div>
      <div className="col-span-8">
        <div className="grid grid-cols-4 gap-6 items-center">
          <p className="font-bold align-middle">{title}</p>
          <div className="flex gap-2 items-center">
            <div
              className={`
            size-3 rounded-full
            ${priority === "High" ? "bg-red-500" : null}
            ${priority === "Medium" ? "bg-yellow-500" : null}
            ${priority === "Low" ? "bg-green-500" : null}
            `}
            ></div>
            <p className="font-bold align-middle">{priority}</p>
          </div>
          <p className="align-middle">{description}</p>
          <p>
            {isCompleted ? (
              <span className="text-green-700">Done</span>
            ) : (
              <span className="text-red-700">Pending</span>
            )}
          </p>
        </div>
      </div>
      <div className="col-span-2 items-center">
        <div className="flex gap-6">
          <Button onClick={() => deleteState()} className="bg-red-600">
            <svg
              className="size-4"
              fill="none"
              strokeWidth="1.5"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
              ></path>
            </svg>
          </Button>
          <EditTodoModal _id={_id} title= {title} description= {description} priority= {priority}></EditTodoModal>
        </div>
      </div>
    </div>
  );
};

export default TodoCard;
