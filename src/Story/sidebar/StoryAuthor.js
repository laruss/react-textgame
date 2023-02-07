import settings from "../settings";

const StoryAuthor = () => {
    return (
        <div>
            <h5 style={{color: "white"}}>by {settings.project.author}</h5>
            <div>
                {/*your text here*/}
            </div>
        </div>
    )
};

export default StoryAuthor;