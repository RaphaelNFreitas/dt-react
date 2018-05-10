import React, {
	Component
} from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';
import filterFactory, { textFilter } from 'react-bootstrap-table2-filter';

class App extends Component {
	render() {

		const data = [{
			id: 1,
			name: "Raphael",
			age: 29
		}, {
			id: 2,
			name: "Erick",
			age: 21
		}, {
			id: 3,
			name: "Mariana",
			age: 23
		}]

		const columns = [{
			dataField: 'id',
			text: 'Codigo'
		}, {
			dataField: 'name',
			text: 'Nome',
			filter: textFilter()
		}, {
			dataField: 'age',
			text: 'Idade'
		}]

		return (
			<div className="App">
			  <header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<h1 className="App-title">Welcome to React</h1>
			  </header>
	  
			  <BootstrapTable keyField='id' data={data} columns={columns} pagination={paginationFactory()} filter={filterFactory()}  />

			</div>
		  );
	}
}

export default App;