import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Header from './Header'
import Footer from './Footer'

export default function Layout(props) {
    return (
        <div>
            <Head>
                <title>{props.title}</title>
                <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossOrigin="anonymous"></link>
            </Head>
            <Header header={props.header} />
            <div className='container'>
                <h3 className='my-3 text-primary text-center'>{props.title}</h3>
                {props.children}
            </div>
            <Footer Footer="copyright shuji-taniguchi" />
        </div>
    )
}