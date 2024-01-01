import { BrowserRouter, Route, Routes } from "react-router-dom";
import Associate from "./components/Associate";
import Chat from "./components/Chat";
import Layout from "./components/Layout";
import Members from "./components/Members";
import MetricsView from "./components/MetricsView";
import QuickResponse from "./components/QuickResponse";
import Relationships from "./components/Relationships";
import Stack from "./components/Stack";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          {/* <Route element={<PrivateComponent />}> */}
          {/* define private route here  */}
          {/* </Route> */}

          <Route
            path="/"
            element={<Layout Component={<div>Home page</div>} />}
          />

          <Route
            path="/metrics-view"
            element={<Layout Component={MetricsView} />}
          />
          <Route
            path="/relationship"
            element={<Layout Component={Relationships} />}
          />
          <Route path="/chat" element={<Layout Component={Chat} />} />
          <Route path="/associate" element={<Layout Component={Associate} />} />
          <Route
            path="/quick-response"
            element={<Layout Component={QuickResponse} />}
          />
          <Route path="/member" element={<Layout Component={Members} />} />
          <Route path="/stack" element={<Layout Component={Stack} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
