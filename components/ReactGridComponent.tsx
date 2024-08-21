"use client";

import { useState, useMemo, useEffect } from "react";
import { CellChange, Column, DropdownCell, NumberCell, ReactGrid, Row, TextCell } from "@silevis/reactgrid";
import "@silevis/reactgrid/styles.css";
import countriesData from "../country.json";
import genericsData from "../gender.json";
import colorData from "../color_80.json";
// import branchData from "../branch.json";
import { getProduct } from "../data"
import { Template } from "../types"

// const delay = (ms: number) => new Promise(res => setTimeout(res, ms));

const getColumns = () => [
    { columnId: "categories", width: 150, resizable: true },
    { columnId: "composition", width: 150, resizable: true },
    { columnId: "variant_id", width: 150, resizable: true },
    { columnId: "product_type", width: 150, resizable: true },
    { columnId: "department_code", width: 150, resizable: true },
    { columnId: "line_code", width: 150, resizable: true },
    { columnId: "title", width: 150, resizable: true },
    { columnId: "description", width: 150, resizable: true },
    { columnId: "color_80", width: 150, resizable: true },
    { columnId: "estilo_zap_lov", width: 150, resizable: true },
    { columnId: "gender", width: 150, resizable: true },
    { columnId: "made_in", width: 150, resizable: true },
];

const headerRow: Row = {
    rowId: "header",
    cells: [
        { type: "header", text: "Categorias" },
        { type: "header", text: "Composition" },
        { type: "header", text: "variant_id" },
        { type: "header", text: "product_type" },
        { type: "header", text: "department_code" },
        { type: "header", text: "line_code" },
        { type: "header", text: "Titulo" },
        { type: "header", text: "Descripcion" },
        { type: "header", text: "Color 80" },
        { type: "header", text: "estilo_zap_lov" },
        { type: "header", text: "genero_" },
        { type: "header", text: "pais_fabricacion" },
    ],
};

let callCountCountries = 0;
const getCountriesList = () => {
    callCountCountries++;
    console.log(`getCountriesList() ha sido llamado ${callCountCountries} veces`);
    return countriesData[0].attributes_values.map((country) => ({
        id: country.code,
        text: country.label,
    }));
};

const countriesListValues = getCountriesList().map((c) => ({ label: c.id, value: c.id }));

let callCountGenerics = 0;
const getGenericsList = () => {
    callCountGenerics++;
    console.log(`getGenericsList() ha sido llamado ${callCountGenerics} veces`);
    return genericsData[0].attributes_values.map((gender) => ({
        id: gender.code,
        text: gender.label,
    }));
};

const genericsListValues = getGenericsList().map((c) => ({ label: c.id, value: c.id }));

let callCountColor = 0;
const getColorList = () => {
    callCountColor++;
    console.log(`getColorList() ha sido llamado ${callCountColor} veces`);
    return colorData[0].attributes_values.map((color) => ({
        id: color.code,
        text: color.label,
    }));
};

const colorsListValues = getColorList().map((c) => ({ label: c.id, value: c.id }));

// const loadBranchData = async () => {
//     await delay(1000); // Simulate a delay for loading
//     return branchData[0].attributes_values.map((branch) => ({
//         label: branch.code,
//         value: branch.label,
//     }));
// };

// const useLazyLoadedBranchList = () => {
//     const [branchList, setBranchList] = useState<{ label: string, value: string }[]>([]);
//     const [filteredBranchList, setFilteredBranchList] = useState(branchList);
//     const [loading, setLoading] = useState(true);

//     useEffect(() => {
//         const fetchData = async () => {
//             const data = await loadBranchData();
//             setBranchList(data);
//             setFilteredBranchList(data);
//             setLoading(false);
//         };
//         fetchData();
//     }, []);

//     const filterBranchList = (input: string) => {
//         if (!input) {
//             setFilteredBranchList(branchList);
//         } else {
//             const filtered = branchList.filter(branch =>
//                 branch.label.toLowerCase().includes(input.toLowerCase())
//             );
//             setFilteredBranchList(filtered);
//         }
//     };

//     return { filteredBranchList, loading, filterBranchList };
// };


const getRows = (
    products: Template[],
    // branchListValues: { label: string, value: string }[], 
    // filterBranchList: (input: string) => void
) => [
        headerRow,
        ...products.map((product, idx) => ({
            rowId: idx,
            cells: [
                {
                    type: "text",
                    text: product.categories,
                    nonEditable: product.props?.nonEditable,
                },
                {
                    type: "text",
                    text: product.composition,
                    nonEditable: product.props?.nonEditable,
                },
                {
                    type: "number",
                    value: product.variant_id,
                    nonEditable: product.props?.nonEditable,
                },
                {
                    type: "number",
                    value: product.product_type,
                    nonEditable: product.props?.nonEditable,
                },
                {
                    type: "number",
                    value: product.department_code,
                    nonEditable: product.props?.nonEditable,
                },
                {
                    type: "number",
                    value: product.line_code,
                    nonEditable: product.props?.nonEditable,
                },
                {
                    type: "text",
                    text: product.title,
                    nonEditable: product.props?.nonEditable,
                },
                {
                    type: "text",
                    text: product.description,
                    nonEditable: product.props?.nonEditable,
                },
                {
                    type: "dropdown",
                    selectedValue: product.color_80.name,
                    isOpen: product.color_80.isOpen,
                    values: colorsListValues,
                },
                {
                    type: "text",
                    text: product.estilo_zap_lov,
                    nonEditable: product.props?.nonEditable,
                },
                ...(!product.composition.includes("VARIANTE") ? [{
                    type: "dropdown",
                    selectedValue: product.gender.name,
                    isOpen: product.gender.isOpen,
                    values: genericsListValues,
                    nonEditable: product.gender.props?.nonEditable,
                    style: {
                        backgroundColor: product.gender.props?.backgroundColor
                    }
                }] : [{
                    type: "text",
                    text: '',
                    nonEditable: product.gender.props?.nonEditable,
                }]),
                {
                    type: "dropdown",
                    selectedValue: product.made_in.name,
                    isOpen: product.made_in.isOpen,
                    values: countriesListValues
                },
            ],
        })),
    ];

const applyChangesToProduct = (change: any, prevProduct: Template[]) => {
    const rowIndex = change.rowId;
    const columnName = change.columnId;

    if (change.type === "text") {
        prevProduct[rowIndex][columnName] = change.newCell.text;
    }

    if (change.type === "number") {
        prevProduct[rowIndex][columnName] = change.newCell.value;
    }

    if (change.type === "dropdown") {
        if (change.newCell.selectedValue !== change.previousCell.selectedValue) {
            prevProduct[rowIndex][columnName].name = change.newCell.selectedValue;
        }
        prevProduct[rowIndex][columnName].isOpen = change.newCell.isOpen;
    }
    return [...prevProduct];
};

const App = () => {
    const [product, setProduct] = useState(getProduct());
    const [columns, setColumns] = useState<Column[]>(getColumns());
    // const { filteredBranchList, loading, filterBranchList } = useLazyLoadedBranchList();

    const rows = getRows(
        product,
        // filteredBranchList, 
        // filterBranchList
    );
    const handleColumnResize = (ci: Id, width: number) => {
        setColumns((prevColumns) => {
            const columnIndex = prevColumns.findIndex(el => el.columnId === ci);
            const resizedColumn = prevColumns[columnIndex];
            const updatedColumn = { ...resizedColumn, width };
            prevColumns[columnIndex] = updatedColumn;
            return [...prevColumns];
        });
    }

    const handleChanges = (changes: CellChange<DropdownCell | TextCell | NumberCell>[]) => {
        changes.forEach((change) => {
            setProduct((prevProduct) => applyChangesToProduct(change, prevProduct));
        });

    };

    return (
        <>
            <ReactGrid rows={rows} stickyTopRows={1} enableRangeSelection enableFillHandle columns={columns} onCellsChanged={handleChanges} onColumnResized={handleColumnResize} />
        </>
    );
};

export default App;