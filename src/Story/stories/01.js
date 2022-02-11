import React from "react";
import { registerPassages, jumpTo } from "../../Utils";
import variables from "../variables";
import Passage from "../../features/Passage";
import Link from "../../features/Link";
import Input from "../../features/Input";
import V from "../../features/V";
import Say from "../../features/Say";
import Image from "../../features/Image";
import images from "../images";

const passageData = {
 passage1: <Passage>
  <h1>This is React-Powered Text Game Engine.</h1>
  Here's some sample text, which you can edit in <i>src/Story/stories/01.js</i>, here's sample of variables: <V>myBrandNewVar</V>
  <br/>This will be displayed as new line
  <br/> And this one too! By the way, here's image sample:
  <Image src={images.samples.sample}/>
  <br/> And here's a link sample:
  <Link to="01.passage2">Go to passage 2</Link>
 </Passage>,
 passage2: <Passage>
  This is passage 2, if you want, but here's another variable ref: <V>myBrandNewVar</V>
  <br/>This is sample of using input: <Input callback={value => alert(value)} button="Alert!"/>
  <br/>After clicking on button you will see alert with input text.
  <br/>
  <br/>By the way, if you go through this link, you will change this variable. You can check it back on the passage 1.
  <br/><Link
      to="01.passage3"
      callback={() => {variables.myBrandNewVar += 1}}
  >Go To Passage 3</Link>
 </Passage>,
 passage3: <Passage>
  Here I will demonstrate you how 'jumpTo' works: <a href="#" onClick={() => jumpTo("01.passage4")}>Click Me</a>
  <br/> You can use it, for example, in Input component.
 </Passage>,
 passage4: <Passage>
  And here I will present you "Say" module.
  If you have a character, who needs to speak with different color then default, you can add it to variables.
  <br/>For example, here's will be dialog of speaker and random man:
  <Say who={variables.speaker}>Hello, my friend!</Say>
  <Say who="">Who are you? I don't know you.</Say>
  <br/><Link to="01.passage1">Go back to passage1</Link>
 </Passage>
}

registerPassages(passageData, "01");