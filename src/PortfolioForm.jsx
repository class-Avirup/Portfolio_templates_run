import { useState } from "react"
import { Form, Button, FloatingLabel, Badge, Accordion } from "react-bootstrap"
import {
  FaGithub,
  FaLinkedin,
  FaBehance,
  FaDribbble,
  FaTwitter,
  FaGlobe,
  FaCertificate,
  FaLanguage,
  FaGitlab,
  FaMedium,
  FaStackOverflow,
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaCodepen,
  FaDev,
  FaUser,
  FaLink,
  FaCode,
  FaBriefcase,
  FaGraduationCap,
  FaProjectDiagram,
  FaHeart,
  FaPlus,
  FaTimes,
} from "react-icons/fa"

function PortfolioForm({ onSubmit, onBack }) {
  const [formData, setFormData] = useState({
    personalInfo: {
      name: "",
      title: "",
      email: "",
      phone: "",
      address: "",
      links: {
        github: "",
        linkedin: "",
        behance: "",
        dribbble: "",
        twitter: "",
        portfolio: "",
        gitlab: "",
        medium: "",
        stackoverflow: "",
        facebook: "",
        instagram: "",
        youtube: "",
        codepen: "",
        devto: "",
      },
    },
    summary: "",
    skills: [],
    experience: [
      {
        id: Date.now(),
        company: "",
        position: "",
        location: "",
        employmentType: "Full-time",
        startDate: "",
        endDate: "",
        currentlyWorking: false,
        description: "",
        achievements: [""],
      },
    ],
    education: [
      {
        id: Date.now(),
        institution: "",
        degree: "",
        field: "",
        grade: "",
        startDate: "",
        endDate: "",
        currentlyStudying: false,
        description: "",
      },
    ],
    projects: [
      {
        id: Date.now(),
        name: "",
        role: "",
        technologies: "",
        startDate: "",
        endDate: "",
        currentlyWorking: false,
        description: "",
        projectUrl: "",
        repositoryUrl: "",
      },
    ],
    certifications: [
      {
        id: Date.now(),
        name: "",
        issuer: "",
        issueDate: "",
        expirationDate: "",
        credentialId: "",
        credentialUrl: "",
      },
    ],
    languages: [
      {
        id: Date.now(),
        language: "",
        proficiency: "Native",
      },
    ],
    interests: [],
  })

  const [newSkill, setNewSkill] = useState("")
  const [newInterest, setNewInterest] = useState("")
  const [activeAccordion, setActiveAccordion] = useState("0")

  // Handlers
  const handleChange = (section, field, value) => {
    setFormData((prev) => {
      // Handle simple string values (like summary)
      if (section === "summary") {
        return { ...prev, summary: value }
      }
      
      // Handle array sections (like experience, education, etc.)
      if (Array.isArray(prev[section])) {
        return {
          ...prev,
          [section]: prev[section].map((item) => 
            item.id === field.id ? { ...item, [field.key]: value } : item
          )
        }
      }
      
      // Handle object sections (like personalInfo)
      return {
        ...prev,
        [section]: { ...prev[section], [field]: value }
      }
    })
  }

  const handleLinkChange = (platform, value) => {
    setFormData((prev) => ({
      ...prev,
      personalInfo: {
        ...prev.personalInfo,
        links: {
          ...prev.personalInfo.links,
          [platform]: value,
        },
      },
    }))
  }

  const addItem = (section, template) => {
    setFormData((prev) => ({
      ...prev,
      [section]: [...prev[section], { ...template, id: Date.now() }],
    }))
  }

  const removeItem = (section, id) => {
    setFormData((prev) => ({
      ...prev,
      [section]: prev[section].filter((item) => item.id !== id),
    }))
  }

  const addSkill = () => {
    if (newSkill.trim()) {
      setFormData((prev) => ({
        ...prev,
        skills: [...prev.skills, newSkill.trim()],
      }))
      setNewSkill("")
    }
  }

  const removeSkill = (index) => {
    setFormData((prev) => ({
      ...prev,
      skills: prev.skills.filter((_, i) => i !== index),
    }))
  }

  const addInterest = () => {
    if (newInterest.trim()) {
      setFormData((prev) => ({
        ...prev,
        interests: [...prev.interests, newInterest.trim()],
      }))
      setNewInterest("")
    }
  }

  const removeInterest = (index) => {
    setFormData((prev) => ({
      ...prev,
      interests: prev.interests.filter((_, i) => i !== index),
    }))
  }

  const accordionSections = [
    { key: "0", title: "Personal Links", icon: <FaLink />, color: "#667eea" },
    { key: "1", title: "Personal Information", icon: <FaUser />, color: "#f093fb" },
    { key: "2", title: "Professional Summary", icon: <FaGlobe />, color: "#4facfe" },
    { key: "3", title: "Skills", icon: <FaCode />, color: "#43e97b" },
    { key: "4", title: "Work Experience", icon: <FaBriefcase />, color: "#fa709a" },
    { key: "5", title: "Education", icon: <FaGraduationCap />, color: "#fee140" },
    { key: "6", title: "Projects", icon: <FaProjectDiagram />, color: "#a8edea" },
    { key: "7", title: "Certifications", icon: <FaCertificate />, color: "#ffecd2" },
    { key: "8", title: "Languages", icon: <FaLanguage />, color: "#d299c2" },
    { key: "9", title: "Interests", icon: <FaHeart />, color: "#89f7fe" },
  ]

  return (
    <div>
      <div className="text-center mb-4">
        <h3 className="fw-bold text-dark mb-2">Tell Us About Yourself</h3>
        <p className="text-muted">Fill in your information to create your professional portfolio</p>
      </div>

      <Form
        onSubmit={(e) => {
          e.preventDefault()
          onSubmit(formData)
        }}
      >
        <Accordion activeKey={activeAccordion} onSelect={setActiveAccordion} className="shadow-sm">
          {/* Personal Links */}
          <Accordion.Item eventKey="0" className="border-0 mb-3 rounded-3 overflow-hidden">
            <Accordion.Header className="border-0">
              <div className="d-flex align-items-center">
                <div
                  className="rounded-circle d-flex align-items-center justify-content-center me-3 text-white"
                  style={{ width: "40px", height: "40px", background: "#667eea" }}
                >
                  <FaLink />
                </div>
                <div>
                  <h5 className="mb-0">Personal Links</h5>
                  <small className="text-muted">Add your social media and portfolio links</small>
                </div>
              </div>
            </Accordion.Header>
            <Accordion.Body className="p-4">
              <div className="row g-3">
                {Object.entries({
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
                  devto: <FaDev />,
                }).map(([platform, icon]) => (
                  <div key={platform} className="col-md-6">
                    <FloatingLabel
                      controlId={`${platform}Link`}
                      label={
                        <span>
                          {icon} {platform.charAt(0).toUpperCase() + platform.slice(1)}
                        </span>
                      }
                    >
                      <Form.Control
                        type="url"
                        placeholder={`https://${platform}.com/username`}
                        value={formData.personalInfo.links[platform]}
                        onChange={(e) => handleLinkChange(platform, e.target.value)}
                        className="border-0 shadow-sm"
                        style={{ borderRadius: "12px" }}
                      />
                    </FloatingLabel>
                  </div>
                ))}
              </div>
            </Accordion.Body>
          </Accordion.Item>

          {/* Personal Information */}
          <Accordion.Item eventKey="1" className="border-0 mb-3 rounded-3 overflow-hidden">
            <Accordion.Header className="border-0">
              <div className="d-flex align-items-center">
                <div
                  className="rounded-circle d-flex align-items-center justify-content-center me-3 text-white"
                  style={{ width: "40px", height: "40px", background: "#f093fb" }}
                >
                  <FaUser />
                </div>
                <div>
                  <h5 className="mb-0">Personal Information</h5>
                  <small className="text-muted">Basic contact information</small>
                </div>
              </div>
            </Accordion.Header>
            <Accordion.Body className="p-4">
              <div className="row g-3">
                <div className="col-md-6">
                  <FloatingLabel controlId="name" label="Full Name">
                    <Form.Control
                      type="text"
                      value={formData.personalInfo.name}
                      onChange={(e) => handleChange("personalInfo", "name", e.target.value)}
                      required
                      className="border-0 shadow-sm"
                      style={{ borderRadius: "12px" }}
                    />
                  </FloatingLabel>
                </div>
                <div className="col-md-6">
                  <FloatingLabel controlId="title" label="Professional Title">
                    <Form.Control
                      type="text"
                      value={formData.personalInfo.title}
                      onChange={(e) => handleChange("personalInfo", "title", e.target.value)}
                      required
                      className="border-0 shadow-sm"
                      style={{ borderRadius: "12px" }}
                    />
                  </FloatingLabel>
                </div>
                <div className="col-md-6">
                  <FloatingLabel controlId="email" label="Email">
                    <Form.Control
                      type="email"
                      value={formData.personalInfo.email}
                      onChange={(e) => handleChange("personalInfo", "email", e.target.value)}
                      className="border-0 shadow-sm"
                      style={{ borderRadius: "12px" }}
                    />
                  </FloatingLabel>
                </div>
                <div className="col-md-6">
                  <FloatingLabel controlId="phone" label="Phone">
                    <Form.Control
                      type="tel"
                      value={formData.personalInfo.phone}
                      onChange={(e) => handleChange("personalInfo", "phone", e.target.value)}
                      className="border-0 shadow-sm"
                      style={{ borderRadius: "12px" }}
                    />
                  </FloatingLabel>
                </div>
                <div className="col-12">
                  <FloatingLabel controlId="address" label="Address">
                    <Form.Control
                      type="text"
                      value={formData.personalInfo.address}
                      onChange={(e) => handleChange("personalInfo", "address", e.target.value)}
                      className="border-0 shadow-sm"
                      style={{ borderRadius: "12px" }}
                    />
                  </FloatingLabel>
                </div>
              </div>
            </Accordion.Body>
          </Accordion.Item>

          {/* Professional Summary */}
          <Accordion.Item eventKey="2" className="border-0 mb-3 rounded-3 overflow-hidden">
            <Accordion.Header className="border-0">
              <div className="d-flex align-items-center">
                <div
                  className="rounded-circle d-flex align-items-center justify-content-center me-3 text-white"
                  style={{ width: "40px", height: "40px", background: "#4facfe" }}
                >
                  <FaGlobe />
                </div>
                <div>
                  <h5 className="mb-0">Professional Summary</h5>
                  <small className="text-muted">Brief overview of your professional background</small>
                </div>
              </div>
            </Accordion.Header>
            <Accordion.Body className="p-4">
              <FloatingLabel controlId="summary" label="Summary">
                <Form.Control
                  as="textarea"
                  style={{ height: "120px", borderRadius: "12px" }}
                  value={formData.summary}
                  onChange={(e) => handleChange("summary", "summary", e.target.value)}
                  className="border-0 shadow-sm"
                />
              </FloatingLabel>
            </Accordion.Body>
          </Accordion.Item>

          {/* Skills */}
          <Accordion.Item eventKey="3" className="border-0 mb-3 rounded-3 overflow-hidden">
            <Accordion.Header className="border-0">
              <div className="d-flex align-items-center">
                <div
                  className="rounded-circle d-flex align-items-center justify-content-center me-3 text-white"
                  style={{ width: "40px", height: "40px", background: "#43e97b" }}
                >
                  <FaCode />
                </div>
                <div>
                  <h5 className="mb-0">Skills</h5>
                  <small className="text-muted">Add your technical and soft skills</small>
                </div>
              </div>
            </Accordion.Header>
            <Accordion.Body className="p-4">
              <div className="mb-3">
                <div className="d-flex">
                  <Form.Control
                    type="text"
                    value={newSkill}
                    onChange={(e) => setNewSkill(e.target.value)}
                    onKeyPress={(e) => e.key === "Enter" && addSkill()}
                    placeholder="Add skill"
                    className="border-0 shadow-sm me-2"
                    style={{ borderRadius: "12px" }}
                  />
                  <Button
                    variant="primary"
                    onClick={addSkill}
                    className="px-4 rounded-pill"
                    style={{ background: "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)", border: "none" }}
                  >
                    <FaPlus />
                  </Button>
                </div>
                <div className="d-flex flex-wrap gap-2 mt-3">
                  {formData.skills.map((skill, index) => (
                    <Badge
                      key={index}
                      className="d-flex align-items-center px-3 py-2 rounded-pill"
                      style={{
                        background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                        fontSize: "0.9rem",
                      }}
                    >
                      {skill}
                      <Button
                        variant="link"
                        className="p-0 ms-2 text-white"
                        style={{ fontSize: "0.8rem" }}
                        onClick={() => removeSkill(index)}
                      >
                        <FaTimes />
                      </Button>
                    </Badge>
                  ))}
                </div>
              </div>
            </Accordion.Body>
          </Accordion.Item>

          {/* Work Experience */}
          <Accordion.Item eventKey="4" className="border-0 mb-3 rounded-3 overflow-hidden">
            <Accordion.Header className="border-0">
              <div className="d-flex align-items-center">
                <div
                  className="rounded-circle d-flex align-items-center justify-content-center me-3 text-white"
                  style={{ width: "40px", height: "40px", background: "#fa709a" }}
                >
                  <FaBriefcase />
                </div>
                <div>
                  <h5 className="mb-0">Work Experience</h5>
                  <small className="text-muted">Your professional work history</small>
                </div>
              </div>
            </Accordion.Header>
            <Accordion.Body className="p-4">
              {formData.experience.map((exp, index) => (
                <div key={exp.id} className="mb-4 p-4 rounded-3 shadow-sm bg-light">
                  <div className="row g-3">
                    <div className="col-md-6">
                      <FloatingLabel controlId={`company-${index}`} label="Company">
                        <Form.Control
                          type="text"
                          value={exp.company}
                          onChange={(e) => handleChange("experience", { id: exp.id, key: "company" }, e.target.value)}
                          className="border-0 shadow-sm"
                          style={{ borderRadius: "12px" }}
                        />
                      </FloatingLabel>
                    </div>
                    <div className="col-md-6">
                      <FloatingLabel controlId={`position-${index}`} label="Position">
                        <Form.Control
                          type="text"
                          value={exp.position}
                          onChange={(e) => handleChange("experience", { id: exp.id, key: "position" }, e.target.value)}
                          className="border-0 shadow-sm"
                          style={{ borderRadius: "12px" }}
                        />
                      </FloatingLabel>
                    </div>
                    <div className="col-md-4">
                      <FloatingLabel controlId={`location-${index}`} label="Location">
                        <Form.Control
                          type="text"
                          value={exp.location}
                          onChange={(e) => handleChange("experience", { id: exp.id, key: "location" }, e.target.value)}
                          className="border-0 shadow-sm"
                          style={{ borderRadius: "12px" }}
                        />
                      </FloatingLabel>
                    </div>
                    <div className="col-md-4">
                      <FloatingLabel controlId={`employmentType-${index}`} label="Employment Type">
                        <Form.Select
                          value={exp.employmentType}
                          onChange={(e) =>
                            handleChange("experience", { id: exp.id, key: "employmentType" }, e.target.value)
                          }
                          className="border-0 shadow-sm"
                          style={{ borderRadius: "12px" }}
                        >
                          <option value="Full-time">Full-time</option>
                          <option value="Part-time">Part-time</option>
                          <option value="Contract">Contract</option>
                          <option value="Freelance">Freelance</option>
                          <option value="Internship">Internship</option>
                        </Form.Select>
                      </FloatingLabel>
                    </div>
                    <div className="col-md-4 d-flex align-items-center">
                      <Form.Check
                        type="checkbox"
                        label="Currently working here"
                        checked={exp.currentlyWorking}
                        onChange={(e) =>
                          handleChange("experience", { id: exp.id, key: "currentlyWorking" }, e.target.checked)
                        }
                        className="mt-3"
                      />
                    </div>
                    <div className="col-md-6">
                      <FloatingLabel controlId={`startDate-${index}`} label="Start Date">
                        <Form.Control
                          type="month"
                          value={exp.startDate}
                          onChange={(e) => handleChange("experience", { id: exp.id, key: "startDate" }, e.target.value)}
                          className="border-0 shadow-sm"
                          style={{ borderRadius: "12px" }}
                        />
                      </FloatingLabel>
                    </div>
                    <div className="col-md-6">
                      <FloatingLabel controlId={`endDate-${index}`} label="End Date">
                        <Form.Control
                          type="month"
                          value={exp.endDate}
                          onChange={(e) => handleChange("experience", { id: exp.id, key: "endDate" }, e.target.value)}
                          disabled={exp.currentlyWorking}
                          className="border-0 shadow-sm"
                          style={{ borderRadius: "12px" }}
                        />
                      </FloatingLabel>
                    </div>
                    <div className="col-12">
                      <FloatingLabel controlId={`description-${index}`} label="Description">
                        <Form.Control
                          as="textarea"
                          style={{ height: "100px", borderRadius: "12px" }}
                          value={exp.description}
                          onChange={(e) =>
                            handleChange("experience", { id: exp.id, key: "description" }, e.target.value)
                          }
                          className="border-0 shadow-sm"
                        />
                      </FloatingLabel>
                    </div>
                    <div className="col-12">
                      <h6 className="text-muted mb-3">Achievements</h6>
                      {exp.achievements.map((achievement, aIndex) => (
                        <div key={aIndex} className="d-flex mb-2">
                          <Form.Control
                            type="text"
                            value={achievement}
                            onChange={(e) => {
                              const newAchievements = [...exp.achievements]
                              newAchievements[aIndex] = e.target.value
                              handleChange("experience", { id: exp.id, key: "achievements" }, newAchievements)
                            }}
                            placeholder="Achievement"
                            className="border-0 shadow-sm me-2"
                            style={{ borderRadius: "12px" }}
                          />
                          <Button
                            variant="outline-danger"
                            className="rounded-pill"
                            onClick={() => {
                              const newAchievements = exp.achievements.filter((_, i) => i !== aIndex)
                              handleChange("experience", { id: exp.id, key: "achievements" }, newAchievements)
                            }}
                          >
                            <FaTimes />
                          </Button>
                        </div>
                      ))}
                      <Button
                        variant="outline-secondary"
                        size="sm"
                        className="rounded-pill"
                        onClick={() => {
                          const newAchievements = [...exp.achievements, ""]
                          handleChange("experience", { id: exp.id, key: "achievements" }, newAchievements)
                        }}
                      >
                        <FaPlus className="me-1" /> Add Achievement
                      </Button>
                    </div>
                  </div>
                  <Button
                    variant="outline-danger"
                    size="sm"
                    className="mt-3 rounded-pill"
                    onClick={() => removeItem("experience", exp.id)}
                  >
                    <FaTimes className="me-1" /> Remove Experience
                  </Button>
                </div>
              ))}
              <Button
                variant="primary"
                className="rounded-pill px-4"
                style={{ background: "linear-gradient(135deg, #fa709a 0%, #fee140 100%)", border: "none" }}
                onClick={() =>
                  addItem("experience", {
                    company: "",
                    position: "",
                    location: "",
                    employmentType: "Full-time",
                    startDate: "",
                    endDate: "",
                    currentlyWorking: false,
                    description: "",
                    achievements: [""],
                  })
                }
              >
                <FaPlus className="me-1" /> Add Experience
              </Button>
            </Accordion.Body>
          </Accordion.Item>

          {/* Education */}
          <Accordion.Item eventKey="5" className="border-0 mb-3 rounded-3 overflow-hidden">
            <Accordion.Header className="border-0">
              <div className="d-flex align-items-center">
                <div
                  className="rounded-circle d-flex align-items-center justify-content-center me-3 text-white"
                  style={{ width: "40px", height: "40px", background: "#fee140" }}
                >
                  <FaGraduationCap />
                </div>
                <div>
                  <h5 className="mb-0">Education</h5>
                  <small className="text-muted">Your educational background</small>
                </div>
              </div>
            </Accordion.Header>
            <Accordion.Body className="p-4">
              {formData.education.map((edu, index) => (
                <div key={edu.id} className="mb-4 p-4 rounded-3 shadow-sm bg-light">
                  <div className="row g-3">
                    <div className="col-md-6">
                      <FloatingLabel controlId={`institution-${index}`} label="Institution">
                        <Form.Control
                          type="text"
                          value={edu.institution}
                          onChange={(e) =>
                            handleChange("education", { id: edu.id, key: "institution" }, e.target.value)
                          }
                          className="border-0 shadow-sm"
                          style={{ borderRadius: "12px" }}
                        />
                      </FloatingLabel>
                    </div>
                    <div className="col-md-6">
                      <FloatingLabel controlId={`degree-${index}`} label="Degree">
                        <Form.Control
                          type="text"
                          value={edu.degree}
                          onChange={(e) => handleChange("education", { id: edu.id, key: "degree" }, e.target.value)}
                          className="border-0 shadow-sm"
                          style={{ borderRadius: "12px" }}
                        />
                      </FloatingLabel>
                    </div>
                    <div className="col-md-6">
                      <FloatingLabel controlId={`field-${index}`} label="Field of Study">
                        <Form.Control
                          type="text"
                          value={edu.field}
                          onChange={(e) => handleChange("education", { id: edu.id, key: "field" }, e.target.value)}
                          className="border-0 shadow-sm"
                          style={{ borderRadius: "12px" }}
                        />
                      </FloatingLabel>
                    </div>
                    <div className="col-md-6">
                      <FloatingLabel controlId={`grade-${index}`} label="Grade">
                        <Form.Control
                          type="text"
                          value={edu.grade}
                          onChange={(e) => handleChange("education", { id: edu.id, key: "grade" }, e.target.value)}
                          placeholder="GPA or classification"
                          className="border-0 shadow-sm"
                          style={{ borderRadius: "12px" }}
                        />
                      </FloatingLabel>
                    </div>
                    <div className="col-md-6">
                      <FloatingLabel controlId={`eduStartDate-${index}`} label="Start Date">
                        <Form.Control
                          type="month"
                          value={edu.startDate}
                          onChange={(e) => handleChange("education", { id: edu.id, key: "startDate" }, e.target.value)}
                          className="border-0 shadow-sm"
                          style={{ borderRadius: "12px" }}
                        />
                      </FloatingLabel>
                    </div>
                    <div className="col-md-6">
                      <FloatingLabel controlId={`eduEndDate-${index}`} label="End Date">
                        <Form.Control
                          type="month"
                          value={edu.endDate}
                          onChange={(e) => handleChange("education", { id: edu.id, key: "endDate" }, e.target.value)}
                          disabled={edu.currentlyStudying}
                          className="border-0 shadow-sm"
                          style={{ borderRadius: "12px" }}
                        />
                      </FloatingLabel>
                    </div>
                    <div className="col-md-6 d-flex align-items-center">
                      <Form.Check
                        type="checkbox"
                        label="Currently studying here"
                        checked={edu.currentlyStudying}
                        onChange={(e) =>
                          handleChange("education", { id: edu.id, key: "currentlyStudying" }, e.target.checked)
                        }
                        className="mt-3"
                      />
                    </div>
                    <div className="col-12">
                      <FloatingLabel controlId={`eduDescription-${index}`} label="Description">
                        <Form.Control
                          as="textarea"
                          style={{ height: "80px", borderRadius: "12px" }}
                          value={edu.description}
                          onChange={(e) =>
                            handleChange("education", { id: edu.id, key: "description" }, e.target.value)
                          }
                          className="border-0 shadow-sm"
                        />
                      </FloatingLabel>
                    </div>
                  </div>
                  <Button
                    variant="outline-danger"
                    size="sm"
                    className="mt-3 rounded-pill"
                    onClick={() => removeItem("education", edu.id)}
                  >
                    <FaTimes className="me-1" /> Remove Education
                  </Button>
                </div>
              ))}
              <Button
                variant="primary"
                className="rounded-pill px-4"
                style={{ background: "linear-gradient(135deg, #fee140 0%, #fa709a 100%)", border: "none" }}
                onClick={() =>
                  addItem("education", {
                    institution: "",
                    degree: "",
                    field: "",
                    grade: "",
                    startDate: "",
                    endDate: "",
                    currentlyStudying: false,
                    description: "",
                  })
                }
              >
                <FaPlus className="me-1" /> Add Education
              </Button>
            </Accordion.Body>
          </Accordion.Item>

          {/* Projects */}
          <Accordion.Item eventKey="6" className="border-0 mb-3 rounded-3 overflow-hidden">
            <Accordion.Header className="border-0">
              <div className="d-flex align-items-center">
                <div
                  className="rounded-circle d-flex align-items-center justify-content-center me-3 text-white"
                  style={{ width: "40px", height: "40px", background: "#a8edea" }}
                >
                  <FaProjectDiagram />
                </div>
                <div>
                  <h5 className="mb-0">Projects</h5>
                  <small className="text-muted">Showcase your best work</small>
                </div>
              </div>
            </Accordion.Header>
            <Accordion.Body className="p-4">
              {formData.projects.map((project, index) => (
                <div key={project.id} className="mb-4 p-4 rounded-3 shadow-sm bg-light">
                  <div className="row g-3">
                    <div className="col-md-6">
                      <FloatingLabel controlId={`projectName-${index}`} label="Project Name">
                        <Form.Control
                          type="text"
                          value={project.name}
                          onChange={(e) => handleChange("projects", { id: project.id, key: "name" }, e.target.value)}
                          className="border-0 shadow-sm"
                          style={{ borderRadius: "12px" }}
                        />
                      </FloatingLabel>
                    </div>
                    <div className="col-md-6">
                      <FloatingLabel controlId={`projectRole-${index}`} label="Your Role">
                        <Form.Control
                          type="text"
                          value={project.role}
                          onChange={(e) => handleChange("projects", { id: project.id, key: "role" }, e.target.value)}
                          className="border-0 shadow-sm"
                          style={{ borderRadius: "12px" }}
                        />
                      </FloatingLabel>
                    </div>
                    <div className="col-md-6">
                      <FloatingLabel controlId={`technologies-${index}`} label="Technologies Used">
                        <Form.Control
                          type="text"
                          value={project.technologies}
                          onChange={(e) =>
                            handleChange("projects", { id: project.id, key: "technologies" }, e.target.value)
                          }
                          placeholder="React, Node.js, MongoDB, etc."
                          className="border-0 shadow-sm"
                          style={{ borderRadius: "12px" }}
                        />
                      </FloatingLabel>
                    </div>
                    <div className="col-md-6 d-flex align-items-center">
                      <Form.Check
                        type="checkbox"
                        label="Currently working on this project"
                        checked={project.currentlyWorking}
                        onChange={(e) =>
                          handleChange("projects", { id: project.id, key: "currentlyWorking" }, e.target.checked)
                        }
                        className="mt-3"
                      />
                    </div>
                    <div className="col-md-6">
                      <FloatingLabel controlId={`projectStartDate-${index}`} label="Start Date">
                        <Form.Control
                          type="month"
                          value={project.startDate}
                          onChange={(e) =>
                            handleChange("projects", { id: project.id, key: "startDate" }, e.target.value)
                          }
                          className="border-0 shadow-sm"
                          style={{ borderRadius: "12px" }}
                        />
                      </FloatingLabel>
                    </div>
                    <div className="col-md-6">
                      <FloatingLabel controlId={`projectEndDate-${index}`} label="End Date">
                        <Form.Control
                          type="month"
                          value={project.endDate}
                          onChange={(e) => handleChange("projects", { id: project.id, key: "endDate" }, e.target.value)}
                          disabled={project.currentlyWorking}
                          className="border-0 shadow-sm"
                          style={{ borderRadius: "12px" }}
                        />
                      </FloatingLabel>
                    </div>
                    <div className="col-md-6">
                      <FloatingLabel controlId={`projectUrl-${index}`} label="Project URL">
                        <Form.Control
                          type="url"
                          value={project.projectUrl}
                          onChange={(e) =>
                            handleChange("projects", { id: project.id, key: "projectUrl" }, e.target.value)
                          }
                          placeholder="https://project-demo.com"
                          className="border-0 shadow-sm"
                          style={{ borderRadius: "12px" }}
                        />
                      </FloatingLabel>
                    </div>
                    <div className="col-md-6">
                      <FloatingLabel controlId={`repositoryUrl-${index}`} label="Repository URL">
                        <Form.Control
                          type="url"
                          value={project.repositoryUrl}
                          onChange={(e) =>
                            handleChange("projects", { id: project.id, key: "repositoryUrl" }, e.target.value)
                          }
                          placeholder="https://github.com/username/project"
                          className="border-0 shadow-sm"
                          style={{ borderRadius: "12px" }}
                        />
                      </FloatingLabel>
                    </div>
                    <div className="col-12">
                      <FloatingLabel controlId={`projectDesc-${index}`} label="Project Description">
                        <Form.Control
                          as="textarea"
                          style={{ height: "100px", borderRadius: "12px" }}
                          value={project.description}
                          onChange={(e) =>
                            handleChange("projects", { id: project.id, key: "description" }, e.target.value)
                          }
                          className="border-0 shadow-sm"
                        />
                      </FloatingLabel>
                    </div>
                  </div>
                  <Button
                    variant="outline-danger"
                    size="sm"
                    className="mt-3 rounded-pill"
                    onClick={() => removeItem("projects", project.id)}
                  >
                    <FaTimes className="me-1" /> Remove Project
                  </Button>
                </div>
              ))}
              <Button
                variant="primary"
                className="rounded-pill px-4"
                style={{ background: "linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)", border: "none" }}
                onClick={() =>
                  addItem("projects", {
                    name: "",
                    role: "",
                    technologies: "",
                    startDate: "",
                    endDate: "",
                    currentlyWorking: false,
                    description: "",
                    projectUrl: "",
                    repositoryUrl: "",
                  })
                }
              >
                <FaPlus className="me-1" /> Add Project
              </Button>
            </Accordion.Body>
          </Accordion.Item>

          {/* Certifications */}
          <Accordion.Item eventKey="7" className="border-0 mb-3 rounded-3 overflow-hidden">
            <Accordion.Header className="border-0">
              <div className="d-flex align-items-center">
                <div
                  className="rounded-circle d-flex align-items-center justify-content-center me-3 text-white"
                  style={{ width: "40px", height: "40px", background: "#ffecd2" }}
                >
                  <FaCertificate />
                </div>
                <div>
                  <h5 className="mb-0">Certifications</h5>
                  <small className="text-muted">Professional certifications and achievements</small>
                </div>
              </div>
            </Accordion.Header>
            <Accordion.Body className="p-4">
              {formData.certifications.map((cert, index) => (
                <div key={cert.id} className="mb-4 p-4 rounded-3 shadow-sm bg-light">
                  <div className="row g-3">
                    <div className="col-md-6">
                      <FloatingLabel controlId={`certName-${index}`} label="Certification Name">
                        <Form.Control
                          type="text"
                          value={cert.name}
                          onChange={(e) => handleChange("certifications", { id: cert.id, key: "name" }, e.target.value)}
                          className="border-0 shadow-sm"
                          style={{ borderRadius: "12px" }}
                        />
                      </FloatingLabel>
                    </div>
                    <div className="col-md-6">
                      <FloatingLabel controlId={`certIssuer-${index}`} label="Issuing Organization">
                        <Form.Control
                          type="text"
                          value={cert.issuer}
                          onChange={(e) =>
                            handleChange("certifications", { id: cert.id, key: "issuer" }, e.target.value)
                          }
                          className="border-0 shadow-sm"
                          style={{ borderRadius: "12px" }}
                        />
                      </FloatingLabel>
                    </div>
                    <div className="col-md-4">
                      <FloatingLabel controlId={`certIssueDate-${index}`} label="Issue Date">
                        <Form.Control
                          type="month"
                          value={cert.issueDate}
                          onChange={(e) =>
                            handleChange("certifications", { id: cert.id, key: "issueDate" }, e.target.value)
                          }
                          className="border-0 shadow-sm"
                          style={{ borderRadius: "12px" }}
                        />
                      </FloatingLabel>
                    </div>
                    <div className="col-md-4">
                      <FloatingLabel controlId={`certExpDate-${index}`} label="Expiration Date">
                        <Form.Control
                          type="month"
                          value={cert.expirationDate}
                          onChange={(e) =>
                            handleChange("certifications", { id: cert.id, key: "expirationDate" }, e.target.value)
                          }
                          placeholder="Leave empty if none"
                          className="border-0 shadow-sm"
                          style={{ borderRadius: "12px" }}
                        />
                      </FloatingLabel>
                    </div>
                    <div className="col-md-4">
                      <FloatingLabel controlId={`certId-${index}`} label="Credential ID">
                        <Form.Control
                          type="text"
                          value={cert.credentialId}
                          onChange={(e) =>
                            handleChange("certifications", { id: cert.id, key: "credentialId" }, e.target.value)
                          }
                          className="border-0 shadow-sm"
                          style={{ borderRadius: "12px" }}
                        />
                      </FloatingLabel>
                    </div>
                    <div className="col-12">
                      <FloatingLabel controlId={`certUrl-${index}`} label="Credential URL">
                        <Form.Control
                          type="url"
                          value={cert.credentialUrl}
                          onChange={(e) =>
                            handleChange("certifications", { id: cert.id, key: "credentialUrl" }, e.target.value)
                          }
                          placeholder="https://certificate-verify.com/123"
                          className="border-0 shadow-sm"
                          style={{ borderRadius: "12px" }}
                        />
                      </FloatingLabel>
                    </div>
                  </div>
                  <Button
                    variant="outline-danger"
                    size="sm"
                    className="mt-3 rounded-pill"
                    onClick={() => removeItem("certifications", cert.id)}
                  >
                    <FaTimes className="me-1" /> Remove Certification
                  </Button>
                </div>
              ))}
              <Button
                variant="primary"
                className="rounded-pill px-4"
                style={{ background: "linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)", border: "none" }}
                onClick={() =>
                  addItem("certifications", {
                    name: "",
                    issuer: "",
                    issueDate: "",
                    expirationDate: "",
                    credentialId: "",
                    credentialUrl: "",
                  })
                }
              >
                <FaPlus className="me-1" /> Add Certification
              </Button>
            </Accordion.Body>
          </Accordion.Item>

          {/* Languages */}
          <Accordion.Item eventKey="8" className="border-0 mb-3 rounded-3 overflow-hidden">
            <Accordion.Header className="border-0">
              <div className="d-flex align-items-center">
                <div
                  className="rounded-circle d-flex align-items-center justify-content-center me-3 text-white"
                  style={{ width: "40px", height: "40px", background: "#d299c2" }}
                >
                  <FaLanguage />
                </div>
                <div>
                  <h5 className="mb-0">Languages</h5>
                  <small className="text-muted">Languages you speak</small>
                </div>
              </div>
            </Accordion.Header>
            <Accordion.Body className="p-4">
              {formData.languages.map((lang, index) => (
                <div key={lang.id} className="mb-3 p-3 rounded-3 shadow-sm bg-light">
                  <div className="row g-3">
                    <div className="col-md-6">
                      <FloatingLabel controlId={`language-${index}`} label="Language">
                        <Form.Control
                          type="text"
                          value={lang.language}
                          onChange={(e) => handleChange("languages", { id: lang.id, key: "language" }, e.target.value)}
                          className="border-0 shadow-sm"
                          style={{ borderRadius: "12px" }}
                        />
                      </FloatingLabel>
                    </div>
                    <div className="col-md-6">
                      <FloatingLabel controlId={`proficiency-${index}`} label="Proficiency">
                        <Form.Select
                          value={lang.proficiency}
                          onChange={(e) =>
                            handleChange("languages", { id: lang.id, key: "proficiency" }, e.target.value)
                          }
                          className="border-0 shadow-sm"
                          style={{ borderRadius: "12px" }}
                        >
                          <option value="Native">Native</option>
                          <option value="Fluent">Fluent</option>
                          <option value="Advanced">Advanced</option>
                          <option value="Intermediate">Intermediate</option>
                          <option value="Basic">Basic</option>
                        </Form.Select>
                      </FloatingLabel>
                    </div>
                  </div>
                  <Button
                    variant="outline-danger"
                    size="sm"
                    className="mt-2 rounded-pill"
                    onClick={() => removeItem("languages", lang.id)}
                  >
                    <FaTimes className="me-1" /> Remove Language
                  </Button>
                </div>
              ))}
              <Button
                variant="primary"
                className="rounded-pill px-4"
                style={{ background: "linear-gradient(135deg, #d299c2 0%, #fef9d7 100%)", border: "none" }}
                onClick={() =>
                  addItem("languages", {
                    language: "",
                    proficiency: "Native",
                  })
                }
              >
                <FaPlus className="me-1" /> Add Language
              </Button>
            </Accordion.Body>
          </Accordion.Item>

          {/* Interests */}
          <Accordion.Item eventKey="9" className="border-0 mb-3 rounded-3 overflow-hidden">
            <Accordion.Header className="border-0">
              <div className="d-flex align-items-center">
                <div
                  className="rounded-circle d-flex align-items-center justify-content-center me-3 text-white"
                  style={{ width: "40px", height: "40px", background: "#89f7fe" }}
                >
                  <FaHeart />
                </div>
                <div>
                  <h5 className="mb-0">Interests</h5>
                  <small className="text-muted">Your hobbies and interests</small>
                </div>
              </div>
            </Accordion.Header>
            <Accordion.Body className="p-4">
              <div className="mb-3">
                <div className="d-flex">
                  <Form.Control
                    type="text"
                    value={newInterest}
                    onChange={(e) => setNewInterest(e.target.value)}
                    onKeyPress={(e) => e.key === "Enter" && addInterest()}
                    placeholder="Add interest"
                    className="border-0 shadow-sm me-2"
                    style={{ borderRadius: "12px" }}
                  />
                  <Button
                    variant="primary"
                    onClick={addInterest}
                    className="px-4 rounded-pill"
                    style={{ background: "linear-gradient(135deg, #89f7fe 0%, #66a6ff 100%)", border: "none" }}
                  >
                    <FaPlus />
                  </Button>
                </div>
                <div className="d-flex flex-wrap gap-2 mt-3">
                  {formData.interests.map((interest, index) => (
                    <Badge
                      key={index}
                      className="d-flex align-items-center px-3 py-2 rounded-pill"
                      style={{
                        background: "linear-gradient(135deg, #89f7fe 0%, #66a6ff 100%)",
                        fontSize: "0.9rem",
                      }}
                    >
                      {interest}
                      <Button
                        variant="link"
                        className="p-0 ms-2 text-white"
                        style={{ fontSize: "0.8rem" }}
                        onClick={() => removeInterest(index)}
                      >
                        <FaTimes />
                      </Button>
                    </Badge>
                  ))}
                </div>
              </div>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>

        <div className="d-flex justify-content-between mt-5">
          <Button variant="outline-secondary" onClick={onBack} className="px-5 py-3 rounded-pill">
            ← Back
          </Button>
          <Button
            variant="primary"
            type="submit"
            className="px-5 py-3 fw-bold rounded-pill shadow-lg"
            style={{
              background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
              border: "none",
            }}
          >
            Generate Portfolio →
          </Button>
        </div>
      </Form>
    </div>
  )
}

export default PortfolioForm