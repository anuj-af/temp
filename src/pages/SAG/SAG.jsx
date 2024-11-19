
import Sidebar from "../../components/Reusable/SideBar";
import Table from "../../components/Reusable/Table";
import { IoMdArrowDropdown } from "react-icons/io";

function SAG() {
    return (
        <div className="flex flex-row">
            <div>
                <Sidebar />
            </div>
            <div>
                <div className="ml-24 mt-10 flex flex-col justify-start">
                    <div className="flex flex-row">
                        <div className="mr-2">
                            <button className="flex justify-center items-center px-7 py-2 text-sm leading-7 text-center text-white bg-hblue2 rounded-lg ">Sort by</button>
                        </div>
                        <div className="mx-2">
                            <button className="flex justify-center items-center pl-5 pr-4 py-2 text-sm leading-7 text-center text-hblue2 bg-white border border-hblue2 rounded-lg max-md:mb-2.5">All <IoMdArrowDropdown className="ml-4"/> </button>
                        </div>
                        <div className="mx-2">
                            <button className="flex justify-center items-center pl-5 pr-4 py-2 text-sm leading-7 text-center text-hblue2 bg-white border border-hblue2 rounded-lg max-md:mb-2.5">Active <IoMdArrowDropdown className="ml-4"/> </button>
                        </div>
                        <div className="mx-2">
                            <button className="flex justify-center items-center pl-5 pr-4 py-2 text-sm leading-7 text-center text-hblue2 bg-white border border-hblue2 rounded-lg max-md:mb-2.5">Pending <IoMdArrowDropdown className="ml-4"/> </button>
                        </div>
                        <div className="mx-2">
                            <button className="flex justify-center items-center pl-5 pr-4 py-2 text-sm leading-7 text-center text-hblue2 bg-white border border-hblue2 rounded-lg max-md:mb-2.5">Rejected <IoMdArrowDropdown className="ml-4"/> </button>
                        </div>
                       
                        
                    </div>

                    <div className="mt-8">
                        <Table/>
                    </div>
                </div>

            </div>
        </div>

    )
}

export default SAG;