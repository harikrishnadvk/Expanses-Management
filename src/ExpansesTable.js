import React, { useState } from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
// import injectTapEventPlugin from "react-tap-event-plugin";
import orderBy from "lodash/orderBy";
import "./App.css";
import Form from "./source/Form";
import Table from "./source/Table";

// injectTapEventPlugin();

const invertDirection = {
  asc: "desc",
  desc: "asc"
};

export default function App() {

  const [state,setState] = useState({ 
    
                    sortDirection:"desc",
                    editIdx:'-1',
                    columnToSort: "",
                    sortDirection: "desc",
                    data: [
                      {
                        Category: "Car",
                        ItemName: "Audi",
                        Amount: "200000",
                        ExpanseDate: "10.07.2019",
                        
                      },
                      {
                        Category: "Groceryes",
                        ItemName: "Rice",
                        Amount: "4000",
                        ExpanseDate: "13.07.2019",
                      },
                      {
                        Category: "Travel",
                        ItemName: "Bus",
                        Amount: "13000",
                        ExpanseDate: "19.07.2019",
                      },
                      {
                        Category: "office",
                        ItemName: "miscellaneous",
                        Amount: "200000",
                        ExpanseDate: "15.07.2019",
                      },
                    
                    ]
                  })

  function handleRemove (i) {
    setState(state => ({
      data: state.data.filter((row, j) => j !== i)
    }));
  };

  function startEditing(i) {
    setState({ editIdx: i });
  };

  function stopEditing() {
    setState({ editIdx: -1 });
  };

  function handleChange (e, name, i)  {
    const { value } = e.target;
    setState(state => ({
      data: state.data.map(
        (row, j) => (j === i ? { ...row, [name]: value } : row)
      )
    }));
  };

  function handleSort (columnName) {
  setState(state => ({
      columnToSort: columnName,
      sortDirection:
        state.columnToSort === columnName
          ? invertDirection[state.sortDirection]
          : "asc"
    }));
  };

 
    return (
      <MuiThemeProvider>
        <div className="form1">
          <Form
            onSubmit={submission =>
              setState({
                data: [...state.data, submission]
              })
            }
          />
          <Table
            style={{width:10,backgroundColor:'pink'}}
            handleSort={handleSort}
            handleRemove={handleRemove}
            startEditing={startEditing}
            editIdx={state.editIdx}
            stopEditing={stopEditing}
            handleChange={handleChange}
            columnToSort={state.columnToSort}
            sortDirection={state.sortDirection}
            data={orderBy(
              state.data,
              state.columnToSort,
              state.sortDirection
            )}
            header={[
              {
                name: "Category",
                prop: "Category"
              },
              {
                name: "Item Name",
                prop: "ItemName"
              },
              {
                name: "Amount",
                prop: "Amount"
              },
              {
                name: "Expanse Date",
                prop: "ExpanseDate"
              }
            ]}
          />
        </div>
      </MuiThemeProvider>
    );
  }













