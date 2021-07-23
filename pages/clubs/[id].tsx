import React from 'react'
import { GetStaticPaths, GetStaticProps } from 'next'
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

export const getStaticPaths: GetStaticPaths = async () => {
  const clubs = await axios.get(`${server}/api/clubs`)
  const data = clubs.data
  const paths = data.map((item:Club) => ({
    params: { id: item.id },
  }))
  return { paths, fallback:true }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const id = params.id;
  const clubs = await axios.get(`${server}/api/clubs/${id}`)
  const details = await axios.get(`${server}/api/details/${id}`)
  return { props: {
    clubs: clubs.data,
    details: details.data
  }}
}