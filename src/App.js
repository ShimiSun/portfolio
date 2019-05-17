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
import { Instagram, Linkedin, Medium } from 'grommet-icons';
import Navigation from 'Navigation';
import image1 from './images/release_party.png';
import image2 from './images/seattle.png';
import image3 from './images/home.png';

const theme = {
  global: {
    colors: {
      lightBlue: 'rgb(180,218,229)',
      lavender: 'rgb(197,205,230)',
      peach: '#cabbb0',
      bodyText: 'rgb(115,115,115)',
    },
    font: {
      family: 'Open Sans',
      size: '14px',
      height: '20px',
      weight: '300'
    },
  },
};

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

const Line = (props) => (
  <Box
    style={{width:'40%', margin:'auto', marginBottom:'8em'}}
    border={{
      'color': '#DEDEDE',
      'side': 'bottom',
    }}
  > 
  </Box>
);
const TopBanner = (props) => (
  <Box
        background='peach'
        fill
        pad ={{"vertical": "large", 'left':'large', 'right': 'large'}}
        style={{
          zIndex:'5'
        }}

        >

        {/* INSERT NAVIGATION BELOW */}
        

        <Grid
          fill
          rows={['1/4', '3/4']}
          columns={['1/2', '1/2']}
          areas={[
            { name: 'header', start: [0, 0], end: [1, 0] },
            { name: 'nav', start: [0, 1], end: [0, 1] },
            { name: 'main', start: [1, 1], end: [1, 1] },
          ]}
        >
   

          <Box
          gridArea="main"
          >
            <Box
              direction='row' 
              overflow={{ horizontal: 'hidden' }}
            >
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
        </Box>       
);

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

const Neuroscience = (props) => (
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
    <Text
      color="bodyText"
      margin={{'bottom':'medium'}}
    >
      My love for design is rooted in my love for the brain and how it works. What started as a high school pastime of watching Ted Talks, such as one about the mysteries of dreaming or one about the out of body experience recalled by a woman who had suffered a stroke, became the center of my college studies. I am going to graduate in May 2019 with a B.S. in Computational Neuroscience from the University of Southern California.
    </Text>

    <Text
      color="bodyText"
    >
      Between classes and research, I had the opportunity to dive deep into my curiosities about the brain. Some of my own projects include measuring student engagement in online lectures using EEG recordings, quantifying someone’s strength of mental imagery through behavioral studies, and studying how and where the brain localizes sound through fMRI analysis.
    </Text>
    </Box>
    </Box>
    </Grid>
    
  </Box>
);

const Web = (props) => (
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
    >
      WEB DEVELOPMENT & UX
    </Heading>

     <Grid
          fill
          rows={['auto']}
          columns={['small', '1/2', 'auto']}
          areas={[
            { name: 'text', start: [1, 0], end: [1, 0] },
          ]}
    >

    <Box
      // background="dark-2"
      gridArea="text"
    >
      <Box>
    <Text
      color="bodyText"
      margin={{'bottom':'medium'}}
    >
      I have always found myself taking note of color schemes, layouts, and the stories that websites and applications tell. I like to create sleek, elegant interfaces that preserve just enough detail to tell the story of the product or service. For all of my projects, I take a people-focused approach— thinking first about the end user and working backwards from there.
    </Text>
    </Box>
    </Box>
    </Grid>
  </Box>
);

const Editorial = (props) => (
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
    <Text
      color="bodyText"
      margin={{'bottom':'medium'}}
    >
      In 2017, I founded a magazine, inbtwn., which interviews artists, musicians, and photographers about their work all the while exploring the idea that we are constantly falling into and out of ourselves. This project allows me to lean into my interests of psychology and design. I love chatting with artists for half an hour to learn more about them and their work, trying to see the world briefly through their eyes. Then, I love creating the layout of each spread, getting absorbed in each of the details. The magazine has an international following in over 35 countries and continues to grow.
    </Text>
    </Box>
    </Box>
    </Grid>
  </Box>
);

const Footer =  (props) => (
  <Box
    pad={{'bottom':'large'}}
  >
    <Box
      direction='row'
      justify='center'
      margin={{'bottom':'medium'}}
      gap="medium"

    >
      <Anchor href="#"><Instagram color='black' size='medium' /></Anchor>
      <Anchor href="#"><Linkedin color='black' size='medium' /></Anchor>
      <Anchor href="#"><Medium color='black' size='medium' /></Anchor>
    </Box>
    <Text
      alignSelf="center"
    >
      All  rights reserved — &copy; Taylor Seamans
    </Text>
  </Box>
);

class App extends React.Component {
 state = {
   showSidebar: false,
 }
  render() {
   const { showSidebar } = this.state;
    return (
      <Grommet theme={theme} full>
          <Navigation />
         <TopBanner />
         <Intro />
         <Line />
         <Neuroscience />
         <Web />
         <Editorial />
         <Footer />
      </Grommet>
    );
  }
}
export default App;
