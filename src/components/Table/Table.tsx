import React, { useState } from "react";
import { DataGrid, GridRowModel } from "@mui/x-data-grid";
import { SearchBox } from "../SearchBox/SearchBox";
import data from '../../data/MOCK_DATA.json';

import "./Table.scss";

export const Table: React.FC = () => {

  const [filterValue, setFilterValue] = useState("");

  const onValueChanged = (e: any) => {
    setFilterValue(e.target.value);
  };

  const fields = [{ field: 'id', hide: true },
  { field: 'company_name', flex: 2, headerName: "Company Name" },
  { field: 'currency', flex: 2, headerName: "Currency" },
  { field: 'currency_code', flex: 1, headerName: "Code" },
  { field: 'department', flex: 2, headerName: "Department" },
  { field: 'sales_total', flex: 2, headerName: "Total Sales" },
  { field: 'city', flex: 2, headerName: "City" }
  ];


  return (
    <div className="table-page">
      <div>
        <SearchBox searchValue={filterValue} setSearchValue={setFilterValue} />
      </div>
      <div className="table-component">
        <DataGrid
          columns={fields}
          rows={data as GridRowModel[]}
          filterModel={{
            items: [
              {
                columnField: "company_name",
                operatorValue: "contains",
                value: `${filterValue}`
              }
            ]
          }}
        />
      </div>
    </div>
  );
};
