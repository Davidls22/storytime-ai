import app from "./app.js";
import { connectToDatabase } from "./db/connection.js";
const PORT = process.env.PORT || 5006;
connectToDatabase()
    .then(() => {
    app.listen(PORT, () => console.log("Server Open and connected to database ;)"));
})
    .catch((err) => {
    console.log(err);
});
//# sourceMappingURL=index.js.map