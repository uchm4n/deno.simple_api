import {DATA_TYPES, Model, Database} from '../../deps.ts'


export class BaseModel extends Model {

    protected inst: Database;

    constructor() {
        super();
        this.inst = new Database('sqlite3', {filepath: './db.sqlite'});
    }

    link(inst:[typeof Model]): this {
        this.inst.link(inst)
        return this;
    }
}


