interface Props {
  entity: any;
  deleteCard: (id: any) => void;
}

export default function Card({ entity, deleteCard }: Props) {
  const dob = entity.dob.date.substr(8, 2) + "/" + entity.dob.date.substr(5, 2) + "/" + entity.dob.date.substr(0, 4);

  return (
    <>
      <div className="card">
        <img src={entity.picture.large} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{entity.name.first + " " + entity.name.last}</h5>
          <p className="card-text">
            <p>
              Date of birth: {dob} <br /> City: {entity.location.city}
            </p>
          </p>
          <a href="#" className="btn btn-primary" onClick={() => deleteCard(entity.id)}>
            Delete
          </a>
        </div>
      </div>
    </>
  );
}
