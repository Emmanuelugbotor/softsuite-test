import { Suspense } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Layout from "./layout";

import routes from "./routes";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<Navigate replace to="/dashboard" />} />
        {routes.map(({ path, component: Component }) => (
          <Route
            key={path}
            path={path}
            element={
              <Suspense>
                <Component />
              </Suspense>
            }
          />
        ))}
      </Route>
    </Routes>
  );
}

export default App;
