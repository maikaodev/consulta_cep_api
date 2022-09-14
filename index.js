const app = require("./server");
const port = process.env.PORT || 3000;

app.listen(port, (error) => {
  if (error) {
    console.log(error);
  }
  console.log(`app running at http://localhost:${port}`);
});
