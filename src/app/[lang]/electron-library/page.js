import React from 'react'
import ElectronLibrary from './Component'
import { getDictionary } from '../dictionaries'

const Page = async ({ params: { lang } }) => {
  const dict = await getDictionary(lang)
  return <ElectronLibrary dict={dict} />
}

export default Page