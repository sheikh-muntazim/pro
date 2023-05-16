import { Autocomplete, Box, Stack, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import CustomCard from './Card'
import Header from './Header'



const HomePage = () => {

  const year = ['1 year','2 year','3 year']
  const [isYear, setIsYear] = useState('')

  const semester =['1','2']
  const [isSemester, setIsSemester] = useState('')
  console.log(isYear);
  console.log(isSemester);

  let arr =[1,2,3,4,5,6,7,8,0,9]
  return (
  <>
  <Header/>

  <Box sx={{padding:'2% 3% 0% 6.5%'}}>
    <Stack direction={'row'} justifyContent={'space-between'}>
      <Typography variant='h5'>Faculty Name</Typography>

      <Stack direction={'row'} spacing={4} >
      <Autocomplete options={year}
      renderInput={(params)=><TextField {...params} label={'Select Year'} />}
      sx={{width:'214px'}}
      size={'small'}
      onChange={(event, value )=>setIsYear(value)}
      /> 

<Autocomplete options={semester}
      renderInput={(params)=><TextField {...params} label={'Select Semester'} />}
      sx={{width:'214px'}}
      size={'small'}
      onChange={(event, value )=>setIsSemester(value)}
      />
      </Stack>
      
    </Stack>

    <Box sx={{border:'1px solid #C5C5C5',display:'flex',flexWrap:'wrap',marginTop:'2%',padding:'32px'}}>

      {arr.map((item)=>(<CustomCard/>))}

    </Box>

    </Box>
    
  
  </>
  )
}

export default HomePage