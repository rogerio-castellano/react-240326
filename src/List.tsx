import Card from "./Card";

interface Props {
  entities: any[];
  deleteCard: (id: any) => void;
}

export default function List({ entities, deleteCard }: Props) {
  return (
    <>
      <div className="container">
        <div className="row">
          {entities.map((item) => (
            <>
              <div className="col-3">
                <Card entity={item} key={item.id} deleteCard={deleteCard} />
              </div>
            </>
          ))}
        </div>
      </div>
    </>
  );
}
