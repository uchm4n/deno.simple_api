import {Application, Router} from "./deps.ts";
import { Books } from "./src/Models/Books.ts";
import {Author} from "./src/Models/Author.ts";
const router = new Router();


router.get("/", async (context) => {
    context.response.body = "Book Simple API";
});

router.get("/books", async (context) => {
    context.response.body = await Books.all()
});
router.get("/books/:id", async (context) => {
    if (context.params && context.params.id) {
        context.response.body = await Books.where('id',context.params.id).all();
    }
});

router.get("/authors", async (context) => {
    context.response.body = await Author.all()
})

const app = new Application();
app.use(router.routes());
app.use(router.allowedMethods());

console.log('listening to: http://localhost:8000/ port')
await app.listen({port: 8000});
