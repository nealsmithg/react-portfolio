import React from "react";

export default function Work() {
  return (
    <>
      <h1>
        <p>Astronomical</p>
        <p>Guidance</p>
      </h1>
      <div className="group_project">
        <h2>Description:</h2>
        <p>
          This webpage is designed to help Astrophotographers, Avid Skywatchers,
          and even Space Agencies look to the skies on specific days for both
          Astroids and even the ISS! The webpage uses the zipcode entered finds
          the latitude and longitude and displays information on when the next
          closest astroids will be passing. The info displayed for these
          astroids are their name, size in meters, its distance from Earth at
          its closest point in kilometers, and if it has the potential to hit
          Earth. Below this chart is another chart indicating when the next
          visible pass of the International Space Station will occure. It uses
          the latitude and longitude to give an accurate visible times, Cardinal
          Coordinate, and the angle off the horizon at its culmination point. It
          will gather information on the next three visible passes.
        </p>
        <br />
        <h2>
          Finished Project:
          <a
            href="https://jparris3213.github.io/UNC_Project_1_Group/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Astronomical Guidance
          </a>
        </h2>
        <br />
        <h2>
          Ripository:
          <a
            href="https://github.com/jparris3213/UNC_Project_1_Group"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
        </h2>
        <img
          src={require("../images/final_webpage_group_project.png")}
          alt="Astronomical Guidance Project"
          class="card-picture"
        />
      </div>
      <h1>
        <p>Flipped</p>
        <p>Pages</p>
      </h1>
      <div className="group_project">
        <h2>Description:</h2>
        <p>
          Books are the key to different avenues,Flipped Pages is available to
          help the user get there. An array of books will be displayed on a
          carousel to give users ideas of where to start. The best step is the
          ability to make their own account, the page that displays user
          interest, personality, goals and aspirations.You can learn a lot about
          someone based off a book selection. Once user has made an account they
          are able to search for the books of their dreams! Users can also see
          what other users have interest in or what they have read. Once the
          book of choice is selected, it will be displayed after it has been
          searched. Users can save their books into different categories: books
          that they want, have read, have been suggested and wish to read.
          Flipped Pages is the start of making all books available to each user
          in seconds, we are excited to be apart of the users book journey. Come
          and read, imagine, discover and grow with us!
        </p>
        <br />
        <h2>
          Finished Project:
          <a
            href="https://obscure-beach-36412.herokuapp.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Flipped Pages
          </a>
        </h2>
        <br />
        <h2>
          Ripository:
          <a
            href="https://github.com/nealsmithg/flipped_pages"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
        </h2>
        <img
          src={require("../images/flipped_pages_landing.png")}
          alt="Astronomical Guidance Project"
          class="card-picture"
        />
      </div>
    </>
  );
}
