import app from "./app";

const PORT = app.get('port');

app.listen(PORT)
console.log(`server listening on port ${PORT}`);

