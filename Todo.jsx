import TodoItems from "./TodoItems";

const Todo = () => {
    return (
        <div className="bg-black h-screen ">
            <div className="py-10">
                <div className="w-3/12 mx-auto   bg-white h-[550px] rounded-xl p-5">
                    <h1 className="text-center text-3xl font-semibold ">Todo List</h1>
                    <div className="mt-4 flex items-center bg-gray-200 w-full justify-between rounded-full">
                        <input
                            type="text"
                            placeholder="Add your task"
                            className=" outline-none border-0 h-14 pr-2 pl-6 placeholder:text-slate-600 bg-gray-200 rounded-full w-full"
                        />
                        <button className="bg-orange-600 text-white h-14 rounded-full w-40 font-medium ">Add +</button>
                    </div>
                    <TodoItems text={'Learn Coding'} />
                    <TodoItems text={'Learn Coding from GreatStack'} />
                </div>
            </div>
        </div>
    );
};

export default Todo;
