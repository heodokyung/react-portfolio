// PROJECT
export function fetchProjectList() {
  return fetch(
    `https://heodokyung.github.io/portfolio-data-json/portfolio_data.json`
  ).then((response) => response.json());
}

// SKILL
export function fetchSkillList() {
  return fetch(
    `https://heodokyung.github.io/portfolio-data-json/portfolio_skill.json`
  ).then((response) => response.json());
}

// WORK
export function fetchWorkList() {
  return fetch(
    `https://heodokyung.github.io/portfolio-data-json/portfolio_work.json`
  ).then((response) => response.json());
}

// ABOUT
export function fetchAboutList() {
  return fetch(
    `https://heodokyung.github.io/portfolio-data-json/portfolio_about.json`
  ).then((response) => response.json());
}
