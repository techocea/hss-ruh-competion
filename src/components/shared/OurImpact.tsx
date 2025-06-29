import StatCard from "../common/StatCard.tsx";
import {STATS} from "../../utils/constants.ts";

const OurImpact = () => {
    return (
        <section className="py-16 bg-green-50">
            <div className="lg:max-w-6xl mx-auto px-4">
                <h2 className="text-3xl md:text-4xl font-bold text-green-800 text-center mb-12">
                    Our Impact
                </h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-8">
                   <StatCard items={STATS}/>
                </div>
            </div>
        </section>
    )
}
export default OurImpact
