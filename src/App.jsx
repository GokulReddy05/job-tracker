import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";

import Dashboard from "./components/Dashboard";
import Landing from "./components/Landing";
import Jobs from "./components/Jobs";
import JobDetails from "./components/JobDetails";
import Applications from "./components/Applications";

function App() {
  const [applications, setApplications] = useState(() => {
    const savedApplications = localStorage.getItem("applications");

    return savedApplications
      ? JSON.parse(savedApplications)
      : [];
  });

  useEffect(() => {
    localStorage.setItem(
      "applications",
      JSON.stringify(applications)
    );
  }, [applications]);

  function applyForJob(job) {
    const alreadyApplied = applications.some(
      (application) => application.jobId === job.id
    );

    if (alreadyApplied) {
      return;
    }

    const newApplication = {
      jobId: job.id,
      jobCompany: job.company,
      jobRole: job.role,
      status: "Applied",
      appliedDate: Date.now()
    };

    setApplications((prevApplications) => [
      ...prevApplications,
      newApplication
    ]);
  }

  return (
    <BrowserRouter>
      <Routes>

        <Route
          path="/"
          element={<Landing />}
        />

        <Route
          path="/dashboard"
          element={
            <Dashboard applications={applications} />
          }
        />

        <Route
          path="/jobs"
          element={<Jobs />}
        />

        <Route
          path="/jobs/:id"
          element={
            <JobDetails
              applyForJob={applyForJob}
              applications={applications}
            />
          }
        />

        <Route
          path="/applications"
          element={
            <Applications applications={applications} />
          }
        />

      </Routes>
    </BrowserRouter>
  );
}

export default App;