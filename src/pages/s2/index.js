import CustomContainer from "../../components/CustomContainer";
import DemoMode from "../../components/DemoMode";
import MainText from "../../components/MainText";
import NextButton from "../../components/NextButton";
import SimpleScene from "../../components/SimpleScene";
import TrainAnimation from "../../components/TrainAnimation";
import ItalicMind from "../../components/ItalicMind";
import UserQuote from "../../components/UserQuote";
import Waves from "../../components/Waves";
import { ns } from "../../updaters/ns";
import buttonStyle from "../../utilities/buttonStyle";
import { connect } from "funcup";
import React from "react";
import { Link } from "react-router-dom";

const scene = "s2";

const s2 = props => (
  <div>
    <DemoMode />
    <SimpleScene isVisible={props.c1}>
      <CustomContainer>
        <MainText>
          You board the train, duffle bag slung over one shoulder, keyboard in
          the other hand.
        </MainText>
        <MainText>
          You find a seat near the middle of the train and unwind. You've made
          it. The end of a long week.
        </MainText>
        <MainText>
          Relief washes over you like a series gentle{" "}
          <button
            style={buttonStyle}
            onClick={e => props.update(ns(scene, "c2"))}
          >
            waves.
          </button>
        </MainText>
      </CustomContainer>
    </SimpleScene>

    <SimpleScene isVisible={props.c2}>
      <CustomContainer>
        <Waves />
      </CustomContainer>
      <NextButton onClick={() => props.update(ns("s2", "c3"))} />
    </SimpleScene>

    <SimpleScene isVisible={props.c3}>
      <CustomContainer>
        <MainText>
          The train nudges forward, and begins rolling out of the station. You
          lean against the window as city lights slowly give in to the darkness
          of the outer edges of the city.
        </MainText>
        <MainText>
          The train has begun its slow wind along the coast. It lulls you to{" "}
          <button
            style={buttonStyle}
            onClick={e => props.update(ns("s2", "c4"))}
          >
            sleep.
          </button>
        </MainText>
      </CustomContainer>
    </SimpleScene>

    <SimpleScene isVisible={props.c4}>
      <CustomContainer>
        <TrainAnimation {...props} />
      </CustomContainer>
    </SimpleScene>

    <SimpleScene>
      <MainText>Half awake, you hear the sounds of the doors opening.</MainText>
      <MainText>
        You squirm in your seat, trying to get comfortable, holding on to the
        precious sleep that has eluded you most of the week.
      </MainText>

      <MainText>
        You hear the subtle whirrrrrr of the train engines at rest.
      </MainText>
    </SimpleScene>

    <SimpleScene>
      <MainText>
        Opening your eyes for a split second, you see you are still alone in the
        train cabin.
      </MainText>
      <MainText>
        The sky was still dark. There are no blue hues fading into black sky
        yet. You must be somewhere between Baltimore and Washington, D.C.
      </MainText>
      <MainText>
        You feel the keyboard and bag, still on the seat next to you.
      </MainText>

      <MainText>
        Soon, the conductor will announce the next stop, advise passengers to
        'Be Careful Of The Closing Doors', and the train will continue onward.
      </MainText>

      <MainText>You want for the expectantly for the announcement.</MainText>
    </SimpleScene>

    <SimpleScene>
      <MainText>...</MainText>
      <MainText>...</MainText>
      <MainText>...</MainText>
    </SimpleScene>

    <SimpleScene>
      <MainText>
        There must be some hold up. Possibly waiting for another train for
        people to transfer, someone asking the conductor about directions...
      </MainText>
    </SimpleScene>

    <SimpleScene>
      <MainText>...</MainText>
      <MainText>...</MainText>
      <MainText>...</MainText>
    </SimpleScene>

    <SimpleScene>
      <MainText>
        The car is quiet. You steal another glance, and twist your neck to see
        if anyone else in the car is awake and noticing the stop, but you are
        the only one in the car.
      </MainText>

      <MainText>
        You're awake now. Hopefully there is no issue with the train.
      </MainText>

      <MainText>You sit up straight and glance out at the station.</MainText>

      <MainText>Which station is this?</MainText>
    </SimpleScene>

    <SimpleScene>
      <MainText>
        You look for a sign, but do not immediately see one. Your view must be
        obstructed by one of the brick pillars lining the platform.
      </MainText>

      <MainText>
        It looks like any other medium sized station along this corridor.
      </MainText>

      <MainText>Each follow a similar layout:</MainText>
    </SimpleScene>

    <SimpleScene>
      <ul>
        <li>* small parking lot</li>
        <li>
          * variety of weathered vending machines inside and out, usually out of
          order and/or stock
        </li>
        <li>
          * a waiting room, in case of cold weather, equipped with an analogue
          or digital train times board
        </li>
        <li>
          * a small snack bar/cafe selling tar black coffee, breakfast pastries
          wrapped in Saran Wrap, fruit snacks, magazines, energy drinks, beer,
          wine coolers, chips, candy, gum
        </li>
        <li>* a sadly restroom</li>
        <li>
          * and a plastic wall mount distributing pamphlets for attractions,
          restaurants, golf courses, hay rides, swimming poles, lawn care, tax
          services, and public parks
        </li>
      </ul>
    </SimpleScene>

    <SimpleScene>
      <MainText>This station is no different.</MainText>
    </SimpleScene>

    <SimpleScene>
      <MainText>
        Lights illuminate the platform, though no one is standing outside. You
        don't blame them, it's a bit chilly tonight, and they've likely already
        boarded the train.
      </MainText>
    </SimpleScene>

    <SimpleScene>
      <MainText>
        Something catches your eye, nearly out of view from your seat, further
        along the platform.
      </MainText>
    </SimpleScene>

    <SimpleScene>
      <MainText>Sitting on one of the benches outside...</MainText>
    </SimpleScene>

    <SimpleScene>
      <MainText>...</MainText>
      <MainText>...</MainText>
      <MainText>...</MainText>
    </SimpleScene>

    <SimpleScene>
      <MainText>Is... that ...?</MainText>
    </SimpleScene>

    <SimpleScene>
      <MainText>
        Your eyes must be deceiving you. For a second, you thought you saw...
        no, no... surely not. Lack of sleep, exhaustion.
      </MainText>
    </SimpleScene>

    <SimpleScene>
      <MainText>
        You rub your eyes, and look out onto the platform again.
      </MainText>

      <MainText>
        Is it a child waving at you? You try and convince yourself otherwise,
        but the thought rises up anyway...
      </MainText>
    </SimpleScene>

    <SimpleScene>
      <MainText>... is that a PET?</MainText>
    </SimpleScene>

    <SimpleScene>
      <MainText>
        You stand, face pressed against the glass, peering wildly across the
        platform.
      </MainText>
      <MainText>... is it... waving at you?!?!</MainText>
    </SimpleScene>

    <SimpleScene>
      <MainText>
        You turn back to and look around the train car. There is no one else
        here to see this.
      </MainText>
    </SimpleScene>

    <SimpleScene>
      <MainText>
        You turn back to and look around the train car. There is no one else
        here to see this.
      </MainText>
      <MainText>You sit back down in your seat.</MainText>
    </SimpleScene>

    <SimpleScene>
      <ItalicMind>What is happening?</ItalicMind>
      <ItalicMind>Is this a dream?</ItalicMind>
      <ItalicMind>This must be a dream, Nick.</ItalicMind>
      <ItalicMind> Of course.</ItalicMind>
    </SimpleScene>

    <SimpleScene>
      <MainText>
        You debate getting off the train. You debate whether this could be a
        dream, but it is much too real. You can feel the subtle tactile keys on
        the keyboard. You measure your breaths. You wiggle your toes, feel the
        tips of your fingers. This is real. Bag, suitcase, and keyboard in hand,
        you slowly stand, and begin moving toward the{" "}
        <button onClick={e => props.update()} style={buttonStyle}>
          open door
        </button>.
      </MainText>
      <MainText>
        You look back and cannot see the PET. You stand and walk along the aisle
        of the train.
      </MainText>
    </SimpleScene>

    <SimpleScene>
      -- you can speak?! -- Yes, Nick. I can speak. This is all real. Come,
      we've been waiting for you, we thought the train would not make it
    </SimpleScene>

    <SimpleScene>
      WHERE WE NEED TO GET TO: Pet has already explained that you are going to
      see the council, they will explain, and that you now need to get the
      keyboard.
    </SimpleScene>

    <SimpleScene isVisible={props.afterSayingPetName}>
      <UserQuote attrib={`You, ${props.playerNameSaved}`}>
        "You can speak! What in the hell is going on? Where are we.. what is the
        council..."
      </UserQuote>

      <MainText>You feel your legs start to wobble.</MainText>
      <UserQuote attrib={props.petNameInputSaved}>
        "Oh yes, I always seem to forget this part...The Council will explain it
        to you."
      </UserQuote>

      <Link to="/s03eSlashington">Next</Link>
    </SimpleScene>
  </div>
);

const map = state => ({
  c1: state.s2.c1,
  c2: state.s2.c2,
  c3: state.s2.c3,
  c4: state.s2.c4
});

export default connect(map)(s2);
