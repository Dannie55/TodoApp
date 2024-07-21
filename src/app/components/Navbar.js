"use client";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";

export default function Navabar() {
  const pathname = usePathname();
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <header className="bg-green-600 py-4 px-10 fixed w-full z-10">
      <div className="flex gap-3 items-center text-tertiary">
        <div
          className="block lg:hidden border border-lime-300 cursor-pointer rounded-full p-2"
          onClick={() => setIsModalOpen(!isModalOpen)}
        >
          {isModalOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18 18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          )}
        </div>
        <h1>DannieTodo</h1>
      </div>
      {isModalOpen ? (
        <ul className="text-tertiary flex flex-col gap-10 py-5 px-0 md:px-[36px] items-center justify-center">
          <li title="Add Todo" className={pathname == "/" ? " bg-green-500 rounded-md" : ""}>
            <Link className="pl-3 pe-10 py-2 flex gap-3" href="/">
  
              <svg xmlns="http://www.w3.org/2000/svg" 
              fill="none" viewBox="0 0 24 24" 
              stroke-width="1.5" 
              stroke="currentColor" 
              class="size-6">
                <path stroke-linecap="round" 
                stroke-linejoin="round" 
                d="M8.242 5.992h12m-12 6.003H20.24m-12 5.999h12M4.117 7.495v-3.75H2.99m1.125 3.75H2.99m1.125 0H5.24m-1.92 2.577a1.125 1.125 0 1 1 1.591 1.59l-1.83 1.83h2.16M2.99 15.745h1.125a1.125 1.125 0 0 1 0 2.25H3.74m0-.002h.375a1.125 1.125 0 0 1 0 2.25H2.99" />
</svg>
             

              <span>Add Todo</span>
            </Link>
          </li>
          <li title="Todo" className={pathname == "/todo" ? " bg-green-500 rounded-md" : ""}>
            <Link className="pl-3 pe-10 py-2 flex gap-3" href="/todo">
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

              

              <span>To do</span>
            </Link>
          </li>
          <li title="Completed Todo" className={pathname == "/completed" ? " bg-green-500 rounded-md" : ""}>
            <Link className="pl-3 pe-10 py-2 flex gap-3" href="/completed">
            <svg xmlns="http://www.w3.org/2000/svg" 
            fill="none" viewBox="0 0 24 24" 
            stroke-width="1.5" stroke="currentColor" 
            class="size-6">
             <path stroke-linecap="round" 
             stroke-linejoin="round" 
             d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
</svg>

              <span>Completed Todo</span>
            </Link>
          </li>
        </ul>
      ) : (
        <></>
      )}
    </header>
  );
}
