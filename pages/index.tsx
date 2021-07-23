import React from 'react'
import { GetStaticProps } from 'next'
import axios from 'axios'
import { server } from '../config'
import Layout from '../src/components/Layout/Layout'
import BannerSection from '../src/components/BannerSection/BannerSection'
import IntroduceSection from '../src/components/IntroduceSection/IntroduceSection'
import ApplySection from '../src/components/ApplySection/ApplySection'
import QnASection from '../src/components/QnASection/QnASection'

import { Club, QnA } from '../interfaces'

type Props = {
  clubs: Club[]
  qnadata: QnA[]
  errors?: string
}


const IndexPage = ({ clubs, qnadata, errors }: Props) => {
  const qnaclubs = [...clubs]
  qnaclubs.unshift({id:'학과', name: '학과'})
    
  if (errors) {
    return (
      <p>
        <span style={{ color: 'red' }}>Error:</span> {errors}
      </p>
    )
  }
  return (
    <Layout title="Home | SU-IT">
      <BannerSection />
      <IntroduceSection data={clubs}/>
      <ApplySection clubs={clubs} />
      <QnASection data={qnadata} clubs={qnaclubs}/>
    </Layout>
  )
}
export default IndexPage

export const getStaticProps: GetStaticProps = async () => {
  const clubs = await axios.get(`${server}/api/clubs`)
  const qnadata = await axios.get(`${server}/api/qna`)
  return { props: {
    clubs: clubs.data,
    qnadata: qnadata.data
  }}
}
