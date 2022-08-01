import React, { Fragment } from "react";

function Song({ letra }) {

  if (letra.length === 0) return null;

  return (
    <Fragment>
      <div className="lyrics">
        <h2>Letra Canción</h2>
        <p className="letra">{letra}</p>
      </div>
    </Fragment>
  );
}
export default Song;