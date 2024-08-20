"use client";

import React, { useState } from 'react';
import * as XLSX from 'xlsx';
import {
    Typography,
    Button,
    Container,
    Box,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    TextField,
    Alert,
} from '@mui/material';

interface DataRow {
    [key: string]: string | number;
}

const GridPage: React.FC = () => {
    const [data, setData] = useState<DataRow[]>([]);
    const [headers, setHeaders] = useState<string[]>([]);
    const [editCell, setEditCell] = useState<{ rowIndex: number; header: string } | null>(null);
    const [invalidCells, setInvalidCells] = useState<{ rowIndex: number; header: string }[]>([]);

    const validNumbers = Array.from({ length: 10 }, (_, i) => i + 1);

    const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (!file) {
            console.log('No file selected');
            return;
        }

        const reader = new FileReader();

        reader.onload = (e) => {
            const data = e.target?.result;
            if (data) {
                const uint8Array = new Uint8Array(data as ArrayBuffer);
                const workbook = XLSX.read(uint8Array, { type: 'array' });
                const sheetName = workbook.SheetNames[0];
                const worksheet = workbook.Sheets[sheetName];
                const jsonData: DataRow[] = XLSX.utils.sheet_to_json(worksheet);

                console.log('Excel data:', jsonData);

                if (jsonData.length > 0) {
                    const dynamicHeaders = Object.keys(jsonData[0]);
                    setHeaders(dynamicHeaders);

                    const filledData = jsonData.map((row) => {
                        const filledRow: DataRow = {};
                        dynamicHeaders.forEach((header) => {
                            filledRow[header] = row[header] !== undefined ? row[header] : '';
                        });
                        return filledRow;
                    });

                    setData(filledData);
                }
            }
        };

        reader.readAsArrayBuffer(file);
    };

    const handleEditCell = (rowIndex: number, header: string) => {
        setEditCell({ rowIndex, header });
    };

    const handleChange = (
        event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
        rowIndex: number,
        header: string
    ) => {
        const newValue = event.target.value;
        setData((prevData) => {
            const newData = [...prevData];
            newData[rowIndex] = { ...newData[rowIndex], [header]: newValue };

            if (header === 'campo5') {
                const numericValue = parseInt(newValue, 10);
                if (!validNumbers.includes(numericValue)) {
                    setInvalidCells((prev) => [...prev, { rowIndex, header }]);
                } else {
                    setInvalidCells((prev) => prev.filter((cell) => cell.rowIndex !== rowIndex || cell.header !== header));
                }
            }

            return newData;
        });
    };

    const handleBlur = () => {
        setEditCell(null);
    };

    const isCellInvalid = (rowIndex: number, header: string) => {
        return invalidCells.some((cell) => cell.rowIndex === rowIndex && cell.header === header);
    };

    return (
        <Container maxWidth="md">
            <Box sx={{ my: 4 }}>
                <Typography variant="h4" component="h1" gutterBottom>
                    Grid Page
                </Typography>
                <input
                    type="file"
                    accept=".xlsx, .xls"
                    onChange={handleFileUpload}
                    style={{ display: 'none' }}
                    id="excel-upload"
                />
                <label htmlFor="excel-upload">
                    <Button variant="contained" component="span">
                        Upload Excel File
                    </Button>
                </label>
                <Typography variant="body1" component="p" sx={{ mt: 2 }}>
                    Select an Excel file to upload and view its content in the console.
                </Typography>
            </Box>

            {invalidCells.length > 0 && (
                <Alert severity="error" sx={{ mb: 2 }}>
                    Some values in campo5 are invalid. They must be between 1 and 10.
                </Alert>
            )}

            <TableContainer component={Paper}>
                <Table>
                    <TableHead>
                        <TableRow>
                            {headers.map((header) => (
                                <TableCell key={header}>{header}</TableCell>
                            ))}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {data.map((row, rowIndex) => (
                            <TableRow key={rowIndex}>
                                {headers.map((header) => (
                                    <TableCell
                                        key={header}
                                        onClick={() => handleEditCell(rowIndex, header)}
                                        sx={{
                                            backgroundColor: isCellInvalid(rowIndex, header) ? 'rgba(255, 0, 0, 0.1)' : 'inherit',
                                        }}
                                    >
                                        {editCell?.rowIndex === rowIndex && editCell?.header === header ? (
                                            <TextField
                                                value={row[header]}
                                                onChange={(event) => handleChange(event, rowIndex, header)}
                                                onBlur={handleBlur}
                                                autoFocus
                                                variant="standard"
                                                error={isCellInvalid(rowIndex, header)}
                                            />
                                        ) : (
                                            row[header]
                                        )}
                                    </TableCell>
                                ))}
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Container>
    );
};

export default GridPage;
