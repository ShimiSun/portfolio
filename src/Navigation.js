import React from 'react';
import { 
Box, 
Button, 
Heading, 
Grommet, 
ResponsiveContext,
Anchor,
Image,
Grid,
Text,
Collapsible, 
} from 'grommet';

const Navigation = (props) => (
  <Box
    background='peach'
    pad ={{"top": "large", 'left':'large', 'right': 'large'}}
    direction="row"
    justify="between"
  >
    <Box
      width="medium"
    >
      <Heading level='3' margin='none' size='small' color="white">TAYLOR SEAMANS</Heading>
    </Box>

    <Box
      pad={{'right':'medium', 'left':'medium'}}
      direction="row"
      alignSelf="end"
      gap="medium"
    >
      <Anchor color="white" href="#" label="UX/WEB" style={{fontWeight:'400'}}/>
      <Anchor color="white" href="#" label="EDITORIAL" style={{fontWeight:'400'}}/>
      <Anchor color="white" href="#" label="DESIGN" style={{fontWeight:'400'}}/>
      <Anchor color="white" href="#" label="ABOUT" style={{fontWeight:'400'}}/>
      <Anchor color="white" href="#" label="CONTACT" style={{fontWeight:'400'}}/>
    </Box>
  </Box>
);