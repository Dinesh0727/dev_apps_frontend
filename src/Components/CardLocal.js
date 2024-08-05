import React from 'react'

export default function CardLocal({title, body, subtitle}) {
  return (
    <div>
        <div className="card" style={{width: "16rem", margin: "0 2rem 0 0"}}>
            <div className="card-body">
              <h5 className="card-title">{title}</h5>
              <h6 className="card-subtitle mb-2 text-muted">{subtitle}</h6>
              <p className="card-text card-text-local">
                {body}
              </p>
            </div>
          </div>
    </div>
  )
}
