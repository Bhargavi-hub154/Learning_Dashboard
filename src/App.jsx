import { useState } from "react";
import Navbar from "./components/Navbar";
import Dashboard from "./pages/Dashboard";
import Modules from "./pages/Modules";
import Calendar from "./pages/Calendar";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import ModuleDetails from "./pages/ModuleDetails";
import { modulesData } from "./data/modulesData";

function App() {
  const [page, setPage] = useState("login");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);
  const [modules, setModules] = useState(modulesData);
  const [selectedModuleId, setSelectedModuleId] = useState(null);

  const selectedModule = modules.find(
    (m) => m.id === selectedModuleId
  );

  
  if (!isLoggedIn) {
    if (page === "signup") {
      return <Signup setPage={setPage} />;
    }
    return (
      <Login
        setIsLoggedIn={setIsLoggedIn}
        setPage={setPage}
        setUser={setUser}
      />
    );
  }

  return (
    <>
      <Navbar
        setPage={(newPage) => {
          setPage(newPage);
          setSelectedModuleId(null);
        }}
      />

      {page === "dashboard" && (
        <Dashboard modules={modules} user={user} />
      )}

      {page === "calendar" && <Calendar />}

      {/* MODULES SECTION */}
      {page === "modules" && (
        selectedModuleId === null ? (
          <Modules
            modules={modules}
            setModules={setModules}
            onSelectModule={(id) => setSelectedModuleId(id)}
          />
        ) : (
          <ModuleDetails
            module={selectedModule}
            setModules={setModules}
            goBack={() => setSelectedModuleId(null)}
          />
        )
      )}
    </>
  );
}

export default App;