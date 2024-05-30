import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Table from 'react-bootstrap/Table';
import generateUniqueId from 'generate-unique-id';
import { faEye, faPenToSquare, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const EmpolyeeCRUD = () => {

    const [tableData, setTableData] = useState([]);

    const [inputData, setInputData] = useState({
        fname: '',
        lname: '',
        mail: '',
        address: '',
        contact: ''
    });

    const handleInput = (event) => {

        let name = event.target.name;
        let value = event.target.value;

        setInputData({...inputData, [name] : value});

    }

    const handleSubmit = (event,data) => {

        event.preventDefault();

        if (inputData.id) {
            setTableData(tableData.map((record) => {

                if(record.id === inputData.id){
                    return { ...record, ...inputData }
                }
                else{
                    return record
                }

            }))
        } else {
            const newObj = {
                id: generateUniqueId({
                    length: 4,
                    useLetters: false
                }),
                ...inputData
            };
            setTableData([...tableData, newObj]);
        }

        console.log(inputData);

        setInputData({
            fname: '',
            lname: '',
            mail: '',
            address: '',
            contact: ''
        });
            
    };

    const handleEdit = (id) => {

        const editRecord = tableData.find(record => record.id === id);

        if (editRecord) {

            setInputData(editRecord);

        }
    };

    const handleDelete = (id) => {

        let record = tableData;
        let editRecord = record.filter((rec) => {

            return(
                rec.id !== id
            )

        })

        setTableData(editRecord);

    }

    return(

        <>

        <div className="card m-auto mt-5">
            <div className="headers p-4">
                <p className='text-light'>New Employee</p>
            </div>

        {/* <div className="container"> */}
            <Form className='' onSubmit={handleSubmit}>
                <Form.Group controlId="formBasicEmail" className='mt-3 ms-3'>
                    <div className="d-flex">
                        <Form.Label className='mt-1 me-5'>First Name </Form.Label>
                        <Form.Control type="text" className='w-50' placeholder="Enter First Name" name='fname' value={inputData.fname} onChange={handleInput}/>
                    </div>
                </Form.Group>

                <Form.Group className="w-100 mt-3 ms-3" controlId="formBasicPassword">
                    <div className="d-flex">
                        <Form.Label className='mt-1 me-5'>Last Name </Form.Label>
                        <Form.Control type="text" className='w-50' placeholder="Enter Last Name" name='lname'  value={inputData.lname} onChange={handleInput}/>
                    </div>
                </Form.Group>

                <Form.Group className="w-100 mt-3 ms-3" controlId="formBasicPassword">
                    <div className="d-flex">
                        <Form.Label className='mt-1 me-5'>Email </Form.Label>
                        <Form.Control type="mail" className='w-50 ms-4' placeholder="Enter Mail" name='mail'  value={inputData.mail} onChange={handleInput}/>
                    </div>
                </Form.Group>

                <Form.Group className="w-100 mt-3 ms-3" controlId="formBasicPassword">
                    <div className="d-flex">
                        <Form.Label className='mt-1 me-5'>Address </Form.Label>
                        <Form.Control type="text" className='w-50' as="textarea" rows={2} placeholder="Enter Address" name='address'  value={inputData.address} onChange={handleInput}/>
                    </div>
                </Form.Group>

                <Form.Group className="w-100 mt-3 ms-4" controlId="formBasicPassword">
                    <div className="d-flex">
                        <Form.Label className='mt-1 me-5'>Phone </Form.Label>
                        <Form.Control type="number" className='w-50' placeholder="Enter Contact No" name='contact'  value={inputData.contact} onChange={handleInput}/>
                    </div>
                </Form.Group>

                <div className="submit">
                    <Button variant="primary" type="submit" className='ms-5 color'>
                        Submit
                    </Button>
                </div>
            </Form>
        {/* </div> */}
        </div>

        <div className="h-line mt-4"></div>

        <div className="row">
            <div className="header mt-3 p-4">
                <p className='ps-2 text-light font'>Manage Employees</p>
            </div>
        </div>

        <Table striped bordered hover>
            <thead>
                <tr>
                    <th className='text-center'>First Name</th>
                    <th className='text-center'>Last Name</th>
                    <th className='text-center'>Email</th>
                    <th className='text-center'>Address</th>
                    <th className='text-center'>Phone</th>
                    <th className='text-center'>Actions</th>
                </tr>
            </thead>
            <tbody>

                    {
                        tableData.map((data,index) => (

                            <tr key={index}>
                                <td>{data.fname}</td>
                                <td>{data.lname}</td>
                                <td>{data.mail}</td>
                                <td>{data.address}</td>
                                <td>{data.contact}</td>
                                <td>
                                    <button className='border yel eye' onClick={() => handleEdit(data.id)}>
                                        <FontAwesomeIcon icon={faEye} />
                                    </button>
                                    <button className='border yel' onClick={() => handleEdit(data.id)}>
                                        <FontAwesomeIcon icon={faPenToSquare} />
                                    </button>
                                    <button className='border' onClick={() => handleDelete(data.id)}> 
                                        <FontAwesomeIcon icon={faTrash} />
                                    </button>
                                </td>
                            </tr>

                        ))
                    }

            </tbody>
        </Table>


        </>

    )

}

export default EmpolyeeCRUD;








