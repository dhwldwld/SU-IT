import React from 'react'
import Layout from '../src/components/Layout/Layout'
import BannerSection from '../src/components/BannerSection/BannerSection'
import IntroduceSection from '../src/components/IntroduceSection/IntroduceSection'
import ApplySection from '../src/components/ApplySection/ApplySection'
import QnASection from '../src/components/QnASection/QnASection'
import { groupData } from '../src/utils/group-data'
import { QnAData } from '../src/utils/QnA-data'

const IndexPage = () => {
  const groups = [];
    for (const [key, value] of Object.entries(groupData)) {
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
  return (
    <Layout title="Home | SU-IT">
      <BannerSection />
      <IntroduceSection data={groups}/>
      <ApplySection groups={groups} />
      <QnASection data={QnAData} groups={groups}/>
    </Layout>
  )
}
export default IndexPage
