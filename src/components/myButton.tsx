"use client";

//name function
//function MyButton() {
//   return (
//     <button>
//       I'm a button
//     </button>
//   );
// }
//or
//arrow function

const MyButton = () => {
  const handleClick = () => {
    alert("hello i'm button you Click me!!");
  };
  return (
    <div className="flex  gap-5 p-3 flex-col ">
      <div>
        <button className="p-1 rounded-md bg-orange-300" onClick={handleClick}>
          {" "}
          I'm a button
        </button>
      </div>
      {`Web Events , React Hooks => Client component , to make Client Component always use "use client" on top of File
    `}
    </div>
  );
};
export default MyButton;
