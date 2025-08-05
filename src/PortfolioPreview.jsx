import React, { useRef } from 'react';
import { Card, Container, Badge, ListGroup, Button } from 'react-bootstrap';
import { 
  FaGithub, FaLinkedin, FaBehance, FaDribbble, FaTwitter, FaGlobe, FaEnvelope, FaPhone, FaBuilding,
  FaGraduationCap, FaCode, FaCertificate, FaLanguage,
  FaGitlab, FaMedium, FaStackOverflow, FaFacebook,
  FaInstagram, FaYoutube, FaCodepen, FaDev,
  FaFilePdf, FaDownload
} from 'react-icons/fa';
import { useReactToPrint } from 'react-to-print';

function PortfolioPreview({ data }) {
  const { personalInfo } = data;
  const contentRef = useRef();

  // Social media icons mapping
  const socialIcons = {
    github: <FaGithub />,
    linkedin: <FaLinkedin />,
    behance: <FaBehance />,
    dribbble: <FaDribbble />,
    twitter: <FaTwitter />,
    portfolio: <FaGlobe />,
    gitlab: <FaGitlab />,
    medium: <FaMedium />,
    stackoverflow: <FaStackOverflow />,
    facebook: <FaFacebook />,
    instagram: <FaInstagram />,
    youtube: <FaYoutube />,
    codepen: <FaCodepen />,
    devto: <FaDev />
  };

  // Format date (MM/YYYY) to more readable format
  const formatDate = (dateString) => {
    if (!dateString) return '';
    const [year, month] = dateString.split('-');
    const monthNames = ["January", "February", "March", "April", "May", "June",
      "July", "August", "September", "October", "November", "December"];
    return `${monthNames[parseInt(month) - 1]} ${year}`;
  };



  return (
    <Container className="my-5">
      {/* CV Content */}
      <div ref={contentRef}>
        <Card className="shadow">
          <Card.Body>
            {/* Header Section */}
            <div className="text-center mb-4">
              <h1 className="display-4">{personalInfo.name}</h1>
              <h3 className="text-muted">{personalInfo.title}</h3>
              
              {/* Contact Info */}
              <div className="d-flex justify-content-center flex-wrap gap-3 mt-3 mb-3">
                {personalInfo.email && (
                  <a href={`mailto:${personalInfo.email}`} className="text-decoration-none text-dark">
                    <FaEnvelope className="me-1" />
                    {personalInfo.email}
                  </a>
                )}
                {personalInfo.phone && (
                  <span className="text-dark">
                    <FaPhone className="me-1" />
                    {personalInfo.phone}
                  </span>
                )}
                {personalInfo.address && (
                  <span className="text-dark">
                    <FaBuilding className="me-1" />
                    {personalInfo.address}
                  </span>
                )}
              </div>
              
              {/* Social Links */}
              <div className="d-flex justify-content-center flex-wrap gap-3">
                {Object.entries(personalInfo.links)
                  .filter(([_, value]) => value.trim() !== '')
                  .map(([platform, url]) => (
                    <a 
                      key={platform} 
                      href={url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-decoration-none text-primary"
                      title={platform.charAt(0).toUpperCase() + platform.slice(1)}
                    >
                      {socialIcons[platform] || <FaGlobe />}
                    </a>
                  ))}
              </div>
            </div>
            
            {/* Summary */}
            {data.summary && (
              <section className="mb-4">
                <h2 className="border-bottom pb-2">Professional Summary</h2>
                <p className="lead">{data.summary}</p>
              </section>
            )}
            
            {/* Skills */}
            {data.skills.length > 0 && (
              <section className="mb-4">
                <h2 className="border-bottom pb-2">Skills</h2>
                <div className="d-flex flex-wrap gap-2">
                  {data.skills.map((skill, index) => (
                    <Badge key={index} bg="primary" pill className="fs-6 py-2 px-3">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </section>
            )}
            
            {/* Experience */}
            {data.experience.length > 0 && (
              <section className="mb-4">
                <h2 className="border-bottom pb-2">Work Experience</h2>
                {data.experience.map((exp, index) => (
                  <div key={index} className="mb-4">
                    <div className="d-flex justify-content-between flex-wrap">
                      <div className="mb-2">
                        <h4>{exp.company}</h4>
                        <h5 className="text-muted">{exp.position}</h5>
                        {exp.location && (
                          <div className="text-muted">
                            <small>{exp.location}</small>
                          </div>
                        )}
                      </div>
                      <div className="text-muted text-md-end">
                        <div>
                          {formatDate(exp.startDate)} - {exp.currentlyWorking ? 'Present' : formatDate(exp.endDate)}
                        </div>
                        <small className="text-capitalize">{exp.employmentType.toLowerCase()}</small>
                      </div>
                    </div>
                    {exp.description && <p className="mt-2">{exp.description}</p>}
                    {exp.achievements && exp.achievements.filter(a => a.trim() !== '').length > 0 && (
                      <>
                        <h6 className="mt-3">Key Achievements:</h6>
                        <ListGroup variant="flush" className="mb-3">
                          {exp.achievements.filter(a => a.trim() !== '').map((achievement, i) => (
                            <ListGroup.Item key={i} className="px-0 py-1">
                              • {achievement}
                            </ListGroup.Item>
                          ))}
                        </ListGroup>
                      </>
                    )}
                  </div>
                ))}
              </section>
            )}
            
            {/* Education */}
            {data.education.length > 0 && (
              <section className="mb-4">
                <h2 className="border-bottom pb-2">Education</h2>
                {data.education.map((edu, index) => (
                  <div key={index} className="mb-3">
                    <div className="d-flex justify-content-between flex-wrap">
                      <div className="mb-2">
                        <h4>{edu.institution}</h4>
                        <h5 className="text-muted">{edu.degree} {edu.field && `in ${edu.field}`}</h5>
                      </div>
                      <div className="text-muted">
                        {formatDate(edu.startDate)} - {edu.currentlyStudying ? 'Present' : formatDate(edu.endDate)}
                      </div>
                    </div>
                    {edu.grade && (
                      <div className="text-muted mb-2">
                        <strong>Grade:</strong> {edu.grade}
                      </div>
                    )}
                    {edu.description && <p className="mt-2">{edu.description}</p>}
                  </div>
                ))}
              </section>
            )}
            
            {/* Projects */}
            {data.projects.length > 0 && (
              <section className="mb-4">
                <h2 className="border-bottom pb-2">Projects</h2>
                {data.projects.map((project, index) => (
                  <div key={index} className="mb-4">
                    <div className="d-flex justify-content-between flex-wrap">
                      <div className="mb-2">
                        <h4>{project.name}</h4>
                        {project.role && <h5 className="text-muted">{project.role}</h5>}
                      </div>
                      {project.startDate && (
                        <div className="text-muted">
                          {formatDate(project.startDate)} - {project.currentlyWorking ? 'Present' : formatDate(project.endDate)}
                        </div>
                      )}
                    </div>
                    {project.technologies && (
                      <div className="mb-2">
                        <strong>Technologies:</strong> {project.technologies}
                      </div>
                    )}
                    {project.description && <p>{project.description}</p>}
                    <div className="d-flex gap-3 mt-2">
                      {project.projectUrl && (
                        <a 
                          href={project.projectUrl} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-decoration-none"
                        >
                          <FaGlobe className="me-1" /> Live Project
                        </a>
                      )}
                      {project.repositoryUrl && (
                        <a 
                          href={project.repositoryUrl} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-decoration-none"
                        >
                          <FaGithub className="me-1" /> View Code
                        </a>
                      )}
                    </div>
                  </div>
                ))}
              </section>
            )}
            
            {/* Certifications */}
            {data.certifications?.length > 0 && (
              <section className="mb-4">
                <h2 className="border-bottom pb-2">Certifications</h2>
                <ListGroup variant="flush">
                  {data.certifications.map((cert, index) => (
                    <ListGroup.Item key={index} className="px-0 py-3">
                      <div className="d-flex justify-content-between flex-wrap">
                        <div className="mb-2">
                          <h5>{cert.name}</h5>
                          <div className="text-muted">{cert.issuer}</div>
                          {cert.credentialId && (
                            <div className="text-muted">
                              <small>ID: {cert.credentialId}</small>
                            </div>
                          )}
                        </div>
                        <div className="text-muted text-md-end">
                          <div>Issued: {formatDate(cert.issueDate)}</div>
                          {cert.expirationDate && (
                            <div>Expires: {formatDate(cert.expirationDate)}</div>
                          )}
                        </div>
                      </div>
                      {cert.credentialUrl && (
                        <a 
                          href={cert.credentialUrl} 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="text-decoration-none d-inline-block mt-2"
                        >
                          <FaCertificate className="me-1" /> View Credential
                        </a>
                      )}
                    </ListGroup.Item>
                  ))}
                </ListGroup>
              </section>
            )}
            
            {/* Languages */}
            {data.languages?.length > 0 && (
              <section className="mb-4">
                <h2 className="border-bottom pb-2">Languages</h2>
                <div className="row">
                  {data.languages.map((lang, index) => (
                    <div key={index} className="col-md-6 mb-2">
                      <div className="d-flex justify-content-between">
                        <span className="fw-medium">
                          <FaLanguage className="me-2" />
                          {lang.language}
                        </span>
                        <span className="text-muted text-capitalize">
                          {lang.proficiency.toLowerCase()}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            )}
            
            {/* Interests */}
            {data.interests?.length > 0 && (
              <section>
                <h2 className="border-bottom pb-2">Interests</h2>
                <div className="d-flex flex-wrap gap-2">
                  {data.interests.map((interest, index) => (
                    <Badge key={index} bg="light" text="dark" pill className="fs-6 py-2 px-3">
                      {interest}
                    </Badge>
                  ))}
                </div>
              </section>
            )}
          </Card.Body>
        </Card>
      </div>
      
     
    </Container>
  );
}

export default PortfolioPreview;