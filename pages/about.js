import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import MuiLink from '@material-ui/core/Link';
import ProTip from '../src/ProTip';
import Link from '../src/Link';



export default function About() {
  return (
    <Container maxWidth="sm">
      <Box my={4}>
        <Typography variant="h4" component="h1" gutterBottom>
          Next.js v4-beta example
        </Typography>
        {/* <Link href="/">Go to the main page</Link> */}
        {/* <Link href="/drawer">Go to the drawer</Link> */}
        <ProTip />
      </Box>
    </Container>
  );
}
