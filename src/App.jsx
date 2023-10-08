import { Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Order from "./components/Order/Order";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/order" element={<Order />} />
      </Routes>
    </div>
  );
}

export default App;
