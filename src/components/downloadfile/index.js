import React from 'react'
import * as XLSX from "sheetjs-style";
import * as FileSaver from 'file-saver'
import './downloadfile.css'

export const ExportToExcel = ({ exceldata, fileName }) => {
    const fileType = "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8";

    const fileExtension = ".xlsx";

    const downloadfile = (exceldata, fileName) => {
        const ws = XLSX.utils.json_to_sheet(exceldata);
        const wb = { Sheets: { data: ws }, SheetNames: ["data"] };
        const excelBuffer = XLSX.write(wb, { bookType: "xlsx", type: "array" });
        const data = new Blob([excelBuffer], { type: fileType });
        FileSaver.saveAs(data, fileName + fileExtension);
    };

    return (
        <button className='file-btn' onClick={(e) => downloadfile(exceldata, fileName)}>DOWNLOAD STATEMENT</button>
    );
};