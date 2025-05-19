const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('<h1>ยินดีต้อนรับสู่ DevOps Demo</h1>');
});

app.get('/api/status', (req, res) => {
  res.json({
    status: 'online',
    timestamp: new Date(),
    port: port
  });
});

app.get('/health', (req, res) => {
  res.json({ status: 'healthy', timestamp: new Date() });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
