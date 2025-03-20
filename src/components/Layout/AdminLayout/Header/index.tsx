import React from "react";
import { useAuth } from "~/context/AuthContext";

const AdminHeader = () => {
  const { user, logout } = useAuth();

  return (
    <header className="flex justify-between items-center p-4 bg-gray-900 text-white">
      <h1>Admin Panel</h1>
      <div>
        {user && (
          <>
            <span className="mr-4">👑 {user.username}</span>
            <button onClick={logout} className="bg-red-500 px-4 py-2 rounded">
              Đăng xuất
            </button>
          </>
        )}
      </div>
    </header>
  );
};

export default AdminHeader;
