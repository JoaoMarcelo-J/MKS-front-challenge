import { Home } from "./components/pages/home";
import { Provider } from "react-redux";
import store from "./store";

function App() {
  return (
    <div>
      <Provider store={store}>
        <Home />
      </Provider>
    </div>
  );
}

export default App;
