import {useState} from "react";

const FeedbackForm = () => {
    const [feedbackType, setFeedbackType] = useState("suggestion");
    
    return (
        <div className="max-w-2xl mx-auto bg-white border rounded-xl border-slate-300 p-2">
            <div className="max-w-2xl mx-auto">
                <div>
                    <div className="p-2">
                        <h2 className="text-2xl font-bold text-green-800 mb-6">
                            Share Your Feedback
                        </h2>

                        <form className="space-y-6">
                            <div className="flex flex-col space-y-2">
                                <label className="text-base font-medium">Type of Feedback</label>
                                <label className="label justify-start gap-2">
                                    <input
                                        type="radio"
                                        name="feedbackType"
                                        value="suggestion"
                                        defaultChecked
                                        className="radio radio-xs radio-primary"
                                        onChange={() => setFeedbackType('suggestion')}
                                    />
                                    <span className="label-text">Suggestion</span>
                                </label>

                                {/* Complaint */}
                                <label className="label justify-start gap-2">
                                    <input
                                        type="radio"
                                        name="feedbackType"
                                        value="complaint"
                                        className="radio radio-xs radio-primary"
                                        onChange={() => setFeedbackType('complaint')}
                                    />
                                    <span className="label-text">Complaint</span>
                                </label>

                                {/* Compliment */}
                                <label className="label  justify-start gap-2">
                                    <input
                                        type="radio"
                                        name="feedbackType"
                                        value="compliment"
                                        className="radio radio-xs radio-primary"
                                        onChange={() => setFeedbackType('compliment')}
                                    />
                                    <span className="label-text">Compliment</span>
                                </label>

                                {/* Other */}
                                <label className="label justify-start gap-2">
                                    <input
                                        type="radio"
                                        name="feedbackType"
                                        value="other"
                                        className="radio radio-xs radio-primary"
                                        onChange={() => setFeedbackType('other')}
                                    />
                                    <span className="label-text">Other</span>
                                </label>
                            </div>

                            <div className="grid md:grid-cols-2 gap-4">
                                <div className="flex flex-col gap-2 w-full">
                                    <label htmlFor="name" className="font-medium">Name (Optional)</label>
                                    <input id="name"
                                           className="input"
                                           placeholder="Enter your name"/>
                                </div>

                                <div className="flex flex-col gap-2 w-full">
                                    <label htmlFor="email" className="font-medium">Email (Optional)</label>
                                    <input id="email"
                                           className="input"
                                           type="email"
                                           placeholder="Enter your email"/>
                                </div>
                            </div>

                            <div className="flex flex-col gap-2 w-full">
                                <label htmlFor="subject" className="font-medium">Subject</label>
                                <input id="subject"
                                       className="input"
                                       placeholder="Brief description of your feedback"/>
                            </div>

                            <div>
                            <label htmlFor="message" className="font-medium">
                                    {feedbackType === 'suggestion' ? 'Your Suggestion' :
                                        feedbackType === 'complaint' ? 'Your Complaint' :
                                            feedbackType === 'compliment' ? 'Your Compliment' : 'Your Feedback'}
                                </label>
                                <textarea
                                    id="message"
                                    placeholder="Please provide detailed information about your feedback..."
                                    className="input min-h-32 pt-3"
                                />
                            </div>

                            <div className="flex flex-col gap-2">
                                <label htmlFor="project" className="font-medium">Related Project (if applicable)</label>
                                <input id="project" className="input"
                                       placeholder="Which project is this feedback related to?"/>
                            </div>

                            <button type="submit" className="w-full flex items-center justify-center gap-2 btn-primary text-white py-2 font-semibold">
                                Submit Feedback
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
} 
export default FeedbackForm;
