import { Col, Row } from "antd";
import { FaArrowUp } from "react-icons/fa";
import "./style.scss";

const RICEGUARD_PROJECT = {
  projectName: 'RiceGuard — Offline AI Rice Disease Detector',
  description: 'Built offline-first Rust + SQLite data layer and integrated YOLOv8n ONNX model (~6MB) for on-device inference — mAP50 80.2% on 1,956-annotation dataset. Top 40 / 430+ teams at YDCC 2025 (UNDP Vietnam × MUFG Bank).',
  linkProject: 'https://github.com/thanhlamcode/YDCC-2025',
  image: '/riceguard.png',
  stack: ['Rust', 'SQLite', 'ONNX Runtime', 'Tauri v2', 'React', 'Android'],
  featured: true,
};

const PROJECT_META = {
  'bootstrap': {
    name: 'Bootstrap + WOW.js Animation Showcase',
    description: 'Responsive web templates built with Bootstrap, enhanced with WOW.js scroll animations and modern CSS styling.',
    stack: ['HTML', 'CSS', 'Bootstrap', 'WOW.js'],
    priority: 1,
  },
  'responsive': {
    name: 'Responsive Web Templates — HTML/CSS',
    description: 'Pixel-perfect responsive landing pages with clean layouts, flexible grids, and cross-browser compatibility.',
    stack: ['HTML', 'CSS', 'Responsive Design'],
    priority: 2,
  },
  'snoopyshop': {
    name: 'SnoopyShop — E-commerce Platform',
    description: 'Full-stack e-commerce with product catalog, cart, order management, and user authentication.',
    stack: ['React', 'Node.js', 'MongoDB'],
    priority: 3,
  },
  '1000': {
    name: '1000H IT Jobs — Job Aggregator',
    description: 'IT job board aggregating listings from major Vietnamese platforms with search and filter.',
    stack: ['React', 'REST API'],
    priority: 4,
  },
  'speedy': {
    name: 'SpeedyConvert — File Conversion Tool',
    description: 'Greenfield Symfony backend for a pre-launch SaaS product with Twig views and technical SEO foundations.',
    stack: ['PHP', 'Symfony', 'Twig', 'MySQL'],
    priority: 5,
  },
  'finman': {
    name: 'FinMan — Personal Finance Manager',
    description: 'Personal finance tracker with expense categorisation and monthly reports.',
    stack: ['React', 'Node.js'],
    priority: 6,
  },
};

function resolveProject(item) {
  const lower = (item.projectName || '').toLowerCase();
  for (const [key, meta] of Object.entries(PROJECT_META)) {
    if (lower.includes(key)) {
      return {
        ...item,
        projectName: meta.name,
        description: item.description || meta.description,
        stack: meta.stack,
        _priority: meta.priority ?? 99,
      };
    }
  }
  return { ...item, _priority: 99 };
}

function ProjectCard({ item, featured }) {
  return (
    <div className={`box${featured ? ' box--featured' : ''}`}>
      {featured && <div className="box-featured-badge">🏆 YDCC 2025 — Top 40 / 430+ teams</div>}
      {item.image && (
        <div className="wrap-image">
          <img src={item.image} alt={item.projectName} />
        </div>
      )}
      <div className="wrap-content">
        <h2>
          <a href={item.linkProject} target="_blank" rel="noopener noreferrer">
            {item.projectName}
          </a>
          <span><FaArrowUp /></span>
        </h2>
        {item.description && <p className="project-desc">{item.description}</p>}
        {item.stack && item.stack.length > 0 && (
          <div className="project-stack">
            {item.stack.map((tag, i) => <span className="project-tag" key={i}>{tag}</span>)}
          </div>
        )}
      </div>
    </div>
  );
}

function Portfolio(props) {
  const { projects = [] } = props;
  const visible = projects
    .map(resolveProject)
    .filter(Boolean)
    .sort((a, b) => (a._priority ?? 99) - (b._priority ?? 99));

  return (
    <section className="portfolio" id="project">
      <h3>Featured Work</h3>
      <h1>My Projects</h1>
      <Row className="container" gutter={[30, 30]}>
        <Col xl={8} md={12} sm={24} xs={24}>
          <ProjectCard item={RICEGUARD_PROJECT} featured />
        </Col>
        {visible.map((item, index) => (
          <Col xl={8} md={12} sm={24} xs={24} key={index}>
            <ProjectCard item={item} />
          </Col>
        ))}
      </Row>
    </section>
  );
}

export default Portfolio;
