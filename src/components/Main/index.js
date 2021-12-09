import React from "react";
import * as S from "./styles";

import { graphql, useStaticQuery } from "gatsby";

export function Main() {
  const data = useStaticQuery(graphql`
    query {
      recipedata {
        mains {
          imgcake {
            url
          }
          imgshake {
            url
          }
          imgspoon {
            url
          }
          imgpizza {
            url
          }
          latesttitle
          lorem
          paragraphcake
          paragraphpizza
          paragraphshake
          signup
          submit
          subscribe
          abouttitle
        }
      }
    }
  `);

  const {
    latesttitle,
    imgcake,

    imgshake,
    imgspoon,
    paragraphcake,
    paragraphpizza,
    paragraphshake,
    abouttitle,
    lorem,
    subscribe,
    submit,
    signup,
    imgpizza
  } = data.recipedata.mains[0];
  console.log("Main", data);

  return (
    <S.Container>
      <h1>{latesttitle}</h1>
      <S.Foods>
        <div>
          <nav>
            <img src={imgcake.url} alt="Cake Image" />
          </nav>
          <aside>
            <h2>{paragraphcake}</h2>
          </aside>
        </div>
        <div>
          <nav>
            <img src={imgpizza.url} alt="Pizza Image" />
          </nav>
          <aside>
            <h2>{paragraphpizza}</h2>
          </aside>
        </div>
        <div>
          <nav>
            <img src={imgshake.url} alt="Shake Image" />
          </nav>
          <aside>
            <h2>{paragraphshake}</h2>
          </aside>
        </div>
      </S.Foods>
      <S.Spoon>
        <img src={imgspoon.url} alt="Spoon Image" />
        <div>
          <h1>{abouttitle}</h1>
          <picture>
            <p>{lorem}</p>
          </picture>
        </div>
      </S.Spoon>
      <S.Subscribe>
        <div>
          <h1>{subscribe}</h1>
          <picture>
            <h2>{signup}</h2>
          </picture>
          <picture>
            <input type="text" placeholder="Your Email"></input>
          </picture>
          <picture>
            <button>{submit} </button>
          </picture>
        </div>
      </S.Subscribe>
    </S.Container>
  );
}
