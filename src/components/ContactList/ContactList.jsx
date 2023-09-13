export const ContactsList = ({ contacts, onDelete }) => {
  return (
    <ul>
      {contacts.map(({ id, name, number }) => {
        return (
          <li key={id}>
            {name}: {number}{' '}
            <button onClick={() => onDelete(id)}>Delete</button>
          </li>
        );
      })}
    </ul>
  );
};
