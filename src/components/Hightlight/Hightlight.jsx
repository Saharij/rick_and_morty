import React, { useContext } from "react";

import { SearchContext } from '../../context/context';

export const Hightlight = ({ string }) => {
  const filter = useContext(SearchContext);
  if (!filter) return string;

  const regexp = new RegExp(filter, 'ig');
  const matchValue = string?.match(regexp);

  if (matchValue) {
    return string?.split(regexp).map((item, index, array) => {
      if (index < array.length - 1) {
        const start = matchValue.shift();

        return (
          <>
            {item}
            <span style={{ backgroundColor: "yellow" }}>
              {start}
            </span>
          </>
        );
      }

      return item;
    });
  }

  return string;
};
