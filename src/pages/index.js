import React from 'react'
import { Helmet } from 'react-helmet'
import 'antd/dist/antd.css'
import './style.css'

import { Layout, Typography, List, Button } from 'antd'
import AvatarWebp from '../images/avatar.webp'
import AvatarPng from '../images/avatar.png'

const { Content } = Layout
const { Paragraph } = Typography

const dataLink = [
  {
    label: 'LinkedIn',
    url: 'https://www.linkedin.com/in/kang-abbad/'
  },
  {
    label: 'Personal Site',
    url: 'https://kangabbad.netlify.app'
  },
  {
    label: 'Telegram',
    url: 'https://t.me/kangabbad'
  },
  {
    label: 'WhatsApp',
    url: "https://api.whatsapp.com/send?phone=87739999776&text=Samlekom%20mhamanx..."
  },
]

const Home = () => {
  return (
    <Layout className='container'>
      <Helmet
        defer={false}
        title='Learn GatsbyJS'
        htmlAttributes={{ lang: 'en' }}
      >
        <meta charSet='utf-8' />
        <meta name='description' content='Building fake Linktr.ee with GatsbyJS' />
        <title>Learn GatsbyJS</title>
        <link rel='canonical' href='https://learn-gatsby.vercel.app/' />
        <script type='text/javascript' src='https://cdnjs.cloudflare.com/ajax/libs/modernizr/2.8.3/modernizr.min.js' />
      </Helmet>
      <Content>
        <ImgWithFallback
          src={AvatarWebp}
          fallback={AvatarPng}
          alt="My Avatar"
          className='avatar'
          height='120'
          width='120'
        />
        <Paragraph className='username'>
          @kangabbad
        </Paragraph>
        <Paragraph className='bio'>
          Javascript Enthusiast | Frontend Developer
        </Paragraph>
        <List
          dataSource={dataLink}
          className='list'
          renderItem={item => (
            <List.Item>
              <Button
                block
                className='button-link'
                onClick={() => {
                  setTimeout(() => {
                    window.open(item.url)
                  }, 500)
                }}
              >
                {item.label}
              </Button>
            </List.Item>
          )}
        />
      </Content>
    </Layout>
  )
}

export default Home

const ImgWithFallback = ({
  src,
  fallback,
  type = 'image/webp',
  ...delegated
}) => {
  return (
    <picture>
      <source srcSet={src} type={type} />
      <img src={fallback} alt={delegated.alt} {...delegated} />
    </picture>
  );
};
