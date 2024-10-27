import { FormEvent, useRef } from "react";

const Form = () => {
  const nameRef = useRef<HTMLInputElement>(null);
  const ageRef = useRef<HTMLInputElement>(null);
  const person = { name: "", age: 0 };
  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    if (nameRef.current !== null) person.name = nameRef.current.value;
    if (ageRef.current !== null) person.age = parseInt(ageRef.current.value);
    console.log(person);
  };
  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className="  bg-green-200 space-y-2 p-4  grid  text-lg"
      >
        <label className="" htmlFor="text">
          Name
        </label>
        <input ref={nameRef} id="text" type="text" className="  rounded-lg" />
        <label className="" htmlFor="age">
          Age
        </label>
        <input ref={ageRef} id="age" type="number" className="  rounded-lg" />
        <button
          type="submit"
          className="border bg-blue-500 py-1 px-3 rounded-lg text-white"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;
