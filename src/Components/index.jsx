// import React from "react";
// import styled from "styled-components";
// import { IoClose, IoSearch } from "react-icons/io5";
// import { useState } from "react";
// import { AnimatePresence, motion } from "framer-motion";
// import { useClickOutside } from "react-click-outside-hook";
// import { useEffect } from "react";
// import { useRef } from "react";
// import MoonLoader from "react-spinners/MoonLoader";
// import { useDebounce } from "../../hooks/debounceHook";
// import axios from "axios";
// import { TvShow } from "../tvShow";



// const SearchIcon = styled.span`
//   color: #bebebe;
//   font-size: 27px;
//   margin-right: 10px;
//   margin-top: 6px;
//   vertical-align: middle;
// `;

// const CloseIcon = styled(motion.span)`
//   color: #bebebe;
//   font-size: 23px;
//   vertical-align: middle;
//   transition: all 200ms ease-in-out;
//   cursor: pointer;
//   &:hover {
//     color: #dfdfdf;
//   }
// `;



// const containerVariants = {
//   expanded: {
//     height: "30em",
//   },
//   collapsed: {
//     height: "3.8em",
//   },
// };


// //   return (
// //     <SearchBarContainer
// //       animate={isExpanded ? "expanded" : "collapsed"}
// //       variants={containerVariants}
// //       transition={containerTransition}
// //       ref={parentRef}
// //     >
// //       <SearchInputContainer>
// //         <SearchIcon>
// //           <IoSearch />
// //         </SearchIcon>
// //         <SearchInput
// //           placeholder="Search for Series/Shows"
// //           onFocus={expandContainer}
// //           ref={inputRef}
// //           value={searchQuery}
// //           onChange={changeHandler}
// //         />
// //         <AnimatePresence>
// //           {isExpanded && (
// //             <CloseIcon
// //               key="close-icon"
// //               initial={{ opacity: 0 }}
// //               animate={{ opacity: 1 }}
// //               exit={{ opacity: 0 }}
// //               onClick={collapseContainer}
// //               transition={{ duration: 0.2 }}
// //             >
// //               <IoClose />
// //             </CloseIcon>
// //           )}
// //         </AnimatePresence>
// //       </SearchInputContainer>
// //       {isExpanded && <LineSeperator />}
// //       {isExpanded && (
// //         <SearchContent>
// //           {isLoading && (
// //             <LoadingWrapper>
// //               <MoonLoader loading color="#000" size={20} />
// //             </LoadingWrapper>
// //           )}
// //           {!isLoading && isEmpty && !noTvShows && (
// //             <LoadingWrapper>
// //               <WarningMessage>Start typing to Search</WarningMessage>
// //             </LoadingWrapper>
// //           )}
// //           {!isLoading && noTvShows && (
// //             <LoadingWrapper>
// //               <WarningMessage>No Tv Shows or Series found!</WarningMessage>
// //             </LoadingWrapper>
// //           )}
// //           {!isLoading && !isEmpty && (
// //             <>
// //               {tvShows.map(({ show }) => (
// //                 <TvShow
// //                   key={show.id}
// //                   thumbanilSrc={show.image && show.image.medium}
// //                   name={show.name}
// //                   rating={show.rating && show.rating.average}
// //                 />
// //               ))}
// //             </>
// //           )}
// //         </SearchContent>
// //       )}
// //     </SearchBarContainer>
// //   );
              
