export async function getAboutMe() {
  let response = await fetch("/data/aboutme.json");
  let json = await response.json();

  return json;
}

export async function getExperience() {
  let response = await fetch("/data/experience.json");
  let json = await response.json();

  return json;
}

export async function getEducation() {
  let response = await fetch("/data/education.json");
  let json = await response.json();

  return json;
}
