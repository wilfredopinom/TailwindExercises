const CardBox = ({
  title = 'Title',
  description = 'Lorem ipsum dolor sit.',
}) => {
  return (
    <div className="flex flex-col w-28 bg-red-300 p-2 rounded-lg">
      <h3 className="self-center">{title}</h3>
      <p className="">{description}</p>
    </div>
  )
}

export default CardBox
