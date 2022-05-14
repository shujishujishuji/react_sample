import Layout from '../components/layout'
import useSWR from 'swr'
import { useState } from 'react'

export default function Home() {
  const [pref, setPref] = useState({id:0, item:'name'});
  const [address, setAddress] = useState('/api/hello/' + pref.id + '/' + pref.item);
  const { data, err } = useSWR(address)

  const onChange = (e) => {
    pref.id = e.target.value
    setPref(pref)
    setAddress('/api/hello/' + pref.id + '/' + pref.item)
  }

  return (
    <div>
      <Layout header="Next.js" title="top page.">
        {JSON.stringify(data)}
      </Layout>
    </div>
  )
}
