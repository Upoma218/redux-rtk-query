import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { FormEvent, useState } from "react";
import { Select, SelectContent, SelectItem } from "@/components/ui/select";
import { useUpdateTodoMutation } from "@/redux/api/api";
import {
  SelectGroup,
  SelectTrigger,
  SelectValue,
} from "@radix-ui/react-select";
import { TTodo } from "@/redux/features/todoSlice";



const EditTodoModal = ({_id, title,description, priority} : TTodo) => {
    const [task, setTask] = useState(title);
    const [taskDescription, setTaskDescription] = useState(description);
    const [selectedPriority, setSelectedPriority] = useState(priority);
    
  console.log(description, title, priority)
  const [updateTodo] = useUpdateTodoMutation();


  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    // const randomString = Math.random().toString(36).substring(2, 9);

    const taskData = {
        title: task,
        description: taskDescription,
        priority: selectedPriority,
      };
  
      const options = {
        id: _id,
        data: taskData,
      };

    // for server
    updateTodo(options)
  };
  
  return (
    <Dialog>
      <DialogTrigger asChild>
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
      </DialogTrigger>

      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className=" text-center text-2xl font-bold text-purple-900">
            Update Todo
          </DialogTitle>
          <DialogDescription className=" text-center">
            Update your daily task according to your plan!
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit}>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="task" className="text-left">
                Task
              </Label>
              <Input
                onBlur={(e) => setTask(e.target.value)}
                id="task"
                placeholder="Task name"
                defaultValue={title}
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="description" className="text-left">
                Description
              </Label>
              <Input
                onBlur={(e) => setTaskDescription(e.target.value)}
                id="description"
                placeholder="Task details"
                defaultValue={description}
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="task" className="text-left">
                Priority Level
              </Label>
              <Select onValueChange={(value) => setSelectedPriority(value)} defaultValue={priority}>
                <SelectTrigger className="col-span-3 text-left border boder-1 p-2 rounded-md">
                  <SelectValue placeholder="Priority Level" />
                </SelectTrigger>
                <SelectContent >
                  <SelectGroup >
                    <SelectItem value="High">High</SelectItem>
                    <SelectItem value="Medium">Medium</SelectItem>
                    <SelectItem value="Low">Low</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
            <div className="mx-auto">
              <DialogClose asChild>
                <Button
                  className="bg-primary-gradient text-xl font-semibol"
                  type="submit"
                >
                  Update Task
                </Button>
              </DialogClose>
            </div>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default EditTodoModal;
