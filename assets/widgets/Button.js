

function Button( props  ) {
   const 
      buttonStyle = `
         <style>
            button[ btn="${ props.tag }" ] {
               padding: ${ props.pd || "1.1em 2em" };
               background: ${ props.bg || "#27f" };
               border: ${ props.border || "transparent" };
               border-radius: ${ props.radius || ".55em" };
               color: ${ props.color || "#fff" };
               text-transform: uppercase;
               font-weight: bold;
               font-size: ${ props.size || "1em" };
            }
         </style>
      `
   ;
   
   $$( `button[btn="${ props.tag }"` ).forEach( item => {
      return( item.outerHTML = `
         <button btn="${ props.tag }">
            ${ buttonStyle }
            <content>
               ${ item.innerText || "send" }
            </content>   
         </button>   
      ` );
   } );
}