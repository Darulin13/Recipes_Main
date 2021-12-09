import React from "react";
import * as S from "./styles";

import { graphql, useStaticQuery } from "gatsby";

export function Header() {
  const data = useStaticQuery(graphql`
    query {
      recipedata {
        headers {
          about
          background {
            url
          }
          logo {
            url
          }
          recipes
          subscribe
          title
        }
      }
    }
  `);
  const {
    about,
    background,
    logo,
    recipes,
    subscribe,
    title
  } = data.recipedata.headers[0];
  console.log("Header", data);
  return (
    <S.Container back={background.url}>
      <div>
        <picture>
          <img src={logo.url} alt="Logo" />
        </picture>
        <ul>
          <li>{about}</li>
          <li>{recipes}</li>
          <li>{subscribe}</li>
        </ul>
      </div>
      <h1>{title}</h1>
    </S.Container>
  );
}
