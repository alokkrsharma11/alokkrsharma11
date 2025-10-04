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
  bgcolor: "#2c2c2c",
  border: "2px solid tan",
  boxShadow: 24,
  p: 4,
  borderRadius: "2px",
};

export default function ProjectShowMore({ open, onClose, title, description, actions, skills, duration, role, category }) {
  return (
    <Modal open={open} onClose={onClose}>
      <Box sx={style}>
        {/* Project Title */}
        <Typography variant="h6" component="h2" style={{color: "tan", fontWeight: "bold", marginBottom:2}}>
          {title} 
          <Chip label={category} size="small" color="primary" variant="outlined" 
            style={{fontWeight: "bold",  color: "black", marginBottom:2, backgroundColor: "lightgreen", alignItems: "right"}}/>
        </Typography>

        {/* Role */}
        {role && role.length > 0 && (
          <Box sx={{ mt: 2, display: "flex", flexWrap: "wrap", gap: 1, paddingBottom: 2 }}>
            {role.map((r, idx) => (
              <Chip key={idx} label={r} size="small" color="primary" variant="outlined" style={{fontWeight: "bold",  color: "white", marginBottom:2}}/>
            ))}
          </Box>
        )}

        {/* Project Duration */}
        {duration && (
          <Typography variant="subtitle2" sx={{ mt: 1 }} style={{color: "lightgreen", marginBottom:2}}>
            Duration: {duration}
          </Typography>
        )}

        {/* Description */}
        <Typography sx={{ mt: 2 }} style={{color: "white", marginBottom:2}}>{description}</Typography>

        {/* Skills */}
        {skills && skills.length > 0 && (
          <Box sx={{ mt: 2, display: "flex", flexWrap: "wrap", gap: 1 }}>
            {skills.map((skill, idx) => (
              <Chip key={idx} label={skill} size="small" color="white" variant="outlined" style={{backgroundColor: "tomato", color: "white", fontWeight: "bold", marginBottom:2}}/>
            ))}
          </Box>
        )}

        <Box sx={{ mt: 3, display: "flex", gap: 4, justifyContent: "flex-end" }}>
          {actions ? (
            actions
          ) : (
            <Button variant="outlined" onClick={onClose} style={{color: "tan", borderColor:"tan"}}>
              Close
            </Button>
          )}
        </Box>
      </Box>
    </Modal>
  );
}