import { ToggleButton, ToggleButtonGroup } from "@mui/material"

const UIToggleButtonGrup = ({ alignment, error, setAlignment }) => {
  const handleChange = (event, newAlignment) => {
    setAlignment(newAlignment);
  };
  return <ToggleButtonGroup
    color="primary"
    value={alignment}
    exclusive
    onChange={handleChange}
    aria-label="Platform"
  >
    <ToggleButton color={error ? "error" : "info"} value="am">Հայերեն</ToggleButton>
    <ToggleButton value="ru">Русский</ToggleButton>
    <ToggleButton value="en">English</ToggleButton>
  </ToggleButtonGroup>
}
export default UIToggleButtonGrup