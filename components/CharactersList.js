import Link from "next/link";

const CharactersList = ({ characters }) => {
  return (
    <ul>
      {characters.map((char) => (
        <li key={char._id} className="mt-2">
          <Link href={`/character/${char._id}`}>
            <a className="block w-full p-4 shadow-sm cursor-pointer hover:shadow rounded-md">
              {char.mainInfo.name}
            </a>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default CharactersList;
