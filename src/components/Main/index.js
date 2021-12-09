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
    imgpizza,
    imgshake,
    imgspoon,
    paragraphcake,
    paragraphpizza,
    paragraphshake,
    abouttitle,
    lorem,
    subscribe,
    submit,
    signup
  } = data.recipedata.mains[0];
  console.log("Main", data);

  return (
    <S.Container>
      <h1>{latesttitle}</h1>
      <S.Foods>
        <div>
          <img src={imgcake.url} alt="Cake Image" />
          <h2>{paragraphcake}</h2>
        </div>
        <div>
          <img src={imgcake.url} alt="Pizza Image" />
          <h2>{paragraphpizza}</h2>
        </div>
        <div>
          <img src={imgshake.url} alt="Shake Image" />
          <h2>{paragraphshake}</h2>
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
