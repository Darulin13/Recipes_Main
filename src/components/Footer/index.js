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

  return (
    <>
      <S.Container>{about}</S.Container>
    </>
  );
}
