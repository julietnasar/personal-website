import React from "react";

function ProjectTile(props) {
  return (
    <div class="proj-tile">
      <h3>{props.name}</h3>
      <img src={props.path} alt="project" />
      <p>{props.summary}</p>
    </div>
  );
}

export default ProjectTile;
