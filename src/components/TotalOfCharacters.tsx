type Props = {
  collection: any[];
  dataTestId: string;
};

const TotalOfCharacters = ({ collection, dataTestId }: Props) => (
  <span data-testid={dataTestId} style={{ color: "cyan", margin: "0 1rem" }}>
    {collection?.length}
  </span>
);

export default TotalOfCharacters;
