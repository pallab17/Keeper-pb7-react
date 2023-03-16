// // import React from "react";

// // function Note(pb){
// //     return <div className="note">
// //         <h1 >{pb.heading}</h1>
// //         <p  > {pb.content} </p>
// //     </div>

// // }

// // export default Note;
// import React from "react";

// function Note(pb) {
//   return (
//     <div className="note">
//       <h1>{pb.title}</h1>
//       <p>{pb.content}</p>
//       <button>DELETE</button>
//     </div>
//   );
// }

// export default Note;




import React from "react";
// import DeleteIcon from "@material-ui/icons/Delete";
import DeleteIcon from '@mui/icons-material/Delete';

function Note(props) {
  function handleClick() {
    props.onDelete(props.id);
  }

  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button onClick={handleClick}>
        <DeleteIcon />
      </button>
    </div>
  );
}

export default Note;
