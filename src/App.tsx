import { AppProvider } from "@/components";
import { AppRouter } from "@/router";

function App() {
  return (
    <AppProvider>
      <AppRouter />
    </AppProvider>
  );
}

export default App;
