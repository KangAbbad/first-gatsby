import React from "react"
import 'antd/dist/antd.css'
import './style.css'
import { Layout, Typography, List, Button } from "antd"
import Avatar from '../images/a_logo.jpg'

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
      <img src={Avatar} alt='my avatar' className='avatar' />
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
                }, 500);
              }}
            >
              {item.label}
            </Button>
          </List.Item>
        )}
      />
    </Layout>
  )
}

export default Home
