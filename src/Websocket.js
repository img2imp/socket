import React, { Component, useState  } from 'react';
import { w3cwebsocket as W3CWebSocket } from "websocket";
import { DataGrid } from '@mui/x-data-grid';
import { json } from 'react-router-dom';

const client = new W3CWebSocket('wss://demo.piesocket.com/v3/channel_123?api_key=VCXCEuvhGcBDP7XhiJJUDvR1e1D3eiVjgZ9VRiaV&notify_self');

// const columns = [
//     { field: 'id', headerName: 'ID', width: 70 },
//     { field: 'firstName', headerName: 'First name', width: 130 },
//     { field: 'lastName', headerName: 'Last name', width: 130 },
//     {
//         field: 'age',
//         headerName: 'Age',
//         type: 'number',
//         width: 90,
//     },
//     {
//         field: 'fullName',
//         headerName: 'Full name',
//         description: 'This column has a value getter and is not sortable.',
//         sortable: false,
//         width: 160,
//         valueGetter: (params) =>
//             `${params.row.firstName || ''} ${params.row.lastName || ''}`,
//     },
// ];

const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'color', headerName: 'color', width: 130 },
    { field: 'value', headerName: 'value', width: 130 }
];

// const rows = [
//     { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
//     { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
//     { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
//     { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
//     { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
//     { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
//     { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
//     { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
//     { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
// ];


class WebSocket extends Component {

    constructor(props) {
        super(props);
        this.state = {
          rows : [{"id":1,"color":"pink","value":"chotu"}]
        };
      }

    componentWillMount() {
        client.onopen = () => {
            console.log('WebSocket Client Connected');
            client.send("Message");
        };
        client.onmessage = (message) => {
            console.log(message.data, typeof message.data);
            this.state.rows = JSON.parse(message.data);
            this.setState({rows : JSON.parse(message.data)})
        };
    }


    render() {
    
        return (
            <div>
                <div style={{ height: 400, width: '100%' }}>
                    <DataGrid
                        rows={this.state.rows}
                        columns={columns}
                        // pageSize={5}
                        // rowsPerPageOptions={[5]}
                        //checkboxSelection
                    />
                </div>
                <button onClick={(e)=>{client.send("nency")}}>Home</button>
            </div>

        );
    }
}

export default WebSocket;



