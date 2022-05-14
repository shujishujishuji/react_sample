import Calc from "../components/Calc";
import Layout from "../components/layout";

export default function Home() {
    return (
        <div>
            <Layout header="Calc" title="Calculator">
                <div className="text-center">
                    <Calc />
                </div>
            </Layout>
        </div>
    )
}