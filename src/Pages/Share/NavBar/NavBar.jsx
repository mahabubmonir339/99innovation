const NavBar = () => {
  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="flex-1 gap-2">
          <div className="w-10">
            <img src="../../../../public/icon.jpg" alt="icon" />
          </div>
          <div>
            <a className="text-base font-semibold">
              99 Inovation <br /> Management Portal
            </a>
          </div>
        </div>
        <div className="flex-none gap-2">
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img
                  src="https://images.pexels.com/photos/1559486/pexels-photo-1559486.jpeg"
                  alt="profilePic"
                />
              </div>
            </label>
            <ul
              tabIndex={0}
              className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
            >
              <li>
                <a className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </a>
              </li>
              <li>
                <a>Settings</a>
              </li>
              <li>
                <a>Logout</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
