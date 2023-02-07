import GPassage from "../../features/components/GPassage";
import {register} from "../../engine/passages";
import GLink from "../../features/components/GLink";
import GImage from "../../features/components/GImage";
import images from "../../engine/images";
import GBlock from "../../features/components/GBlock";

register({
    start: (
        <GPassage>
            <h2 style={{color: '#60aa50', textAlign: 'center'}}>Welcome to React Text Games Engine!</h2>
            <GImage src={images.samples.startBackground}/>
            <br/>
            <GBlock loadOn={'scroll'} effect='rightSpring'>
                <h3>What is it about?</h3>
            </GBlock>
            React Text Game Engine is a powerful tool for creating interactive stories and games. It allows developers to create branching narratives and dynamic game mechanics using the popular React framework. The engine's intuitive point-and-click interface makes it easy to create complex and interactive elements without the need for extensive programming knowledge. Additionally, it provides a wide range of built-in features such as save and load functionality, modal-contents and other game components. Using this engine, developers can create engaging and immersive timely experiences for players while saving time and resources during the development process. With its flexibility and scalability, this engine is perfect for creating interactive fiction, visual novels, and other interactive content.
            <div style={{height: '2rem'}}/>
            <GBlock loadOn={'scroll'} effect='rightSpring'>
                <h3>Before you start</h3>
            </GBlock>
            Enough preamble, let's get started! I recommend starting with the first section if you are not already familiar with the engine. In it, you will quickly learn about the main features and settings, and you will also understand that developing text-based games on react is as easy as shelling pears!
            <br/>
            Alternatively, if you're already familiar with the engine, and to remind yourself what components exist and perhaps copy-paste their code for a quick start, you can jump straight to the Components section.
            <div style={{height: '2rem'}}/>
            <div>
                <GBlock loadOn={'scroll'} effect='rightSpring'>
                    <h4 style={{color: '#5085aa'}}>Main functional</h4>
                </GBlock>
                <GLink to={`main.setupAndSettings`}>About setup new project and some settings</GLink><br/>
                <GLink to={`main.passages`}>About Passages</GLink><br/>
                <GLink to={`main.htmlComponents`}>About HTML Components</GLink><br/>
                <GLink to={`main.sidemenu`}>About LeftSide Menu</GLink><br/>
                <GLink to={`main.gameflow`}>About GameFlow</GLink><br/>
                <GLink to={`main.buildAndProduction`}>About Building Project and setting it up for Production</GLink>
            </div>

            <div style={{height: '2rem'}}/>
            <div>
                <GBlock loadOn={'scroll'} effect='rightSpring'>
                    <h4 style={{color: '#5b50aa'}}>Components</h4>
                </GBlock>
                <GLink to={`components.gblock`}>GBlock</GLink>
                <GLink to={`components.gblurtext`}>GBlurText</GLink>
                <GLink to={`components.gbutton`}>GButton</GLink>
                <GLink to={`components.gicon`}>GIcon</GLink>
                <GLink to={`components.gimage`}>GImage</GLink>
                <GLink to={`components.ginput`}>GInput</GLink>
                <GLink to={`components.glink`}>GLink</GLink>
                <GLink to={`components.gmap`}>GMap</GLink>
                <GLink to={`components.gpassage`}>GPassage</GLink>
                <GLink to={`components.gsay`}>GSay</GLink>
                <GLink to={`components.gtooltip`}>GTooltip</GLink>
                <GLink to={`components.gvideo`}>GVideo</GLink>
                <GLink to={`components.v`}>V</GLink>
            </div>
        </GPassage>
    ),
}, "start");