import { Card, Button, Label } from 'flowbite-react';
import { useState, useEffect } from 'react';

export default function Favorite() {
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
    <div className='flex gap-10 justify-center mt-10 flex-wrap'>
  
    {/* this is card elements */}
      <Card>
          <div className='grid grid-cols-1 justify-between gap-1'>
            <div className='border-solid bg-black w-5 h-5'></div>
            <p className='text-black' >anjay</p>
          </div>
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




