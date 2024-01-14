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
    <div className='flex gap-5 justify-center flex-wrap'>
      {/* this is card elements */}
      <Card className=''>
        <p className='text-black'>Makan Pagi</p>
      </Card>
      <Card className=''>
        <p className='text-black'>Makan Pagi</p>
      </Card>
      <Card className=''>
        <p className='text-black'>Makan Pagi</p>
      </Card>
      <Card className=''>
        <p className='text-black'>Makan Pagi</p>
      </Card>
      {/* card elements end*/}
    </div>
  )
}




