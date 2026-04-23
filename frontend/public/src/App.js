import React, { useEffect, useState } from "react";

function App() {
  const [status, setStatus] = useState("Checking...");
  const [color, setColor] = useState("#facc15");

  useEffect(() => {
    fetch("/api/health")
      .then((res) => res.json())
      .then((data) => {
        if (data.status === "ok") {
          setStatus("Backend is Healthy ✅");
          setColor("#22c55e");
        } else {
          setStatus("Backend Issue ⚠️");
          setColor("#f97316");
        }
      })
      .catch(() => {
        setStatus("Backend Not Reachable ❌");
        setColor("#ef4444");
      });
  }, []);

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h1 style={styles.title}>🚀 DevOps Demo App</h1>

        <p style={styles.subtitle}>
          CI/CD Pipeline • AWS • Docker • GitHub Actions
        </p>

        <div style={{ ...styles.statusBox, borderColor: color }}>
          <span style={{ color }}>{status}</span>
        </div>

        <div style={styles.footer}>
          <p>Environment: Staging / Production</p>
          <p>Powered by Node.js + React</p>
        </div>
      </div>
    </div>
  );
}

const styles = {
  container: {
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "linear-gradient(135deg, #0f172a, #1e293b)",
    fontFamily: "Arial, sans-serif",
  },
  card: {
    padding: "40px",
    borderRadius: "16px",
    background: "#111827",
    boxShadow: "0 10px 30px rgba(0,0,0,0.5)",
    textAlign: "center",
    width: "400px",
  },
  title: {
    color: "#e2e8f0",
    marginBottom: "10px",
  },
  subtitle: {
    color: "#94a3b8",
    fontSize: "14px",
    marginBottom: "30px",
  },
  statusBox: {
    padding: "15px",
    borderRadius: "10px",
    border: "2px solid",
    fontSize: "18px",
    fontWeight: "bold",
    marginBottom: "20px",
  },
  footer: {
    color: "#64748b",
    fontSize: "12px",
  },
};

export default App;
