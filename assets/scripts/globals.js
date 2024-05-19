

"use atrict";

const 
   _ = ( ...v ) => console.log( ...v )
   ,
   $ = v => document.querySelector( v )
   ,
   $$ = v => document.querySelectorAll( v )
;

let 
   schema = {}
;
schema.st = `
   <table>
         <caption>users</caption>
         <thead>
            <tr>
               <th>id</th>
               <th>name</th>
               <th>idade</th>
            </tr>
         </thead>
         <tbody>
            <tr>
               <td>1</td>
               <td>Nome 1</td>
               <td>20</td>
            </tr>
            <tr>
               <td>2</td>
               <td>Nome 2</td>
               <td>25</td>
            </tr>
            <tr>
               <td>3</td>
               <td>Nome 3</td>
               <td>30</td>
            </tr>
         </tbody>
      </table>
`;

_( `== == == == == == == == ==
   globals: 
== == == == == == == == ==` );

addEventListener( "load", () => {
   
   /* == [ sql schemas ] 
   == == == == == == == == ==*/
   $$( "schema[st]" ).forEach( sc => {
      sc.outerHTML = schema.st;
   } );
   
   /* == [ bg ] 
   == == == == == == == == ==*/
   $$( "[bg]" ).forEach( b => {
      _( "bg: ");
      b.style.background = b. getAttribute( "bg" );
   } );
   
} );