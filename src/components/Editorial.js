import React from 'react';
import { 
Box, 
Heading, 
ResponsiveContext,
Grid,
Paragraph,
} from 'grommet';

const Editorial = (props) => (
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
      color="lightBlue"
      size="large"
    >
      EDITORIAL
    </Heading>

    {(size !== 'small') ? (
    <Grid
      fill
      rows={['auto']}
      columns={['1/3', '1/2', 'auto']}
      areas={[
        { name: 'text', start: [1, 0], end: [1, 0] },
      ]}
    >

    <Box
      // background="dark-2"
      gridArea="text"
    >
      <Box>
    <Paragraph
      color="bodyText"
      margin={{'bottom':'medium'}}
    >
      In 2017, I founded a magazine, inbtwn., which interviews artists, musicians, and photographers about their work all the while exploring the idea that we are constantly falling into and out of ourselves. This project allows me to lean into my interests of psychology and design. I love chatting with artists for half an hour to learn more about them and their work, trying to see the world briefly through their eyes. Then, I love creating the layout of each spread, getting absorbed in each of the details. The magazine has an international following in over 35 countries and continues to grow.
    </Paragraph>
    </Box>
    </Box>
    </Grid>
    ) : (
            <Grid
      fill
      rows={['auto']}
      columns={['1/3', '1/2', 'auto']}
      areas={[
        { name: 'text', start: [0, 0], end: [2, 0] },
      ]}
    >

    <Box
      // background="dark-2"
      gridArea="text"
    >
      <Box>
    <Paragraph
      color="bodyText"
      margin={{'bottom':'medium'}}
    >
      In 2017, I founded a magazine, inbtwn., which interviews artists, musicians, and photographers about their work all the while exploring the idea that we are constantly falling into and out of ourselves. This project allows me to lean into my interests of psychology and design. I love chatting with artists for half an hour to learn more about them and their work, trying to see the world briefly through their eyes. Then, I love creating the layout of each spread, getting absorbed in each of the details. The magazine has an international following in over 35 countries and continues to grow.
    </Paragraph>
    </Box>
    </Box>
    </Grid>
    )}
  </Box>
)}
  </ResponsiveContext.Consumer>
);

export default Editorial