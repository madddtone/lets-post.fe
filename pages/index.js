import { Table, Card, Button, Modal, Label, TextInput } from 'flowbite-react';
import { useState, useEffect } from 'react';

export default function Home() {
  const [ data, setData] = useState([])
  const [ dataModal, setDataModal ] = useState([])
  const [ openModal, setOpenModal ] = useState(false)

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const response = await fetch('http://127.0.0.1:8000/api/get-post-data', {
      method: 'GET',
    });
    const result = await response.json();
    setData(result);
  };

  const generateData = async () => {
    const response = await fetch('http://127.0.0.1:8000/api/generate-post-data/2', {
      method: 'POST',
    });

    fetchData()
  };

  const fetchPostByID = async (id) => {
    const response = await fetch('http://127.0.0.1:8000/api/show-post-data', {
      method: 'POST',
      headers: {
        'Content-Type' : 'application/json',
      },
      body: JSON.stringify({id: id}),
    });

    const data = await response.json()
    setDataModal(data.Data)

    setOpenModal(true)
  };

  const editDataModal = (e) => {
    //copy dataModal ke newDataModal
    const newDataModal = [...dataModal]
    //edit variable baru
    newDataModal[0] = { ...newDataModal[0], post_text: e };
    //set kembali ke datamodal
    setDataModal(newDataModal)

    console.log('new data modal', newDataModal)
  }

  const handleUpdate = async () => {
    const id = dataModal[0].id
    const postText = dataModal[0].post_text

    const response = await fetch('http://127.0.0.1:8000/api/update-post-data', {
      method: 'POST',
      headers: {
        'Content-Type' : 'application/json',
      },
      body: JSON.stringify({id: id, postText: postText})
    })

    setOpenModal(false)
    fetchData()
  }

  // console.log('keadaan state data', dataModal)


  return (
    <div className='flex justify-center'>

     {/* this is card elements */}
      <Card href="#" className="max-w-min mt-40">
        <div className='flex justify-between'>
          <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Post Data
          </h5>
          <Button color="dark" onClick={generateData}>Generate Data</Button>
        </div>
        <div className="overflow-x-auto">
          
          {/* this is table elements */}
          <Table hoverable>
            <Table.Head>
              <Table.HeadCell>ID</Table.HeadCell>
              <Table.HeadCell>Post</Table.HeadCell>
              <Table.HeadCell>Created</Table.HeadCell>
              <Table.HeadCell>Updated</Table.HeadCell>
              <Table.HeadCell>
                <span className="sr-only">Edit</span>
              </Table.HeadCell>
              <Table.HeadCell>
                <span className="sr-only">Update</span>
              </Table.HeadCell>
            </Table.Head>
            <Table.Body className="divide-y">
              {data.map((index) => 
              <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                  {index.id}
                </Table.Cell>
                <Table.Cell>
                  {index.post_text}
                </Table.Cell>
                <Table.Cell>
                  {index.created_at}
                </Table.Cell>
                <Table.Cell>
                  {index.updated_at}
                </Table.Cell>
                <Table.Cell>
                  <a href="#" className="font-medium text-cyan-600 hover:underline dark:text-cyan-500">
                    Edit
                  </a>
                </Table.Cell>
                <Table.Cell>
                  <a href="#" onClick={ ()=> fetchPostByID(index.id)} className="font-medium text-cyan-600 hover:underline dark:text-cyan-500">
                    Update
                  </a>
                </Table.Cell> 
              </Table.Row>
              )}
            </Table.Body>
          </Table>

          {/* this is modal elements */}
          <Modal show={openModal} onClose={() => setOpenModal(false)}>
            {dataModal.map((data) =>
              <>
              <Modal.Header>Update {data.id}</Modal.Header>
              <Modal.Body>
                <div className="space-y-6">
                  <div className="flex max-w-md flex-col gap-4">
                    <div>
                      <TextInput id="postText" type="text" addon="POST" placeholder="write your post" value={data.post_text} onChange={(e) => editDataModal(e.target.value)} required />
                    </div>
                  </div>
                </div>
              </Modal.Body>
              <Modal.Footer>
                <Button onClick={() => handleUpdate()}>
                  Save
                </Button>
                <Button color="gray" onClick={() => setOpenModal(false)}>
                  Cancel
                </Button>
              </Modal.Footer>
              </>
            )}
          </Modal>

        </div>
      </Card>
    </div>
  )
}




