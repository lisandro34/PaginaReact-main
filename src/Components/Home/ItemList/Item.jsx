

export const Item = ({ item }) => {

  const { name, eye_color } = item
  return (
    <div className="col">
      <div className="card">
        <img className="card-img-top"
          src={"https://picsum.photos/320/250?" + name}
          alt={name} />
        <div className="card-body">
          <h5 className="card-title initialism link-secondary"><strong>Nombre:</strong> {name}</h5>
          <p className="card-text initialism  link-secondary "><strong>Color de Ojos:</strong> ${eye_color}</p>
        </div>
      </div>
    </div>
  )
}
