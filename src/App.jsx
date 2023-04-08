import { QueryClient, QueryClientProvider } from "react-query";
import "./App.css";
import HindiQuotes from "./components/HindiQuotes";
const queryclient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryclient}>
      <div className="App">
        <HindiQuotes />
      </div>
    </QueryClientProvider>
  );
}

export default App;
