import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import ContactForm from "./pages/Contact";
import "./styles/PageContainer.css";

const myProjects = [
  {
    id: 1,
    title: "Vet Set Go",
    git_url: "https://github.com/Project2Group1/vet-set-go",
    page_url: "",
    description:
      "Website for a veterinarian clinic that includes login, forums, and appointment booking front-end. Made using Node/Express/Sequelize",
    image: "",
  },
  {
    id: 2,
    title: "Audio News",
    git_url: "https://audio-news.github.io/audio-news/",
    page_url: "",
    description:
      "Website that uses API to grab news articles and read them aloud on click. Made using Bulma/Javascript",
  },
  {
    id: 3,
    title: "Text Editor",
    git_url: "",
    page_url: "",
    description: "",
  },
];

export default function PageContainer() {
  const [currentPage, setCurrentPage] = useState("Home");

  // This method is checking to see what the value of `currentPage` is. Depending on the value of currentPage, we return the corresponding component to render.
  const renderPage = () => {
    if (currentPage === "Contact") {
      return <ContactForm />;
    }
    if (currentPage === "Portfolio") {
      return <Portfolio projects={myProjects} />;
    }
    return <About />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div className="body">
      {/* We are passing the currentPage from state and the function to update it */}
      <Header currentPage={currentPage} handlePageChange={handlePageChange} />
      {/* Here we are calling the renderPage method which will return a component  */}
      {renderPage()}
      <Footer />
    </div>
  );
}
