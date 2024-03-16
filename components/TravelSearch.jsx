/*
* Search bar component
*/

"use client"

import { useState } from 'react';
import { TextField, Button, InputAdornment, IconButton } from '@mui/material'; // Import TextField, Button, InputAdornment, and IconButton from Material-UI
import { Search } from '@mui/icons-material'; // Import the Search icon from Material-UI icons
import styles from "../styles/components/travel-search.module.scss";
import clsx from 'clsx';

const TravelSearch = (props) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearchSubmit = () => {
    console.log('Searching for:', searchTerm);
  };

  return (
    <div className={styles.searchContainer}>
      <TextField
        label={props.label}
        variant={props.variant}
        value={searchTerm}
        onChange={handleSearchChange}
        className={clsx(styles.searchInput, props?.className)}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton onClick={handleSearchSubmit}>
                <Search />
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
    </div>
  );
};

export default TravelSearch;

