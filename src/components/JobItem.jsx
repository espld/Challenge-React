import { useState } from "react";
import { applyToJob } from "../services/api";

function JobItem({ job, candidate }) {
  const [repoUrl, setRepoUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async () => {
    setError(null);
    setSuccess(false);

    if (!repoUrl) {
      setError("Ingresa la URL del repositorio.");
      return;
    }

    try {
      setLoading(true);

      await applyToJob({
        uuid: candidate.uuid,
        jobId: job.id,
        candidateId: candidate.candidateId,
        repoUrl: repoUrl,
      });

      setSuccess(true);
      setRepoUrl("");
    } catch (err) {
      setError("Error al aplicar. Intenta de nuevo.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="job-card">
      <h3>{job.title}</h3>

      <input
        type="text"
        placeholder="https://github.com/your-user/your-repo"
        value={repoUrl}
        onChange={(e) => setRepoUrl(e.target.value)}
        disabled={loading}
      />

      <button onClick={handleSubmit} disabled={loading}>
        {loading ? "Enviando..." : "Enviar"}
      </button>

      {error && <p className="error">{error}</p>}
      {success && <p className="success">Enviado correctamente.</p>}
    </div>
  );
}

export default JobItem;