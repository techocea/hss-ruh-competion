import FeedbackDetails from "../components/shared/FeedbackDetails.tsx";
import FeedbackForm from "../components/shared/FeedbackForm.tsx";

const FeedbackPage = () => {
    return (
        <>
            <section className="py-16 px-4  bg-accent relative overflow-hidden">
                <div className="container mx-auto">
                    <FeedbackForm/>

                    <FeedbackDetails/>
                </div>
            </section>
        </>
    )
}
export default FeedbackPage
