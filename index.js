import axios from "axios";

const secret = process.env.CRON_SECRET;

const syncURL = "https://httpbin.org/get?endpoint=sync";
const refreshURL = "https://httpbin.org/get?endpoint=refresh";

async function run() {
  try {
    console.log("Running scheduled sync...");
    console.log("Secret:", secret);

    await axios.get(syncURL, {
      headers: {
        "X-Cron-Secret": secret,
      },
    });
    console.log("Sync response:", syncRes.status);

    await axios.get(refreshURL, {
      headers: {
        "X-Cron-Secret": secret,
      },
    });
    console.log("Refresh response:", refreshRes.status);

    console.log("Completed.");
  } catch (err) {
    console.error("Error calling endpoints:", err.message);
  }
}

run();
