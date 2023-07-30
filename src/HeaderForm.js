import { useState } from "react";
function HeaderForm({ onAddTasks }) {
  const [taskDescription, setTaskDesription] = useState("");
  function handleSubmit(e) {
    if (!taskDescription) return;
    e.preventDefault();
    const newTask = { taskDescription, id: Date.now() };

    console.log(newTask);

    onAddTasks(newTask);
    setTaskDesription("");
  }
  return (
    // <form className="add-form" onSubmit={handleSubmit}>
    //   <h3>What do you need for your trip</h3>
    //   <select
    //     value={quantity}
    //     //Same format whenever we want to control elements like which select element
    //     onChange={(e) => setQuantity(Number(e.target.value))}
    //   >
    //     {/* watch video 72.Building a form and handling  submissions */}

    //     {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
    //       <option value={num} key={num}>
    //         {num}
    //       </option>
    //     ))}
    //   </select>
    //   <input
    //     type="text"
    //     placeholder="Item..."
    //     value={description}
    //     onChange={(e) => setDesription(e.target.value)}
    //   ></input>
    //   <button>Add</button>
    // </form>
    <div className="container">
      <h1>To do list</h1>

      <form class="input-wrapper" onSubmit={handleSubmit}>
        <input
          type="text"
          id="taskInput"
          placeholder="Enter your task..."
          value={taskDescription}
          onChange={(e) => setTaskDesription(e.target.value)}
        ></input>

        <button>Add</button>
      </form>
    </div>
  );
}

export default HeaderForm;
