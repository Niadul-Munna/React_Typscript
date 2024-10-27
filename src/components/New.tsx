import ListGroup from "./ListGroup";

const New = () => {
  const items = ["Apple"];
  const handleChange = (items: string) => {
    console.log(items);
  };
  return (
    <div className="bg-blue-500 p-5">
      <ListGroup items={items} title="New" onChange={handleChange} />
    </div>
  );
};

export default New;
