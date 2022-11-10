import { useState } from "react"
import { DropdownArrow } from "./Icons/DropDownArrow"
import { IDrop } from "../types/dropdown"

export const DropDown = ({
  title,
  items,
  dropdownValue,
  setDropdownValue,
}: IDrop) => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <div>
      <button
        id="dropdownDefault"
        data-dropdown-toggle="dropdown"
        className="font-exo relative text-white bg-orange-500 hover:bg-orange-600 focus:ring-4 focus:outline-none focus:ring-orange-300 font-medium rounded-lg text-m px-4 py-2.5 text-center inline-flex items-center"
        type="button"
        onClick={() => setIsOpen(!isOpen)}
      >
        {title}{" "}
        {
          items.find(({ value }: { value: string }) => value === dropdownValue)
            .name
        }{" "}
        <DropdownArrow />
      </button>
      <div
        id="dropdown"
        className={`${
          !isOpen && "hidden"
        } absolute z-10 w-44 bg-orange-400 rounded divide-y divide-orange-100 shadow`}
      >
        <ul
          className="py-1 text-m text-white"
          aria-labelledby="dropdownDefault"
        >
          {items.map(
            ({
              id,
              name,
              value,
            }: {
              id: number;
              name: string;
              value: string;
            }) => (
              <li
                onClick={() => {
                  setDropdownValue(value);
                  setIsOpen(false);
                }}
                key={id}
              >
                <span
                  className={`${
                    value === dropdownValue ? "text-white" : "text-slate-500"
                  } block py-2 px-4 hover:bg-orange-500 `}
                >
                  {name}
                </span>
              </li>
            )
          )}
        </ul>
      </div>
    </div>
  )
}
