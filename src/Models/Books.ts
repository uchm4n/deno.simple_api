import {DATA_TYPES, Model, Database} from '../../deps.ts'
import {BaseModel} from "./BaseModel.ts"


export class Books extends BaseModel {
    static table = 'Books'
    static timestamps = true
    public db: Database

    constructor() {
        super()
        this.db = this.inst;
        this.link([Books])
    }

    // initiate for testing
    static async init() {
        await (new Books()).db.sync({ drop: false })
        await this.create([
            {
                title : 'Title of Book 1',
                body: 'Description of Book 1',
                author_id: 1,
            },
            {
                title : 'Title of Book 2',
                body: 'Description of Book 2',
                author_id: 1,
            },
        ])
    }

    static fields = {
        id: {primaryKey: true, autoIncrement: true,},
        title: DATA_TYPES.STRING,
        body: DATA_TYPES.STRING,
        author_id: DATA_TYPES.INTEGER,
    }
}

await Books.init();
