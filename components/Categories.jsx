import React from "react";
import CategoriesItem from "./CategoriesItem";

const Categories = () => {
  return (
    <div id="categories" className="p-2 md:p-8">
      <h2 className="text-xl font-bold px-2">
        <span className="text-[#9147ff]">Categories </span>
        we think you will like
      </h2>
      {/* Container */}
      <div className="grid grid-cols-4 sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-6 2xl:grid-cols-10 gap-2 py-2">
        <CategoriesItem
          img="https://static-cdn.jtvnw.net/ttv-boxart/509658-188x250.jpg"
          title="Just Chatting"
          viewers="403k Viewers"
          tag1="IRL"
        />
        <CategoriesItem
          img="https://static-cdn.jtvnw.net/ttv-boxart/27471_IGDB-188x250.jpg"
          title="Minecraft"
          viewers="22k Viewers"
          tag1="Strategy"
        />
        <CategoriesItem
          img="https://static-cdn.jtvnw.net/ttv-boxart/516575-188x250.jpg"
          title="Valorant"
          viewers="151k Viewers"
          tag1="FPS"
          tag2="Shooter"
        />
        <CategoriesItem
          img="https://static-cdn.jtvnw.net/ttv-boxart/33214-188x250.jpg"
          title="Fortnite"
          viewers="53k Viewers"
          tag1="Shooter"
          tag2="Action"
        />
        <div className="xs:hidden lg:block">
          <CategoriesItem
            img="https://static-cdn.jtvnw.net/ttv-boxart/511224-188x250.jpg"
            title="Apex Legends"
            viewers="112k Viewers"
            tag1="FPS"
            tag2="Shooter"
          />
        </div>
        <div className="xs:hidden lg:block">
          <CategoriesItem
            img="https://static-cdn.jtvnw.net/ttv-boxart/512710-188x250.jpg"
            title="Call Duty: War"
            viewers="38k"
            tag1="FPS"
            tag2="Shooter"
          />
        </div>
        <div className="xs:hidden 2xl:block">
          <CategoriesItem
            img="https://static-cdn.jtvnw.net/ttv-boxart/32982_IGDB-188x250.jpg"
            title="GTA: V"
            viewers="95k Viewers"
            tag1="Adventure"
            tag2="Action"
          />
        </div>
        <div className="xs:hidden 2xl:block">
          <CategoriesItem
            img="https://static-cdn.jtvnw.net/ttv-boxart/1614555304-188x250.jpg"
            title="Call of Duty"
            viewers="7.5k Viewers"
            tag1="FPS"
            tag2="Shooter"
          />
        </div>
        <div className="xs:hidden 2xl:block">
          <CategoriesItem
            img="https://static-cdn.jtvnw.net/ttv-boxart/491487-285x380.jpg"
            title="Dead by Daylight"
            viewers="33k Viewers"
            tag1="Action"
            tag2="Horror"
          />
        </div>
        <div className="xs:hidden 2xl:block">
          <CategoriesItem
            img="https://static-cdn.jtvnw.net/ttv-boxart/21779-285x380.jpg"
            title="League of Legends"
            viewers="31k Viewers"
            tag1="Action"
          />
        </div>
      </div>
    </div>
  );
};

export default Categories;
