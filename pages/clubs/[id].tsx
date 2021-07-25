import React from 'react'
import { GetStaticPaths, GetStaticProps } from 'next'
import axios from 'axios'
import { server } from '../../config'
import { Club, Detail } from '../../interfaces'
import Layout from '../../src/components/Layout/Layout'
import ClubDetail from '../../src/components/ClubDetail/ClubDetail'

type Props = {
  
  club: Club
  details?: Detail
  errors?: string
}

const StaticPropsDetail = ({ club, details, errors }: Props) => {
  if (errors) {
    return (
      <p>
        <span style={{ color: 'red' }}>Error:</span> {errors}
      </p>
    )
  }

  return (
    <Layout
      title={`${
        club ? club.name : 'User Detail'
      } | Next.js + TypeScript Example`}
    >
      {club && <ClubDetail clubdata={club} detaildata={details} />}
    </Layout>
  )
}

export default StaticPropsDetail

export const getStaticPaths: GetStaticPaths = async() => {
  // const clubs = await axios.get(`${server}/api/clubs`)
  // const data = clubs.data
  // const path = data.map((item) => ({
  //   params: {id: item.id }
  // }))
  return {
    paths: [
      { params: { id: 'BFD' } },
      { params: { id: 'FRS' } },
      { params: { id: 'ERP' } },
      { params: { id: 'HMH' } },
      { params: { id: 'KIWINOMICS' } },
      { params: { id: 'TAXI' } },
    ],
    fallback: true
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const id = params.id
  
  const club = await axios.get(`${server}/api/clubs/${id}`)
  const details = await axios.get(`${server}/api/details/${id}`)
  return { props: {
    
    club: club.data,
    details: details.data
  }}
}