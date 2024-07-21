"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Sidebar() {
  const pathname = usePathname();
  return (
    <nav className="bg-green-600 text-tertiary fixed h-full col-start-1 col-end-3 hidden lg:block">
      <ul className="flex flex-col gap-10 py-12 px-[36px]">
        <li title="Add Todo" className={pathname == "/" ? " bg-black rounded-md" : ""}>
          <Link className="pl-0 min-[1790px]:pl-3 pe-0 min-[1790px]:pe-10 py-2 flex gap-3" href="/">
          <svg xmlns="http://www.w3.org/2000/svg" 
              fill="none" viewBox="0 0 24 24" 
              stroke-width="1.5" 
              stroke="currentColor" 
              class="size-6">
                <path stroke-linecap="round" 
                stroke-linejoin="round" 
                d="M8.242 5.992h12m-12 6.003H20.24m-12 5.999h12M4.117 7.495v-3.75H2.99m1.125 3.75H2.99m1.125 0H5.24m-1.92 2.577a1.125 1.125 0 1 1 1.591 1.59l-1.83 1.83h2.16M2.99 15.745h1.125a1.125 1.125 0 0 1 0 2.25H3.74m0-.002h.375a1.125 1.125 0 0 1 0 2.25H2.99" />
</svg>
            <span className="hidden min-[1790px]:block">Add Todo</span>
          </Link>
        </li>
        <li title="Todo" className={pathname == "/todo" ? "bg-black rounded-md" : ""}>
          <Link className="pl-0 min-[1790px]:pl-3 pe-0 min-[1790px]:pe-10 py-2 flex gap-3" href="/todo">
          <svg xmlns="http://www.w3.org/2000/svg" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke-width="1.5" 
            stroke="currentColor" 
            class="size-6">
              <path stroke-linecap="round" 
                    stroke-linejoin="round" 
                    d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25ZM6.75 12h.008v.008H6.75V12Zm0 3h.008v.008H6.75V15Zm0 3h.008v.008H6.75V18Z" />
</svg>
            <span className="hidden min-[1790px]:block">To do</span>
          </Link>
        </li>
        <li title="Completed Todo" className={pathname == "/completed" ? "bg-black rounded-md" : ""}>
          <Link className="pl-0 min-[1790px]:pl-3 pe-0 min-[1790px]:pe-10 py-2 flex gap-3" href="/completed">
          <svg xmlns="http://www.w3.org/2000/svg" 
            fill="none" viewBox="0 0 24 24" 
            stroke-width="1.5" stroke="currentColor" 
            class="size-6">
             <path stroke-linecap="round" 
             stroke-linejoin="round" 
             d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
</svg>
            <span className="hidden min-[1790px]:block">Completed Todos</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
