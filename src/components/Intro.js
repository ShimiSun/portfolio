import React from 'react';
import { 
Box, 
Heading, 
Grommet, 
ResponsiveContext,
Anchor,
Image,
Grid,
Text,
} from 'grommet';

const Intro = (props) => (
  <Box
    height="medium"
    pad="xlarge"
    alignSelf="center"
    margin={{'bottom':'large'}}
    // background="dark-2"
  >
    <Heading
      color='lightBlue'
      size="small"
      textAlign="center"
      alignSelf="center"
    >
      I’m a web developer, UX designer, and editor based in Los Angeles, CA. With a degree in Computational Neuroscience, I love to think about how people think then design things to fit.
    </Heading>
  </Box>

);

export default Intro