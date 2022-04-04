import React, { useState, useRef } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import styles from "./AFForm.module.scss";
// import confetti from "canvas-confetti";

const AFForm = () => {
  const [isLoading, setIsLoading] = useState();

  const formRef = useRef(null);

  const onSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(!isLoading);

    move();
    let current = 0;
    let phrases = [
      "Analyzing salt score",
      "Analyzing stax pieces",
      "Analyzing mana curve",
      "Analyzing tutors",
      "Analyzing mana rocks",
      "Analyzing combo potential",
      "",
    ];

    function move() {
      let width = 0;
      let elem = document.getElementById("bar");
      let elem1 = document.getElementById("progressBar");
      elem.style.visibility = "visible";
      elem1.style.visibility = "visible";
      console.log("move ran");

      let id = setInterval(frame, 2000);
      function frame() {
        if (width >= 100) {
          clearInterval(id);
        } else {
          width += 16.7;
          elem.style.width = width + "%";
        }
      }
    }
    let timer = setInterval(() => {
      if (current == 6) {
        clearInterval(timer);
        // confetti({
        //   particleCount: 100,
        //   spread: 70,
        //   origin: { y: 0.6 },
        // });
        let z = document.getElementById("Power");
        let edhrec = document.getElementById("footer");
        let joke = document.getElementById("joke");

        if (!isLoading) {
          z.innerText = "Your deck is a 7";
          edhrec.innerText = "Return to EDHREC";
          joke.innerText = "This was part of EDHREC's 2022 April Fools Joke";
        }
      }
      let y = document.getElementById("loading");
      y.innerText = phrases[current];

      current++;
    }, 2000);
  };

  const reset = () => {
    setIsLoading(!isLoading);
    let elem = document.getElementById("bar");
    elem.style.width = 0;
    let y = document.getElementById("loading");
    y.innerText = "";
    let z = document.getElementById("Power");
    z.innerText = "";
    formRef.current.reset();
  };

  return (
    <div>
      <meta
        name="description"
        content="Recs - personalized deck recommendations based on hundreds of thousands of Commander decks"
      />
      <meta
        name="keywords"
        content="EDHREC,EDH,recommendations,Commander,MTG,Magic,staples,strategy,content"
      />

      <div>
        <h4 className={styles.heading}>POWER LEVEL CALCULATOR</h4>
        <div className={styles.container}>
          <div className={styles.innerContainer}>
            <Form ref={formRef} onSubmit={onSubmit}>
              <Form.Group>
                <div className={styles.title}>
                  <Form.Label></Form.Label>
                </div>
                <div id="Power" className={styles.number}></div>
              </Form.Group>
              <Form.Group>
                <div className={styles.decklist}>
                  <Form.Label>Decklist</Form.Label>
                </div>
                <div id="decklist">
                  <Form.Control
                    as="textarea"
                    onChange={(e) => e.target.value}
                    placeholder="Deckbuilding website link"
                    rows={5}
                    required
                    className={styles.input}
                  />
                </div>
              </Form.Group>
              <div className={styles.submit} id="button">
                <Button disabled={isLoading} type="submit" variant="primary">
                  {"Submit"}
                </Button>
                <Button onClick={() => reset()} disabled={!isLoading}>
                  {"Reset"}
                </Button>
              </div>
              <div id="loading" className={styles.loading}></div>
              <div id="progressBar" className={styles.progressBar}>
                <div id="bar" className={styles.bar}></div>
              </div>
            </Form>
            <a href="https://edhrec.com">
              <div id="footer" className={styles.footer}></div>
            </a>
            <div id="joke"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AFForm;
