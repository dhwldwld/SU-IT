import React,{ useState, useEffect } from 'react'
import styled from 'styled-components'
import { Club, Detail } from '../../../interfaces'
import DetailCarousel from '../DetailPage/DetailCarousel/DetailCarousel'
import DetailIntroduce from '../DetailPage/DetailIntroduce/DetailIntroduce'
import DetailActivity from '../DetailPage/DetailActivity/DetailActivity'
import DetailAwards from '../DetailPage/DetailAwards/DetailAwards'
import DetailBottom from '../DetailPage/DetailBottom/DetailBottom'

type GroupDetailProps = {
    clubdata: Club
    detaildata: Detail
}

const Container = styled.div`
`
const Logo = styled.img`
    border-radius: 20px;
    width: 120px;
    height: 120px;
`
const DetailTop = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 5rem 0;
`

const ClubDetail = ({ clubdata, detaildata }: GroupDetailProps) => {
    const [Awards, setAwards] = useState(true);
    useEffect(() => {
        if(detaildata.awards.length == 0) {
            setAwards(false)
        }
    },[]);
    return(
    <Container>
        <DetailTop>
            <Logo src={clubdata.logo} alt={clubdata.name} />
        </DetailTop>
        <DetailCarousel name={clubdata.name} imgcount={clubdata.imgcount} />
        <DetailIntroduce clubdata={clubdata} introduce={detaildata.introduce} />
        <DetailActivity clubdata={clubdata} activity={detaildata.activity} />
        {Awards &&
        <DetailAwards clubdata={clubdata} awards={detaildata.awards} />}
        <DetailBottom contact={detaildata.contact}/>
    </Container>
)}

export default ClubDetail
