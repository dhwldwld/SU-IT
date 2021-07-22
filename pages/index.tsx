import React from 'react'
import { GetServerSideProps } from 'next'
import axios from 'axios'
import { server } from '../config'
import Layout from '../src/components/Layout/Layout'
import BannerSection from '../src/components/BannerSection/BannerSection'
import IntroduceSection from '../src/components/IntroduceSection/IntroduceSection'
import ApplySection from '../src/components/ApplySection/ApplySection'
import QnASection from '../src/components/QnASection/QnASection'

import { GroupData, QnA } from '../interfaces'

type Props = {
  groupdata: GroupData
  qnadata: QnA[]
  errors?: string
}


const IndexPage = ({ groupdata, qnadata, errors }: Props) => {
  const groups = [];
    for (const [key, value] of Object.entries(groupdata)) {
      const group = {
          id: key,
          logo: value.logo,
          name: value.name,
          speciality: value.speciality,
          color: value.color,
          description: value.description,
      }
      groups.push(group)
    }
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
      <IntroduceSection data={groups}/>
      <ApplySection groups={groups} />
      <QnASection data={qnadata} groups={groups}/>
    </Layout>
  )
}
export default IndexPage


export const getServerSideProps: GetServerSideProps = async () => {
  const groups = await axios.get(`${server}/api/groups`)
  const qnadata = await axios.get(`${server}/api/qna`)
  return { props: {
    groupdata: groups.data,
    qnadata: qnadata.data
  }}
}