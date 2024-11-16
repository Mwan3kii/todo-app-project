import Header from "@/components/Header";
import TodosLogic from "@/components/TodosLogic";

const Home = () => {
    return (
        <div className="todos">
            <Header>
                <h1>Todos</h1>
                <p>Organize your tasks and stay productive! Add your tasks below and check them off as you complete them.</p>
            </Header>
            <TodosLogic />
        </div>
    );
};

export default Home;