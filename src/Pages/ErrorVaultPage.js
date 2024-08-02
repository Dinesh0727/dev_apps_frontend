import { Input } from "@chakra-ui/react";
import React from "react";
import { CgProfile } from "react-icons/cg";

export default function ErrorVaultPage() {
  return (
    <div>
      <header>
        <div className="EVP_Navbar bg-dark">
          <a className="EVP_Navbar_logo text-white" href="#">
            ErrorVault
          </a>
          <form className="EVP_Navbar_form">
          <Input placeholder='Search text' borderRadius={"5px"} marginRight={"1%"} width={"60%"}/>
            <button
              className="btn btn-outline-light EVP_Navbar_searchButton"
              type="submit"
            >
              Search
            </button>
            {/* <Wrap>
              <WrapItem>
                <Avatar>
                  <AvatarBadge
                  />
                </Avatar>
              </WrapItem>
            </Wrap> */}
            <CgProfile size={30} color="blue" className="EVP_Navbar_profile" />
          </form>
        </div>
      </header>
    </div>
  );
}
