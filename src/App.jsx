import { useEffect, useState } from "react";
import { getCandidateByEmail, getJobs } from "./services/api";
import JobList from "./components/JobList";
import "./App.css";

const EMAIL = import.meta.env.VITE_CANDIDATE_EMAIL;

function App() {
  const [candidate, setCandidate] = useState(null);
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const candidateData = await getCandidateByEmail(EMAIL);
        const jobsData = await getJobs();

        setCandidate(candidateData);
        setJobs(jobsData);
      } catch (err) {
        setError("No se encuentra al candidato con ese email.");
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  if (loading) return <p className="center">Cargando...</p>;
  if (error) return <p className="center error">{error}</p>;

  return (
    <div className="container">
      <h1>
        Posiciones disponibles
      </h1>
      <JobList jobs={jobs} candidate={candidate} />
    </div>
  );
}

export default App;