import React from "react";

class FilmCard extends React.Component {
    render() {
        return (
            <div className="card">
                <div className="bottom-banner">
                    <div className="left">
                        <i>

                        </i>
                        <div className="film-info">
                            <h3 className="film-title">
                                Titre de film
                            </h3>
                            <p className="film-genre">
                                Drama / Western
                            </p>
                        </div>
                    </div>
                    <div className="right">
                        <i>

                        </i>
                        <p className="film-rate">
                            4.8
                        </p>
                    </div>
                </div>
            </div>
        );
    }
}

export default FilmCard;
