const toggleSkillsButton = document.getElementById(
  "toggleSkillsButton"
) as HTMLButtonElement;
const skillsSection = document.getElementById(
  "skillsSection"
) as HTMLDivElement;

toggleSkillsButton.addEventListener("click", () => {
  if (skillsSection.classList.contains("hidden")) {
    skillsSection.classList.remove("hidden");
    skillsSection.classList.add("visible");
    toggleSkillsButton.textContent = "Hide Skills";
  } else {
    skillsSection.classList.remove("visible");
    skillsSection.classList.add("hidden");
    toggleSkillsButton.textContent = "Show Skills";
  }
});
