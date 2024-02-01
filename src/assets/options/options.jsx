
export default function Options() {

    const list = Array.from({ length: 8 }, (_, index) => index);
  
    return (
      <div className="options col-4">
        <ul>
          {list.map(element => (
            <li key={element}>Option #{element + 1}</li>
          ))}
        </ul>
      </div>
    );
  }
  