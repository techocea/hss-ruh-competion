const SplitText = ({sentence}:{sentence:string})=> {
    const words = sentence.trim().split(" ");
    const count = words.length;

    let leading = "";
    let trailing = "";

    if (count === 0) {
        trailing = "";
    } else if (count === 1) {
        trailing = words[0];
    } else if (count === 2) {
        leading = words[0];
        trailing = words[1];
    } else {
        leading = words.slice(0, -2).join(" ");
        trailing = words.slice(-2).join(" ");
    }

    return (
        <h1 className="text-4xl md:text-6xl font-bold text-green-800 mb-6">
            {leading && <>{leading} </>}
            <span className="text-green-600">{trailing}</span>
        </h1>
    )
}
export default SplitText;
