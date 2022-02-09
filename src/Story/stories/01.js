import React from "react";
import { registerPassages, jumpTo, variables } from "../../Utils";
import Passage from "../../features/Passage";
import Link from "../../features/Link";
import Input from "../../features/Input";
import V from "../../features/V";
import Image from "../../features/Image";
import images from "../images";

const passageData = {
 passage1: <Passage>
  <h1>This is React-Powered Text Game Engine.</h1>
  Here's some sample text, which you can edit in src/Story/01.js, here's sample of variables: <V>myBrandNewVar</V>
  <br/>This will be displayed as new line
  <br/> And this one too! By the way, here's image sample:
  <Image src={images.samples.Sample}/>
  <br/> And here's a link sample:
  <Link to="passage2">Go to passage 2</Link>
 </Passage>,
 passage2: <Passage>
  This is passage 2, if you want, but here's another variable ref: <V>myBrandNewVar</V>
  <br/> This is sample of using input: <Input callback={value => alert(value)} button="Alert!"/>
  <br/> After clicking on button you will see alert with input text.
  <br/>
  <br/> By the way, if you go through this link, you will change this variable. You can check it back on the passage 1.
  <Link
      to="passage3"
      callback={() => {variables.myBrandNewVar += 1}}
  >Go To Passage 3</Link>
 </Passage>,
 passage3: <Passage>
  Here I will demonstrate you how 'jumpTo' works: <a href="#" onClick={() => jumpTo("passage1")}>Click Me</a>
  <br/> You can use it, for example, in Input component.
 </Passage>
}

registerPassages(passageData);