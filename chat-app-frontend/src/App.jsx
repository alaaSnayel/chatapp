// import "./App.css";

import toast from "react-hot-toast";

function App() {
  return (
    <div className="">
      <h1>App page</h1>
      <button
        className=" bg-amber-400"
        onClick={() => {
          toast.success("dsfsfe");
        }}
      >
        click me
      </button>
    </div>
  );
}

export default App;
