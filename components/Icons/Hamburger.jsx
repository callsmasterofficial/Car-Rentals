import React from 'react'

function Hamburger({setModal}) {
  return (
    <div>
        <svg
  stroke="currentColor"
  fill="white"
  strokeWidth={0}
  viewBox="0 0 512 512"
  height="2em"
  width="2em"
  xmlns="http://www.w3.org/2000/svg"
  onClick={()=>setModal("hamburger")}
>
  <path d="M32 96v64h448V96H32zm0 128v64h448v-64H32zm0 128v64h448v-64H32z" />
</svg>
    </div>
  )
}

export default Hamburger