import React from 'react'
import { getDictionary } from '../dictionaries'
import Specialities from '../../../components/mainInfoBlock/component'

const Page = async ({ params: { lang } }) => {
    const dict = await getDictionary(lang)
    return <Specialities dict={dict} />
}

export default Page
