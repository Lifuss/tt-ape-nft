const NavButtons = ({ next, previous }) => {
  return (
    <ul className="flex justify-center font-biro text-2xl gap-12 text-white">
      <li onClick={previous}>Prev</li>
      <li onClick={next}>Next</li>
    </ul>
  );
};

export default NavButtons;
