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
    title: "Social API",
    git_url: "",
    page_url: "",
    description:
      "Backend routes and models for a social media network. Made with Mongoose and Express.",
  },
];

export default function PageContainer() {
  const [currentPage, setCurrentPage] = useState("Home");

  // Check to see what the value of `currentPage` is and render as needed
  const renderPage = () => {
    if (currentPage === "Contact") {
      return <ContactForm />;
    }
    if (currentPage === "Portfolio") {
      // Pass projects the Portfolio to render
      return <Portfolio projects={myProjects} />;
    }
    return <About />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div className="body">
      <Header currentPage={currentPage} handlePageChange={handlePageChange} />
      {renderPage()}
      <Footer />
    </div>
  );
}
