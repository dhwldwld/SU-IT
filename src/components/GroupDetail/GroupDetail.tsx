import React,{ useState, useEffect } from 'react'
import Image from 'next/image'
import styled from 'styled-components'
import { Group, Detail } from '../../../interfaces'
import DetailCarousel from '../DetailPage/DetailCarousel/DetailCarousel'
import DetailIntroduce from '../DetailPage/DetailIntroduce/DetailIntroduce'
import DetailActivity from '../DetailPage/DetailActivity/DetailActivity'
import DetailAwards from '../DetailPage/DetailAwards/DetailAwards'
import DetailBottom from '../DetailPage/DetailBottom/DetailBottom'

type GroupDetailProps = {
    groupdata: Group
    detaildata: Detail
}

const Container = styled.div`
`
const Logo = styled(Image)`
    border-radius: 20px;
`
const DetailTop = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 5rem 0;
    background: linear-gradient(to top, transparent, rgba(0,0,0,.02));
`

const GroupDetail = ({ groupdata, detaildata }: GroupDetailProps) => {
    const [Awards, setAwards] = useState(true);
    useEffect(() => {
        if(detaildata.awards.length == 0) {
            setAwards(false)
        }
    },[]);
    return(
    <Container>
        <DetailTop>
            <Logo src={groupdata.logo} alt={groupdata.name} width={120} height={120} />
        </DetailTop>
        <DetailCarousel name={groupdata.name} imgcount={groupdata.imgcount} />
        <DetailIntroduce groupdata={groupdata} introduce={detaildata.introduce} />
        <DetailActivity groupdata={groupdata} activity={detaildata.activity} />
        {Awards &&
        <DetailAwards groupdata={groupdata} awards={detaildata.awards} />}
        <DetailBottom contact={detaildata.contact}/>
    </Container>
)}

export default GroupDetail
