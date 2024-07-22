import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

import { ThemeProvider, createTheme } from '@mui/material/styles';

const materialTheme = createTheme({
  palette: {
    mode: 'light', // or 'dark'
  },
});

import {
  ChakraBaseProvider,
  extendBaseTheme,
  theme as chakraTheme,
} from '@chakra-ui/react'

const { Card, CardBody, CardFooter, Heading, Stack, Divider, ButtonGroup, Button, Image, SimpleGrid, Tag, TagLabel, Icon, HStack } = chakraTheme.components

const theme = extendBaseTheme({
  components: {
    Card,
    CardBody,
    CardFooter,
    Heading,
    Stack,
    Divider,
    ButtonGroup,
    Button,
    Image,
    SimpleGrid,
    Tag,
    TagLabel,
    Icon,
    HStack
  },
})


ReactDOM.createRoot(document.getElementById('root')).render(
  <ThemeProvider theme={materialTheme}>
    <ChakraBaseProvider theme={theme}>
      <React.StrictMode>
        <App />
      </React.StrictMode>
  </ChakraBaseProvider>
  </ThemeProvider>
)
