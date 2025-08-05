import React from "react"
import { Card, Button, Row, Col } from "react-bootstrap"

const templates = [
  {
    id: "minimal",
    name: "Minimal",
    description: "Clean and simple design with traditional layout",
    thumbnail: "📄",
    color: "linear-gradient(135deg, #6c757d 0%, #495057 100%)",
    features: ["Clean typography", "Traditional sections", "Professional layout"],
  },
  {
    id: "modern",
    name: "Modern",
    description: "Sleek professional look with color accents",
    thumbnail: "🖥️",
    color: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
    features: ["Color header", "Icon sections", "Card layouts"],
  },
  {
    id: "creative",
    name: "Creative",
    description: "Artistic layout with gradients and visual elements",
    thumbnail: "🎨",
    color: "linear-gradient(135deg, #f093fb 0%, #f5576c 50%, #4facfe 100%)",
    features: ["Gradient design", "Timeline layout", "Visual elements"],
  },
]

function TemplateSelector({ onSelect, onNext }) {
  const [selected, setSelected] = React.useState("minimal")

  return (
    <div className="text-center">
      <h3 className="mb-4 fw-bold text-dark">Choose Your Perfect Template</h3>
      <p className="text-muted mb-5">Select a template that best represents your professional style</p>

      <Row className="g-4 mb-5">
        {templates.map((template) => (
          <Col md={4} key={template.id}>
            <Card
              className={`h-100 border-0 shadow-sm template-card ${selected === template.id ? "selected" : ""}`}
              onClick={() => {
                setSelected(template.id)
                onSelect(template.id)
              }}
              style={{
                cursor: "pointer",
                transition: "all 0.3s ease",
                transform: selected === template.id ? "translateY(-10px)" : "translateY(0)",
                boxShadow: selected === template.id ? "0 20px 40px rgba(0,0,0,0.1)" : "0 5px 15px rgba(0,0,0,0.08)",
              }}
            >
              <div
                className="card-header border-0 text-white d-flex align-items-center justify-content-center"
                style={{
                  background: template.color,
                  height: "120px",
                  borderRadius: "0.375rem 0.375rem 0 0",
                }}
              >
                <div className="display-1">{template.thumbnail}</div>
              </div>
              <Card.Body className="d-flex flex-column p-4">
                <Card.Title className="h4 mb-2 text-dark">{template.name}</Card.Title>
                <Card.Text className="text-muted mb-3">{template.description}</Card.Text>

                {/* Template Features */}
                <div className="mb-3">
                  {template.features.map((feature, index) => (
                    <div key={index} className="small text-muted mb-1">
                      <span className="text-success me-1">✓</span>
                      {feature}
                    </div>
                  ))}
                </div>

                {selected === template.id && (
                  <div className="mt-auto">
                    <span className="badge bg-primary px-3 py-2">✓ Selected</span>
                  </div>
                )}
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      <Button
        variant="primary"
        onClick={onNext}
        disabled={!selected}
        size="lg"
        className="px-5 py-3 fw-bold rounded-pill shadow-lg"
        style={{
          background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
          border: "none",
          transition: "all 0.3s ease",
        }}
        onMouseEnter={(e) => {
          e.target.style.transform = "translateY(-2px)"
          e.target.style.boxShadow = "0 10px 25px rgba(102, 126, 234, 0.4)"
        }}
        onMouseLeave={(e) => {
          e.target.style.transform = "translateY(0)"
          e.target.style.boxShadow = "0 5px 15px rgba(0,0,0,0.2)"
        }}
      >
        Continue to Form →
      </Button>
    </div>
  )
}

export default TemplateSelector
