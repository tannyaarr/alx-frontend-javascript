import { RowID, RowElement } from './interface';

// Define type declarations for crud functions
declare module "crud" {
    export function insertRow(row: RowElement): RowID;
    export function deleteRow(rowId: RowID): void;
    export function updateRow(rowId: RowID, row: RowElement): RowID;
}
