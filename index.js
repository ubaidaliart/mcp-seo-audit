const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
app.use(cors()); // ← Enables CORS support
app.use(bodyParser.json());

// Optional: root message
app.get("/", (req, res) => {
  res.json({
    message: "MCP SEO Audit Server",
    version: "1.0.0",
    endpoints: {
      "POST /tool/seo_audit": "Perform SEO audit on a URL"
    }
  });
});

// Main MCP tool endpoint
app.post("/tool/seo_audit", (req, res) => {
  const { url } = req.body;

  // Simulated audit result
  const result = {
    score: 72,
    issues: [
      "Missing meta description",
      "Multiple H1 tags",
      "No schema markup"
    ],
    recommendations: [
      "Add a unique meta description",
      "Use only one H1 tag",
      "Add schema markup with JSON-LD"
    ]
  };

  res.json(result);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`MCP SEO Audit server running on port ${PORT}`);
});

