// import { UserButton } from "@clerk/nextjs";

// import { MainNav } from "./MainNavBar";
// const Navbar = async () => {
//   return (
//     <div className="border-b">
//       <div className="flex h-16 items-center px-4">
//         <MainNav className="mx-6" />
//         <div className="ml-auto flex items-center space-x-4">
//           <UserButton afterSignOutUrl="/" />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Navbar;

import { MainNav } from "./MainNavBar";
import { ProfileNavBar } from "./ProfileNavBar";
export default function Header() {
  return (
    <div className="border-b">
      <div className="flex h-16 items-center px-4">
        <MainNav className="mx-6" />
        <div className="ml-auto flex items-center space-x-4">
          <ProfileNavBar />
        </div>
      </div>
    </div>
  );
}
