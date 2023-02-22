import React, { useState, useEffect } from "react";
import axios from "axios";
import { AgGridReact } from "ag-grid-react";
import { jsPDF } from "jspdf";
import * as xlsx from "xlsx/xlsx";

import autoTable from "jspdf-autotable";

const Row = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios("https://jsonplaceholder.typicode.com/posts");

      setData(result.data);
    };
    fetchData();
  }, []);

  const columnDefs = [
    { headerName: "USERID", field: "userId" },
    { headerName: "ID", field: "id" },
    { headerName: "Title", field: "title" },
    { headerName: "Body", field: "body" },
  ];

  const exportColumns = columnDefs.map((col) => ({
    title: col.header,
    dataKey: col.field,
  }));

  const exportCsv = () => {
    data.exportDataAsCsv();
  };

  const exportPdf = () => {
    const doc = new jsPDF();
    // doc.text("PDF");
    doc.autoTable(exportColumns, data);
    doc.save("table.pdf");
  };

  const exportExcel = () => {
    const workSheet = xlsx.utils.json_to_sheet(data);
    const workBook = xlsx.utils.book_new();
    xlsx.utils.book_append_sheet(workBook, workSheet, "table");
    //buffer
    let buf = xlsx.write(workBook, { bookType: "xlsx", type: "buffer" });
    //binary
    xlsx.write(workBook, { bookType: "xlsx", type: "binary" });
    //download
    xlsx.writeFile(workBook, "table.xlsx");
  };
  const applyFilter = () => {};
  const clearFilter = () => {};
  const defaultColDef = {
    sortable: true,
    filter: true,
    // floatingFilter: true,
    flex: 1,
  };
  return (
    <>
      <div className="action">
        <select className="select-action" style={{ float: "right" }}>
          <option>Actions</option>
          <option>Export to CSV</option>
          <option value="option2">Export to Excel</option>
          <option value="option3">Export to PDF</option>
        </select>
      </div>
      <br />

      <br />
      <div className="filter">
        Filter : <input type="text" />
        <button style={{ marginLeft: "10px" }} onClick={applyFilter}>
          Apply Filter
        </button>
        <button style={{ marginLeft: "10px" }} onClick={clearFilter}>
          Clear Filter
        </button>
      </div>
      <br />

      <div
        className="ag-theme-alpine"
        style={{ height: "250px", width: "100%" }}
      >
        <AgGridReact
          rowData={data}
          columnDefs={columnDefs}
          defaultColDef={defaultColDef}
        />
        <button onClick={exportCsv}>Download Csv</button>
        <button onClick={exportPdf}>Download PDF</button>
        <button onClick={exportExcel}>Download Excel</button>
      </div>
    </>
  );
};
export default Row;
//how to make a dropdown  and add onchange functionalities in option?
