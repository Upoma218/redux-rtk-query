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
import {
  Select,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { SelectGroup, SelectTrigger, SelectValue } from "@radix-ui/react-select";
import { useAddTodoMutation } from "@/redux/api/api";

const AddTodoModal = () => {
  const [task, setTask] = useState("");
  const [description, setDescription] = useState("");
  const [priority, setPriority] = useState("");


  //! for local state management
  // const dispatch = useAppDispatch();


  // for server
  const [addTodo, { data, isLoading, isError, isSuccess}] = useAddTodoMutation();
  console.log({ data, isLoading, isError, isSuccess})

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    // const randomString = Math.random().toString(36).substring(2, 9);

    const taskDetails = {
      title: task,
      description: description,
      isCompleted: false,
      priority: priority,
    };


    console.log("inside modal", taskDetails)

    // for local state management
    // console.log(taskDetails)
    // dispatch(addTodo(taskDetails));


    // for server
    addTodo(taskDetails)
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="bg-primary-gradient text-xl font-semibol">
          Add todo
        </Button>
      </DialogTrigger>

      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className=" text-center text-2xl font-bold text-purple-900">
            Add Todo
          </DialogTitle>
          <DialogDescription className=" text-center">
            Add your daily task according to your plan!
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
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="description" className="text-left">
                Description
              </Label>
              <Input
                onBlur={(e) => setDescription(e.target.value)}
                id="description"
                placeholder="Task details"
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="task" className="text-left">
                Priority Level
              </Label>
              <Select onValueChange={(value) => setPriority(value)}>
                <SelectTrigger className="col-span-3 text-left border boder-1 p-2 rounded-md">
                  <SelectValue placeholder="Priority Level" />
                </SelectTrigger>
                <SelectContent >
                  <SelectGroup>
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
                  Add Task
                </Button>
              </DialogClose>
            </div>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default AddTodoModal;
