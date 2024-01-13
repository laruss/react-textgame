type StorySubtitleProps = {
    settings: any;
};

const StorySubtitle = ({settings}: StorySubtitleProps) => {
    return (
        <div>
            <h6 style={{color: "yellow"}}>version: {settings.project.version}</h6>
            <div>
                {/*your text here*/}
            </div>
        </div>
    )
};

export default StorySubtitle;