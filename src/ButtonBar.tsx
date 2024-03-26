interface Props {
  add: () => void;
  replaceFirst: () => void;
  deleteMiddle: () => void;
  clear: () => void;
  empty: boolean;
}

export default function ButtonBar({ add, replaceFirst, deleteMiddle, clear, empty }: Props) {
  return (
    <>
      <button type="button" className="btn btn-primary me-2" onClick={add}>
        Add
      </button>
      <button type="button" className="btn btn-warning me-2" onClick={replaceFirst} disabled={empty}>
        Replace first
      </button>
      <button type="button" className="btn btn-success me-2" onClick={deleteMiddle} disabled={empty}>
        Delete middle
      </button>
      <button type="button" className="btn btn-danger me-2" onClick={clear} disabled={empty}>
        Clear
      </button>
    </>
  );
}
