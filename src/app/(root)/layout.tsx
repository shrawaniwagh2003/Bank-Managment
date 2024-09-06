import Slidebar from "@/components/ui/Slidebar";
import logo from '../../public/icons/logo.svg'
import Image from "next/image";
Image

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const loggedIn = {firstName : 'shrawani', lastName: 'Wagh'}
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

        </div>

      </div>
    </div>



    {children}
</main>
  );
}
