import { highlights } from "../data/highlights-data";
import InfoSection from "./InfoSection";

const highlightColumns = [
  { field: "type", headerName: "Type" },
  { field: "title", headerName: "Title" },
  { field: "description", headerName: "Description" },
  { field: "outcome", headerName: "Outcome", style: { color: "lightgreen" } },
  { field: "year", headerName: "Year" },
];

const CareerHighlights = () => {
  return <InfoSection title="Career Highlights" data={highlights} columns={highlightColumns} />;
};

export default CareerHighlights;