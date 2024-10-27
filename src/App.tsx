import { useState } from "react";
import Navbar from "./components/Navbar";
import Cart from "./components/Cart";
import ExpendedText from "./components/ExpendedText";
import Form from "./components/Form";

function App() {
  const [cartItems, setCardItems] = useState([
    "Product1",
    "Product2",
    "Product3",
  ]);
  return (
    <>
      <Navbar cartItemsCount={cartItems.length} />
      <Cart
        onClear={() => setCardItems([])}
        cartItems={cartItems}
        onRemove={() => cartItems}
      />
      <ExpendedText>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Recusandae
        aperiam placeat ipsam sequi et mollitia, tempore aliquam! Harum iusto
        corrupti dolorum temporibus eum sint obcaecati deserunt nostrum, ipsum,
        sunt laudantium facilis, inventore assumenda similique itaque autem vel
        rem maxime enim. Tempora eius perspiciatis quae deserunt sit voluptate,
        recusandae et veniam esse facere pariatur, officiis fuga nesciunt quis?
        Quisquam repellendus odio voluptatibus? Omnis, quasi earum libero eum
        officia fuga doloribus modi, dolore unde ab laudantium vitae eius
        delectus iusto, expedita suscipit nesciunt molestias commodi asperiores.
        Laborum iusto nostrum alias possimus, repellendus assumenda, dolorem
        error omnis, eligendi nemo ut debitis natus nulla!
      </ExpendedText>
      <Form />
    </>
  );
}

export default App;
