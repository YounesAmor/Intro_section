import LogoIcon from "../assets/images/logo.svg";
import ToDoIcon from "../assets/images/icon-todo.svg";
import UpIcon from "../assets/images/icon-arrow-up.svg";
import DownIcon from "../assets/images/icon-arrow-down.svg";
import CalendarIcon from "../assets/images/icon-calendar.svg";
import RemindersIcon from "../assets/images/icon-reminders.svg";
import PlanningIcon from "../assets/images/icon-planning.svg";
import IconMenu from "../assets/images/icon-menu.svg";
import IconCloseMenu from "../assets/images/icon-close-menu.svg";
import { useEffect, useState } from "react";
const NavBar = () => {
  const [showFeatures, setShowFeatures] = useState(false);
  const [showCompany, setShowCompany] = useState(false);
  const [expandHamburgesta, setExpandHamburgesta] = useState(false);
  useEffect(() => {
    if (showFeatures) {
      setShowCompany(false);
    }
  }, [showFeatures]);
  useEffect(() => {
    if (showCompany) {
      setShowFeatures(false);
    }
  }, [showCompany]);
  console.log(expandHamburgesta);
  return (
    <nav className="flex w-screen justify-between font-epilogue sm:p-5 lg:p-10">
      <div className="flex items-center">
        <img src={LogoIcon} alt="logo" className="mr-12" />
        <div className="sm:hidden lg:inline">
          <ul className="flex gap-12">
            <li
              onClick={() => setShowFeatures(!showFeatures)}
              className="relative cursor-pointer"
            >
              <div className="flex items-center gap-1">
                <p
                  className={showFeatures ? "font-medium" : "hover:font-medium"}
                >
                  Features
                </p>
                <img src={showFeatures ? UpIcon : DownIcon} alt="todo Icon" />
              </div>
              <div
                className={
                  showFeatures
                    ? "absolute right-[5px] top-10 rounded-lg border bg-white p-2"
                    : "hidden"
                }
              >
                <ul className="pr-3 text-left">
                  <li className="py-2 pl-4">
                    <div className="flex items-center gap-2">
                      <img src={ToDoIcon} alt="todo icon" />
                      <p>Todo List</p>
                    </div>
                  </li>
                  <li className="py-2 px-4">
                    <div className="flex items-center gap-2">
                      <img src={CalendarIcon} alt="calendar icon" />
                      <p>Calendar</p>
                    </div>
                  </li>
                  <li className="py-2 px-4">
                    <div className="flex items-center gap-2">
                      <img src={RemindersIcon} alt="calendar icon" />
                      <p>Reminders</p>
                    </div>
                  </li>
                  <li className="py-2 px-4">
                    <div className="flex items-center gap-2">
                      <img src={PlanningIcon} alt="planning icon" />
                      <p>Planning</p>
                    </div>
                  </li>
                </ul>
              </div>
            </li>
            <li
              onClick={() => setShowCompany(!showCompany)}
              className="cursor-pointer"
            >
              <div className="relative flex items-center gap-1">
                <p
                  className={showCompany ? "font-medium" : "hover:font-medium"}
                >
                  Company
                </p>
                <img src={showCompany ? UpIcon : DownIcon} alt="todo Icon" />
              </div>
              <div
                className={
                  showCompany
                    ? "absolute top-10 rounded-lg border bg-white p-2"
                    : "hidden"
                }
              >
                <ul className="text-left">
                  <li className="py-2 px-4">
                    <p>History</p>
                  </li>
                  <li className="py-2 px-4">
                    <p>Our Team</p>
                  </li>
                  <li className="py-2 px-4">
                    <p>Blog</p>
                  </li>
                </ul>
              </div>
            </li>
            <li className="cursor-pointer hover:font-medium">Careers</li>
            <li className="cursor-pointer hover:font-medium">About</li>
          </ul>
        </div>
      </div>
      <div>
        <div className="space-x-12 sm:hidden lg:inline">
          <button className="opacity-70 hover:opacity-100">Login</button>
          <button className="rounded-lg border-2 border-almostBlack py-2 px-3 text-almostBlack opacity-70 hover:opacity-100">
            Register
          </button>
        </div>
        <div className="z-50 lg:hidden">
          <img
            src={IconMenu}
            alt="hamburgesta"
            className="cursor-pointer"
            onClick={() => setExpandHamburgesta(true)}
          />
          <div
            className={
              expandHamburgesta
                ? "absolute top-0 right-[0px] h-screen w-8/12 border border-t-transparent bg-white"
                : "hidden"
            }
          >
            <div className="mt-2 text-right">
              <img
                src={IconCloseMenu}
                alt="close menu"
                onClick={() => setExpandHamburgesta(false)}
                className="mb-10 inline pt-3 pr-4 text-right"
              />
            </div>
            <div className="flex flex-col">
              <ul className="flex flex-col gap-5 px-10">
                <li onClick={() => setShowFeatures(!showFeatures)}>
                  <div className="flex items-center gap-1">
                    <p className="hover:font-medium">Features</p>
                    <img
                      src={showFeatures ? UpIcon : DownIcon}
                      alt="todo Icon"
                    />
                  </div>
                  <div className={showFeatures ? "" : "hidden"}>
                    <ul className="pr-3 text-left">
                      <li className="py-2 pl-4">
                        <div className="flex items-center gap-2">
                          <img src={ToDoIcon} alt="todo icon" />
                          <p>Todo List</p>
                        </div>
                      </li>
                      <li className="py-2 px-4">
                        <div className="flex items-center gap-2">
                          <img src={CalendarIcon} alt="calendar icon" />
                          <p>Calendar</p>
                        </div>
                      </li>
                      <li className="py-2 px-4">
                        <div className="flex items-center justify-center gap-2">
                          <img src={RemindersIcon} alt="calendar icon" />
                          <p>Reminders</p>
                        </div>
                      </li>
                      <li className="py-2 px-4">
                        <div className="flex items-center gap-2">
                          <img src={PlanningIcon} alt="planning icon" />
                          <p>Planning</p>
                        </div>
                      </li>
                    </ul>
                  </div>
                </li>
                <li onClick={() => setShowCompany(!showCompany)}>
                  <div className=" flex items-center gap-1">
                    <p
                      className={
                        showCompany ? "font-medium" : "hover:font-medium"
                      }
                    >
                      Company
                    </p>
                    <img
                      src={showCompany ? UpIcon : DownIcon}
                      alt="todo Icon"
                    />
                  </div>
                  <div className={showCompany ? "bg-white p-2" : "hidden"}>
                    <ul className="text-left">
                      <li className="py-2 px-4">
                        <p>History</p>
                      </li>
                      <li className="py-2 px-4">
                        <p>Our Team</p>
                      </li>
                      <li className="py-2 px-4">
                        <p>Blog</p>
                      </li>
                    </ul>
                  </div>
                </li>
                <li className="cursor-pointer text-left hover:font-medium">
                  Careers
                </li>
                <li className="cursor-pointer text-left hover:font-medium">
                  About
                </li>
              </ul>
              <div className="flex flex-col text-center">
                <button className="py-2 opacity-70 hover:opacity-100">
                  Login
                </button>
                <button className=" mx-10 rounded-lg border-2 border-almostBlack py-2 px-3 text-almostBlack opacity-70 hover:opacity-100">
                  Register
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
