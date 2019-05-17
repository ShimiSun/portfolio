import React from 'react';
import { 
Box, 
Heading, 
ResponsiveContext,
Grid,
Paragraph,
} from 'grommet';

const Neuroscience = (props) => (
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
      color="lavender"
      size="large"
    >
      NEUROSCIENCE
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
    <Box gridArea="text">
      <Box>
    <Paragraph
      color="bodyText"
      margin={{'bottom':'medium'}}
    >
      My love for design is rooted in my love for the brain and how it works. What started as a high school pastime of watching Ted Talks, such as one about the mysteries of dreaming or one about the out of body experience recalled by a woman who had suffered a stroke, became the center of my college studies. I am going to graduate in May 2019 with a B.S. in Computational Neuroscience from the University of Southern California.
    </Paragraph>

    <Paragraph color="bodyText">
      Between classes and research, I had the opportunity to dive deep into my curiosities about the brain. Some of my own projects include measuring student engagement in online lectures using EEG recordings, quantifying someone’s strength of mental imagery through behavioral studies, and studying how and where the brain localizes sound through fMRI analysis.
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
              <Box gridArea="text">
      <Box>
    <Paragraph
      color="bodyText"
      margin={{'bottom':'medium'}}
    >
      My love for design is rooted in my love for the brain and how it works. What started as a high school pastime of watching Ted Talks, such as one about the mysteries of dreaming or one about the out of body experience recalled by a woman who had suffered a stroke, became the center of my college studies. I am going to graduate in May 2019 with a B.S. in Computational Neuroscience from the University of Southern California.
    </Paragraph>

    <Paragraph color="bodyText">
      Between classes and research, I had the opportunity to dive deep into my curiosities about the brain. Some of my own projects include measuring student engagement in online lectures using EEG recordings, quantifying someone’s strength of mental imagery through behavioral studies, and studying how and where the brain localizes sound through fMRI analysis.
    </Paragraph>
    </Box>
    </Box>
    </Grid>
    )}
  </Box>
      )}
    </ResponsiveContext.Consumer>
);

export default Neuroscience