const express = require('express');
const app = express();
const routes = require('./routes');
const { errorHandler } = require('./errorHandler');

app.use(express.json());

// Use routes
app.use('/api', routes);

// Error handling middleware
app.use(errorHandler);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
