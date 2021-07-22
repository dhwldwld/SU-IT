import React,{ useState } from 'react'
import { GetServerSideProps } from 'next'
import axios from 'axios'
import { server } from '../../config'
import { Group, Detail } from '../../interfaces'
import Layout from '../../src/components/Layout/Layout'
import GroupDetail from '../../src/components/GroupDetail/GroupDetail'
type Props = {
  groups: Group
  details?: Detail
  errors?: string
}

const StaticPropsDetail = ({ groups, details, errors }: Props) => {
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
        groups ? groups.name : 'User Detail'
      } | Next.js + TypeScript Example`}
    >
      {groups && <GroupDetail groupdata={groups} detaildata={details} />}
    </Layout>
  )
}

export default StaticPropsDetail

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const {name} = ctx.query;
  const groups = await axios.get(`${server}/api/groups/${name}`)
  const details = await axios.get(`${server}/api/details/${name}`)
  return { props: {
    groups: groups.data,
    details: details.data
  }}
}