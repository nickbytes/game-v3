import "../../vendor/devices.min.css";

import { Arrow } from "rebass";
import { Link } from "react-router-dom";
import { connect } from "funcup";
import React from "react";

import {
  addPlayerName,
  addSecurityAnswers,
  setNewPetName,
  setNewPetOwner,
  setNewPetType,
  setNewPlayerName,
  startBurning
} from "./updaters";
import { coworker, coworkerFullTitle } from "../../utilities/coworker";
import { receptionist } from "../../utilities/receptionist";
import BrokenEmail from "../../components/BrokenEmail";
import CustomContainer from "../../components/CustomContainer";
import DemoMode from "../../components/DemoMode";
import YourNewBadge from "../../components/YourNewBadge";
import DreamText from "../../components/DreamText";
import JobSelectionComponent from "../../components/JobSelectionComponent";
import MainText from "../../components/MainText";
import NewInput from "../../components/NewInput";
import NextButton from "../../components/NextButton";
import NotesApp from "../../components/NotesApp";
import PetFormInput from "../../components/PetFormInput";
import PetFormLabel from "../../components/PetFormLabel";
import PhoneComponent from "../../components/PhoneComponent";
import SimpleScene from "../../components/SimpleScene";
import Smoke from "../../components/Smoke";
import UserQuote from "../../components/UserQuote";
import WebcamComponent from "../../components/WebcamComponent";
import Workspace from "../../components/Workspace";
import buttonStyle from "../../utilities/buttonStyle";
import keyboard from "../../images/keyboard.jpg";
import { ns } from "../../updaters/ns";
import { badgeHelper } from "../../pages/s1/updaters";

const s1 = props => (
  <div>
    <DemoMode />
    <SimpleScene isVisible={props.c1}>
      <CustomContainer>
        <UserQuote attrib="You">
          "Hello, I've forgotten my badge. Could I get a temporary one for
          today?"
        </UserQuote>
        <NextButton onClick={() => props.update(ns("s1", "c2"))} />
      </CustomContainer>
    </SimpleScene>

    <SimpleScene isVisible={props.c2}>
      <CustomContainer>
        <MainText>
          The receptionist looks at you, annoyed. You're not bothered by it.
        </MainText>
        <MainText>
          Nothing is getting on your nerves today. Not the{" "}
          <button style={buttonStyle} onClick={e => props.update(startBurning)}>
            <div style={{ position: "relative" }}>
              burnt toast
              {props.startBurning && <Smoke />}
            </div>
          </button>
          that nearly caused a fire in your apartment, not your nosy super Derek
          asking about your plans to renew your lease, not your forgotten badge,
          and not the receptionist's crabby mood.
        </MainText>
        <MainText>
          It's Friday. It's the end of a long week. And after work today you're
          headed to from New York to Washington, DC for your niece's birthday.
        </MainText>
        <NextButton onClick={() => props.update(ns("s1", "c3"))} />
      </CustomContainer>
    </SimpleScene>

    <SimpleScene isVisible={props.c3}>
      <CustomContainer>
        <UserQuote attrib={receptionist()}>
          "Name{" "}
          <button
            style={buttonStyle}
            onClick={e => props.update(ns("s1", "c4"))}
          >
            please
          </button>."
        </UserQuote>
      </CustomContainer>
    </SimpleScene>

    <SimpleScene isVisible={props.c4}>
      <CustomContainer>
        <form
          onSubmit={e => {
            e.preventDefault();
            props.update(addPlayerName);
          }}
          style={{
            display: "flex"
          }}
        >
          <NewInput
            defaultValue=""
            placeholder="First Name"
            value={props.newPlayerName}
            onChange={e => props.update(setNewPlayerName(e.target.value))}
          />

          <button
            style={{
              background: "none",
              border: "none",
              cursor: "pointer"
            }}
            children={<Arrow right />}
          />
        </form>
      </CustomContainer>
    </SimpleScene>

    <SimpleScene isVisible={props.c5}>
      <CustomContainer>
        <UserQuote attrib="You">"{props.playerNameSaved}."</UserQuote>
        <NextButton onClick={() => props.update(ns("s1", "c6"))} />
      </CustomContainer>
    </SimpleScene>

    <SimpleScene isVisible={props.c6}>
      <CustomContainer>
        <UserQuote attrib={receptionist()}>
          "Position{" "}
          <button
            style={buttonStyle}
            onClick={e => props.update(ns("s1", "c7"))}
          >
            please
          </button>."
        </UserQuote>
      </CustomContainer>
    </SimpleScene>

    <SimpleScene isVisible={props.c7}>
      <CustomContainer>
        <JobSelectionComponent {...props} />
      </CustomContainer>
    </SimpleScene>

    <SimpleScene isVisible={props.c8}>
      <CustomContainer>
        <UserQuote attrib="You">"{props.playerOccupationSaved}."</UserQuote>
        <NextButton onClick={() => props.update(ns("s1", "c9"))} />
      </CustomContainer>
    </SimpleScene>

    <SimpleScene isVisible={props.c9}>
      <div>
        <CustomContainer>
          <MainText>Eyes zoom in drawing (in progress)</MainText>
        </CustomContainer>
        <CustomContainer>
          <MainText>
            {receptionist()} is looking intensely at you. What's her deal? Why
            is she grilling you like this?
          </MainText>
        </CustomContainer>

        <CustomContainer>
          <NextButton onClick={() => props.update(ns("s1", "c10"))} />
        </CustomContainer>
      </div>
    </SimpleScene>

    <SimpleScene isVisible={props.c10}>
      <CustomContainer>
        <UserQuote attrib={receptionist()}>
          "THE ANSWERS TO YOUR SECURITY QUESTION."
        </UserQuote>
      </CustomContainer>

      <CustomContainer>
        <MainText>
          She nearly spits the words at you, her lower limb trembling.
        </MainText>
      </CustomContainer>

      <CustomContainer>
        <NextButton onClick={() => props.update(ns("s1", "c11"))} />
      </CustomContainer>
    </SimpleScene>

    <SimpleScene isVisible={props.c11}>
      <CustomContainer>
        <UserQuote pt={"100px"} attrib={receptionist()}>
          "What is the name of a close friend or relative who owns a pet, the
          pets name, and the type of pet?"
        </UserQuote>
      </CustomContainer>

      <CustomContainer>
        <MainText>You don't remember filling out this question.</MainText>
      </CustomContainer>
      <CustomContainer>
        <NextButton onClick={() => props.update(ns("s1", "c12"))} />
      </CustomContainer>
    </SimpleScene>

    <SimpleScene isVisible={props.c12}>
      <CustomContainer>
        <form
          onSubmit={e => {
            e.preventDefault();
            props.update(addSecurityAnswers);
          }}
        >
          <PetFormLabel>Friend or relative w/ pet</PetFormLabel>
          <PetFormInput
            defaultValue=""
            placeholder="Aunt Millie"
            value={props.newPetOwner}
            onChange={e => props.update(setNewPetOwner(e.target.value))}
          />

          <PetFormLabel>Type of Pet</PetFormLabel>
          <PetFormInput
            defaultValue=""
            placeholder="parrot"
            value={props.newPetType}
            onChange={e => props.update(setNewPetType(e.target.value))}
          />

          <PetFormLabel>Pet Name</PetFormLabel>
          <PetFormInput
            defaultValue=""
            placeholder="George"
            value={props.newPetName}
            onChange={e => props.update(setNewPetName(e.target.value))}
          />
          <div>
            <NextButton />
          </div>
        </form>
      </CustomContainer>
    </SimpleScene>

    <SimpleScene isVisible={props.c13}>
      <div>
        <CustomContainer>
          <MainText>More click-clacking on the keyboard.</MainText>
        </CustomContainer>

        <CustomContainer>
          <UserQuote pl={"300px"} attrib={receptionist()}>
            "Look towards the{" "}
            <button onClick={() => props.update(ns("s1", "c14"))}>
              camera
            </button>."
          </UserQuote>
        </CustomContainer>
      </div>
    </SimpleScene>

    <SimpleScene isVisible={props.c14}>
      <CustomContainer>
        <WebcamComponent {...props} />
      </CustomContainer>
    </SimpleScene>

    <SimpleScene isVisible={props.c14b}>
      <UserQuote>
        Here is your new{" "}
        <button style={buttonStyle} onClick={() => props.update(badgeHelper())}>
          badge
        </button>.
      </UserQuote>
    </SimpleScene>

    <SimpleScene isVisible={props.c14c}>
      <YourNewBadge
        imgSrc={props.photoSrc}
        playerName={props.playerNameSaved}
        playerOccupation={props.playerOccupationSaved}
        {...props}
      />
    </SimpleScene>

    <SimpleScene isVisible={props.c15}>
      <CustomContainer>
        <MainText>
          Once you arrive at your desk, you turn on your{" "}
          <button
            style={buttonStyle}
            onClick={e => props.update(ns("s1", "c16"))}
          >
            computer
          </button>.
        </MainText>
      </CustomContainer>
    </SimpleScene>

    <SimpleScene isVisible={props.c16}>
      <Workspace {...props} />
    </SimpleScene>

    <SimpleScene isVisible={props.c17}>
      <div>
        <MainText>Emails. Deadlines. Presentations. Calls.</MainText>
        <MainText>
          It's going to be a long day, you should really grab a cup of coffee
          first.
        </MainText>

        <MainText>
          When you get back to your desk, you see that you have a{" "}
          <button
            style={buttonStyle}
            onClick={e => props.update(ns("s1", "c18"))}
          >
            voicemail
          </button>from your brother.
        </MainText>
      </div>
    </SimpleScene>

    <SimpleScene isVisible={props.c18}>
      <PhoneComponent {...props} />
      <MainText>
        We need an audio transcript here, and this to be the only thing on the
        page.
      </MainText>
    </SimpleScene>

    <SimpleScene isVisible={props.c19}>
      <CustomContainer>
        <MainText>
          What did he mean by 'strange gift'...? You think back to Sam's last
          birthday...
        </MainText>
      </CustomContainer>

      <CustomContainer>
        <DreamText>
          barbeque, slipknot karaoke, did you have a few drinks...?
        </DreamText>
        <DreamText>
          what did you get her...? how could you{" "}
          <button
            style={buttonStyle}
            onClick={() => props.update(ns("s1", "c20"))}
          >
            forget
          </button>{" "}
          this...?
        </DreamText>
      </CustomContainer>
    </SimpleScene>

    <SimpleScene isVisible={props.c20}>
      <CustomContainer>
        <MainText>
          It all feels dreamlike. You're a{" "}
          {props.playerOccupationSaved || "PLAYER_OCCUPATION"} – you pay such
          great attention to detail. How could you forget something like
          this...?
        </MainText>
        <MainText>
          Maybe Alex <i>is</i> right.
        </MainText>
        <MainText>
          All this work is pushing you to the edge. This weekend, you won't take
          your laptop, you won't look at the Feeds, you'll disconnect. You've
          just got to{" "}
          <button
            style={buttonStyle}
            onClick={e => props.update(ns("s1", "c21"))}
          >
            get through the next few hours and deadlines.
          </button>
        </MainText>
      </CustomContainer>
    </SimpleScene>

    <SimpleScene isVisible={props.c21}>
      <Workspace>
        <BrokenEmail {...props} />
        <NotesApp />
      </Workspace>
    </SimpleScene>

    <SimpleScene isVisible={props.c22}>
      <div>
        <CustomContainer>
          <MainText>
            Something is wrong with your keyboard. As a{" "}
            {props.playerOccupationSaved || "PLAYER_OCCUPATION"}, it's pretty
            essential for you to have this type of special keyboard. While any
            version of this keyboard will work, you've been using this one for
            years.
          </MainText>
        </CustomContainer>
        <CustomContainer>
          <button onClick={() => props.update(ns("s1", "c23"))}>
            <img src={keyboard} alt="keyboard" />
          </button>
        </CustomContainer>
      </div>
    </SimpleScene>

    <SimpleScene isVisible={props.c23}>
      <UserQuote attrib={coworkerFullTitle()}>"Keyboard issues?"</UserQuote>
      <NextButton onClick={() => props.update(ns("s1", "c24"))} />
    </SimpleScene>

    <SimpleScene isVisible={props.c24}>
      <MainText>You look up and see {coworker()}. Describe him more.</MainText>
      <NextButton onClick={() => props.update(ns("s1", "c25"))} />
    </SimpleScene>

    <SimpleScene isVisible={props.c25}>
      <UserQuote attrib={`You, ${props.playerNameSaved}`}>
        For some reason, every key is registering as only an n or b on the
        screen.
      </UserQuote>
      <NextButton onClick={() => props.update(ns("s1", "c26"))} />
    </SimpleScene>

    <SimpleScene isVisible={props.c26}>
      <UserQuote attrib={coworkerFullTitle()}>
        Same thing happened to me about a year ago. I took it to a place near
        where I lived in DC. Fixed it up in a day, had it working good as new.
      </UserQuote>
      <NextButton onClick={() => props.update(ns("s1", "c27"))} />
    </SimpleScene>

    <SimpleScene isVisible={props.c27}>
      <UserQuote attrib={`You, ${props.playerNameSaved}`}>
        I'm taking the Amtrak down there this weekend... It's my niece's
        birthday...
      </UserQuote>
      <NextButton onClick={() => props.update(ns("s1", "c28"))} />
    </SimpleScene>

    <SimpleScene isVisible={props.c28}>
      <UserQuote attrib={coworkerFullTitle()}>
        Crazy coincidence! It's right off the Amtrak stop. You can't miss it,
        south east corner of the Mall. Open on weekends too, can probably pick
        it up on your way back.
      </UserQuote>
      <Link to="/train-ride">Next</Link>
    </SimpleScene>
  </div>
);

const map = state => ({
  c1: state.s1.c1,
  c2: state.s1.c2,
  c3: state.s1.c3,
  c4: state.s1.c4,
  c5: state.s1.c5,
  c6: state.s1.c6,
  c7: state.s1.c7,
  c8: state.s1.c8,
  c9: state.s1.c9,
  c10: state.s1.c10,
  c11: state.s1.c11,
  c12: state.s1.c12,
  c13: state.s1.c13,
  c14: state.s1.c14,
  c14b: state.s1.c14b,
  c14c: state.s1.c14c,
  c15: state.s1.c15,
  c16: state.s1.c16,
  c17: state.s1.c17,
  c18: state.s1.c18,
  c19: state.s1.c19,
  c20: state.s1.c20,
  c21: state.s1.c21,
  c22: state.s1.c22,
  c23: state.s1.c23,
  c24: state.s1.c24,
  c25: state.s1.c25,
  c26: state.s1.c26,
  c27: state.s1.c27,
  c28: state.s1.c28,
  newBadgeReceived: state.s1.newBadgeReceived,
  startBurning: state.startBurning,
  playerNameInput: state.playerNameInput,
  playerNameSaved: state.playerNameSaved,
  playerOccupationSaved: state.playerOccupationSaved,
  playerOccupationRadio: state.playerOccupationRadio,
  petOwnerInput: state.petOwnerInput,
  petTypeInput: state.petTypeInput,
  petNameInput: state.petNameInput,
  petOwnerInputSaved: state.petOwnerInputSaved,
  petTypeInputSaved: state.petTypeInputSaved,
  petNameInputSaved: state.petNameInputSaved,
  photoSrc: state.photoSrc
});

export default connect(map)(s1);