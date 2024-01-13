type StoryBannerProps = {
    settings: any;
};

const StoryBanner = ({settings}: StoryBannerProps) => {
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