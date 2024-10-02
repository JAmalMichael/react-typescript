type ListProps<T> = {
    items: T[];
    onClick: (value: T) => void;
  };
  
  const List = <T extends string | number>({ items, onClick }: ListProps<T>) => {  //T extends {}, T extends {id: number}
    return (
      <div>
        <h2>List of Items</h2>
        {items.map((item, index) => {
          return (
            <div key={index} onClick={() => onClick(item)}>
              {item}
            </div>
          );
        })}
      </div>
    );
  };

export default List