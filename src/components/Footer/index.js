import React from "react";
import * as S from "./styles";

import { graphql, useStaticQuery } from "gatsby";

export function Footer() {
  const data = useStaticQuery(graphql`
    query {
      recipedata {
        footers {
          instagram {
            url
          }
          facebook {
            url
          }
          twitter {
            url
          }
          pinterest {
            url
          }
          about
          recipes
          subscribe
          info
        }
      }
    }
  `);

  const {
    about,
    recipes,
    subscribe,
    info,
    twitter,
    pinterest,
    facebook,
    instagram
  } = data.recipedata.footers[0];
  console.log("Footer", data);

  return (
    <S.Container>
      <div>
        <ul>
          <li>
            <img src={instagram.url} alt="Instagram icon" />{" "}
          </li>
          <li>
            {" "}
            <img src={twitter.url} alt="Twitter icon" />
          </li>
          <li>
            {" "}
            <img src={facebook.url} alt="Facebook icon" />
          </li>
          <li>
            {" "}
            <img src={pinterest.url} alt="Pinterest icon" />
          </li>
        </ul>
        <ul>
          <li>{about}</li>
          <li>{recipes}</li>
          <li>{subscribe}</li>
        </ul>
      </div>
      <nav>
        <p>{info}</p>
      </nav>
    </S.Container>
  );
}
