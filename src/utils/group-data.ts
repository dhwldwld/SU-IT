import { GroupData } from '../../interfaces'

/** Dummy user data. */
export const groupData: GroupData = {
  BFD: { logo: `/images/BFD.png`, name: 'BFD', description: '창업에 대한 이론을 배우는 동아리', speciality: true, color:'#97BDE1', imgcount:9 },
  ERP: { logo: `/images/ERP.png`, name: 'ERP', description: '전사적자원관리 동아리', speciality: true, color:'#75A972', imgcount: 9 },
  HMH: { logo: `/images/HMH.png`, name: 'HMH', description: 'HMH', speciality: true, color:'#E77B84', imgcount:5 },
  FRS: { logo: `/images/FRS.png`, name: 'FRS', description: 'FRS', speciality: false, color:'#FECA98', imgcount:5 },
  KIWINOMICS: { logo: `/images/KIWINOMICS.png`, name: 'KIWINOMICS', description: '경제 경영 연구동아리', speciality: false, color:'#E0EECD', imgcount:5 },
  TAXI: { logo: `/images/TAXI.png`, name: 'TAXI', description: '세무회계동아리', speciality: false, color:'#6E8C9E',imgcount:7 },
}