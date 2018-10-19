import React from 'react';

// Input property: Liked: boolean
// Output: onClick event 
const Like = (props) => {
    let classes = "fa fa-heart";
    if (!props.liked) 
    classes += "-o";

    return  (
    <i 
    onClick={props.onClick} 
    style= {{ cursor: 'pointer'}} 
    className={classes} 
    aria-hidden="true"
    /> 
    );
}

 
export default Like;