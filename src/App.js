import React from 'react';
import { Cards, Charts, CountryPicker } from './components'
import styles from './App.module.css'
import { fetchData } from './api';
import cronaImage from './assets/img/image.png'

class App extends React.Component {
  state = {
    data: {},
    country: ''
  }
  async componentDidMount() {
    const fetchedData = await fetchData();
    this.setState({ data: fetchedData });
  }

  handleChange = async (country) => {

    const fetchedData = await fetchData(country);
    console.log('fetched Data', fetchedData);

    this.setState({ data: fetchedData, country: country });
  }


  render() {
    const { data, country } = this.state;
    return (
      <div className={styles.container}>
        <img src={cronaImage} alt='COVID-19 image' className={styles.cronaImage}></img>
        <Cards data={data} />
        <CountryPicker handleChange={this.handleChange} />
        <Charts data={data} country={country} />
      </div>
    );
  }
}

export default App;
