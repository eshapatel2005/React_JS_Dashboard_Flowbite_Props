import React from 'react'
import { Card } from "flowbite-react";
import { Sidebar, SidebarItem, SidebarItemGroup, SidebarItems } from "flowbite-react";
import { HiArrowSmRight, HiChartPie, HiInbox, HiShoppingBag, HiTable, HiUser, HiViewBoards } from "react-icons/hi";


function PropsComponents({title,description,image}) {
  return (
    <>
    <table>
      <tr>
        <th>
          <Sidebar className='side1' aria-label="Default sidebar example">
            <SidebarItems>
              <SidebarItemGroup>
                <SidebarItem href="#" icon={HiChartPie}>Dashboard</SidebarItem>
                <SidebarItem href="#" icon={HiViewBoards} label="Pro" labelColor="dark">Kanban</SidebarItem>
                <SidebarItem href="#" icon={HiInbox} label="3">Inbox</SidebarItem>
                <SidebarItem href="#" icon={HiUser}>Users</SidebarItem>
                <SidebarItem href="#" icon={HiShoppingBag}>Products</SidebarItem>
                <SidebarItem href="#" icon={HiArrowSmRight}>Sign In</SidebarItem>
                <SidebarItem href="#" icon={HiTable}>Sign Up</SidebarItem>
              </SidebarItemGroup>
            </SidebarItems>
          </Sidebar>
        </th>
        <th>
          <Card className="max-w-sm div1" imgSrc={image}>
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{title}</h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">{description}</p>
          </Card>
        </th>
        <th>
          <Card className="max-w-sm div1" imgSrc={image}>
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{title}</h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">{description}</p>
          </Card>
        </th>
        <th>
          <Card className="max-w-sm div1" imgSrc={image}>
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{title}</h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">{description}</p>
          </Card>
        </th>
      </tr>
    </table>
    


      

    </>
  )
}

export default PropsComponents