import Layout from '../src/components/Layout/Layout'
import BannerSection from '../src/components/BannerSection/BannerSection'
import IntroduceSection from '../src/components/IntroduceSection/IntroduceSection'
import ApplySection from '../src/components/ApplySection/ApplySection'
import QnASection from '../src/components/QnASection/QnASection'

import {sampleUserData as GroupData} from '../src/utils/sample-data'
import { QnAData as QnAData } from '../src/utils/QnA-data'

const IndexPage = () => (
  <Layout title="Home | SU-IT">
    <BannerSection />
    <IntroduceSection data={GroupData}/>
    <ApplySection />
    <QnASection data={QnAData} />
  </Layout>
)

export default IndexPage
