import { useState } from "react";
import { Carousel, Container, Row, Col, Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import "./News&Blog.css";

const blogPosts = [
  {
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLPXV8ZF2sbbAOlOtwtt7gobr7EIS-1VNqmw&s",
    title: "Breaking Into Pharma Analytics: Skills Required by Pharma GCC Industries",
    description: "Pharmaceutical companies are rapidly adopting data-driven analytics for drug launches, sales forecasting, and patient trend insights, creating high demand for professionals who can turn data into actionable business decisions.",
    readTime: "10 min read",
    href: "/BreakingIntoPharmaAnalytics",
  },
  {
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIofcsqJ--3C19uz-0Ii6162-e_pc3S696oA&s",
    title: "Pharmacovigilance Careers: How to Move from Fresher to Drug Safety Associate",
    description: "Pharmacovigilance ensures medicine safety by monitoring adverse drug reactions. Hands-on training helps freshers land Drug Safety Associate roles at companies like Accenture and Cognizant.",
    readTime: "8 min read",
    href: "/PharmacovigilanceBlog",
  },
  {
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRldH60R3mi9H8w6f2LRAt236ZR75-2vYf2iw&s",
    title: "HEOR & Market Access: The Hidden Career Path in Pharma Consulting",
    description: "HEOR combines health economics, real-world evidence, and policy analysis to support pricing and access decisions. Trained graduates often secure analyst roles at Parexel, Trinity Life Sciences, and other consulting firms.",
    readTime: "9 min read",
    href: "/HEORBlog",
  },
  {
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTp8PdyxGrMBokM9RpwtV0CvZ3rLkgXlHEo_A&s",
    title: "From Classroom to Cipla: My Journey into Regulatory Affairs",
    description: "Regulatory Affairs ensures medicines meet safety, efficacy, and quality standards. Focused training with mock submissions helps students confidently enter roles at Cipla, Sun Pharma, and other pharma companies.",
    readTime: "7 min read",
    href: "/RegulatoryAffairsPage",
  },
  {
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjNO6KhyVq7sWMCGzuyiYU_5-W81Z3KWbzKg&s",
    title: "Pharma Forecasting Simplified: How Analysts Predict Sales of New Drugs",
    description: "Forecasting in pharma combines patient-based modeling, market share assumptions, and historical analogues to guide strategic decisions. Training with real-world case studies prepares candidates for analyst roles at ZS Associates, IQVIA, and more.",
    readTime: "8 min read",
    href: "/PharmaForecastingPage",
  },
 {
    image: "blog6.png",
    title:
      "Digital Transformation from Static Forecasting to AI-based Strategic Forecasting",
    description:
      "Discover how Agentic AI is revolutionizing pharma forecasting — transforming static reports into real-time, intelligent systems that evolve with the market.",
    readTime: "10 min read",
    href: "/AgenticAIBlog",
  }
];

// helper: group blogs into chunks
const chunkArray = (arr, size) =>
  Array.from({ length: Math.ceil(arr.length / size) }, (_, i) =>
    arr.slice(i * size, i * size + size)
  );

const NewsBlog = () => {
  const [search, setSearch] = useState("");
  const filteredPosts = blogPosts.filter((post) =>
    post.title.toLowerCase().includes(search.toLowerCase())
  );
  const chunks = chunkArray(filteredPosts, 3);

  return (
    <Container className="py-5">
      {/* Page Header */}
      <div className="text-center mb-5">
        <h2 className="fw-bold">Our Blogs</h2>
        <p className="text-muted">
          Explore insightful blogs written by our Students, Facilitators, and Team MedLabs.
        </p>
      </div>

      {/* Search Bar */}
      <Row className="justify-content-center mb-4">
        <Col md={6}>
          <input
            type="text"
            placeholder="Search blogs..."
            className="form-control shadow-sm"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </Col>
      </Row>

      {/* Blogs Carousel */}
      <Carousel
        interval={null}
        indicators
        nextIcon={<span className="carousel-arrow">&#10095;</span>}
        prevIcon={<span className="carousel-arrow">&#10094;</span>}
      >
        {chunks.map((group, slideIdx) => (
          <Carousel.Item key={slideIdx}>
            <Row className="justify-content-center">
              {group.map((post, idx) => (
                <Col md={4} key={idx} className="mb-4">
                  <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                  >
                    <Card className="h-100 shadow border-0 rounded-3 hover-card">
                      <Card.Img
                        variant="top"
                        src={post.image}
                        alt={post.title}
                        height="200px"
                        loading="lazy"
                        className="rounded-top"
                      />
                      <Card.Body>
                        <Card.Title className="fw-semibold">
                          {post.title}
                        </Card.Title>
                        <span className="badge bg-light text-dark mb-2">
                          {post.readTime}
                        </span>
                        <Card.Text className="text-muted small">
                          {post.description.substring(0, 120)}...
                        </Card.Text>
                      </Card.Body>
                      <Card.Footer className="bg-white border-0">
                        <Button
                          variant="secondary w-100"
                          as={Link}
                          to={post.href}
                          onClick={() => window.scrollTo(0, 0)}
                        >
                          Explore
                        </Button>
                      </Card.Footer>
                    </Card>
                  </motion.div>
                </Col>
              ))}
            </Row>
          </Carousel.Item>
        ))}
      </Carousel>
    </Container>
  );
};

export default NewsBlog;
 