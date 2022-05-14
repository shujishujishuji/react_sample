import Layout from '../components/layout'
import Link from 'next/link'

export default function Other() {
  let title = "Other"

  return (
    <div>
      <Layout header="Next.js" title="Other page.">
        <h1 className='bg-primary text-white display-4 px-3 text-right'>React</h1>
        <div className='container'>
          <h3 className='my-3 text-primary text-center'>{title}</h3>
          <div className='alert alert-primary text-center'>
            <p>これは、もう一つのページ表示です。</p>
            <Link href="/">
              <a>&lt;&lt; back to Index page &gt;&gt;</a>
            </Link>
          </div>
        </div>
      </Layout>
    </div>
  )
}