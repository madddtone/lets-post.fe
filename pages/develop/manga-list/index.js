import { Card, Button, Label } from 'flowbite-react';
import { useState, useEffect } from 'react';

export default function MangaList() {
  const [ data, setData ] = useState([])


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


  return (
    <div className='grid grid-cols-2 gap-10 content-center my-80 mx-80'>
  
      {/* this is card elements */}
      <Card>
          <p className='text-black' >anjay</p>
      </Card>

      <Card>
          <p className='text-black' >anjay</p>
      </Card>

      <Card>
          <p className='text-black' >anjay</p>
      </Card>

      <Card>
      <p className='text-black' >anjay</p>
      </Card>

    </div>
  )
}



