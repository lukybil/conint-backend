import app from './app';
const host = process.env.BACKEND_HOST || 'localhost';
const port = process.env.BACKEND_PORT
  ? Number.parseInt(process.env.BACKEND_PORT)
  : 10001;

app.listen(port, host, () => {
  console.log(`Monster cards backend app listening on ${host}:${port}`);
});
