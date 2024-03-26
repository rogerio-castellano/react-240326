interface Props {
  entityCount: number;
}

export default function Counter({ entityCount }: Props) {
  return <>{entityCount >= 1 && <p>Number of users: {entityCount}</p>}</>;
}
