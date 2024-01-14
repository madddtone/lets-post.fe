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
    <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mx-10 mt-10 md:gap-1 lg:gap-5'>
  
      {/* this is card elements */}
      
      <Card>
        <p className='text-blue-900'>ngews</p>
      </Card>
      <Card>
        <p className='text-blue-900'>ngews</p>
      </Card>
      <Card>
        <p className='text-blue-900'>ngews</p>
      </Card><Card>
        <p className='text-blue-900'>ngews</p>
      </Card>
      <Card>
        <p className='text-blue-900'>ngews</p>
      </Card>
      <Card>
        <p className='text-blue-900'>ngews</p>
      </Card>
      <Card>
        <p className='text-blue-900'>ngews</p>
      </Card><Card>
        <p className='text-blue-900'>ngews</p>
      </Card><Card>
        <p className='text-blue-900'>ngews</p>
      </Card>
      <Card>
        <p className='text-blue-900'>ngews</p>
      </Card>
      <Card>
        <p className='text-blue-900'>ngews</p>
      </Card><Card>
        <p className='text-blue-900'>ngews</p>
      </Card>
      {/* card ends*/}

    </div>
  )
}



