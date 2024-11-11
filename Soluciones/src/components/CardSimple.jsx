const Card = ({
  title = 'Card Title',
  description = 'Lorem ipsum dolor sit amet consectetur.',
}) => {
  return (
    <div className="flex flex-col bg-slate-400 p-3 rounded-md">
      <h3 className="card__title">{title}</h3>
      <p className="card__text">{description}</p>
    </div>
  )
}

export default Card
