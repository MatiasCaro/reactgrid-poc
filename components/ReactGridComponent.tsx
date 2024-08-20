"use client";

import { useState } from "react";
import { CellChange, Column, DropdownCell, NumberCell, ReactGrid, Row, TextCell } from "@silevis/reactgrid";
import "@silevis/reactgrid/styles.css";
import countriesData from "../country.json";
import genericsData from "../gender.json";
import branchData from "../branch.json";

interface Template {
    categories: string;
    composition: string;
    variant_id: number;
    product_type: number;
    department_code: number;
    line_code: number;
    title: string;
    description: string;
    branch: any;
    estilo_zap_lov: string;
    gender: any;
    made_in: any;
    props?: any;
}

const getProduct = (): Template[] => [
    {
        categories: "CALZADO>BOTAS",
        composition: "BASE",
        variant_id: 2,
        product_type: 3,
        department_code: 4,
        line_code: 2,
        title: "BOTIN COLORADO CAT HOMBRE",
        description: "",
        branch: {
            type: "dropdown",
            name: "",
            isOpen: false
        },
        estilo_zap_lov: "",
        gender: {
            type: "dropdown",
            name: "Hombre",
            isOpen: false
        },
        made_in: {
            type: "dropdown",
            name: "",
            isOpen: false
        },
    },
    {
        categories: "CALZADO>ZAPATILLAS",
        composition: "VARIANTE",
        variant_id: 2,
        product_type: 3,
        department_code: 4,
        line_code: 2,
        title: "ZAPATILLAS NIKE 3452",
        description: "LAS MEJORES ZAPATILLAS PARA EL OUTDOOR",
        branch: {
            type: "dropdown",
            name: "NIKE",
            isOpen: false
        },
        estilo_zap_lov: "Zapatilla",
        gender: {
            type: "dropdown",
            name: "Unisex",
            isOpen: false
        },
        made_in: {
            type: "dropdown",
            name: "Australia",
            isOpen: false
        },
    },
    {
        categories: "CALZADO>BOTAS",
        composition: "BASE",
        variant_id: 2,
        product_type: 3,
        department_code: 4,
        line_code: 2,
        title: "BOTIN COLORADO CAT HOMBRE",
        description: "",
        branch: {
            type: "dropdown",
            name: "",
            isOpen: false
        },
        estilo_zap_lov: "",
        gender: {
            type: "dropdown",
            name: "Hombre",
            isOpen: false
        },
        made_in: {
            type: "dropdown",
            name: "",
            isOpen: false
        },
    },
    {
        categories: "CALZADO>ZAPATILLAS",
        composition: "VARIANTE",
        variant_id: 2,
        product_type: 3,
        department_code: 4,
        line_code: 2,
        title: "ZAPATILLAS NIKE 3452",
        description: "LAS MEJORES ZAPATILLAS PARA EL OUTDOOR",
        branch: {
            type: "dropdown",
            name: "NIKE",
            isOpen: false
        },
        estilo_zap_lov: "Zapatilla",
        gender: {
            type: "dropdown",
            name: "Unisex",
            isOpen: false
        },
        made_in: {
            type: "dropdown",
            name: "Australia",
            isOpen: false
        },
    },
    {
        categories: "CALZADO>BOTAS",
        composition: "BASE",
        variant_id: 2,
        product_type: 3,
        department_code: 4,
        line_code: 2,
        title: "BOTIN COLORADO CAT HOMBRE",
        description: "",
        branch: {
            type: "dropdown",
            name: "",
            isOpen: false
        },
        estilo_zap_lov: "",
        gender: {
            type: "dropdown",
            name: "Hombre",
            isOpen: false
        },
        made_in: {
            type: "dropdown",
            name: "",
            isOpen: false
        },
    },
    {
        categories: "CALZADO>ZAPATILLAS",
        composition: "VARIANTE",
        variant_id: 2,
        product_type: 3,
        department_code: 4,
        line_code: 2,
        title: "ZAPATILLAS NIKE 3452",
        description: "LAS MEJORES ZAPATILLAS PARA EL OUTDOOR",
        branch: {
            type: "dropdown",
            name: "NIKE",
            isOpen: false
        },
        estilo_zap_lov: "Zapatilla",
        gender: {
            type: "dropdown",
            name: "Unisex",
            isOpen: false
        },
        made_in: {
            type: "dropdown",
            name: "Australia",
            isOpen: false
        },

    },
    {
        categories: "CALZADO>BOTAS",
        composition: "BASE",
        variant_id: 2,
        product_type: 3,
        department_code: 4,
        line_code: 2,
        title: "BOTIN COLORADO CAT HOMBRE",
        description: "",
        branch: {
            type: "dropdown",
            name: "NIKE",
            isOpen: false
        },
        estilo_zap_lov: "",
        gender: {
            type: "dropdown",
            name: "Mujer",
            isOpen: false,
            props: {
                nonEditable: false,
                backgroundColor: "#ffa5a5"
            },
        },
        made_in: {
            type: "dropdown",
            name: "",
            isOpen: false
        },
    },
    {
        categories: "CALZADO>ZAPATILLAS",
        composition: "VARIANTE",
        variant_id: 2,
        product_type: 3,
        department_code: 4,
        line_code: 2,
        title: "ZAPATILLAS NIKE 3452",
        description: "LAS MEJORES ZAPATILLAS PARA EL OUTDOOR",
        branch: {
            type: "dropdown",
            name: "",
            isOpen: false
        },
        estilo_zap_lov: "Zapatilla",
        gender: {
            type: "text",
            name: "Unisex",
            isOpen: false,
            props: {
                nonEditable: true,
            },
        },
        made_in: {
            type: "dropdown",
            name: "Australia",
            isOpen: false
        },
    },
    {
        categories: "CALZADO>ZAPATILLAS",
        composition: "VARIANTE",
        variant_id: 2,
        product_type: 3,
        department_code: 4,
        line_code: 2,
        title: "ZAPATILLAS NIKE 3452",
        description: "LAS MEJORES ZAPATILLAS PARA EL OUTDOOR",
        branch: {
            type: "dropdown",
            name: "NIKE",
            isOpen: false
        },
        estilo_zap_lov: "Zapatilla",
        gender: {
            type: "text",
            name: "Unisex",
            isOpen: false,
            props: {
                nonEditable: true,
            },
        },
        made_in: {
            type: "dropdown",
            name: "Australia",
            isOpen: false
        },
    },
    {
        categories: "CALZADO>ZAPATILLAS",
        composition: "VARIANTE",
        variant_id: 2,
        product_type: 3,
        department_code: 4,
        line_code: 2,
        title: "ZAPATILLAS NIKE 3452",
        description: "LAS MEJORES ZAPATILLAS PARA EL OUTDOOR",
        branch: {
            type: "dropdown",
            name: "NIKE",
            isOpen: false
        },
        estilo_zap_lov: "Zapatilla",
        gender: {
            type: "text",
            name: "Unisex",
            isOpen: false,
            props: {
                nonEditable: true,
            },
        },
        made_in: {
            type: "dropdown",
            name: "Australia",
            isOpen: false
        },
    },
    {
        categories: "CALZADO>ZAPATILLAS",
        composition: "VARIANTE",
        variant_id: 2,
        product_type: 3,
        department_code: 4,
        line_code: 2,
        title: "ZAPATILLAS NIKE 3452",
        description: "LAS MEJORES ZAPATILLAS PARA EL OUTDOOR",
        branch: {
            type: "dropdown",
            name: "NIKE",
            isOpen: false
        },
        estilo_zap_lov: "Zapatilla",
        gender: {
            type: "text",
            name: "Unisex",
            isOpen: false,
            props: {
                nonEditable: true,
            },
        },
        made_in: {
            type: "dropdown",
            name: "Australia",
            isOpen: false
        },
    },
    {
        categories: "CALZADO>ZAPATILLAS",
        composition: "VARIANTE",
        variant_id: 2,
        product_type: 3,
        department_code: 4,
        line_code: 2,
        title: "ZAPATILLAS NIKE 3452",
        description: "LAS MEJORES ZAPATILLAS PARA EL OUTDOOR",
        branch: {
            type: "dropdown",
            name: "NIKE",
            isOpen: false
        },
        estilo_zap_lov: "Zapatilla",
        gender: {
            type: "text",
            name: "Unisex",
            isOpen: false,
            props: {
                nonEditable: true,
            },
        },
        made_in: {
            type: "dropdown",
            name: "Australia",
            isOpen: false
        },
    },
    {
        categories: "CALZADO>ZAPATILLAS",
        composition: "VARIANTE",
        variant_id: 2,
        product_type: 3,
        department_code: 4,
        line_code: 2,
        title: "ZAPATILLAS NIKE 3452",
        description: "LAS MEJORES ZAPATILLAS PARA EL OUTDOOR",
        branch: {
            type: "dropdown",
            name: "NIKE",
            isOpen: false
        },
        estilo_zap_lov: "Zapatilla",
        gender: {
            type: "text",
            name: "Unisex",
            isOpen: false,
            props: {
                nonEditable: true,
            },
        },
        made_in: {
            type: "dropdown",
            name: "Australia",
            isOpen: false
        },
    },
    {
        categories: "CALZADO>ZAPATILLAS",
        composition: "VARIANTE",
        variant_id: 2,
        product_type: 3,
        department_code: 4,
        line_code: 2,
        title: "ZAPATILLAS NIKE 3452",
        description: "LAS MEJORES ZAPATILLAS PARA EL OUTDOOR",
        branch: {
            type: "dropdown",
            name: "NIKE",
            isOpen: false
        },
        estilo_zap_lov: "Zapatilla",
        gender: {
            type: "text",
            name: "Unisex",
            isOpen: false,
            props: {
                nonEditable: true,
            },
        },
        made_in: {
            type: "dropdown",
            name: "Australia",
            isOpen: false
        },
    },
    {
        categories: "CALZADO>ZAPATILLAS",
        composition: "VARIANTE",
        variant_id: 2,
        product_type: 3,
        department_code: 4,
        line_code: 2,
        title: "ZAPATILLAS NIKE 3452",
        description: "LAS MEJORES ZAPATILLAS PARA EL OUTDOOR",
        branch: {
            type: "dropdown",
            name: "NIKE",
            isOpen: false
        },
        estilo_zap_lov: "Zapatilla",
        gender: {
            type: "text",
            name: "Unisex",
            isOpen: false,
            props: {
                nonEditable: true,
            },
        },
        made_in: {
            type: "dropdown",
            name: "Australia",
            isOpen: false
        },
    },
    {
        categories: "CALZADO>ZAPATILLAS",
        composition: "VARIANTE",
        variant_id: 2,
        product_type: 3,
        department_code: 4,
        line_code: 2,
        title: "ZAPATILLAS NIKE 3452",
        description: "LAS MEJORES ZAPATILLAS PARA EL OUTDOOR",
        branch: {
            type: "dropdown",
            name: "NIKE",
            isOpen: false
        },
        estilo_zap_lov: "Zapatilla",
        gender: {
            type: "text",
            name: "Unisex",
            isOpen: false,
            props: {
                nonEditable: true,
            },
        },
        made_in: {
            type: "dropdown",
            name: "Australia",
            isOpen: false
        },
    },
    {
        categories: "CALZADO>ZAPATILLAS",
        composition: "VARIANTE",
        variant_id: 2,
        product_type: 3,
        department_code: 4,
        line_code: 2,
        title: "ZAPATILLAS NIKE 3452",
        description: "LAS MEJORES ZAPATILLAS PARA EL OUTDOOR",
        branch: {
            type: "dropdown",
            name: "NIKE",
            isOpen: false
        },
        estilo_zap_lov: "Zapatilla",
        gender: {
            type: "text",
            name: "Unisex",
            isOpen: false,
            props: {
                nonEditable: true,
            },
        },
        made_in: {
            type: "dropdown",
            name: "Australia",
            isOpen: false
        },
    },
    {
        categories: "",
        composition: "",
        variant_id: 0,
        product_type: 0,
        department_code: 0,
        line_code: 0,
        title: "",
        description: "",
        branch: {
            type: "dropdown",
            name: "",
            isOpen: false
        },
        estilo_zap_lov: "",
        gender: {
            type: "text",
            name: "",
            isOpen: false,
            props: {
                nonEditable: true,
            },
        },
        made_in: {
            type: "dropdown",
            name: "",
            isOpen: false
        },
    },
    {
        categories: "",
        composition: "",
        variant_id: 0,
        product_type: 0,
        department_code: 0,
        line_code: 0,
        title: "",
        description: "",
        branch: {
            type: "dropdown",
            name: "",
            isOpen: false
        },
        estilo_zap_lov: "",
        gender: {
            type: "text",
            name: "",
            isOpen: false,
            props: {
                nonEditable: true,
            },
        },
        made_in: {
            type: "dropdown",
            name: "",
            isOpen: false
        },
    },
    {
        categories: "",
        composition: "",
        variant_id: 0,
        product_type: 0,
        department_code: 0,
        line_code: 0,
        title: "",
        description: "",
        branch: {
            type: "dropdown",
            name: "",
            isOpen: false
        },
        estilo_zap_lov: "",
        gender: {
            type: "text",
            name: "",
            isOpen: false,
            props: {
                nonEditable: true,
            },
        },
        made_in: {
            type: "dropdown",
            name: "",
            isOpen: false
        },
    },
    {
        categories: "",
        composition: "",
        variant_id: 0,
        product_type: 0,
        department_code: 0,
        line_code: 0,
        title: "",
        description: "",
        branch: {
            type: "dropdown",
            name: "",
            isOpen: false
        },
        estilo_zap_lov: "",
        gender: {
            type: "text",
            name: "",
            isOpen: false,
            props: {
                nonEditable: true,
            },
        },
        made_in: {
            type: "dropdown",
            name: "",
            isOpen: false
        },
    },
    {
        categories: "",
        composition: "",
        variant_id: 0,
        product_type: 0,
        department_code: 0,
        line_code: 0,
        title: "",
        description: "",
        branch: {
            type: "dropdown",
            name: "",
            isOpen: false
        },
        estilo_zap_lov: "",
        gender: {
            type: "text",
            name: "",
            isOpen: false,
            props: {
                nonEditable: true,
            },
        },
        made_in: {
            type: "dropdown",
            name: "",
            isOpen: false
        },
    },
    {
        categories: "",
        composition: "",
        variant_id: 0,
        product_type: 0,
        department_code: 0,
        line_code: 0,
        title: "",
        description: "",
        branch: {
            type: "dropdown",
            name: "",
            isOpen: false
        },
        estilo_zap_lov: "",
        gender: {
            type: "text",
            name: "",
            isOpen: false,
            props: {
                nonEditable: true,
            },
        },
        made_in: {
            type: "dropdown",
            name: "",
            isOpen: false
        },
    },
    {
        categories: "",
        composition: "",
        variant_id: 0,
        product_type: 0,
        department_code: 0,
        line_code: 0,
        title: "",
        description: "",
        branch: {
            type: "dropdown",
            name: "",
            isOpen: false
        },
        estilo_zap_lov: "",
        gender: {
            type: "text",
            name: "",
            isOpen: false,
            props: {
                nonEditable: true,
            },
        },
        made_in: {
            type: "dropdown",
            name: "",
            isOpen: false
        },
    },
    {
        categories: "",
        composition: "",
        variant_id: 0,
        product_type: 0,
        department_code: 0,
        line_code: 0,
        title: "",
        description: "",
        branch: {
            type: "dropdown",
            name: "",
            isOpen: false
        },
        estilo_zap_lov: "",
        gender: {
            type: "text",
            name: "",
            isOpen: false,
            props: {
                nonEditable: true,
            },
        },
        made_in: {
            type: "dropdown",
            name: "",
            isOpen: false
        },
    },
    {
        categories: "",
        composition: "",
        variant_id: 0,
        product_type: 0,
        department_code: 0,
        line_code: 0,
        title: "",
        description: "",
        branch: {
            type: "dropdown",
            name: "",
            isOpen: false
        },
        estilo_zap_lov: "",
        gender: {
            type: "text",
            name: "",
            isOpen: false,
            props: {
                nonEditable: true,
            },
        },
        made_in: {
            type: "dropdown",
            name: "",
            isOpen: false
        },
    },
    {
        categories: "",
        composition: "",
        variant_id: 0,
        product_type: 0,
        department_code: 0,
        line_code: 0,
        title: "",
        description: "",
        branch: {
            type: "dropdown",
            name: "",
            isOpen: false
        },
        estilo_zap_lov: "",
        gender: {
            type: "text",
            name: "",
            isOpen: false,
            props: {
                nonEditable: true,
            },
        },
        made_in: {
            type: "dropdown",
            name: "",
            isOpen: false
        },
    },
    {
        categories: "",
        composition: "",
        variant_id: 0,
        product_type: 0,
        department_code: 0,
        line_code: 0,
        title: "",
        description: "",
        branch: {
            type: "dropdown",
            name: "",
            isOpen: false
        },
        estilo_zap_lov: "",
        gender: {
            type: "text",
            name: "",
            isOpen: false,
            props: {
                nonEditable: true,
            },
        },
        made_in: {
            type: "dropdown",
            name: "",
            isOpen: false
        },
    },
    {
        categories: "",
        composition: "",
        variant_id: 0,
        product_type: 0,
        department_code: 0,
        line_code: 0,
        title: "",
        description: "",
        branch: {
            type: "dropdown",
            name: "",
            isOpen: false
        },
        estilo_zap_lov: "",
        gender: {
            type: "text",
            name: "",
            isOpen: false,
            props: {
                nonEditable: true,
            },
        },
        made_in: {
            type: "dropdown",
            name: "",
            isOpen: false
        },
    },
    {
        categories: "",
        composition: "",
        variant_id: 0,
        product_type: 0,
        department_code: 0,
        line_code: 0,
        title: "",
        description: "",
        branch: {
            type: "dropdown",
            name: "",
            isOpen: false
        },
        estilo_zap_lov: "",
        gender: {
            type: "text",
            name: "",
            isOpen: false,
            props: {
                nonEditable: true,
            },
        },
        made_in: {
            type: "dropdown",
            name: "",
            isOpen: false
        },
    },
    {
        categories: "",
        composition: "",
        variant_id: 0,
        product_type: 0,
        department_code: 0,
        line_code: 0,
        title: "",
        description: "",
        branch: {
            type: "dropdown",
            name: "",
            isOpen: false
        },
        estilo_zap_lov: "",
        gender: {
            type: "text",
            name: "",
            isOpen: false,
            props: {
                nonEditable: true,
            },
        },
        made_in: {
            type: "dropdown",
            name: "",
            isOpen: false
        },
    },
];

const getColumns = () => [
    { columnId: "categories", width: 150, resizable: true },
    { columnId: "composition", width: 150, resizable: true },
    { columnId: "variant_id", width: 150, resizable: true },
    { columnId: "product_type", width: 150, resizable: true },
    { columnId: "department_code", width: 150, resizable: true },
    { columnId: "line_code", width: 150, resizable: true },
    { columnId: "title", width: 150, resizable: true },
    { columnId: "description", width: 150, resizable: true },
    { columnId: "branch", width: 150, resizable: true },
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
        { type: "header", text: "Marca" },
        { type: "header", text: "estilo_zap_lov" },
        { type: "header", text: "genero_" },
        { type: "header", text: "pais_fabricacion" },
    ],
};

const getCountriesList = () => {
    return countriesData[0].attributes_values.map((country) => ({
        id: country.code,
        text: country.label,
    }));
};

const getGenericsList = () => {
    return genericsData[0].attributes_values.map((gender) => ({
        id: gender.code,
        text: gender.label,
    }));
};

const getBranchList = () => {
    return branchData[0].attributes_values.map((branch) => ({
        id: branch.code,
        text: branch.label,
    }));
};

const getRows = (products: Template[]) => [
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
                selectedValue: product.branch.name,
                isOpen: product.branch.isOpen,
                values: getBranchList().map((c) => ({ label: c.id, value: c.id }))
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
                values: getGenericsList().map((c) => ({ label: c.id, value: c.id })),
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
                values: getCountriesList().map((c) => ({ label: c.id, value: c.id }))
            },
        ],
    })),
];

const applyChangesToProduct = (change: any, prevProduct: Template[]) => {
    // changes.forEach((change) => {
        const rowIndex = change.rowId;
        const columnName = change.columnId;

        // console.log('Change prev ', change.previousCell)
        // console.log('Product prev ', prevProduct[rowIndex][columnName].name)
        if (change.type === "text") {
            prevProduct[rowIndex][columnName] = change.newCell.text;
        }

        if (change.type === "number") {
            prevProduct[rowIndex][columnName] = change.newCell.value;
        }

        if (change.type === "dropdown") {
            if (change.newCell.selectedValue !== change.previousCell.selectedValue) {
                console.log(
                    `Is opened: ${change.previousCell.isOpen} -> ${change.newCell.isOpen}`
                );
                prevProduct[rowIndex][columnName].name = change.newCell.selectedValue;
            }
            prevProduct[rowIndex][columnName].isOpen = change.newCell.isOpen;
        }
    // });
    return [...prevProduct];
};

const App = () => {
    const [product, setProduct] = useState(getProduct());
    const [columns, setColumns] = useState<Column[]>(getColumns());

    const rows = getRows(product);
    // const columns = getColumns();

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
        console.log('change', changes)
        changes.forEach((change) => {
            setProduct((prevProduct) => applyChangesToProduct(change, prevProduct));
        });
        
    };

    return (
        <>
            <ReactGrid rows={rows} stickyTopRows={1} enableRangeSelection enableFillHandle columns={columns} onCellsChanged={handleChanges} onColumnResized={handleColumnResize}  />
        </>
    );
};

export default App;