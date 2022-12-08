import { Provider } from "react-redux";
import Navigation from "./Navigation";
import { store } from "./src/redux/store";
import { TablesContextProvider } from "./src/context/TablesContext";
export default function App() {
  return (
    <>
    <TablesContextProvider>
      <Provider store={store}>
          <Navigation />
      </Provider>
    </TablesContextProvider>

     
    </>
  );
}
