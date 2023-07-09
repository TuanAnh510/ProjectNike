
import { useEffect, useRef, useState } from "react";
import { FiSearch } from "react-icons/fi";
import { VscChromeClose } from "react-icons/vsc";

import Product from "@Components/common/Product";

import { DialogType, useDialog } from "@Contexts/UIContext";
import { useDebounce } from "@Hooks/useDebounce";
import Animate from "./common/Animate";

export default function SearchBoxContainer() {
  const { currentDialog, setDialog } = useDialog();
  const active = currentDialog == DialogType.SEARCH_BOX;

  const [searchTerm, setSearchTerm] = useState("");
  

  return (
    <Animate isMounted={active} unmountDelay={600}>
      <div className="search">
        <div onClick={() => setDialog(null)} className="search__backdrop"
        ></div>
        <div className="search__box">
          <button
            aria-label="close search"
            className="search__close"
            onClick={() => setDialog(null)}
          >
            <VscChromeClose className="search__close-icon" />
          </button>
          <div className="search__container">
            <h3 className="search__title">What are you looking for?</h3>

            <div className="search__input input input--bottom">
              <form action={`?q=${searchTerm}`}>
                <input
                  id="search-input"
                  className="input__box"
                  type="text"
                  name="search"
                  placeholder="Searching for..."
                  autoComplete="off"
                  
                  value={searchTerm}
                />
                <label htmlFor="search-input" className="input__placeholder">
                  Searching for...
                </label>
                <button className="input__submit" type="submit">
                  <FiSearch className="input__submit-icon" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </Animate>
  );
}
