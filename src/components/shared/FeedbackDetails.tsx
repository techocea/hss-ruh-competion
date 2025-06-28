const FeedbackDetails = () => {
    return (
        <div className="max-w-2xl mx-auto bg-white border rounded-xl border-slate-300 mt-8">
            <div className="px-4 py-8">
                <h3 className="text-xl font-bold text-green-800 mb-4">
                    How We Handle Your Feedback
                </h3>
                <div className="space-y-4 text-gray-700">
                    <p>
                        <strong>Suggestions:</strong> We review all suggestions and consider them
                        for improving our projects and operations. You may hear back from us if
                        we need clarification or have questions.
                    </p>
                    <p>
                        <strong>Complaints:</strong> We take all complaints seriously and will
                        investigate them thoroughly. You can expect a response within 5-7 business days.
                    </p>
                    <p>
                        <strong>Anonymous Feedback:</strong> You can submit feedback without providing
                        your contact information. However, providing your details helps us follow up
                        if needed.
                    </p>
                    <p>
                        <strong>Privacy:</strong> Your personal information will be kept confidential
                        and used only for the purpose of addressing your feedback.
                    </p>
                </div>
            </div>
        </div>
    )
}
export default FeedbackDetails
