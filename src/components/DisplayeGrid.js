import { AgGridReact } from "ag-grid-react";
import React from "react";
import "ag-grid-community/styles/ag-grid.css"; // Core grid CSS, always needed
import "ag-grid-community/styles/ag-theme-alpine.css"; // Optional theme CSS
import { jsPDF } from "jspdf";
// import { ModuleRegistry } from "@ag-grid-community/core";
// import { ExcelExportModule } from "@ag-grid-enterprise/excel-export";

export default function DisplayeGrid() {
  const colData = [
    { headerName: "USERID", field: "userId" },
    { headerName: "ID", field: "id" },
    { headerName: "Title", field: "title" },
    { headerName: "Body", field: "body" },
  ];
  let gridApi;
  const handleGrid = (params) => {
    gridApi = params.api;
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((resp) => resp.json())
      .then((resp) => params.api.applyTransaction({ add: resp }));
  };
  const exportDatatoCsv = () => {
    gridApi.exportDataAsCsv();
  };

  const exportDatatopdf = () => {
    const doc = new jsPDF();

    doc.text("Hello world!", 10, 10);
    doc.save("a4.pdf");
  };
  //  const exportData = () =>
  // {
  //     gridOptions.gridApi.exportDataAsExcel();
  // }
  const colDefs = {
    sortable: true,
    filter: true,
    floatingFilter: true,
  };

  return (
    <div>
      <button onClick={exportDatatoCsv}>Export</button>
      <button onClick={exportDatatopdf}>export to pdf</button>
      <div className="ag-theme-alpine" style={{ width: "100%", height: 300 }}>
        <AgGridReact
          // rowData={data}
          columnDefs={colData}
          onGridReady={handleGrid}
          defaultColDef={colDefs}
        />
      </div>
    </div>
  );
}
//how to fetch data from external api using ag grid and then it to pdf in react using hooks?
