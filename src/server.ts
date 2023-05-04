import app from './app';

const PORT = app.get('port');

app.listen(PORT, () => {
  console.log(`
  ################################################
  🛡️  Server listening on port: ${PORT}🛡️
  ################################################
`);
});
