document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("check-backend").addEventListener("click", checkBackend);
  document.getElementById("submit-attendance").addEventListener("click", submitAttendance);
  document.getElementById("download-csv").addEventListener("click", downloadCSV);
});

const API_URL = "http://localhost:5000"; // match your backend

function checkBackend() {
  fetch(API_URL + "/")
    .then(res => res.text())
    .then(data => {
      document.getElementById("message").innerText = data;
      document.getElementById("message").className = "success";
    })
    .catch(() => {
      document.getElementById("message").innerText = "❌ Error connecting to backend.";
      document.getElementById("message").className = "error";
    });
}

function submitAttendance() {
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;

  if (!name || !email) {
    document.getElementById("message").innerText = "❌ Name and Email are required.";
    document.getElementById("message").className = "error";
    return;
  }

  fetch(API_URL + "/attendance", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name, email })
  })
    .then(res => res.json())
    .then(data => {
      document.getElementById("message").innerText = "✅ " + data.message;
      document.getElementById("message").className = "success";
    })
    .catch(() => {
      document.getElementById("message").innerText = "❌ Error submitting attendance.";
      document.getElementById("message").className = "error";
    });
}

function downloadCSV() {
  window.open(API_URL + "/download", "_blank");
}
