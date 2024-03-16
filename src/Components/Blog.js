import * as React from 'react'
import CssBaseline from '@mui/material/CssBaseline'
import Grid from '@mui/material/Grid'
import Container from '@mui/material/Container'
import GitHubIcon from '@mui/icons-material/GitHub'
import FacebookIcon from '@mui/icons-material/Facebook'
import TwitterIcon from '@mui/icons-material/Twitter'
import { createTheme, ThemeProvider } from '@mui/material/styles'
// import Header from './Header'
import MainFeaturedPost from './MainFeaturedPost'
import FeaturedPost from './FeaturedPost'
import Main from './Main'
// import Sidebar from './Sidebar'
// import Footer from './Footer'
import post1 from './blog-post.1.md'
import post2 from './blog-post.2.md'
import post3 from './blog-post.3.md'

const sections = [
  { title: 'Technology', url: '#' },
  { title: 'Design', url: '#' },
  { title: 'Culture', url: '#' },
  { title: 'Business', url: '#' },
  { title: 'Politics', url: '#' },
  { title: 'Opinion', url: '#' },
  { title: 'Science', url: '#' },
  { title: 'Health', url: '#' },
  { title: 'Style', url: '#' },
  { title: 'Travel', url: '#' },
]

const mainFeaturedPost = {
  title: 'Support Anand in his recovery from spinal injury',
  description: 'Anand is the sole bread-earner in his family of 3 and needs your help to be able to get better for his 3 year old daughter and his wife.',
  image:
    'https://kettocdn.gumlet.io/media/campaign/683000/683337/image/630c33043c25f.jpg?w=400&dpr=2.6',
  imageText: 'main image description',
  linkText: 'Continue reading…',
}

const featuredPosts = [
  {
    title: 'Support Anahat To Recover From Brain Tumor',
    date: 'Nov 12',
    description:
      'I am Anahat Beniwal, a 13 yr old girl from Jaipur and i am suffering from Admantinomatous Craniopharyngioma, i.e. Brain Tumour. I severly need your help to get better as i hail from a small town in Uttar Pradesh and medical facilities here are not enough for my treatment.',
    image:
      'https://cimages.milaap.org/milaap/image/upload/c_fill,h_452,w_603/v1673855098/production/images/campaign/612520/WhatsApp_Image_2023-01-15_at_3.33.54_PM_nteeyx_1673855107.jpg',
    imageLabel: 'Image Text',
  },
  {
    title: 'Help My Son To Recover From SMA Type 2.',
    date: 'Nov 11',
    description:
      'Nirvaan was born with a birth defect - Congenital scoliosis which is a spinal deformity in which babies are born with a sideways curvature of the spine. While this news broke our hearts but our regular interactions with doctors and experts gave us confidence that we can get this treated.',
    image:
      'https://cimages.milaap.org/milaap/image/upload/c_fill,h_452,w_603/v1673174713/production/images/campaign/608402/I1uUFGr7JhJLicFR1q99rYP5_dvipc6_1673174718.jpg',
    imageLabel: 'Image Text',
  },
]

const posts = [post1, post2, post3]

const theme = createTheme()

export default function Blog() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth="lg">
        {/* <Header title="Blog" sections={sections} /> */}
        <main>
          <MainFeaturedPost post={mainFeaturedPost} />
          <Grid container spacing={4}>
            {featuredPosts.map((post) => (
              <FeaturedPost key={post.title} post={post} />
            ))}
          </Grid>
          <Grid container spacing={5} sx={{ mt: 3 }}>
          </Grid>
        </main>
      </Container>
    </ThemeProvider>
  )
}
