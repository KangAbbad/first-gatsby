import React from 'react'
import { Helmet } from 'react-helmet'
import 'antd/dist/antd.css'
import './style.css'

import { Layout, Typography, List, Button } from 'antd'
import Avatar from '../images/avatar.webp'

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
      </Helmet>
      <Content>
        <img
          src={Avatar}
          className='avatar'
          height='120'
          width='120'
          intrinsicsize="120x120"
          alt='my avatar'
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
