const SUPABASE_URL = "https://owxvghipttsumolkqwmf.supabase.co/rest/v1/todos";
const SUPABASE_API_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im93eHZnaGlwdHRzdW1vbGtxd21mIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDgzNTE0MDgsImV4cCI6MjAyMzkyNzQwOH0.vnBMSn8pf8lJH8oGisLy3hTx73CmnwCRc3v0zQavczc";

/**
 * Permet de modifier le statut de la tâche dans l'API
 * @param {number} id
 * @param {boolean} status
 * @returns Promise<{id: number, done: boolean, text: string}>
 */
const toggleTaskInApi = (id: number, status: boolean) => {
  return fetch(`${SUPABASE_URL}?id=eq.${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      apiKey: SUPABASE_API_KEY,
      Prefer: "return=representation",
    },
    body: JSON.stringify({ done: status }),
  });
};
export default toggleTaskInApi;
export { toggleTaskInApi };
