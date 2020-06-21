import React, { useState, useEffect } from 'react';
import { FormControl, NativeSelect } from '@material-ui/core';
import { fetchCountryData } from '../../api';
import styles from './country-picker.module.css';

const CountryPicker = ({ handleChange }) => {
    const [countryData, setCountryData] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            setCountryData(await fetchCountryData());
        }
        fetchData();
        console.log('countryData', countryData);
    }, [setCountryData])
    return (
        <FormControl className={styles.formControl}>
            <NativeSelect onChange={(e) => { handleChange(e.target.value) }}>
                <option value=''>Global</option>
                {countryData.map((name, i) => <option key={i} value={name}>{name}</option>)}
            </NativeSelect>
        </FormControl>
    )
}

export default CountryPicker;