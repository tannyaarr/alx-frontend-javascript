
// Triple slash directive to include dependencies from crud.d.ts
/// <reference path="./js/crud.d.ts" />

// Import RowID and RowElement from interface.ts
import { RowID, RowElement } from './interface';
// Import everything from crud.js as CRUD
import * as CRUD from './js/crud';

// Create an object called row with the type RowElement
const row: RowElement = {
    firstName: "Guillaume",
    lastName: "Salva"
};

// Create a const variable named newRowID with the type RowID
const newRowID: RowID = CRUD.insertRow(row);

// Create a const variable named updatedRow with the type RowElement
const updatedRow: RowElement = { ...row, age: 23 };

// Call the updateRow and deleteRow commands
CRUD.updateRow(newRowID, updatedRow);
CRUD.deleteRow(newRowID);
