import { Link } from "react-router-dom";
import { connect } from "funcup";
import React from "react";

import DemoMode from "../../components/DemoMode";
import InProgress from "../../components/InProgress";
import MainText from "../../components/MainText";
import PlainButton from "../../components/PlainButton";
import PosterAnimation from "../../components/PosterAnimation";
import SimpleScene from "../../components/SimpleScene";
import UserQuote from "../../components/UserQuote";
import { ns } from "../../updaters/ns";
import NextButton from "../../components/NextButton";

const s6 = props => (
  <div>
    <DemoMode />
    <SimpleScene isVisible={props.c1}>
      <UserQuote>
        I'll take your stuff up to the guest room. You go relax and say hello to{" "}
        {props.nieceName} and {props.inLawName}.
      </UserQuote>
      <MainText>
        You walk into the kitchen, dodging teenagers scurrying about the house,
        past parents chatting.
      </MainText>
      <NextButton onClick={() => props.update(ns("s6", "c2"))} />
    </SimpleScene>

    <SimpleScene isVisible={props.c2}>
      <UserQuote>{props.playerNameSaved}!</UserQuote>
      <MainText>
        {props.inLawName} shouts at your from the other side of the kitchen. She
        leaves a group of adults and walks over to give you a hug.
      </MainText>

      <MainText>
        You think about how good it feels to be hugged right now.
      </MainText>

      <UserQuote>{props.inLawName}, thanks so much for having me.</UserQuote>
      <NextButton onClick={() => props.update(ns("s6", "c3"))} />
    </SimpleScene>

    <SimpleScene isVisible={props.c3}>
      <UserQuote>
        Of course. We're all glad to see you, Alex tells me you're spending far
        too much time at the office. {props.nieceName} missed you. She's in the
        backyard with her friends.
      </UserQuote>

      <MainText>{props.inLawName} holds your arms and looks you over.</MainText>

      <UserQuote>Is everything alright?</UserQuote>
      <NextButton onClick={() => props.update(ns("s6", "c4"))} />
    </SimpleScene>

    <SimpleScene isVisible={props.c4}>
      <MainText>
        Does she know anything? Does she know about what {props.nieceName} is?
        Does she know what you're doing?
      </MainText>

      <MainText>
        You feel like it's written across your forehead. Your hands are clammy.
        You're sweating.
      </MainText>
      <NextButton onClick={() => props.update(ns("s6", "c5"))} />
    </SimpleScene>

    <SimpleScene isVisible={props.c5}>
      <PlainButton onClick={() => console.log("attempt to tell her")}>
        Tell her
      </PlainButton>
      <PlainButton onClick={() => console.log("everything is fine")}>
        Fine, I'm great.
      </PlainButton>
      <NextButton onClick={() => props.update(ns("s6", "c6"))} />
    </SimpleScene>

    <SimpleScene isVisible={props.c6}>
      {props.bToldHer && (
        <div>
          <UserQuote>Can we talk outside?</UserQuote>
          <MainText>
            You say as you lead {props.inLawName} out the backdoor.
          </MainText>
          <UserQuote>What is it?</UserQuote>
          <MainText>
            You wipe the sweat from your forehead, where do you start?
          </MainText>

          <PlainButton>
            I know this is going to sound crazy, but there's something about{" "}
            {props.nieceName} I need to tell you.
          </PlainButton>
          <PlainButton>
            I think {props.nieceName} could possibly be in danger.
          </PlainButton>
          <NextButton onClick={() => props.update(ns("s6", "c7"))} />
        </div>
      )}

      {props.bFine && (
        <div>
          <UserQuote>
            Fine. I'm fine. Great, really. It's great to be here.
          </UserQuote>
          <UserQuote>
            Okay, well {props.nieceName} is in the backyard with some friends,
            I'm sure she's dying to see you.
          </UserQuote>
          <NextButton onClick={() => props.update(ns("s6", "c7"))} />
        </div>
      )}
    </SimpleScene>

    <SimpleScene isVisible={props.c7}>
      {props.bToldHer && (
        <div>
          <UserQuote>
            I know this is going to sound crazy, but there's something about{" "}
            {props.nieceName} I need to tell you.
          </UserQuote>
          <UserQuote>What is it?</UserQuote>
          <UserQuote>{props.playerNameSaved}!</UserQuote>
          <MainText>
            {props.nieceName} runs towards you from across the yard.
          </MainText>
          <UserQuote>
            I'm sure it's something we can talk about later. I'll let you and{" "}
            {props.nieceName} catch up.
          </UserQuote>
          <MainText>
            {props.inLawName} strolls over towards a group of parents chatting
            nearby.
          </MainText>
          <NextButton onClick={() => props.update(ns("s6", "c8"))} />
        </div>
      )}

      {props.bFine && (
        <div>
          <MainText>
            You walk out the back door. {props.nieceName} and her group of
            friends are doing group _Slipknot karaoke_. How nice.
          </MainText>

          <UserQuote>{props.playerNameSaved}!</UserQuote>

          <MainText>
            She runs over and gives you a hug. At that exact moment The
            Council's words bounce through your head. Why must such great risk
            be put on such a young girl? Such a burden. What will this task do
            to her childhood...?
          </MainText>

          <MainText>TK TK, councils words bouncing through your head.</MainText>
          <NextButton onClick={() => props.update(ns("s6", "c8"))} />
        </div>
      )}
    </SimpleScene>

    <SimpleScene isVisible={props.c8}>
      <MainText>Are you considering taking on this task yourself?</MainText>
      <NextButton onClick={() => props.update(ns("s6", "c9"))} />
    </SimpleScene>

    <SimpleScene isVisible={props.c9}>
      <MainText>
        You could offer her help. The council never said anything about you
        helping her. Or maybe, you could take the task yourself.
      </MainText>
      <NextButton onClick={() => props.update(ns("s6", "c10"))} />
    </SimpleScene>

    <SimpleScene isVisible={props.c10}>
      <MainText>
        You slide away from the parents and children, and make your way
        upstairs. At the end of the hallway, you see {props.nieceName}'s room,
        mostly because of the posters on the door.
      </MainText>
      <NextButton onClick={() => props.update(ns("s6", "c11"))} />
    </SimpleScene>

    <SimpleScene isVisible={props.c11}>
      <PosterAnimation />
      <NextButton onClick={() => props.update(ns("s6", "c12"))} />
    </SimpleScene>

    <SimpleScene isVisible={props.c12}>
      <MainText>
        You open the door quietly, and quickly close it behind you.
      </MainText>
      <NextButton onClick={() => props.update(ns("s6", "c13"))} />
    </SimpleScene>

    <SimpleScene isVisible={props.c13}>
      <MainText>
        Your chest tightens, fingers begin to shake and fidget. How can you just
        leave the keyboard here? Will she know what to do with it? Does she
        understand the risks she is facing?
      </MainText>

      <MainText>
        Your thoughts swim within a pool of possible morbid outcomes.
      </MainText>
      <NextButton onClick={() => props.update(ns("s6", "c14"))} />
    </SimpleScene>

    <SimpleScene isVisible={props.c14}>
      <UserQuote>
        "{props.preferredTitle} {props.playerNameSaved}, what are you doing in
        here?"
      </UserQuote>
      <NextButton onClick={() => props.update(ns("s6", "c15"))} />
    </SimpleScene>

    <SimpleScene isVisible={props.c15}>
      <MainText>Fulfill your role - You set down the item</MainText>
      <MainText>
        Take on the task yourself - hide the item behind your back.
      </MainText>
      <NextButton onClick={() => props.update(ns("s6", "c16"))} />
    </SimpleScene>

    <SimpleScene isVisible={props.c16}>
      {props.roleFulfilled && (
        <div>
          <UserQuote>
            Iwasjustdroppingoffthegiftidon'tknowwhatisgoingon
          </UserQuote>
          <UserQuote>
            It's okay {props.preferredTitle} {props.playerNameSaved}.
          </UserQuote>
          <UserQuote>it is?</UserQuote>
          <MainText>You attempt to hold back tears.</MainText>
          <UserQuote>
            but i dont understand why. I don't understand what is happening
          </UserQuote>
          <MainText>
            She guides you over towards the chair at her computer.
          </MainText>
          <InProgress>Memory wipe ending :scream: </InProgress>
          <NextButton onClick={() => props.update(ns("s6", "c17"))} />
        </div>
      )}

      {props.taskTaken && (
        <div>
          <MainText>
            Your pulse races as you look for an explanation of why you've snuck
            into her room.
          </MainText>
          <UserQuote>
            "Just wanted to see if you still had my old computer with all those
            great games on it."
          </UserQuote>
          <UserQuote>"Oh yea, it's over here."</UserQuote>
          <MainText>
            She points to the section of computers and hardware in the corner,
            then leads you over.
          </MainText>
          <UserQuote>
            "Still works like a charm, added a new graphics card a year ago"
          </UserQuote>
          <MainText>
            You smile as she walks you through the changes she's made to the
            computer, and though you taught her some of the basics, her
            knowledge greatly surpassing yours at this point, and you feel
            proud.
          </MainText>
          <UserQuote>
            "that's amazing, you've taken the shell of an entirely old PC and
            turned it into a powerful computing machine."
          </UserQuote>
          <UserQuote>"thanks, theres only one piece left."</UserQuote>
          <UserQuote>"whats that"</UserQuote>
          <MainText>you ask, as your palms becoming sweaty.</MainText>
          <UserQuote>
            "oh {props.preferredTitle} {props.playerNameSaved}, i thought we'd
            passed this..."
          </UserQuote>
          <MainText>
            you're confused. what does she know. how could she?
          </MainText>
          <UserQuote>
            {props.petNameInputSaved} passed info said you were taking it
            especially rough this time...
          </UserQuote>
          <MainText>
            How does she know? She reaches for you bag and removes it from your
            clutches.
          </MainText>
          <InProgress>Choice again to resist or give in.</InProgress>
          <InProgress>Resist: uses cords to subdue you with magic</InProgress>
          <InProgress>
            Give in: easy, offer help, she appreciates, memory wipe still
          </InProgress>
          <NextButton onClick={() => props.update(ns("s6", "c17"))} />
        </div>
      )}
    </SimpleScene>

    <SimpleScene isVisible={props.c17}>
      <Link to={`/s7`}>Next</Link>
    </SimpleScene>
  </div>
);

const map = state => ({
  c1: state.s6.c1,
  c2: state.s6.c2,
  c3: state.s6.c3,
  c4: state.s6.c4,
  c5: state.s6.c5,
  c6: state.s6.c6,
  c7: state.s6.c7,
  c8: state.s6.c8,
  c9: state.s6.c9,
  c10: state.s6.c10,
  c11: state.s6.c11,
  c12: state.s6.c12,
  c13: state.s6.c13,
  c14: state.s6.c14,
  c15: state.s6.c15,
  c16: state.s6.c16,
  c17: state.s6.c17,
  c18: state.s6.c18
});

export default connect(map)(s6);