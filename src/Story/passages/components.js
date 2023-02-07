import {register} from "../../engine/passages";
import GPassage from "../../features/components/GPassage";
import GBlurText from "../../features/components/GBlurText";
import GInput from "../../features/components/GInput";
import images from "../../engine/images";
import GImage from "../../features/components/GImage";
import GMap from "../../features/components/GMap";
import GMapHotspot from "../../features/components/GMapHotspot";
import GBlock from "../../features/components/GBlock";
import GButton from "../../features/components/GButton";
import variables from "../../engine/variables";
import V from "../../features/components/V";
import GLink from "../../features/components/GLink";
import CodeComponent from "../../features/components/other/CodeComponent";
import GHelpers from "../../engine/helpers/GHelpers";
import GIcon from "../../features/components/GIcon";

import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment';
import DoDisturbIcon from '@mui/icons-material/DoDisturb';
import GSay from "../../features/components/GSay";
import GTooltip from "../../features/components/GTooltip";
import GVideo from "../../features/components/GVideo";

register({
    gblock: (
        <GPassage>
            <h2>GBlock</h2>
            What is GBlock? Basically it's a block of text or whatever. You can put as many elements or whatever you want under the <strong>&lt;GBlock&gt;</strong> tag! Examples below.
            <br/><br/>
            <strong>Here's an excerpt from Winnie the Pooh by A.A. Milne:</strong>
            <div style={{height: '2rem'}}/>
            <GBlock loadOn='scroll' effect='leftSpring'>
                “If you live to be a hundred, I want to live to be a hundred minus one day so I never have to live without you.”
                Piglet sidled up to Pooh from behind. “Pooh?” he whispered. “Yes, Piglet?”
                “Nothing,” said Piglet, taking Pooh’s hand. “I just wanted to be sure of you.”
                “We’ll be Friends Forever, won’t we, Pooh?” asked Piglet.
                “Even longer,” Pooh answered. “If ever there is tomorrow when we’re not together… there is something you must always remember. You are braver than you believe, stronger than you seem, and smarter than you think. But the most important thing is, even if we’re apart… I’ll always be with you.”
            </GBlock>
            This effect is called `leftSpring`. Block loads on scroll. <br/>
            Code is easy:
            <CodeComponent code={`
<GBlock loadOn='scroll' effect='leftSpring'>
    “If you live ...”
</GBlock>
            `}/>
            Scroll down ⬇️
            <div style={{height: '15rem'}}/>
            <GBlock loadOn='scroll' effect='bottomSpring'>
                “If you live to be a hundred, I want to live to be a hundred minus one day so I never have to live without you.”
                Piglet sidled up to Pooh from behind. “Pooh?” he whispered. “Yes, Piglet?”
                “Nothing,” said Piglet, taking Pooh’s hand. “I just wanted to be sure of you.”
                “We’ll be Friends Forever, won’t we, Pooh?” asked Piglet.
                “Even longer,” Pooh answered. “If ever there is tomorrow when we’re not together… there is something you must always remember. You are braver than you believe, stronger than you seem, and smarter than you think. But the most important thing is, even if we’re apart… I’ll always be with you.”
            </GBlock>
            Code:
            <CodeComponent code={`
<GBlock loadOn='scroll' effect='bottomSpring'>
    “If you live ...”
</GBlock>
            `}/>
            Scroll down ⬇️
            <div style={{height: '15rem'}}/>
            <GBlock loadOn='scroll' effect='leftSpring'>
                “If you live to be a hundred, I want to live to be a hundred minus one day so I never have to live without you.”
                Piglet sidled up to Pooh from behind. “Pooh?” he whispered. “Yes, Piglet?”
                “Nothing,” said Piglet, taking Pooh’s hand. “I just wanted to be sure of you.”
                “We’ll be Friends Forever, won’t we, Pooh?” asked Piglet.
                “Even longer,” Pooh answered. “If ever there is tomorrow when we’re not together… there is something you must always remember. You are braver than you believe, stronger than you seem, and smarter than you think. But the most important thing is, even if we’re apart… I’ll always be with you.”
            </GBlock>
            Code:
            <CodeComponent code={`
<GBlock loadOn='scroll' effect='leftSpring'>
    “If you live ...”
</GBlock>
            `}/>
            By default `loadOn` property set to 'default'. It means that effect will be played only when page is loaded the first time.<br/>
            Also there is another `loadOn` property: <strong>'button'</strong><br/>
            <GBlock loadOn='button' buttonName='click this button!' effect='opacity'>
                <div style={{height: '1rem'}}/>
                “If you live to be a hundred, I want to live to be a hundred minus one day so I never have to live without you.”
                Piglet sidled up to Pooh from behind. “Pooh?” he whispered. “Yes, Piglet?”
                “Nothing,” said Piglet, taking Pooh’s hand. “I just wanted to be sure of you.”
                “We’ll be Friends Forever, won’t we, Pooh?” asked Piglet.
                “Even longer,” Pooh answered. “If ever there is tomorrow when we’re not together… there is something you must always remember. You are braver than you believe, stronger than you seem, and smarter than you think. But the most important thing is, even if we’re apart… I’ll always be with you.”
            </GBlock>
            By default button name is `Show more`, but you always can change it, as shown below: <br/>
            <CodeComponent code={`
<GBlock loadOn='button' buttonName='click this button!' effect='opacity'>
    “If you live ...”
</GBlock>
            `}/>
            <div style={{height: '3rem'}}/>
            Also here's example of a block with different content:<br/><br/><br/>
            <GBlock loadOn='button' buttonName='loadMe' effect='bottomSpring'>
                “If you live to be a hundred, I want to live to be a hundred minus one day so I never have to live without you.”
                Piglet sidled up to Pooh from behind. “Pooh?” he whispered. “Yes, Piglet?”
                “Nothing,” said Piglet, taking Pooh’s hand. “I just wanted to be sure of you.”
                “We’ll be Friends Forever, won’t we, Pooh?” asked Piglet.
                “Even longer,” Pooh answered. “If ever there is tomorrow when we’re not together… there is something you must always remember. You are braver than you believe, stronger than you seem, and smarter than you think. But the most important thing is, even if we’re apart… I’ll always be with you.”
                <div>
                    <div>
                        update variable: <GButton onClick={()=>{variables.nestedVar.isTrue += 1}}>Up</GButton><GButton onClick={()=>{variables.nestedVar.isTrue -= 1}}>Down</GButton>
                    </div>
                    <V c={()=>variables.nestedVar.isTrue}/>
                </div>
                <GImage src={images.samples.sample}/>
                <br/>
                Code:
                <CodeComponent code={`
<GBlock loadOn='scroll' effect='leftSpring'>
    “If you live ...”
    <div>
        <div>
            update variable: <GButton onClick={()=>{variables.nestedVar.isTrue += 1}}>Up</GButton><GButton onClick={()=>{variables.nestedVar.isTrue -= 1}}>Down</GButton>
        </div>
        <V c={()=>variables.nestedVar.isTrue}/>
    </div>
    <GImage src={images.samples.sample}/>
</GBlock>
            `}/>
            </GBlock>

            <br/><br/><br/>
            <div style={{display: 'flex', justifyContent: 'space-between'}}>
                <GLink to={`start.start`}>Back to Start</GLink>
                <GLink to={`components.gblurtext`} style={{color: '#33339c'}}>Next to GBlurText</GLink>
            </div>
        </GPassage>
    ),
    gblurtext: (
        <GPassage>
            <h2>GBlurText</h2>
            What is GBlurText? It's styled text, which you can't basically see. Yeah, that right, just... blur text...<br/>
            <strong>Here's basic clickable example:</strong>
            <GBlurText text={"Yeah! You see me! 🎉🎉🎉"} showOnClick={true}/><br/>
            And the code:
            <CodeComponent code={`<GBlurText text={"Yeah! You see me! 🎉🎉🎉"} showOnClick={true}/>`}/>
            <br/>
            Another example, that can't be clicked on:
            <GBlurText text={"Ha! You won't see me anyway!"}/><br/>
            <CodeComponent code={`<GBlurText text={"Ha! You won't see me anyway!"}/>`}/>
            <br/>
            And you can add some styles to the component, if you want:
            <GBlurText style={{fontSize: '200%', color: 'red'}} text={"Ha! I'm styled!"}/><br/>
            <CodeComponent code={`<GBlurText style={{fontSize: '200%', color: 'red'}} text={"Ha! I'm styled!"}/>`}/>
            <br/><br/><br/>
            <div style={{display: 'flex', justifyContent: 'space-between'}}>
                <GLink to={`components.gblock`}>Back to GBlock</GLink>
                <GLink to={`components.gbutton`} style={{color: '#33339c'}}>Next to GButton</GLink>
            </div>
            <GLink to={`start.start`}>Back to Start</GLink>
        </GPassage>
    ),
    gbutton: (
        <GPassage>
            <h2>GButton</h2>
            GButton - is just a regular &lt;button&gt; component, but styled for comfort.<br/><br/>
            Here's an example:<br/><br/>
            <GButton onClick={()=>GHelpers.notify('clicked!')}>GButton</GButton><br/><br/>
            And the code:
            <CodeComponent code={`<GButton onClick={()=>GHelpers.notify('clicked!')}>GButton</GButton>`}/><br/><br/>
            You can choose any of GButton variants: <strong>['dark'|'light'|'success'|'warning'|'danger'|'info']</strong><br/>
            By default variant is `dark`, but you can set your preference in <strong><i>/src/Story/settings.ts</i></strong>.<br/>
            Here are examples of various variants:<br/><br/>
            <GButton variant='light' onClick={()=>GHelpers.notify('light!')}>Light</GButton>
            <GButton variant='dark' onClick={()=>GHelpers.notify('dark!')}>Dark</GButton>
            <GButton variant='danger' onClick={()=>GHelpers.notify('danger!')}>Danger</GButton>
            <GButton variant='info' onClick={()=>GHelpers.notify('info!')}>Info</GButton>
            <GButton variant='success' onClick={()=>GHelpers.notify('success!')}>Success</GButton>
            <GButton variant='warning' onClick={()=>GHelpers.notify('warning!')}>Warning</GButton>
            <br/><br/>
            And the code:
            <CodeComponent code={`
<GButton variant='light' onClick={()=>GHelpers.notify('light!')}>Light</GButton>
<GButton variant='danger' onClick={()=>GHelpers.notify('danger!')}>Danger</GButton>
<GButton variant='dark' onClick={()=>GHelpers.notify('dark!')}>Dark</GButton>
<GButton variant='info' onClick={()=>GHelpers.notify('info!')}>Info</GButton>
<GButton variant='success' onClick={()=>GHelpers.notify('success!')}>Success</GButton>
<GButton variant='warning' onClick={()=>GHelpers.notify('warning!')}>Warning</GButton>
            `}/><br/><br/>
            Also you can set button to be disabled and add some custom styles, as shown below:<br/><br/>
            <GButton style={{backgroundColor: "grey"}} onClick={()=>GHelpers.notify('never shows up!')} isDisabled>Disabled</GButton><br/><br/>
            Here's the code:
            <CodeComponent code={`<GButton style={{backgroundColor: "grey"}} onClick={()=>GHelpers.notify('never shows up!')} isDisabled>Disabled</GButton>`}/>
            <br/><br/><br/>
            <div style={{display: 'flex', justifyContent: 'space-between'}}>
                <GLink to={`components.gblurtext`}>Back to GBlurText</GLink>
                <GLink to={`components.gicon`} style={{color: '#33339c'}}>Next to GIcon</GLink>
            </div>
            <GLink to={`start.start`}>Back to Start</GLink>
        </GPassage>
    ),
    gicon: (
        <GPassage>
            <h2>GIcon</h2>
            GIcon - is a little component, that can help make some Icon components, which is acting like &lt;GButton&gt;<br/>
            Here's example ⬇️️<br/><br/>
            <GIcon
                onClick={()=>GHelpers.notify('GIcon clicked!')}
                size={50}
                title={'Super GIcon'}
                IconComponent={LocalFireDepartmentIcon}
            /><br/><br/>
            And the code:
            <CodeComponent code={`
<GIcon
    onClick={()=>GHelpers.notify('GIcon clicked!')}
    size={50}
    title={'Super GIcon'}
    IconComponent={LocalFireDepartmentIcon}
/>
            `}/>
            For now you can only pass IconComponent from Material UI's pack (here's link:&nbsp;
            <a href='https://mui.com/material-ui/material-icons/' rel="noreferrer" target='_blank'>Material</a>)<br/>
            There you may search for item you would like to have as your icon, click on it and copy code to the top of file:
            <CodeComponent code={`import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment';`}/>
            And then use it as it was shown before.<br/><br/>
            Icon can be styled too as well as disabled:<br/><br/>
            <GIcon
                onClick={()=>GHelpers.notify("You won't see me!")}
                size={100}
                title={"Can't click me!"}
                isDisabled={true}
                style={{color: 'grey'}}
                IconComponent={DoDisturbIcon}
            /><br/><br/>
            As you see, tooltip doesn't shown either. Here's a code:
            <CodeComponent code={`
<GIcon
    onClick={()=>GHelpers.notify("You won't see me!")}
    size={100}
    title={"Can't click me!"}
    isDisabled={true}
    style={{color: 'grey'}}
    IconComponent={DoDisturbIcon}
/>
            `}/>
            <br/><br/><br/>
            <div style={{display: 'flex', justifyContent: 'space-between'}}>
                <GLink to={`components.gbutton`}>Back to GButton</GLink>
                <GLink to={`components.gimage`} style={{color: '#33339c'}}>Next to GImage</GLink>
            </div>
            <GLink to={`start.start`}>Back to Start</GLink>
        </GPassage>
    ),
    gimage: (
        <GPassage>
            <h2>GImage</h2>
            GImage - it's implementation of regular <strong>&lt;img&gt;</strong> component. But little bit tuned to the engine.
            It has it's own loading state and in case of big images, you will see it.<br/><br/>
            You can see regular GImage here:<br/><br/>
            <GImage src={images.samples.sample}/><br/><br/>
            Let's see code for that:
            <CodeComponent code={`<GImage src={images.samples.sample}/>`}/><br/>
            As you see in the example above, there's GImage, which has a source of one of game images.<br/>
            You can also set external link as well:<br/><br/>
            <GImage src='https://www.google.com/images/branding/googlelogo/2x/googlelogo_dark_color_272x92dp.png'/><br/><br/>
            And the code:
            <CodeComponent code={`
<GImage
    src={'https://www.google.com/images/branding'+
    '/googlelogo/2x/googlelogo_dark_color_272x92dp.png'}
/>
`}/><br/><br/>
            Here's example of how big-sized image will be loaded:<br/><br/>
            <GBlock loadOn={'button'} buttonName={'Click Me To Load'}>
                <GImage src="https://edmullen.net/test/rc.jpg"/>
                And a code:
                <CodeComponent code={`<GImage src="https://edmullen.net/test/rc.jpg"/>`}/>
            </GBlock><br/><br/>
            Finally, this placeholder will be shown if image can't be loaded:<br/><br/>
            <GImage src={images.samples.sample1}/><br/>
            Code:
            <CodeComponent code={`<GImage src={images.samples.sample1}/>`}/>
            You can always replace it by your own at <strong><i>/images/default/notFound.webp</i></strong>

            <br/><br/><br/>
            <div style={{display: 'flex', justifyContent: 'space-between'}}>
                <GLink to={`components.gicon`}>Back to GIcon</GLink>
                <GLink to={`components.ginput`} style={{color: '#33339c'}}>Next to GInput</GLink>
            </div>
            <GLink to={`start.start`}>Back to Start</GLink>
        </GPassage>
    ),
    ginput: (
        <GPassage>
            <h2>GInput</h2>
            GInput - overwritten input with its own button to apply the result. GInput supports several different forms of validations.<br/>
            The simplest GInput example:<br/><br/>
            <GInput callback={result => GHelpers.notify(`Your input: ${result}`)}/><br/><br/>
            Here's the code:
            <CodeComponent code={`<GInput callback={result => GHelpers.notify(\`Your input: \${result}\`)}/>`}/>
            So we get <i>result</i> of our input and call <i>GHelpers</i> method <i>notify</i> with it.<br/><br/>
            You can change placeholder and type of input here:<br/><br/>
            <GInput
                placeholder={"your password"}
                type='password'
                callback={result => GHelpers.notify(`Password is: ${result}`)}
            /><br/><br/>
            And a code is:
            <CodeComponent code={`
<GInput
    placeholder={"your password"}
    type='password'
    callback={result => GHelpers.notify(\`Password is: \${result}\`)}
/>
            `}/>
            Type can be one of basic html input types, but we recommend to use one of these:
            <i>text, number, password, date, week</i>.
            <h4>Input validation</h4>
            GInput component supports several input validation methods:<br/><br/>
            1. Allow only symbols in row:<br/><br/>
            <GInput
                allowOnlyNextSymbols={'aspirin'}
                placeholder={"supports 'aspirn'"}
                callback={result => GHelpers.notify(`Your input: ${result}`)}
            />
            <CodeComponent code={`
<GInput
    placeholder={"supports 'aspirn'"}
    allowOnlyNextSymbols={'aspirin'}
    callback={result => GHelpers.notify(\`Your input: \${result}\`)}
/>
            `}/><br/>
            2. Allow only alphabetic symbols (without whitespace):<br/><br/>
            <GInput
                placeholder={"only alphabetic"}
                onlyAlphabeticSymbols
                callback={result => GHelpers.notify(`Your input: ${result}`)}
            />
            <CodeComponent code={`
<GInput
    placeholder={"only alphabetic"}
    onlyAlphabeticSymbols
    callback={result => GHelpers.notify(\`Your input: \${result}\`)}
/>
            `}/><br/>
            3. Allow only numeric symbols (without whitespace):<br/><br/>
            <GInput
                placeholder={"only numeric"}
                onlyNumbers
                callback={result => GHelpers.notify(`Your input: ${result}`)}
            />
            <CodeComponent code={`
<GInput
    placeholder={"only numeric"}
    onlyNumbers
    callback={result => GHelpers.notify(\`Your input: \${result}\`)}
/>
            `}/><br/>
            4. Restrict whitespaces:<br/><br/>
            <GInput
                placeholder={"no whitespaces"}
                restrictWhiteSpaces
                callback={result => GHelpers.notify(`Your input: ${result}`)}
            />
            <CodeComponent code={`
<GInput
    placeholder={"no whitespaces"}
    restrictWhiteSpaces
    callback={result => GHelpers.notify(\`Your input: \${result}\`)}
/>
            `}/><br/>
            You can also set GInput as disabled<br/><br/>
            <GInput
                initValue={"I am disabled"}
                readOnly
                callback={result => GHelpers.notify(`I'll never be shown`)}
            />
            <CodeComponent code={`
<GInput
    initValue={"I am disabled"}
    readOnly
    callback={result => GHelpers.notify(\`I'll never be shown\`)}
/>
            `}/><br/>
            Or disable it right after user input something:<br/><br/>
            <GInput
                disableAfterConfirm
                callback={result => GHelpers.notify(`Your input: ${result}`)}
            />
            <CodeComponent code={`
<GInput
    disableAfterConfirm
    callback={result => GHelpers.notify(\`Your input: \${result}\`)}
/>
            `}/><br/>
            Also you can set styles to input form or button as you want to.<br/>
            Here we use GButton, so you can set button variant in <i>buttonVariant</i> property,
            also you can set button caption in <i>buttonCaption</i> property, and add some styles in
            <i>styleButton</i> property.<br/>
            Here's example:
            <br/><br/>
            <GInput
                buttonVariant='success'
                buttonCaption='Custom Click!'
                styleButton={{width: '50%'}}
                style={{width: '45%'}}
                callback={result => GHelpers.notify(`Your input: ${result}`)}
            />
            <CodeComponent code={`
<GInput
    buttonVariant='success'
    buttonCaption='Custom Click!'
    styleButton={{width: '50%'}}
    style={{width: '45%'}}
    callback={result => GHelpers.notify(\`Your input: \${result}\`)}
/>
            `}/><br/>

            <br/><br/><br/>
            <div style={{display: 'flex', justifyContent: 'space-between'}}>
                <GLink to={`components.gimage`}>Back to GImage</GLink>
                <GLink to={`components.glink`} style={{color: '#33339c'}}>Next to GLink</GLink>
            </div>
            <GLink to={`start.start`}>Back to Start</GLink>
        </GPassage>
    ),
    glink: (
        <GPassage>
            <h2>GLink</h2>
            GLink is a component very similar to GButton and the html link component.
            This component connects two passages with the ability to add a callback and change game variables.<br/>
            Here's a simple example:
            <GLink to={`components.glink2`}>GLink</GLink>
            <CodeComponent code={`<GLink to={\`components.glink2\`}>GLink</GLink>`}/><br/>
            Same as GButton, GLink has <i>variant</i> property, which can be set to several variants:<br/><br/>
            <GLink variant='light' to={`components.glink2`}>light</GLink><span style={{marginRight: '5rem'}}/>
            <GLink variant='default' to={`components.glink2`}>default</GLink><span style={{marginRight: '5rem'}}/>
            <GLink variant='textLike' to={`components.glink2`}>textLike</GLink>
            <CodeComponent code={`<GLink variant='light' to={\`components.glink2\`}>light</GLink>`}/>
            <CodeComponent code={`<GLink variant='default' to={\`components.glink2\`}>default</GLink>`}/>
            <CodeComponent code={`<GLink variant='textLike' to={\`components.glink2\`}>textLike</GLink>`}/><br/>
            And here's an example with variable change while moving to another passage:<br/><br/>
            <GLink
                to={`components.glink2`}
                callback={() => {variables.nestedVar.clickedTimes += 1}}
            >
                Click Me (clicked: <V c={() => variables.nestedVar.clickedTimes}/> times)
            </GLink>
            <CodeComponent code={`
<GLink
    to={\`components.glink2\`}
    callback={() => {variables.nestedVar.clickedTimes += 1}}
>
    Click Me (clicked: <V c={() => variables.nestedVar.clickedTimes}/> times)
</GLink>
            `}/><br/>
            Also you can additionally apply some styles to GLink:<br/><br/>
            <GLink to={`components.glink2`} style={{width: '50%', backgroundColor: 'green', color: 'white'}}>StyledLink</GLink>
            <CodeComponent code={`
<GLink
    to={\`components.glink2\`}
    style={{width: '50%', backgroundColor: 'green', color: 'white'}}
>
    StyledLink
</GLink>
            `}/>

            <br/><br/><br/>
            <div style={{display: 'flex', justifyContent: 'space-between'}}>
                <GLink to={`components.ginput`}>Back to GInput</GLink>
                <GLink to={`components.gmap`} style={{color: '#33339c'}}>Next to GMap</GLink>
            </div>
            <GLink to={`start.start`}>Back to Start</GLink>
        </GPassage>
    ),
    glink2: (
        <GPassage>
            <h2>GLink 2</h2>
            This passage is just an example, so there's nothing<br/><br/>
            <GLink to={`components.glink`}>Go Back</GLink>
        </GPassage>
    ),
    gmap: (
        <GPassage>
            <h2>GMap</h2>
            GMap is essentially a game map embodied through a picture as a background and buttons as hotspots.<br/><br/>
            <GMap
                image={images.samples.paris}
                hotspots={[
                    {
                        x: 10,
                        y: 50,
                        element: <GMapHotspot caption={"point 1"} callback={() => GHelpers.notify('point 1')}/>
                    },
                    {
                        x: 40,
                        y: 60,
                        element: <GMapHotspot caption={"point 2"} callback={() => GHelpers.notify('point 2')}/>
                    },
                    {
                        x: 60,
                        y: 90,
                        element: <GMapHotspot caption={"point 3"} callback={() => GHelpers.notify('point 3')}/>
                    },
                    {
                        x: 70,
                        y: 40,
                        element: <GMapHotspot caption={"point 4"} callback={() => GHelpers.notify('point 4')}/>
                    },
                ]}
            /><br/>
            Code for example above:<br/>
            <CodeComponent code={`
<GMap
    image={images.samples.paris}
    hotspots={[
        {
            x: 10,
            y: 50,
            element: <GMapHotspot caption={"point 1"} callback={() => GHelpers.notify('point 1')}/>
        },
        {
            x: 40,
            y: 60,
            element: <GMapHotspot caption={"point 2"} callback={() => GHelpers.notify('point 2')}/>
        },
        {
            x: 60,
            y: 90,
            element: <GMapHotspot caption={"point 3"} callback={() => GHelpers.notify('point 3')}/>
        },
        {
            x: 70,
            y: 40,
            element: <GMapHotspot caption={"point 4"} callback={() => GHelpers.notify('point 4')}/>
        }
    ]}
/>
            `}/><br/>
            Each of <strong>GMapHotspot</strong> component is actually <strong>GButton</strong>, corrected for GMap.<br/>
            Also all of <strong>GMapHotspot</strong> can act like <strong>GLink</strong>, meaning that they can lead you
            to another passage.<br/>
            Here's an example:
            <GMap
                image={images.samples.paris}
                hotspots={[
                    {
                        x: 10,
                        y: 80,
                        element: <GMapHotspot caption={"passage#1"} callback={() => GHelpers.jumpTo('components.gmap1')}/>
                    },
                    {
                        x: 40,
                        y: 40,
                        element: <GMapHotspot caption={"passage#2"} callback={() => GHelpers.jumpTo('components.gmap2')}/>
                    },
                ]}
            /><br/>
            Code for example above:<br/>
            <CodeComponent code={`
<GMap
    image={images.samples.paris}
    hotspots={[
        {
            x: 10,
            y: 50,
            element: <GMapHotspot caption={"passage#1"} callback={() => GHelpers.jumpTo('components.gmap1')}/>
        },
        {
            x: 40,
            y: 60,
            element: <GMapHotspot caption={"passage#2"} callback={() => GHelpers.jumpTo('components.gmap2')}/>
        }
    ]}
/>
            `}/>


            <br/><br/><br/>
            <div style={{display: 'flex', justifyContent: 'space-between'}}>
                <GLink to={`components.glink`}>Back to GLink</GLink>
                <GLink to={`components.gpassage`} style={{color: '#33339c'}}>Next to GPassage</GLink>
            </div>
            <GLink to={`start.start`}>Back to Start</GLink>
        </GPassage>
    ),
    gmap1: (
        <GPassage>
            <h2>GMap 1</h2>
            This passage is just an example, so there's nothing<br/><br/>
            <GLink to={`components.gmap`}>Go Back</GLink>
        </GPassage>
    ),
    gmap2: (
        <GPassage>
            <h2>GMap 2</h2>
            This passage is just an example, so there's nothing<br/><br/>
            <GLink to={`components.gmap`}>Go Back</GLink>
        </GPassage>
    ),
    gpassage: (
        <GPassage backgroundImage='https://ukbeautyroom.com/wp-content/uploads/2020/05/NY13.jpg'>
            <h2>GPassage</h2>
            GPassage is a container for one part of the game history. Relatively speaking, a container for
            all content that should be located on one page.<br/>
            By default GPassage doesn't have any background image and looks like this:
            <CodeComponent code={`<GPassage>Passage Content Here</GPassage>`}/><br/>
            You can set <i>backgroundImage</i> property of GPassage to set background, as on this one.<br/>
            Here's a code:
            <CodeComponent code={`<GPassage backgroundImage='https://ukbeautyroom.com/wp-content/uploads/2020/05/NY13.jpg'>...</GPassage>`}/><br/>
            By default passage width set to 80%. You can change it to the maximum.<br/>
            Check it <GLink to={`components.gpassage2`}>in the next sample.</GLink>

            <br/><br/><br/>
            <div style={{display: 'flex', justifyContent: 'space-between'}}>
                <GLink to={`components.gmap`}>Back to GMap</GLink>
                <GLink to={`components.gsay`} style={{color: '#33339c'}}>Next to GSay</GLink>
            </div>
            <GLink to={`start.start`}>Back to Start</GLink>
        </GPassage>
    ),
    gpassage2: (
        <GPassage width='max'>
            <h2>GMap 2</h2>
            This passage width is set to maximum.<br/>
            Here's how you can achieve this:
            <CodeComponent code={`<GPassage width='max'>...</GPassage>`}/>

            <br/><br/>
            <GLink to={`components.gpassage`}>Go Back</GLink>
        </GPassage>
    ),
    gsay: (
        <GPassage>
            <h2>GSay</h2>
            GSay is a dialog component. If you have a character in the game and he says something in direct speech, then use it.<br/>
            A couple of examples to get you started:
            <GSay
                characterName='Sailor Ric'
                backgroundColor={`rgba(45, 74, 51, 0.5)`}
                characterPicture={images.characters.SailorRicardo}
            >
                Wow! Who the heck are you???
            </GSay>
            <GSay
                characterName='Sail Ricardo'
                backgroundColor={`rgba(110,251,136,0.5)`}
                textColor='black'
                side='right'
                nameColor='black'
                characterPicture={images.characters.SailorRicardo}
            >
                Me is you, you dumb-ass!
            </GSay><br/>
            Here's a code for the above:
            <CodeComponent code={`
<GSay
    characterName='Sailor Ric'
    backgroundColor={\`rgba(45, 74, 51, 0.5)\`}
    characterPicture={images.characters.SailorRicardo}
>
    Wow! Who the heck are you???
</GSay>
            `}/>
            <CodeComponent code={`
<GSay
    characterName='Sail Ricardo'
    backgroundColor={\`rgba(110,251,136,0.5)\`}
    side='right'
    textColor='black'
    nameColor='black'
    characterPicture={images.characters.SailorRicardo}
>
    Me is you, you dumb-ass!
</GSay>
            `}/>
            As you see, the left-side GSay needs less code than right-side. It's all because of default
            arguments. <i>side</i> set by default to <i>'left'</i>, <i>textColor</i> to <i>'white'</i>,
            as well as <i>nameColor</i>.<br/><br/>
            Actually, all of arguments are not necessarily. Here's example of GSay without any arguments:
            <GSay>I don't actually know, who am I. Supposedly, I am an author... 🤔</GSay>
            Here's a code:
            <CodeComponent code={`<GSay>I don't actually know, who am I. Supposedly, I am an author...🤔</GSay>`}/>
            Also you can set only <i>characterName</i> or <i>characterPicture</i>.<br/>
            Here's how it will look like:
            <GSay
                characterPicture={images.characters.SailorRicardo}
            >
                Now I'm just a picture, but you can recognize me...
            </GSay>
            <GSay
                characterName='Sail Ricardo'
            >
                Or am I just name? Who the heck I am...
            </GSay>
            <CodeComponent code={`
<GSay
    characterPicture={images.characters.SailorRicardo}
>
    Now I'm just a picture, but you can recognize me...
</GSay>
            `}/>
            <CodeComponent code={`
<GSay
    characterName='Sail Ricardo'
>
    Or am I just name? Who the heck I am...
</GSay>
            `}/><br/>
            You can also experiment with other GSay variants. <br/>
            There are three of them right now: <i>'common'|'bigName'|'messenger'</i><br/>
            By default it set by 'common'. You can always change defaults in your <i>/src/Story/settings.ts</i> file.<br/>
            Here go the variants:
            <GSay
                characterName='Sailor Ric'
                variant='bigName'
                characterPicture={images.characters.SailorRicardo}
            >
                Example of 'bigName' variant
            </GSay>
            <GSay
                characterName='Sailor Ric'
                variant='common'
                characterPicture={images.characters.SailorRicardo}
            >
                Example of 'common' variant
            </GSay>
            <GSay
                characterName='Sailor Ric'
                variant='messenger'
                characterPicture={images.characters.SailorRicardo}
            >
                Example of 'messenger' variant
            </GSay>
            <CodeComponent code={`
<GSay
    characterName='Sail Ricardo'
    variant='bigName'
    characterPicture={images.characters.SailorRicardo}
>
    Example of 'bigName' variant
</GSay>
            `}/>
            <CodeComponent code={`
<GSay
    characterName='Sail Ricardo'
    variant='common'
    characterPicture={images.characters.SailorRicardo}
>
    Example of 'common' variant
</GSay>
            `}/>
            <CodeComponent code={`
<GSay
    characterName='Sail Ricardo'
    variant='messenger'
    characterPicture={images.characters.SailorRicardo}
>
    Example of 'messenger' variant
</GSay>
            `}/><br/>
            You can also add some custom styles if you want.<br/>
            GSay is wrapped by <strong>GBlock</strong> by default. So you can set <i>blockEffect</i> property, that
            can be set as Block effect property.<br/><br/>
            Here are some examples of styled GSay components:
            <GSay
                characterName='Sailor Ric'
                backgroundColor={`rgba(8,18,31,0.5)`}
                style={{fontSize: "50px"}}
                characterPicture={images.characters.SailorRicardo}
            >
                Super-big text ^____^
            </GSay>
            <GSay
                characterName='Sailor Ric'
                backgroundColor={`rgba(9,17,11,0.5)`}
                style={{minHeight: "500px"}}
                textColor={'red'}
                characterPicture={images.characters.SailorRicardo}
            >
                Wow! Super-high dialog window!!!
            </GSay>
            <GSay
                characterName='Sailor Ric'
                backgroundColor={`rgba(28,8,17,0.5)`}
                style={{fontFamily: 'fantasy', fontSize: '30px', fontWeight: 'bold'}}
                characterPicture={images.characters.SailorRicardo}
            >
                There's some other font style.
            </GSay><br/>
            And the code:
            <CodeComponent code={`
<GSay
    characterName='Sailor Ric'
    backgroundColor={\`rgba(8,18,31,0.5)\`}
    style={{fontSize: "50px"}}
    textColor={'red'}
    characterPicture={images.characters.SailorRicardo}
>
    Super-big text ^____^
</GSay>
            `}/>
            <CodeComponent code={`
<GSay
    characterName='Sailor Ric'
    backgroundColor={\`rgba(8,18,31,0.5)\`}
    style={{minHeight: "500px"}}
    textColor={'red'}
    characterPicture={images.characters.SailorRicardo}
>
    Wow! Super-high dialog window!!!
</GSay>
            `}/>
            <CodeComponent code={`
<GSay
    characterName='Sailor Ric'
    backgroundColor={\`rgba(8,18,31,0.5)\`}
    style={{fontFamily: 'fantasy', fontSize: '30px', fontWeight: 'bold'}}
    characterPicture={images.characters.SailorRicardo}
>
    There's some other font style.
</GSay>
            `}/>

            <br/><br/><br/>
            <div style={{display: 'flex', justifyContent: 'space-between'}}>
                <GLink to={`components.gpassage`}>Back to GPassage</GLink>
                <GLink to={`components.gtooltip`} style={{color: '#33339c'}}>Next to GTooltip</GLink>
            </div>
            <GLink to={`start.start`}>Back to Start</GLink>
        </GPassage>
    ),
    gtooltip: (
        <GPassage>
            <h2>GTooltip</h2>
            What is a GTooltip? It is a common tooltip element that wraps around another element that needs a tooltip.<br/>
            Example:<br/><br/>
            <GTooltip title={"I'm just a regular tooltip, bro!"}>
                <span style={{backgroundColor: 'grey', padding: 10}}>Hover me to see a tooltip.</span>
            </GTooltip><br/><br/>
            And a code:
            <CodeComponent code={`
<GTooltip title={"I'm just a regular tooltip, bro!"}>
    <span
        style={{backgroundColor: 'grey', padding: 10}}
    >
        Hover me to see a tooltip.
    </span>
</GTooltip>
            `}/><br/>
            You can set various text placement to the tooltip.
            One of <i>'bottom-end' | 'bottom-start' | 'bottom' | 'left-end' | 'left-start' | 'left' | 'right-end' | 'right-start' | 'right' | 'top-end' | 'top-start' | 'top'</i>.<br/><br/>
            Here are some examples:<br/><br/>
            <div style={{display: 'flex', justifyContent: 'space-between'}}>
                <GTooltip placement='left' title={"left"}>
                    <span style={{backgroundColor: `#eecece`, padding: 10}}>left-tooltip</span>
                </GTooltip>
                <GTooltip placement='right' title={"right"}>
                    <span style={{backgroundColor: '#fcc991', padding: 10}}>right-tooltip</span>
                </GTooltip>
                <GTooltip placement='top' title={"top"}>
                    <span style={{backgroundColor: '#c9ff4c', padding: 10}}>top-tooltip</span>
                </GTooltip>
                <GTooltip placement='bottom-end' title={"bottom-end"}>
                    <span style={{backgroundColor: '#6ff8d3', padding: 10}}>bottom-end-tooltip</span>
                </GTooltip>
            </div><br/>
            <CodeComponent code={`
<GTooltip placement='left' title={"left"}>
    <span style={{backgroundColor: '#eecece', padding: 10}}>left-tooltip</span>
</GTooltip>
            `}/>
            <CodeComponent code={`
<GTooltip placement='right' title={"right"}>
    <span style={{backgroundColor: '#fcc991', padding: 10}}>right-tooltip</span>
</GTooltip>
            `}/>
            <CodeComponent code={`
<GTooltip placement='top' title={"top"}>
    <span style={{backgroundColor: '#c9ff4c', padding: 10}}>top-tooltip</span>
</GTooltip>
            `}/>
            <CodeComponent code={`
<GTooltip placement='bottom-end' title={"bottom-end"}>
    <span style={{backgroundColor: '#6ff8d3', padding: 10}}>bottom-end-tooltip</span>
</GTooltip>
            `}/>

            <br/><br/><br/>
            <div style={{display: 'flex', justifyContent: 'space-between'}}>
                <GLink to={`components.gsay`}>Back to GSay</GLink>
                <GLink to={`components.gvideo`} style={{color: '#33339c'}}>Next to GVideo</GLink>
            </div>
            <GLink to={`start.start`}>Back to Start</GLink>
        </GPassage>
    ),
    gvideo: (
        <GPassage>
            <h2>GVideo</h2>
            GVideo - it's just regular HTML player (<i>&lt;video&gt;</i> component), wrapped by game wrapper.<br/><br/>
            Here's simplest example:<br/><br/>
            <GVideo src={'https://pixabay.com/static/videos/hero3.mp4'}/><br/>
            And a code for it:
            <CodeComponent code={`<GVideo src={'https://pixabay.com/static/videos/hero3.mp4'}/>`}/><br/>
            GVideo component has several control properties: <i>autoPlay</i>, <i>loop</i>, <i>controls</i>, <i>muted</i>.<br/>
            Autoplay is true by default, everything else is false.
            Let's explicitly specify the properties:<br/><br/>
            <GVideo autoPlay={false} loop controls muted src={'https://pixabay.com/static/videos/hero3.mp4'}/><br/>
            The code:
            <CodeComponent code={`
<GVideo
    autoPlay={false}
    loop
    controls
    muted
    src={'https://pixabay.com/static/videos/hero3.mp4'}
/>
            `}/><br/>
            Also you can specify GVideo width (100% by default) and custom styles:<br/><br/>
            <GVideo
                width='600px'
                style={{
                    margin: 'auto',
                    border: 'black solid',
                    width: '600px',
                    display: 'flex',
                    alignContent: 'center'
                }}
                src={'https://pixabay.com/static/videos/hero3.mp4'}
            /><br/>
            And a code for it:
            <CodeComponent code={`
<GVideo
    width='600px'
    style={{
        margin: 'auto',
        border: 'black solid',
        width: '600px',
        display: 'flex',
        alignContent: 'center'
    }}
    src={'https://pixabay.com/static/videos/hero3.mp4'}
/>
            `}/>

            <br/><br/><br/>
            <div style={{display: 'flex', justifyContent: 'space-between'}}>
                <GLink to={`components.gtooltip`}>Back to GTooltip</GLink>
                <GLink to={`components.v`} style={{color: '#33339c'}}>Next to V</GLink>
            </div>
            <GLink to={`start.start`}>Back to Start</GLink>
        </GPassage>
    ),
    v: (
        <GPassage>
            <h2>V Component</h2>
            V Component is here to check for variables to change and display their actual state without page reload.<br/><br/>
            For example, let's say you have variable, called <strong><i>someVar1</i></strong> and it's 0 by default.<br/>
            There's two variants to display this variable:<br/>
            1. You can display it as React lets you, I mean just <strong><i>&#123;variables.someVar1&#125;</i></strong> (left)<br/>
            2. You can display it with helper (<strong><i>&lt;V&gt;someVar1&lt;/V&gt;</i></strong>) (right)<br/>
            Let's watch what means changeable. Click on button bellow to see how variable will be displayed:<br/><br/>
            {String(variables.someVar1)}<span style={{marginRight: '10em'}}/><V>someVar1</V><br/><br/>
            <GButton onClick={() => {variables.someVar1 += 1}}>Click Me</GButton><br/><br/>
            You'll see that right value will change as you click on button, right will stay the same.<br/>
            Here's why we need <strong>&lt;V&gt;</strong> component.<br/><br/>
            Code is simple:
            <CodeComponent code={`<V>someVar1</V>`}/>
            You can either input variable without <i>variables</i> word in <strong>&lt;V&gt;</strong> body and it will display it.<br/><br/>
            <span style={{backgroundColor: '#aa5656', padding: '5px'}}>WARNING</span><br/>
            If you have some nested variables (e.g. <i>variables.nestedVar.isTrue</i>), you will nedd to write it like below:<br/>
            <CodeComponent code={`<V>nestedVar.isTrue</V>`}/><br/>
            Alternatively you can use <strong>c</strong> property of V. c - is abbreviated from <strong>Callback</strong>,
            so it takes the function and returns variable.<br/>
            <strong>It's better to call &lt;V&gt; with 'c' because your IDE will suggest you what variables you have</strong><br/>
            <CodeComponent code={`<V c={() => variables.nestedVar.isTrue}/>`}/>

            <br/><br/><br/>
            <div style={{display: 'flex', justifyContent: 'space-between'}}>
                <GLink to={`components.gvideo`}>Back to GVideo</GLink>
            </div>
            <GLink to={`start.start`}>Back to Start</GLink>
        </GPassage>
    )
}, "components");