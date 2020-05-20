import {DATA_TYPES, Model, Database} from '../../deps.ts'
import {BaseModel} from "./BaseModel.ts"


export class Author extends BaseModel {
    static table = 'Books'
    static timestamps = true
    public db: Database

    constructor() {
        super()
        this.db = this.inst;
        this.link([Author])
    }

    // initiate for testing
    static async init() {
        await (new Author()).db.sync({ drop: false })
        await this.create([
            {
                name : 'UchMan',
                status: 'Writer',
            },
        ])
    }

    static fields = {
        id: {primaryKey: true, autoIncrement: true,},
        name: DATA_TYPES.STRING,
        status: DATA_TYPES.STRING,
    }
}

await Author.init();

