import React from 'react'

const AfficheurValeur = ({ valeur, unite }) => {
  return (
    <div className="afficheur-valeur">
      <span className="valeur">{valeur}</span>
      <span className="unite">{unite}</span>
    </div>
  )
}

export default AfficheurValeur
