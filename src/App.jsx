"use client"

import { useState } from "react"
import { Container } from "react-bootstrap"
import TemplateSelector from "./TemplateSelector"
import PortfolioForm from "./PortfolioForm"
import PortfolioPreview from "./PortfolioPreview"
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle.min.js"

function App() {
  const [portfolioData, setPortfolioData] = useState({
    name: "",
    title: "",
    email: "",
    summary: "",
    skills: [],
  })
  const [selectedTemplate, setSelectedTemplate] = useState("minimal")
  const [step, setStep] = useState(1)

  const handleFormSubmit = (data) => {
    setPortfolioData(data)
    setStep(3)
  }

  return (
    <div
      className="min-vh-100"
      style={{
        background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
        position: "relative",
      }}
    >
      {/* Animated background elements */}
      <div className="position-absolute w-100 h-100 overflow-hidden" style={{ zIndex: 0 }}>
        <div
          className="position-absolute animate-float"
          style={{
            top: "10%",
            left: "10%",
            width: "100px",
            height: "100px",
            background: "rgba(255, 255, 255, 0.1)",
            borderRadius: "50%",
            animationDelay: "0s",
          }}
        ></div>
        <div
          className="position-absolute animate-float"
          style={{
            top: "60%",
            right: "15%",
            width: "150px",
            height: "150px",
            background: "rgba(255, 255, 255, 0.05)",
            borderRadius: "50%",
            animationDelay: "2s",
          }}
        ></div>
        <div
          className="position-absolute animate-float"
          style={{
            bottom: "20%",
            left: "20%",
            width: "80px",
            height: "80px",
            background: "rgba(255, 255, 255, 0.08)",
            borderRadius: "50%",
            animationDelay: "1s",
          }}
        ></div>
      </div>

      <Container className="py-5 position-relative" style={{ maxWidth: "900px", zIndex: 1 }}>
        {/* Header */}
        <div className="text-center mb-5">
          <h1 className="display-3 fw-bold text-white mb-3 animate-float">Portfolio Generator</h1>
          <p className="lead text-white-50 mb-4">Create your professional portfolio in minutes</p>

          {/* Progress indicator */}
          <div className="d-flex justify-content-center mb-4">
            <div className="d-flex align-items-center">
              <div
                className={`rounded-circle d-flex align-items-center justify-content-center ${step >= 1 ? "bg-white text-primary" : "bg-white-50 text-muted"}`}
                style={{ width: "40px", height: "40px", fontWeight: "bold" }}
              >
                1
              </div>
              <div
                className={`mx-3 ${step >= 2 ? "bg-white" : "bg-white-50"}`}
                style={{ height: "2px", width: "60px" }}
              ></div>
              <div
                className={`rounded-circle d-flex align-items-center justify-content-center ${step >= 2 ? "bg-white text-primary" : "bg-white-50 text-muted"}`}
                style={{ width: "40px", height: "40px", fontWeight: "bold" }}
              >
                2
              </div>
              <div
                className={`mx-3 ${step >= 3 ? "bg-white" : "bg-white-50"}`}
                style={{ height: "2px", width: "60px" }}
              ></div>
              <div
                className={`rounded-circle d-flex align-items-center justify-content-center ${step >= 3 ? "bg-white text-primary" : "bg-white-50 text-muted"}`}
                style={{ width: "40px", height: "40px", fontWeight: "bold" }}
              >
                3
              </div>
            </div>
          </div>

          <div className="text-white-50">
            <small>
              {step === 1 && "Step 1: Choose Template"}
              {step === 2 && "Step 2: Fill Information"}
              {step === 3 && "Step 3: Preview & Download"}
            </small>
          </div>
        </div>

        {/* Content */}
        <div className="glass rounded-4 p-4 shadow-lg">
          {step === 1 && <TemplateSelector onSelect={setSelectedTemplate} onNext={() => setStep(2)} />}
          {step === 2 && <PortfolioForm onSubmit={handleFormSubmit} onBack={() => setStep(1)} />}
          {step === 3 && (
            <PortfolioPreview data={portfolioData} template={selectedTemplate} onEdit={() => setStep(2)} />
          )}
        </div>
      </Container>
    </div>
  )
}

export default App
