import { ButtonGroup, Container, IconButton, Stack, Text } from '@chakra-ui/react'
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'
import { Logo } from './Logo'
import imageUrl from '../assets/logolight.png'

export const Footer = () => (
  <Container as="footer" role="contentinfo" py={{ base: '12', md: '16' }}>
    <Stack spacing={{ base: '4', md: '5' }}>
      <Stack justify="space-between" direction="row" align="center">
        <Logo imageUrl={imageUrl}/>
        <ButtonGroup variant="tertiary">
          <IconButton as="a" href="https://www.linkedin.com/in/maxime-guiliani/" aria-label="LinkedIn" icon={<FaLinkedin />} />
          <IconButton as="a" href="https://github.com/MaximeGuiliani" aria-label="GitHub" icon={<FaGithub />} />
          <IconButton as="a" href="https://twitter.com/MAmaxzing" aria-label="Twitter" icon={<FaTwitter />} />
        </ButtonGroup>
      </Stack>
      <Text fontSize="sm" color="fg.subtle">
        &copy; {new Date().getFullYear()} Maxime GUILIANI, Inc. All rights reserved.
      </Text>
    </Stack>
  </Container>
)