import React from "react";

export default function Content() {
  const [meme, setMeme] = React.useState({
    topText: "",
    bottomText: "",
    randomMeme: "http://i.imgflip.com/1bij.jpg",
  });

  const [allMemes, setAllMemes] = React.useState([]);

  function memeClick() {
    const memeList = allMemes;
    let memeIndex = Math.floor(Math.random() * memeList.length);
    const url = memeList[memeIndex].url;
    setMeme((prevMeme) => {
      return { ...meme, randomMeme: url };
    });
  }

  React.useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
      .then((res) => res.json())
      .then((data) => setAllMemes(data.data.memes));
  }, []);

  function handleChange(event) {
    event.preventDefault();
    const { name, value } = event.target;
    setMeme((prevMeme) => ({
      ...prevMeme,
      [name]: value,
    }));
  }

  return (
    <main>
      <div className="form">
        <input
          type="text"
          placeholder="top-text"
          className="form--input"
          onChange={handleChange}
          name="topText"
          value={meme.topText}
        ></input>
        <input
          type="text"
          placeholder="bottom-text"
          className="form--input"
          onChange={handleChange}
          name="bottomText"
          value={meme.bottomText}
        ></input>
        <button className="form--btn" onClick={memeClick}>
          Get new meme image
        </button>
      </div>
      <div className="meme">
        <img
          src={meme.randomMeme}
          alt="Meme being edited"
          className="meme--image"
        />
        <h2 className="meme--text top">{meme.topText}</h2>

        <h2 className="meme--text bottom">{meme.bottomText}</h2>
      </div>
    </main>
  );
}
