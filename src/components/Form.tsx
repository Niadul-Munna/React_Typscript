const Form = () => {
  return (
    <div>
      <form className="  bg-green-200 space-y-2 p-4  grid  text-lg">
        <label className="" htmlFor="text">
          Name
        </label>
        <input id="text" type="text" className="  rounded-lg" />
        <label className="" htmlFor="age">
          Age
        </label>
        <input id="age" type="number" className="  rounded-lg" />
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
