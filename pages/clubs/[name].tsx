import React from 'react'
import { GetServerSideProps } from 'next'
import axios from 'axios'
import { server } from '../../config'
import { Club, Detail } from '../../interfaces'
import Layout from '../../src/components/Layout/Layout'
import ClubDetail from '../../src/components/ClubDetail/ClubDetail'
type Props = {
  clubs: Club
  details?: Detail
  errors?: string
}

const StaticPropsDetail = ({ clubs, details, errors }: Props) => {
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
        clubs ? clubs.name : 'User Detail'
      } | Next.js + TypeScript Example`}
    >
      {clubs && <ClubDetail clubdata={clubs} detaildata={details} />}
    </Layout>
  )
}

export default StaticPropsDetail

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const {name} = ctx.query;
  const clubs = await axios.get(`${server}/api/clubs/${name}`)
  const details = await axios.get(`${server}/api/details/${name}`)
  return { props: {
    clubs: clubs.data,
    details: details.data
  }}
}