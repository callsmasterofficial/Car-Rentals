import React from 'react'

function Time({TimeIcon}) {
  return (
    <div>
        <svg
  stroke="currentColor"
  fill="currentColor"
  strokeWidth={0}
  viewBox="0 0 24 24"
  xmlns="http://www.w3.org/2000/svg"
  className={TimeIcon}

>
  <path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8z" />
  <path d="M13 7h-2v5.414l3.293 3.293 1.414-1.414L13 11.586z" />
</svg>
    </div>
  )
}

export default Time