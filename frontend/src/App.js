import React, { useState } from "react";
import Form from "./components/Form";
import Success from "./components/Success";
import Error from "./components/Error";

const App = () => {
  const [status, setStatus] = useState("");

  if (status === "success") return <Success reset={() => setStatus("")} />;
  if (status === "error") return <Error reset={() => setStatus("")} />;

  return <Form setStatus={setStatus} />;
};

export default App;
