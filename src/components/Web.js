import React from 'react';
import { 
Box, 
Heading,  
ResponsiveContext,
Grid,
Paragraph
} from 'grommet';

const Web = (props) => (
  <ResponsiveContext.Consumer>
  {size => (
  <Box
    pad={{'left':'large', 'right':'large'}}
    margin={{
      'bottom': 'xlarge',
      'top': 'medium'
    }}
  >
    <Heading
      color="peach"
      size="large"
      alignSelf="end"
      textAlign="end"
    >
      WEB DEVELOPMENT & UX
    </Heading>
    {(size !== 'small') ? (
     <Grid
          fill
          rows={['auto']}
          columns={['small', '1/2', 'auto']}
          areas={[
            { name: 'text', start: [1, 0], end: [1, 0] },
          ]}
    >

    <Box
      gridArea="text"
    >
      <Box>
    <Paragraph
      color="bodyText"
      margin={{'bottom':'medium'}}
    >
      I have always found myself taking note of color schemes, layouts, and the stories that websites and applications tell. I like to create sleek, elegant interfaces that preserve just enough detail to tell the story of the product or service. For all of my projects, I take a people-focused approach— thinking first about the end user and working backwards from there.
    </Paragraph>
    </Box>
    </Box>
    </Grid>
    ) : (
           <Grid
          fill
          rows={['auto']}
          columns={['small', '1/2', 'auto']}
          areas={[
            { name: 'text', start: [0, 0], end: [2, 0] },
          ]}
    >

    <Box
      gridArea="text"
    >
      <Box>
    <Paragraph
      color="bodyText"
      margin={{'bottom':'medium'}}
    >
      I have always found myself taking note of color schemes, layouts, and the stories that websites and applications tell. I like to create sleek, elegant interfaces that preserve just enough detail to tell the story of the product or service. For all of my projects, I take a people-focused approach— thinking first about the end user and working backwards from there.
    </Paragraph>
    </Box>
    </Box>
    </Grid>
    )}
  </Box>
)}
  </ResponsiveContext.Consumer>
);

export default Web