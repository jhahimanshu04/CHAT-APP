import React from "react";

function User() {
  return (
    <div className="mb-2 ">
      <div className="flex space-x-4 px-6 py-3 hover:bg-slate-700 duration-300 cursor-pointer">
        <div className="avatar avatar-online">
          <div className="w-12 rounded-full">
            <img src="https://img.daisyui.com/images/profile/demo/gordon@192.webp" />
          </div>
        </div>
        <div>
          <h1>Akhil</h1>
          <span>akhil@gmail.com</span>
        </div>
      </div>
    </div>
  );
}

export default User;
