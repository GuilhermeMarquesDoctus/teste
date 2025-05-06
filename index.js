import axios from "axios";

const syncURL = "https://httpbin.org/get?endpoint=sync";
const refreshURL = "https://httpbin.org/get?endpoint=refresh";

async function run() {
  try {
    console.log("Running scheduled sync...");

    const syncRes = await axios.get(syncURL);
    console.log("Sync response:", syncRes.status);

    const refreshRes = await axios.get(refreshURL);
    console.log("Refresh response:", refreshRes.status);

    console.log("Completed.");
  } catch (err) {
    console.error("Error calling endpoints:", err.message);
  }
}

run();
