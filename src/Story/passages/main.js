import {register} from "../../engine/passages";
import GPassage from "../../features/components/GPassage";
import GButton from "../../features/components/GButton";
import variables from "../../engine/variables";
import V from "../../features/components/V";
import CodeComponent from "../../features/components/other/CodeComponent";
import GLink from "../../features/components/GLink";
import GBlock from "../../features/components/GBlock";
import GHelpers from "../../engine/helpers/GHelpers";

register({
    setupAndSettings: (
        <GPassage>
            <h3>About setup new project and some settings.</h3>
            <GBlock loadOn='button' buttonName="I don't know anything about react. What should I do?">
                React TextGame Engine is a simple React implementation where you don't really need to know anything serious about how the React engine works. But I advise you to familiarize yourself in some ways with what a react is and see how "Hello, world!" is written. on this engine.
                A few extra links:<br/><br/>
                <strong>If you don't know anything about HTML at all:</strong>&nbsp;
                <a href='https://www.freecodecamp.org/news/what-is-html-definition-and-meaning/' rel="noreferrer" target='_blank'>Readable</a>,&nbsp;
                <a href='https://www.youtube.com/watch?v=MDLn5-zSQQI' rel="noreferrer" target='_blank'>Watchable</a>.<br/><br/>
                <strong>React Basics and Hello World:</strong><br/>
                <a href='https://javascript.plainenglish.io/9-react-common-terms-explained-in-a-few-words-90f237952070' rel="noreferrer" target='_blank'>
                    9 React Common Terms Explained In A Few Words (Readable)
                </a><br/>
                <a href='https://www.youtube.com/watch?v=Tn6-PIqc4UM' rel="noreferrer" target='_blank'>React in 100 Seconds (Watchable)</a>,<br/>
                <a href='https://www.geeksforgeeks.org/build-a-basic-react-app-that-display-hello-world/' rel="noreferrer" target='_blank'>
                    Build a Basic React App that Display “Hello World!” (Readable)
                </a><br/>
                <a href='https://www.youtube.com/watch?v=yOpvnpePRts' rel="noreferrer" target='_blank'>
                    Create new react project and print Hello World. ReactJs tutorial for beginner (Watchable)
                </a><br/><br/>
                I would recommend reading/viewing all materials, but this is not required. It is enough that you have a basic understanding 😊
            </GBlock>
            <hr/><br/>
            <GBlock loadOn='button' buttonName="I didn't set up a project yet, I read this online.">
                Okay, if you're reading this online and want to give game engine a try, you should download the
                project ZIP archive from&nbsp;
                <a
                    href='https://github.com/laruss/react-textgame/archive/refs/heads/master.zip'
                    rel="noreferrer"
                    target='_blank'>Official Gitlab Page</a>
                &nbsp;of the project.<br/><br/>
                You should have some TypeScript Editor for your convenience. I'd recommend one of these <strong>free ones</strong>:<br/>
                - <a href='https://code.visualstudio.com/' rel="noreferrer" target='_blank'>Visual Studio Code</a> (highly recommended)<br/>
                - <a href='https://www.sublimetext.com/' rel="noreferrer" target='_blank'>Sublime Text</a><br/><br/>
                Also you should get some extensions for CodeEditor you have:<br/>
                - <a href='https://blog.logrocket.com/9-essential-vs-code-extensions-typescript/' rel="noreferrer" target='_blank'>Visual Studio Code Extensions</a><br/>
                - <a href='https://www.youtube.com/watch?v=4W5IhA6XQ6w' rel="noreferrer" target='_blank'>Sublime Text (Watchable)</a><br/><br/>
                Finally, you need NodeJS installed and configured in your system:<br/>
                - <a href='https://nodejs.org/' rel="noreferrer" target='_blank'>Link for download</a><br/><br/>
                Just download any of suggested version. Website will detect your system automatically.
                Then open it and continue with instruction in installer.<br/><br/>
                After everything is downloaded and installed, just unzip project zip archive to any comfortable
                place and open it in your text editor.<br/><br/>
                Then open <strong>readme.md</strong> and continue with instructions there.
            </GBlock>
            <hr/><br/>
            <GBlock loadOn='button' buttonName="I set up a project. I run thin on localhost.">
                Main folder, where you'll be working is <i>Story</i>. Open it and check what files and directories are inside.<br/>
                <h5>passages directory</h5>
                Passages directory is place, where you'll set up your game-flow. We'll cover them in next chapter <strong>"About Passages"</strong>.
                <h5>sidebar directory</h5>
                Sidebar directory contains files that are responsible for <strong>LeftSide Menu</strong>.
                We'll cover them in chapter <strong>"About LeftSide Menu"</strong>.
                <h5>settings</h5>
                File where all the settings are. You can open it to check it out yourself.
                - <strong>passages</strong> - container for passages settings<br/>
                - <strong>passages.start</strong> <span style={{backgroundColor: '#a8d86d', padding: '5px'}}>useful</span>
                - start passage. When you're in <strong>debug</strong> mode, you'll need to set value to debug specific passage.<br/>
                - <strong>passages.backgroundColor</strong> - default background color for every passage in the game.<br/>
                - <strong>project</strong> - container for overall project settings<br/>
                - <strong>project.name</strong> - actually name of the game you make. Changing this will change tab name
                in browser with your game<br/>
                - <strong>project.author</strong> - your nickname or name. Will change name in left-side menu.<br/>
                - <strong>project.debug</strong> <span style={{backgroundColor: '#a8d86d', padding: '5px'}}>useful</span>-
                this determines are you in develop or production mode. Actually affects
                on whether your game state will be saved to browser storage or not. <strong>Recommended</strong> to change
                only in pre-production development or if you want to check how saves are working.<br/>
                - <strong>defaults</strong> - container for default settings<br/>
                - <strong>defaults.font</strong> - default font style setting for the whole project<br/>
                - <strong>defaults.fontSize</strong> - default font size setting for the whole project<br/>
                - <strong>defaults.buttonVariant</strong> - default button variant setting for the whole project<br/>
                - <strong>defaults.linkVariant</strong> - default link variant setting for the whole project<br/>
                - <strong>defaults.sayVariant</strong> - default link variant setting for the whole project<br/>
                <h5>variables</h5>
                In this file game variables are stored. Feel free to delete default ones and set your own variables.<br/>
                <span style={{backgroundColor: '#e65757', padding: '5px'}}>warning</span> After deleting default values
                and trying to run default story, you'll be catching variable errors.
                <h5>done</h5>
                Perfect! Everything is done! Now you can proceed to next chapter called <strong>"About Passages"</strong>
            </GBlock>
            <br/><br/><br/>
            <div style={{display: 'flex', justifyContent: 'space-between'}}>
                <GLink to={`start.start`}>Back to Start</GLink>
                <GLink to={`main.passages`} style={{color: '#33339c'}}>Next to Passages</GLink>
            </div>
        </GPassage>
    ),
    passages: (
        <GPassage>
            <h3>About Passages.</h3>
            Each of passage-container file should be located in <i>/src/Story/passages/</i> folder. For your comfort you may
            add some directories inside and contain your passage-containers files there.<br/><br/>
            To create a passage-container file you may create <i>.js</i> or <i>.ts</i> file. I would highly recommend
            to call this file as you'll call the passage-container.<br/>
            Next, you should open it on edit and write this code on top:
            <CodeComponent code={`import {register} from "../../engine/passages";`}/>
            It will import <i>register</i> method, which will let you register your passage-container to the game.<br/>
            Also, you should add this code to the next line:
            <CodeComponent code={`import GPassage from "../../features/components/GPassage";`}/>
            It will import <i>GPassage</i> component, the main for your passage objects.<br/><br/>
            Next you should do something like this:
            <CodeComponent code={`
register({
    passage: (
        <GPassage>
            Hello world!
        </GPassage>
    ),
}, 'yourPassageContainer')
            `}/>
            On the <i>second</i> line you are calling <i>register</i> method to register your passage-container.
            Then you give it object <i>&#123;&#125;</i>, where you'll place your passages names.<br/>
            On the <i>third</i> line you declare your first passage name and then determine it as <i>&lt;GPassage&gt;</i><br/>
            On the <i>fifth</i> line there's your passage body. You can write your code there.
            On the <i>ninth</i> line there's your passage-container name. You should name it as you named file itself.<br/><br/>
            That's pretty it! It remains to tell the engine that it is worth starting with this passage.<br/>
            For that you should go to <strong>settings</strong> file (<i>/src/Story/settings.ts</i>) and change&nbsp;
            <strong>passages.start</strong> to the name of your passage-container.passage.<br/>
            e.g. for the example above, it should look like this:
            <CodeComponent code={`
    passages: {
        // as string
        start: "yourPassageContainer.passage",
        backgroundColor: \`rgba(255, 255, 255, 0.5)\`,
    },
            `}/>
            Perfect. Now you can refresh the page in the browser and check for the result. You're amazing!<br/><br/>
            Now you can add some components or HTML tags to your passage. <strong>(Covered in the next chapter)</strong><br/><br/>
            So, let's create another passage in our passage-container. For that you should input some code under your first passga.
            <CodeComponent code={`
register({
    passage: (
        <GPassage>
            Hello world!
        </GPassage>
    ),
    passage2: (
        <GPassage>
            Another one passage
        </GPassage>
    )
}, 'yourPassageContainer')
            `}/>
            Nothing really difficult. Just another passage called 'passage2' below the first passage.<br/><br/>
            Now let's connect them. For that, first, you need to import <strong>GLink</strong> component:
            <CodeComponent code={`import GLink from "../../features/components/GLink";`}/>
            Then put it inside your first passage, as shown below:
            <CodeComponent code={`
register({
    passage: (
        <GPassage>
            Hello world!
            <GLink to={\`yourPassageContainer.passage2\`}>To Passage 2</GLink>
        </GPassage>
    ),
    passage2: (
        <GPassage>
            Another one passage
        </GPassage>
    )
}, 'yourPassageContainer')
            `}/>
            Here's in 6s line you call GLink component with a property <i>to</i> that equals to the name of your
            second passage. That's it!<br/><br/>
            Now go back to browser and refresh the page. You'll see that there is a link-like component in lower side
            of the page. Click it. Tadaaa! You're ideal!<br/><br/>
            But there's one more thing: you see that the second passage leads to nowhere actually. It's not good,
            because you need to click <i>restart game</i> button to return to passage 1 (or refresh the page).<br/>
            But let's connect the second passage to the first one! Here's a code:
            <CodeComponent code={`
register({
    passage: (
        <GPassage>
            Hello world!
            <GLink to={\`yourPassageContainer.passage2\`}>To Passage 2</GLink>
        </GPassage>
    ),
    passage2: (
        <GPassage>
            Another one passage
            <GLink to={\`yourPassageContainer.passage\`}>Back to Start</GLink>
        </GPassage>
    )
}, 'yourPassageContainer')
            `}/>
            There we just added the <strong>GLink</strong> component to the second passage, which leads to passage 1.<br/>
            Check that out in your browser! Now you should go from one passage to another! Just WOW!<br/><br/>
            <span style={{backgroundColor: '#a8d86d', padding: '5px'}}>remember</span>&nbsp;If you stuck to the white
            screen while testing your game, it's possible, that you have your <strong>GLink</strong> leads to invalid
            passage name, check it for typos. Also it's possible, that you forgot to specify right passage-container or
            even forgot to register it. <strong>It's highly recommended to test each of your passages and links.</strong>

            <br/><br/><br/>
            <div style={{display: 'flex', justifyContent: 'space-between'}}>
                <GLink to={`main.setupAndSettings`}>Back to Setup And Settings</GLink>
                <GLink to={`main.htmlComponents`} style={{color: '#33339c'}}>Next to HTML Components</GLink>
            </div>
            <GLink to={`start.start`}>Back to Start</GLink>
        </GPassage>
    ),
    htmlComponents: (
        <GPassage>
            <h3>About HTML Components.</h3>
            Same as React, the engine supports ordinary HTML5 components.<br/>
            You can check list of them <a href='https://www.w3schools.com/TAGS/default.asp' rel="noreferrer" target='_blank'>here</a>.
            I would recommend using of &lt;div&gt; and &lt;span&gt; components for page wireframe breakdown and then
            styling it with CSS.<br/>
            Also I would recommend to read
            about <a href='https://reactjs.org/docs/faq-styling.html' rel="noreferrer" target='_blank'>React styles</a> a
            nd <a href='https://css-tricks.com/snippets/css/a-guide-to-flexbox/' rel="noreferrer" target='_blank'>Flexbox layout</a>,
            which will make your style even better. <strong>But it's completely optional</strong>.<br/><br/>
            Meanwhile, you can check game-engine custom components, that let your players experience even better. You
            can check it in the main page of this guide, chapter <strong>Components</strong>.
            They already styled and with some logic, so you can just put them into your passages.<br/><br/>
            Anyway, here's some examples of vanila HTML5 components:<br/><br/>
            <input placeholder="i'm just an input"/>
            <CodeComponent code={`<input placeholder="i'm just an input"/>`}/><br/>
            <div>IT'S JUST A DIV</div><div>IT'S JUST A DIV 2</div>
            <CodeComponent code={`<div>IT'S JUST A DIV</div><div>IT'S JUST A DIV 2</div>`}/>
            <span>SPAN1</span><span>SPAN2</span>
            <CodeComponent code={`<span>SPAN1</span><span>SPAN2</span>`}/>
            <button>This button does nothing</button>
            <CodeComponent code={`<button>This button does nothing</button>`}/>
            <h2>H2</h2><h3>H3</h3><h4>H4</h4>
            <CodeComponent code={`<h2>H2</h2><h3>H3</h3><h4>H4</h4>`}/>
            <textarea value="it's just a text area"/>
            <CodeComponent code={`<textarea value="it's just a text area"/>`}/>
            You can put any html component into your <strong>Passage</strong> and play with it within CSS.

            <br/><br/><br/>
            <div style={{display: 'flex', justifyContent: 'space-between'}}>
                <GLink to={`main.passages`}>Back to Passages</GLink>
                <GLink to={`main.sidemenu`} style={{color: '#33339c'}}>Next to SideMenu</GLink>
            </div>
            <GLink to={`start.start`}>Back to Start</GLink>
        </GPassage>
    ),
    sidemenu: (
        <GPassage>
            <h3>About LeftSide Menu.</h3>
            LeftSide Menu is a section of the game space where important things like Save Management, game restart,
            settings and game flow control buttons are located. You can also add custom values to the LeftSide Menu
            that you want the player to see all the time. As an example, put the indicators of the main character
            in the menu (HP, strength, fatigue, etc.).<br/><br/>
            You can close it and open it to see that some of controls are still appearing in the closed-state.<br/>
            Unfortunately, in the current version of game engine, you can't easily put your game-icons into closed
            menu, but stay tuned, it will be implemented later.<br/>
            Also I should say that LeftSide Menu is in close state by default on mobile devices, but it easily can
            be opened as on desktop.<br/><br/>
            So let's check out how you can customize LeftSide Menu.<br/>
            For that go to <i>/src/Story/sidebar/</i> and check files there. Every one of them is called as relevant
            section in LeftSide Menu. You can go ahead, open any of them and change internal code
            in <i>&#123;/*your text here*/&#125;</i>.<br/>
            Let's try and change <strong>StoryAuthor.js</strong>. For that open file in your editor and check it.
            Add some element or text instead of <i>&#123;/*your text here*/&#125;</i>. Profit. Now go to the
            browser and check the result (You don't even need to refresh it).<br/>
            <strong>You are awesome!</strong>

            <br/><br/><br/>
            <div style={{display: 'flex', justifyContent: 'space-between'}}>
                <GLink to={`main.htmlComponents`}>Back to HTML Components</GLink>
                <GLink to={`main.gameflow`} style={{color: '#33339c'}}>Next to GameFlow</GLink>
            </div>
            <GLink to={`start.start`}>Back to Start</GLink>
        </GPassage>
    ),
    gameflow: (
        <GPassage>
            <h3>About GameFlow.</h3>
            Game Flow in a more general sense really means "player experiences over time".<br/>
            Nice definition, right? But really, I'd say that it's about game variables and how you and player
            can interact with them.<br/>
            So, let's look at the situation. Let's say we have one variable <i>someVar1</i>. You can see it in
            the variable file <i>/src/Story/variables.js</i>.<br/>
            Below is <i>someVar1</i> value and a button that can increase it.<br/>
            Go ahead and play with it.<br/><br/>
            <div style={{display: 'flex', gap: '5rem', alignItems: 'center', backgroundColor: '#ffe8a4', justifyContent: 'center', padding: 10}}>
                <strong style={{backgroundColor: '#b6ee57', padding: 10, borderRadius: 10}}><V c={() => variables.someVar1}/></strong>
                <GButton onClick={() => {variables.someVar1 += 1}}>Increase someVar1</GButton>
            </div>
            <br/><br/>
            Now you should see that Undo button in the LeftSide Menu is clickable, so click it!<br/>
            Did you see what it did? Yeah, right, just what it meant to do: it did undo action. As you see,
            redo action now is clickable too. Play with it for a while.<br/><br/>
            Below is a button that can clear undo-redo stack, so it will disable the buttons. Click it!<br/>
            <div style={{display: 'flex', gap: '5rem', alignItems: 'center', backgroundColor: '#deffa4', justifyContent: 'center', padding: 10}}>
                <GButton onClick={() => {GHelpers.disableUndo()}}>Disable History Controls</GButton>
            </div><br/><br/>
            Voila! Now history controls are disabled, as you cleared the history. You can do it in your game just like this:
            <CodeComponent code={`<GButton onClick={() => {GHelpers.disableUndo()}}>Disable History Controls</GButton>`}/><br/>
            Also controls will be disabled as soon as player will reload the page or load save file.<br/><br/>
            You can check more about how to display variables in passages at <strong>Components</strong> section at
            Start page.
            <h5>About storing variables.</h5>
            All of the variables are stored in session and local storages in browser. As soon as player will start a
            new game and won't save his/her progress, variables will be in browser session object. As player save game, it
            will be sent to local session. Game reloading will clear session storage, but won't affect local storage.
            Local storage can be cleared by cookies clearing or deleting browser. Also user can save his/her savegames
            as file to his/her device and then upload from it.
            <br/><br/><br/>
            <div style={{display: 'flex', justifyContent: 'space-between'}}>
                <GLink to={`main.sidemenu`}>Back to SideMenu</GLink>
                <GLink to={`main.buildAndProduction`} style={{color: '#33339c'}}>Next Build And Production</GLink>
            </div>
            <GLink to={`start.start`}>Back to Start</GLink>
        </GPassage>
    ),
    buildAndProduction: (
        <GPassage>
            <h3>About Building Project and setting it up for Production.</h3>
            When you have completed all the code and tested your future game, it's time to prepare it for production.
            To do this, follow these instructions:<br/><br/>
            1. go to <i>/Settings/settings.ts</i> file;<br/>
            2. make sure that <strong>passages.start</strong> is set to your real start passage;<br/>
            3. make sure that <strong>project.name</strong> is set to your game name;<br/>
            4. make sure that <strong>project.version</strong> is right;<br/>
            5. make sure that <strong>project.author</strong> is your nickname / name;<br/>
            6. <strong style={{color: 'red'}}>!!!</strong> make sure that <strong>project.debug</strong> is false;<br/>
            7. go to your console and input this command:
            <CodeComponent code={`npm run build`} lang='shell'/>
            The build will be starting.<br/>
            It will take some time, in the end you will see folder named <strong><i>build</i></strong> in the project
            directory, there will be next files and folders:<br/><br/>
            - static - folder;<br/>
            - - media - folder with all of your images, videos and fonts;<br/>
            - - favicon.png - icon of your game, you can change it to another .ico file;<br/>
            - - logo192.png - big image of your game, you can change it to another .png file 192x192px;<br/>
            - - manifest.json - system file, check details <a href='https://web.dev/add-manifest-react/' rel="noreferrer" target='_blank'>here</a>;<br/>
            - index.html - main game file;<br/><br/>
            That's it! Now you can make your magic game public!

            <br/><br/><br/>
            <div style={{display: 'flex', justifyContent: 'space-between'}}>
                <GLink to={`main.gameflow`}>Back to GameFlow</GLink>
            </div>
            <GLink to={`start.start`}>Back to Start</GLink>
        </GPassage>
    ),
}, "main");