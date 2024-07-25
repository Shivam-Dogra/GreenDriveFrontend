import express from 'express';
import { exec } from 'child_process';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

// Get __dirname in ES module scope
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const PORT = 3000;

// Serve static files
app.use(express.static(path.join(__dirname, '..', 'public')));

// API endpoint to generate plot
app.get('/api/generate-plot', (req, res) => {
  exec('python ./jupyter_notebook/generatePlot.py', (error, stdout, stderr) => {
    if (error) {
      console.error(`Error executing Python script: ${error}`);
      return res.status(500).send('Server Error');
    }
    if (stderr) {
      console.error(`Python script stderr: ${stderr}`);
    }
    console.log(`Python script stdout: ${stdout}`);
    res.json({ message: 'Plot generated successfully', imagePath: '/images/ev_sales_plot.png' });
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
