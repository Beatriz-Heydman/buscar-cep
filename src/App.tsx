// Libs
import { ToastContainer } from "react-toastify";

// Components
import { Flex } from "./components";

// Types
import { HomeView } from "./pages/home";

function App() {
  return (
    <Flex
      className="background_image"
      justifyContent="center"
      alignItems="center"
    >
      <ToastContainer
        autoClose={6000}
        position="top-right"
        theme="light"
        stacked
      />

      <HomeView />
    </Flex>
  );
}

export default App;
