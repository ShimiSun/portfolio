import React from 'react';
import { 
Box,   
Grommet, 
ResponsiveContext,
Image,
Grid,
Text,
} from 'grommet';

import image1 from '../images/release_party.png';
import image2 from '../images/seattle.png';
import image3 from '../images/home.png';

const TopBanner = (props) => (
  <ResponsiveContext.Consumer>
  {size => (
    /* Create landing banner that fills everything above the fold. */
    <Box
      background='banner'
      fill
      pad ={{"vertical": "large", 'left':'large', 'right': 'large'}}
      style={{
        zIndex:'1'
      }}
    >
    {(size !== 'small') ? (
      /* Create grid of images at bottom right of landing page */
      <Grid
        fill
        rows={['1/4', '3/4']}
        columns={['1/2', '1/2']}
        areas={[
          { name: 'main', start: [1, 1], end: [1, 1] },
        ]}
      >
        <Box gridArea="main">
          <Box direction='row' overflow={{ horizontal: 'hidden' }}>
          <Box height="small" width="small" margin="small">
            <Image
              fit="cover"
              src={image1}
              alt="inbtwn. Magazine Release Party"
            />
          </Box>

          <Box height="small" width="small" margin="small">
            <Image
              fit="cover"
              src={image2}
              alt="Seattle Public Library"
            />
          </Box>

          <Box height="small" width="small" margin="small">
            <Image
              fit="cover"
              src={image3}
              alt="Girls looking out the door"
            />
          </Box>
          </Box>
          <Text margin="small" color="white">
          the following images, paragraphs, and pages of this website are a brief introduction into my work and the way I look at the world.
          </Text>
        </Box>
      </Grid>
    ) : (

      /* Mobile layout where images and text span full width */
      <Grid
        fill
        rows={['1/4', '3/4']}
        columns={['1/2', '1/2']}
        areas={[
          { name: 'main', start: [0, 1], end: [1, 1] },
        ]}
      >
        <Box gridArea="main">
          <Box direction='row' overflow={{ horizontal: 'hidden' }}>
          <Box height="small" width="small" margin="small">
            <Image
              fit="cover"
              src={image1}
              alt="inbtwn. Magazine Release Party"
            />
          </Box>

          <Box height="small" width="small" margin="small">
            <Image
              fit="cover"
              src={image2}
              alt="Seattle Public Library"
            />
          </Box>

          <Box height="small" width="small" margin="small">
            <Image
              fit="cover"
              src={image3}
              alt="Girls looking out the door"
            />
          </Box>
          </Box>
          <Text 
            margin="small"
            color="white"
          >
          the following images, paragraphs, and pages of this website are a brief introduction into my work and the way I look at the world.
          </Text>
        </Box>
      </Grid>

    )}
    </Box>
  )}
  </ResponsiveContext.Consumer>     
);

export default TopBanner