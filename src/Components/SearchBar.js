// import { TableBody, TableHead, TableRow } from "@mui/material";
import React, { useState } from "react";
import "./SearchBar.css";
import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from "@mui/icons-material/Close";

function SearchBar({ placeholder, data }) {
  const [filteredData, setFilteredData] = useState([]);
  const [selectedData, setSelectedData] = useState([]);
  const [wordEntered, setWordEntered] = useState("");
  const [tableBool, setTableBool] = useState("");
  const [open, setOpen] = useState(true);

  const handleFilter = (event) => {
    const searchWord = event.target.value;
    setWordEntered(searchWord);

    const newFilter = data.filter((value) => {
      return value.name.toLowerCase().includes(searchWord.toLowerCase());
    });
    if (searchWord.length === 0) {
      setFilteredData([]);
      setOpen(true);
      setTableBool(false);
    } else if (searchWord.length >= 3) {
      setFilteredData(newFilter);
      setOpen(true)
    }
  };

  const handleSelect = (name) => {
    const data = filteredData.find((i) => i.name === name);
    setSelectedData(data);
    setTableBool(true);
    
    if (name) {
      setWordEntered(data.name);
      setOpen(false);
    } else {
      setOpen(true);
    }
  };
  
  const clear = () => {
    setFilteredData([]);
    setWordEntered("");
    setSelectedData([]);
    setTableBool(false)
  };

  return (
    <div className="search">
      <div className="searchInputs">
        <input
          type="text"
          placeholder="search here"
          value={wordEntered}
          onChange={handleFilter}
        />
        <div className="searchIcon">
          {wordEntered.length === 0 ? (
            <SearchIcon />
          ) : (
            <CloseIcon id="cbutton" onClick={clear} />
          )}
        </div>
      </div>
      {open && filteredData.length !== 0 && (
        <div className="dataResult">
          {filteredData.map((value, index) => {
            return (
              <div
                className="dataItem"
                onClick={() => handleSelect(value.name)}
                key={index}
                id="a"
              >
                <div className="gap">{value.name}</div>
              </div>
            );
          })}
        
        </div>
      )}
      {tableBool && (
        <table className="head">
          <thead className="head">
            <tr className="tablehead">
              <th>Name</th>
              <th>City</th>
              <th>State</th>
              <th>Country</th>
            </tr>
          </thead>
          <tbody>
            {[selectedData].map((value, index) => (
              <tr key={index} className="tabledata">
                <td>{value.name}</td>
                <td>{value.city}</td>
                <td>{value.state}</td>
                <td>{value.country}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default SearchBar;
