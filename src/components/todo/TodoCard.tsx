import { TTodo, removeTodo, toggleComplete } from "@/redux/features/todoSlice";
import { Button } from "../ui/button";
import { useAppDispatch } from "@/redux/hook";

const TodoCard = ({ title, description, id, isCompleted,  priority }: TTodo) => {

  const dispatch = useAppDispatch();
  const toggleState = () => {
    dispatch(toggleComplete(id))
  }

  return (
    <div className="bg-white rounded-lg p-5 grid grid-cols-12 gap-6 items-center shadow-inner shadow-zinc-400">
      <div className="col-span-2">
        <input onChange={toggleState} type="checkbox" name="status" id="status" />
      </div>
      <div className="col-span-8">
        <div className="grid grid-cols-4 gap-6 items-center">
          {/* <p>Time</p> */}
          <p className="font-bold align-middle">{title}</p>
          <p className="font-bold align-middle">{priority}</p>
          <p className="align-middle">{description}</p>
          <p>{isCompleted ? <span className="text-green-700">Done</span> : <span className="text-red-700">Pending</span>}</p>
        </div>
      </div>
      <div className="col-span-2 items-center">
        <div className="grid grid-cols-2 gap-4">
          <Button
            onClick={() => dispatch(removeTodo(id))}
            className="bg-red-600"
          >
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
          <Button className="bg-[#8e44ad]">
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
                d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
              ></path>
            </svg>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default TodoCard;