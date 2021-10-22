import ContainerIndex from "../containers/index";
import { BrowserRouter } from "react-router-dom";
import bootstrapCss from "bootstrap/dist/css/bootstrap.min.css";
function App() {
  return (
    <div>
      <BrowserRouter>
        <ContainerIndex />
      </BrowserRouter>
    </div>
  );
}

export default App;
