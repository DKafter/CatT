import { useRef } from "react";
import { CatsComponent } from "./components/CatsComponent";

function App() {
  const catsPerPage = useRef(1);
  const page = useRef(2);

  return (
    <>
      <CatsComponent catsPerPage={catsPerPage.current} page={page.current} />
    </>
  );
}

export default App;
