import { Input } from '@chakra-ui/react';
import React from 'react';

export default function CardContainerSearchBar() {
  return (
    <div className='cardContainerSearchBar'>
        <Input placeholder='Search Error Title' variant="filled" paddingLeft={"20px"} />
    </div>
  )
}
