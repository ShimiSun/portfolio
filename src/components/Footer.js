import React from 'react';
import { 
Box, 
Anchor,
Text,
} from 'grommet';
import { Instagram, Linkedin, Medium } from 'grommet-icons';


const Footer =  (props) => (
  <Box pad={{'bottom':'large'}} >
    <Box
      direction='row'
      justify='center'
      margin={{'bottom':'medium'}}
      gap="medium"
    >
      <Anchor href="https://www.instagram.com/inbtwnmag/?hl=en" target="_blank" className="nav-link"><Instagram color='black' size='medium'/></Anchor>
      <Anchor href="https://www.linkedin.com/in/taylor-seamans/" target="_blank" className="nav-link"><Linkedin color='black' size='medium' /></Anchor>
      <Anchor href="https://medium.com/@taylor_78330" target="_blank" className="nav-link"><Medium color='black' size='medium' /></Anchor>
    </Box>
    <Text alignSelf="center">
      All  rights reserved — &copy; Taylor Seamans
    </Text>
  </Box>
);

export default Footer