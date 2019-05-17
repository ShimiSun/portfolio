import React from 'react';
import { 
Box, 
Heading, 
Grommet, 
ResponsiveContext,
Anchor,
Menu, 
} from 'grommet';

import MobileMenu from './MobileMenu';

const Navigation = (props) => (
  <ResponsiveContext.Consumer>
  {size => (
    <Box>
  {(size !== 'small') ? (
    <Box
          background='banner'
          pad ={{"top": "large", 'left':'large', 'right': 'large'}}
          direction="row"
          flex
          overflow={{ horizontal: 'hidden' }}
          justify="between"
        >

          {/* Main Logo Name */}
          <Box>
            <Anchor href="index.html" className="logo-link">
              <Heading level='3' margin='none' size='small' color="white" className="space">TAYLOR SEAMANS</Heading>
            </Anchor>
          </Box>

          {/* Navigation Links */}
          <Box
            pad={{'right':'medium', 'left':'medium'}}
            direction="row"
            overflow={{ horizontal: 'hidden' }}
            alignSelf="end"
            gap="medium"
          >
            <Anchor color="white" href="uxweb" label="UX/WEB" style={{fontWeight:'400'}}
            className="nav-link"
            />
            <Anchor color="white" href="editorial" label="EDITORIAL" style={{fontWeight:'400'}}
            className="nav-link"
            />
            <Anchor color="white" href="design" label="DESIGN" style={{fontWeight:'400'}}
            className="nav-link"
            />
            <Anchor color="white" href="about" label="ABOUT" style={{fontWeight:'400'}}
            className="nav-link"
            />
            <Anchor color="white" href="contact" label="CONTACT" style={{fontWeight:'400'}}
            className="nav-link"
            />
          </Box>
        </Box>

  ) : (
  <Box
          background='banner'
          pad ={{"top": "large", 'left':'large', 'right': 'large'}}
          justify="between"
        >
    <Box align='center'>
      <Anchor href="index.html" className="logo-link">
        <Heading level='3' margin='none' size='small' color="white" className="space">TAYLOR SEAMANS</Heading>
      </Anchor>
    </Box>

    <MobileMenu />
  </Box>
  )}
  </Box>
    )}
  </ResponsiveContext.Consumer>
)

export default Navigation