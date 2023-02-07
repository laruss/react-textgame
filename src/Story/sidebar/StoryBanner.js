import settings from "../settings";

const StoryBanner = () => {
    return (
        <div>
            <h4 style={{color: "green"}}>{settings.project.name}</h4>
            <div>
                {/*your text here*/}
            </div>
        </div>
    )
};

export default StoryBanner;