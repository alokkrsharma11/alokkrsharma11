import React from "react";
import {
  Box,
  Button,
  Typography,
  Modal,
  Chip,
} from "@material-ui/core";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 600,
  maxHeight: 700,
  bgcolor: "var(--card-bg)",
  border: "2px solid var(--secondary)",
  boxShadow: 24,
  p: 4,
  borderRadius: "2px",
};

export default function ProjectShowMore({ open, onClose, title, description, actions, skills, duration, role, category }) {
  return (
    <Modal open={open} onClose={onClose}>
      <Box sx={style}>
        {/* Project Title */}
        <Typography variant="h6" component="h2" style={{color: "var(--secondary)", fontWeight: "bold", marginBottom:2, fontSize: "24px"}}>
          {title}
          <Chip label={category} size="small" color="primary"
            style={{fontWeight: "bold", color: "var(--on-accent)", marginBottom:2, marginLeft:10, backgroundColor: "var(--accent)", alignItems: "right"}}/>
        </Typography>

        {/* Role */}
        {role && role.length > 0 && (
          <Box sx={{ mt: 2, display: "flex", flexWrap: "wrap", gap: 1, paddingBottom: 2 }}>
            {role.map((r, idx) => (
              <Chip key={idx} label={r} size="small" color="primary" variant="outlined" style={{fontWeight: "bold", color: "var(--primary-text)", marginRight:10, marginBottom:12, backgroundColor: "#1976d2"}}/>
            ))}
          </Box>
        )}

        {/* Project Duration */}
        {duration && (
          <Typography variant="subtitle2" sx={{ mt: 1 }} style={{fontWeight: "bold", color: "lightgreen", marginBottom:20}}>
            Duration: {duration}
          </Typography>
        )}

        {/* Description */}
        <Typography sx={{ mt: 2 }} style={{color: "var(--primary-text)", marginBottom:20}}>{description}</Typography>

        {/* Skills */}
        {skills && skills.length > 0 && (
          <Box sx={{ mt: 2, display: "flex", flexWrap: "wrap", gap: 1 }}>
            {skills.map((skill, idx) => (
              <Chip key={idx} label={skill} size="small" color="white" variant="outlined" style={{backgroundColor: "teal", color: "var(--primary-text)", fontWeight: "bold", marginRight: 10, marginBottom:5}}/>
            ))}
          </Box>
        )}

        <Box sx={{ mt: 10, display: "flex", gap: 4, justifyContent: "flex-end" }}>
          {actions ? (
            actions
          ) : (
            <Button variant="outlined" onClick={onClose} style={{color: "var(--secondary)", borderColor:"var(--secondary)"}}>
              Close
            </Button>
          )}
        </Box>
      </Box>
    </Modal>
  );
}
