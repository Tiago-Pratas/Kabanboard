import { Column } from './column.model'
export class Board {
    constructor (name: string, public columns: Column[]) {

    }
}