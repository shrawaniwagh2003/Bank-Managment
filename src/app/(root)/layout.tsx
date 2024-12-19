import Slidebar from "@/components/ui/Slidebar";
import logo from '../../public/icons/logo.svg'
import Image from "next/image";
import MobileNav from "@/components/ui/MobileNav";
import { getLoggedInUser } from "../../../lib/actions/user.actions";
import { redirect, useRouter } from "next/navigation";
Image

export default  async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {


  const loggedIn = await getLoggedInUser();

  if(!loggedIn) redirect('/sign-in')

  return (
<main className="flex h-screen w-full font-inter">
    <Slidebar user={loggedIn}/>

    <div className="flex size-full flex-col">
      <div className="root-layout">
        <Image 
        src={logo} 
        width={30} 
        height={30} 
        alt="menu icon" 
        />
        <div>
        {/* mobile view */}
        <MobileNav user={loggedIn}/>
        </div>

      </div>
    {children}
    </div>



</main>
  );
}
