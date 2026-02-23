const BASE_URL = import.meta.env.VITE_BASE_URL;

// Obtengo al candidato por el mail haciendo un get a la api.
export async function getCandidateByEmail(email) {
  const response = await fetch(
    `${BASE_URL}/api/candidate/get-by-email?email=${email}`
  );

  if (!response.ok) {
    throw new Error("Error al obtener los datos del candidato.");
  }

  return response.json();
}

// Obtener la lista de trabajos haciendo el get a las posiciones disponibles.
export async function getJobs() {
  const response = await fetch(`${BASE_URL}/api/jobs/get-list`);

  if (!response.ok) {
    throw new Error("Error al obtener las posiciones disponibles.");
  }

  return response.json();
}

// Aplica al trabajo haciendo un post.
export async function applyToJob(data) {
  const response = await fetch(
    `${BASE_URL}/api/candidate/apply-to-job`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }
  );

  if (!response.ok) {
    throw new Error("Error al aplicar al trabajo.");
  }

  return response.json();
}