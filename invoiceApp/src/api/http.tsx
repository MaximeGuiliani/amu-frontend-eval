const SUPABASE_URL =
  "https://frdixacpxwhtyrnvmbhp.supabase.co/rest/v1/Customers";
const SUPABASE_API_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZyZGl4YWNweHdodHlybnZtYmhwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDg5NTUwNDAsImV4cCI6MjAyNDUzMTA0MH0.52ISd5WJASST2YlF-pFXrEOsv9cNGxszhTabN7W4qtA";

/**
 * Permet de modifier le statut de la tâche dans l'API
 * @param {number} id
 * @param {boolean} status
 * @returns Promise<{id: number, done: boolean, text: string}>
 */
const getAllCustomers = async () => {
  const response = await fetch(`${SUPABASE_URL}?select=*`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      apiKey: SUPABASE_API_KEY,
      Prefer: "return=representation",
    },
  });
  return await response.json();
};

export default getAllCustomers;
export { getAllCustomers };
