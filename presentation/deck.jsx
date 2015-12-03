import React from "react/addons";

import {
  Appear, BlockQuote, Cite, CodePane, Deck, Fill,
  Heading, Image, Layout, Link, ListItem, List, Quote, Slide, Text
} from "../src/spectacle";

import preloader from "../src/utils/preloader";

import Interactive from "./interactive";

export default class extends React.Component {
  render() {
    return (
      <Deck transition={["zoom", "slide"]} transitionDuration={800}>
        <Slide transition={["zoom"]} bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="black">
            What the Flux?
          </Heading>
        </Slide>
        <Slide transition={["slide"]} bgColor="primary">
          <Heading caps textColor="secondary">
            MVC
          </Heading>
          <Appear fid="1">
            <Image fit src={require('./images/mvc-simple.png')}/>
          </Appear>
          <Appear fid="2">
            <Image fit src={require('./images/mvc-complex.png')}/>
          </Appear>
        </Slide>
        <Slide transition={["slide"]} bgColor="primary">
          <Heading caps textColor="secondary">
            Flux
          </Heading>
          <Appear fid="1">
            <Image fit src={require('./images/flux-simple.png')}/>
          </Appear>
          <Appear fid="2">
            <Image fit src={require('./images/flux-complex.png')}/>
          </Appear>
        </Slide>
        <Slide transition={["slide"]} bgColor="primary">
          <Heading caps textColor="secondary">
            Advantages
          </Heading>
          <List>
            <ListItem><Appear fid="1">Enforced Synchrony</Appear></ListItem>
            <ListItem><Appear fid="2">Inversion of Control</Appear></ListItem>
            <ListItem><Appear fid="3">Semantic Actions</Appear></ListItem>
            <ListItem><Appear fid="4">No Cascading Actions</Appear></ListItem>
          </List>
        </Slide>
        <Slide transition={["slide"]}>
          <Appear fid="1">
            <Heading size={1} caps fit textColor="secondary">
              Redux
            </Heading>
          </Appear>
          <Appear fid="2">
            <Heading size={1} caps fit textColor="tertiary">
              Kind of a Flux implementation, but better!
            </Heading>
          </Appear>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="secondary">
          <Appear fid="0">
            <Heading size={1} caps fit textColor="tertiary">
              The three principles of Redux
            </Heading>
          </Appear>
        </Slide>
        <Slide transition={["zoom", "fade"]} bgColor="primary">
          <Appear fid="1">
            <Heading size={1} caps fit textColor="black">
              Single source of truth
            </Heading>
          </Appear>
          <Appear fid="2">
            <Heading size={1} caps fit textColor="tertiary">
              One Store to rule them all
            </Heading>
          </Appear>

          <Appear fid="2">
          <CodePane
            lang="javascript"
            source={require("raw!./store.js.example")}
            margin="20px auto"
          />
          </Appear>
        </Slide>
        <Slide transition={["slide", "fade"]} bgColor="primary">
          <Appear fid="1">
            <Heading size={1} caps fit textColor="black">
              Read-only State
            </Heading>
          </Appear>
          <Appear fid="2">
            <Heading size={1} caps fit textColor="tertiary">
              Only actions mutate the state.
            </Heading>
          </Appear>

          <Appear fid="2">
          <CodePane
            lang="javascript"
            source={require("raw!./action.js.example")}
            margin="20px auto"
          />
          </Appear>
        </Slide>
        <Slide transition={["zoom", "spin"]} bgColor="primary">
          <Appear fid="1">
            <Heading size={1} caps fit textColor="black">
              State mutations are pure functions
            </Heading>
          </Appear>
          <Appear fid="2">
          <CodePane
            lang="javascript"
            source={require("raw!./reducer.js.example")}
            margin="20px auto"
          />
          </Appear>
        </Slide>
      </Deck>
    );
  }
}
