import React from 'react'
import { GetServerSideProps } from 'next'
import axios from 'axios'
import { server } from '../config'
import Layout from '../src/components/Layout/Layout'
import BannerSection from '../src/components/BannerSection/BannerSection'
import IntroduceSection from '../src/components/IntroduceSection/IntroduceSection'
import ApplySection from '../src/components/ApplySection/ApplySection'
import QnASection from '../src/components/QnASection/QnASection'

import { ClubData, QnA } from '../interfaces'

type Props = {
  clubdata: ClubData
  qnadata: QnA[]
  errors?: string
}


const IndexPage = ({ clubdata, qnadata, errors }: Props) => {
  const clubs = [];
    for (const [key, value] of Object.entries(clubdata)) {
      const club = {
          id: key,
          logo: value.logo,
          name: value.name,
          speciality: value.speciality,
          color: value.color,
          description: value.description,
      }
      clubs.push(club)
    }

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


export const getServerSideProps: GetServerSideProps = async () => {
  const clubs = await axios.get(`${server}/api/clubs`)
  const qnadata = await axios.get(`${server}/api/qna`)
  return { props: {
    clubdata: clubs.data,
    qnadata: qnadata.data
  }}
}