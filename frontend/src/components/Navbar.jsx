const Navbar = () => {
  return (
    <ul className="flex w-full h-[60px] space-x-10 mt-5 bg-orange-200 justify-center items-center">
      <li>
        <a href="/">หน้าหลัก</a>
      </li>
      <li>
        <a href="/menu">เมนู</a>
      </li>
      <li>
        <a href="/">เพิ่มเมนู</a>
      </li>
    </ul>
  );
};

export default Navbar;
