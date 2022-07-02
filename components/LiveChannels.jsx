import React from "react";
import LiveChannelItem from "./LiveChannelItem";
import Live1 from "../public/assets/live/live1.jpg";
import Live2 from "../public/assets/live/live2.jpg";
import Live3 from "../public/assets/live/live3.jpg";
import Live4 from "../public/assets/live/live4.jpg";
import Live5 from "../public/assets/live/live5.jpg";
import Live6 from "../public/assets/live/live6.jpg";
import Live7 from "../public/assets/live/live7.jpg";
import Live8 from "../public/assets/live/live8.jpg";
import Live9 from "../public/assets/live/live9.jpg";
import Live10 from "../public/assets/live/live10.jpg";
import Live11 from "../public/assets/live/live11.jpg";
import Live12 from "../public/assets/live/live12.jpg";

const LiveChannels = () => {
  return (
    <div id="live" className="p-2 md:p-8">
      <h2 className="text-xl font-bold px-2">
        <span className="text-[#9147ff]">Live Channels </span>
        we think you will like
      </h2>

      {/* Container */}
      <div className="grid xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 2xl:grid-cols-4 3xl:grid-cols-5 gap-4 py-2">
        <LiveChannelItem
          img={Live1}
          profile_img="https://static-cdn.jtvnw.net/jtv_user_pictures/fef9fc35-20a0-4884-8ee1-10ab74c22687-profile_image-70x70.png"
          title="Highlight: Fortnite on a stormy day!"
          user="Ninja"
          game="Fortnite"
        />

        <LiveChannelItem
          img={Live2}
          profile_img="https://static-cdn.jtvnw.net/jtv_user_pictures/9193acb2-d282-4474-acf3-a286407d3ebf-profile_image-50x50.png"
          title="$3000 2v2 tournament w/ Mutex!"
          user="FKACLIpPz"
          game="Call Of Duty: MW2"
        />
        <div className="xs:hidden md:block">
          <LiveChannelItem
            img={Live3}
            profile_img="https://static-cdn.jtvnw.net/jtv_user_pictures/ad17eb22-c6e6-40d5-8777-17633c36fa04-profile_image-70x70.png"
            title="Luckiest Hatch Escape EVER!"
            user="KnaughtyKnancy"
            game="Dead By Daylight"
          />
        </div>
        <div className="xs:hidden 2xl:block">
          <LiveChannelItem
            img={Live4}
            profile_img="https://static-cdn.jtvnw.net/jtv_user_pictures/04dbc9bb-27bf-4975-b9ab-361268e8f5b5-profile_image-50x50.png"
            title="CRACKED Valorant Plays only"
            user="Leifline"
            game="Valorant"
          />
        </div>
        <div className="xs:hidden 3xl:block">
          <LiveChannelItem
            img={Live5}
            profile_img="https://static-cdn.jtvnw.net/jtv_user_pictures/e2eacc78-a621-4000-8989-367ae16288a2-profile_image-50x50.png"
            title="Laugh at my Pain / THE QUARRY"
            user="ChimiChow"
            game="The Quarry"
          />
        </div>
        <div className="xs:hidden 4xl:block">
          <LiveChannelItem
            img={Live6}
            profile_img="https://static-cdn.jtvnw.net/jtv_user_pictures/e31a4c21-bc33-4f68-bbf8-6106c6bc9544-profile_image-70x70.png"
            title="OWOWOWOWOWOWOWOWOW"
            user="Sp00sy"
            game="Apex Legends"
          />
        </div>

        <LiveChannelItem
          img={Live7}
          profile_img="https://static-cdn.jtvnw.net/jtv_user_pictures/1c14619b-d930-48d4-bd17-91784c8bde0f-profile_image-70x70.jpeg"
          title="LETS BUILD STREAM / MINECRAFT"
          user="WonderBoIIstreams"
          game="Minecraft"
        />

        <LiveChannelItem
          img={Live8}
          profile_img="https://static-cdn.jtvnw.net/jtv_user_pictures/f6888517-2345-4e91-abde-9b7940426410-profile_image-70x70.png"
          title="WE HIT THOSE!!"
          user="TSM_Dyrus"
          game="Tom Clancys Rainbow Six Siege"
        />
        <div className="xs:hidden md:block">
          <LiveChannelItem
            img={Live9}
            profile_img="https://static-cdn.jtvnw.net/jtv_user_pictures/d81e652c-97a1-4858-be3c-0a3a3efa4e75-profile_image-50x50.png"
            title="LIVE: The Worlds Most Epic Gameplay"
            user="FragDelta"
            game="Counter Strike: Global Offensive"
          />
        </div>
        <div className="xs:hidden 2xl:block">
          <LiveChannelItem
            img={Live10}
            profile_img="https://static-cdn.jtvnw.net/jtv_user_pictures/66db29e0-80c5-4227-99a2-d450008c85a7-profile_image-50x50.png"
            title="MOM IM SCARED!!!!"
            user="F00zie"
            game="Bendy And The Ink Machine"
          />
        </div>
        <div className="xs:hidden 3xl:block">
          <LiveChannelItem
            img={Live11}
            profile_img="https://static-cdn.jtvnw.net/jtv_user_pictures/6f5cf913-d503-4cc4-a50c-3c7c09055f52-profile_image-50x50.png"
            title="CHARITY STREAM! any support is ap.."
            user="HollyWoodBobNYE"
            game="PUBG: BATTLEGROUNDS"
          />
        </div>
        <div className="xs:hidden 4xl:block">
          <LiveChannelItem
            img={Live12}
            profile_img="https://static-cdn.jtvnw.net/jtv_user_pictures/118bbe20-08f1-49e3-a95f-cccdcc5451c0-profile_image-50x50.png"
            title="LETS GET THIS MANSION!! / Heists only"
            user="OverL0rdBrinkz"
            game="Grand Theft Auto V"
          />
        </div>
  


      </div>
    </div>
  );
}

export default LiveChannels;
