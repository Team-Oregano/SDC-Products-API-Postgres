const app = require('./server/app');

const port = process.env.PORT || 4000;

app.listen(port, () => {
  console.log(`Listening on ${port} in ${process.env.NODE_ENV} mode`);
});
