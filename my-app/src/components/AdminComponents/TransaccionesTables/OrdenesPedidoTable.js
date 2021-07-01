import React ,{useState} from 'react';
import MaterialTable from 'material-table';

const OrdenesPedidoTable = () => {
    const [columns, setColumns] = useState([
        { title: 'Name', field: 'name' },
        { title: 'Surname', field: 'surname', initialEditValue: 'initial edit value' },
        { title: 'Birth Year', field: 'birthYear', type: 'numeric' },
        {
          title: 'Birth Place',
          field: 'birthCity',
          lookup: { 34: 'İstanbul', 63: 'Şanlıurfa' },
        },
      ]);
    
      const [data, setData] = useState([
        { name: 'Mehmet', surname: 'Baran', birthYear: 1987, birthCity: 63 },
        { name: 'Zerya Betül', surname: 'Baran', birthYear: 2017, birthCity: 34 },
      ]);

    return (
        <>
        <MaterialTable
        title="Ordenes de Pedido"
        columns= {columns}
        data={data}
        detailPanel={rowData => {
            return (
              <iframe
                width="100%"
                height="315"
                src="https://www.youtube.com/embed/C0DPdy98e4c"
                frameborder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              />
            )
          }}
        onRowClick={(event, rowData, togglePanel) => togglePanel()}
        editable={{
          onRowAdd: newData =>
            new Promise((resolve, reject) => {
              setTimeout(() => {
                setData([...data, newData]);
                
                resolve();
              }, 1000)
            }),
          onRowUpdate: (newData, oldData) =>
            new Promise((resolve, reject) => {
              setTimeout(() => {
                const dataUpdate = [...data];
                const index = oldData.tableData.id;
                dataUpdate[index] = newData;
                setData([...dataUpdate]);
  
                resolve();
              }, 1000)
            }),
          onRowDelete: oldData =>
            new Promise((resolve, reject) => {
              setTimeout(() => {
                const dataDelete = [...data];
                const index = oldData.tableData.id;
                dataDelete.splice(index, 1);
                setData([...dataDelete]);
                
                resolve()
              }, 1000)
            }),
        }}      
      />
        </>
    ) 
}
export default OrdenesPedidoTable