import TodoContainer from "@/components/todo/TodoContainer";
import Container from "@/components/ui/Container";

const Todo = () => {
  return (
    <Container>
      <div className=" font-semibold my-10">
        <h1 className="text-3xl my-10 text-center">My Todos</h1>
        <TodoContainer></TodoContainer>
      </div>
    </Container>
  );
};

export default Todo;
